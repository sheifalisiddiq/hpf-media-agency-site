"use client";

import { useRef, useState } from "react";
import { values } from "@/content/dna";
import { cn } from "@/lib/utils";
import { MOTION_OK } from "@/lib/gsap";

type Answer = "yes" | "no";
type Step = "input" | number | "result";

/** Decision test: one question at a time, against HPF's five non-negotiables. No storage. */
export default function DecisionFilter() {
  const [step, setStep] = useState<Step>("input");
  const [decision, setDecision] = useState("");
  const [answers, setAnswers] = useState<(Answer | null)[]>(values.map(() => null));
  const inputRef = useRef<HTMLInputElement>(null);
  const reduceMotion = typeof window !== "undefined" && !window.matchMedia(MOTION_OK).matches;

  const reset = () => {
    setStep("input");
    setDecision("");
    setAnswers(values.map(() => null));
  };

  const answer = (a: Answer) => {
    if (typeof step !== "number") return;
    setAnswers((prev) => prev.map((p, j) => (j === step ? a : p)));
    setStep(step < values.length - 1 ? step + 1 : "result");
  };

  const failed = values.filter((_, i) => answers[i] === "no");
  const passCount = answers.filter((a) => a === "yes").length;

  return (
    <div className="glass overflow-hidden">
      {step === "input" && (
        <div className="p-6 md:p-8">
          <p className="t-label mb-2 text-mute">What decision are you considering?</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (decision.trim()) setStep(0);
            }}
          >
            <label htmlFor="decision-input" className="sr-only">
              Your decision
            </label>
            <input
              ref={inputRef}
              id="decision-input"
              type="text"
              value={decision}
              onChange={(e) => setDecision(e.target.value)}
              placeholder="e.g. Should we run this campaign?"
              className="w-full border-b border-line bg-transparent py-3 text-lg text-bone placeholder:text-mute focus-visible:outline-none focus-visible:border-crimson-bright"
            />
            <button
              type="submit"
              disabled={!decision.trim()}
              className="t-label mt-6 inline-flex items-center gap-3 border-b border-crimson pb-1 text-bone transition-colors hover:text-crimson-bright disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-bone"
            >
              Test my decision <span aria-hidden>→</span>
            </button>
          </form>
        </div>
      )}

      {typeof step === "number" && (
        <div className="p-6 md:p-8" aria-live="polite">
          <div className="mb-8 flex items-center gap-2" aria-hidden>
            {values.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-px flex-1 transition-colors duration-500",
                  i < step ? "bg-crimson" : i === step ? "bg-crimson-bright" : "bg-line"
                )}
              />
            ))}
          </div>
          <p className="t-label mb-1 text-mute">
            {String(step + 1).padStart(2, "0")} / {String(values.length).padStart(2, "0")}
          </p>
          <p className="t-label mb-4 text-crimson-bright">
            {values[step].index} {values[step].name}
          </p>
          <p className={cn("font-display text-3xl leading-snug text-bone md:text-4xl", !reduceMotion && "transition-opacity duration-300")}>
            {values[step].question}
          </p>
          <div className="mt-10 flex gap-3" role="group" aria-label={`${values[step].name}: answer`}>
            {(["yes", "no"] as const).map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => answer(a)}
                className={cn(
                  "t-label min-w-24 rounded-full border px-6 py-3 uppercase transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60",
                  a === "yes"
                    ? "border-bone text-bone hover:bg-bone hover:text-ink"
                    : "border-crimson-bright text-crimson-bright hover:bg-crimson-bright hover:text-black"
                )}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "result" && (
        <div aria-live="polite">
          <div
            className={cn(
              "px-6 py-10 transition-colors duration-500 md:px-8",
              failed.length === 0 ? "bg-bone text-ink" : "bg-crimson-bright text-black"
            )}
          >
            <p className="t-label mb-2 opacity-70">&ldquo;{decision}&rdquo;</p>
            <p className="font-display text-3xl md:text-4xl">
              {failed.length === 0 ? "Passes the HPF filter." : "This needs another look."}
            </p>
            <p className="mt-2 text-lg">
              {passCount} / {values.length}
            </p>
            <p className="mt-2 text-sm opacity-80">
              {failed.length === 0
                ? "This decision aligns with all five of our non-negotiables."
                : `It conflicts with ${failed.length} of the 5 principles we use to guide our decisions.`}
            </p>
            {failed.length > 0 && (
              <ul className="mt-6 space-y-2 border-t border-black/15 pt-5">
                {failed.map((v) => (
                  <li key={v.name} className="flex items-center justify-between gap-4 text-sm">
                    <span>
                      {v.index} — {v.name}
                    </span>
                    <span className="t-label opacity-70">Review this decision</span>
                  </li>
                ))}
              </ul>
            )}
            {failed.length > 0 && (
              <p className="mt-6 text-sm opacity-80">
                At HPF, if one answer is no, we don&apos;t move forward until we can make it a yes.
              </p>
            )}
          </div>
          <div className="flex items-center justify-between border-t border-line px-6 py-4 md:px-8">
            <button type="button" onClick={reset} className="t-label text-bone/70 hover:text-bone">
              Try another decision →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
