import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the provided key from Vercel env
// Initialize Resend - handle missing key during build
const resend = process.env.HPF_key ? new Resend(process.env.HPF_key) : null;

const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullname, domain, email, revenue, objectives, stage } = body;

    // Validate inputs
    if (!fullname || !email || !objectives) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Resend was initialized
    if (!resend) {
      console.error('Resend API key is missing');
      return NextResponse.json(
        { error: 'Mail service unavailable' },
        { status: 503 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'HPF Media <notifications@hpf-media.com>', // Using your verified domain for better deliverability
      to: 'admin@hpf-media.com',
      replyTo: email,
      subject: `New enquiry: ${fullname}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #ff5449; text-transform: uppercase;">New enquiry</h2>
          <hr />
          <p><strong>Full Name:</strong> ${esc(fullname)}</p>
          <p><strong>Corporate Email:</strong> ${esc(email)}</p>
          <p><strong>Company Domain:</strong> ${esc(domain) || "N/A"}</p>
          <p><strong>Annual Revenue:</strong> ${esc(revenue) || "N/A"}</p>
          <p><strong>Stage of interest:</strong> ${esc(stage) || "N/A"}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #ff5449;">
            <p><strong>Growth Objectives:</strong></p>
            <p>${esc(objectives)}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
