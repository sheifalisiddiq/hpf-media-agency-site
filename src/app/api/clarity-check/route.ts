import { NextResponse } from "next/server";
import { Resend } from "resend";
import { questions } from "@/content/clarity-check";
import { scoreClarity, type Answers } from "@/lib/clarity-score";

const resend = process.env.HPF_key ? new Resend(process.env.HPF_key) : null;

const escape = (s: unknown) =>
  String(s ?? "")
    .slice(0, 500)
    .replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { answers?: Answers; contact?: Record<string, string> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const contact = body.contact ?? {};
  // Honeypot: bots fill hidden fields. Pretend success.
  if (contact.website) return NextResponse.json({ success: true });

  const { name, email, company, phone } = contact;
  if (!name || !email || !company || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please add your name, a valid email and your company." }, { status: 400 });
  }

  // Never trust a client-side score; recompute it.
  const result = scoreClarity(body.answers ?? {});
  if (!result) return NextResponse.json({ error: "Please answer every question." }, { status: 400 });

  if (!resend) {
    console.error("Clarity Check: Resend API key missing. Lead not emailed:", { name, email, company, score: result.score });
    return NextResponse.json({ error: "Mail service unavailable", result }, { status: 503 });
  }

  const answerRows = questions
    .map((q) => {
      const a = q.options[body.answers![q.id]];
      return `<tr><td style="padding:6px 8px;border-bottom:1px solid #eee;vertical-align:top">${escape(q.prompt)}</td><td style="padding:6px 8px;border-bottom:1px solid #eee;vertical-align:top"><strong>${escape(a.label)}</strong> (gap ${a.gap}/3)</td></tr>`;
    })
    .join("");

  const dimensionRows = result.dimensions
    .map((d) => `<li>${escape(d.name)}: <strong>${d.score}</strong></li>`)
    .join("");

  const { error } = await resend.emails.send({
    from: "HPF Media <notifications@hpf-media.com>",
    to: "admin@hpf-media.com",
    replyTo: email,
    subject: `Clarity Check: ${company} scored ${result.score} (${result.band.label})`,
    html: `
      <div style="font-family:sans-serif;max-width:640px;margin:0 auto;padding:20px">
        <h2 style="color:#c8102e;margin:0 0 4px">New Clarity Check lead</h2>
        <p style="margin:0 0 16px;color:#666">Gap score <strong>${result.score}/100</strong>, ${escape(result.band.label)}</p>
        <p><strong>Name:</strong> ${escape(name)}<br/>
        <strong>Email:</strong> ${escape(email)}<br/>
        <strong>Company:</strong> ${escape(company)}<br/>
        <strong>Phone:</strong> ${escape(phone) || "N/A"}</p>
        <h3>Dimensions (higher = wider gap)</h3>
        <ul>${dimensionRows}</ul>
        <h3>Answers</h3>
        <table style="border-collapse:collapse;width:100%;font-size:14px">${answerRows}</table>
      </div>`,
  });

  if (error) {
    console.error("Clarity Check: Resend error", error);
    return NextResponse.json({ error: "We couldn't send your result. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ success: true, result });
}
