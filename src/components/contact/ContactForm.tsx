"use client";

import { useState } from "react";

const stageOptions = ["Not sure yet", "Identifier", "BrandArch", "LaunchX"];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) setSuccess(true);
      else setError(body.error || "Something went wrong. Please try again.");
    } catch {
      setError("Failed to send. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="border border-line p-10 md:p-14">
        <span className="crimson-bar" />
        <p className="t-h2 mt-6 text-bone">Message received.</p>
        <p className="t-lead mt-4">We&apos;ll reply within one working day, honestly and without a sales script.</p>
        <button type="button" onClick={() => setSuccess(false)} className="t-label mt-8 text-mute hover:text-bone">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <label className="block">
        <span className="sr-only">Full name</span>
        <input name="fullname" required placeholder="Full name *" className="field" autoComplete="name" />
      </label>
      <label className="block">
        <span className="sr-only">Work email</span>
        <input name="email" type="email" required placeholder="Work email *" className="field" autoComplete="email" />
      </label>
      <label className="block">
        <span className="sr-only">Company or website</span>
        <input name="domain" placeholder="Company or website" className="field" autoComplete="organization" />
      </label>
      <label className="block">
        <span className="sr-only">Where are you in the journey?</span>
        <select name="stage" defaultValue="" className="field appearance-none">
          <option value="" disabled>
            Where are you in the journey?
          </option>
          {stageOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="sr-only">What&apos;s going on with your marketing?</span>
        <textarea
          name="objectives"
          required
          rows={4}
          placeholder="What's going on with your marketing? *"
          className="field resize-none"
        />
      </label>
      {error && <p className="pt-3 text-sm text-crimson-bright">{error}</p>}
      <div className="pt-8">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-3 rounded-full bg-crimson px-8 py-4 text-bone transition-colors hover:bg-crimson-bright disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send message →"}
        </button>
      </div>
    </form>
  );
}
