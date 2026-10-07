"use client";

import { useState } from "react";
import { values } from "@/content/dna";
import { cn } from "@/lib/utils";

type Answer = "yes" | "no" | null;

/** The five-question filter every HPF decision runs through, made interactive. */
export default function DecisionFilter() {
  const [answers, setAnswers] = useState<Answer[]>(values.map(() => null));
  const answered = answers.filter(Boolean).length;
  const anyNo = answers.includes("no");
  const allYes = answers.every((a) => a === "yes");

  const set = (i: number, a: Answer) => setAnswers((prev) => prev.map((p, j) => (j === i ? (p === a ? null : a) : p)));

  return (
    <div className="border border-line">
      <div className="flex items-center justify-between border-b border-line px-5 py-4 md:px-8">
        <p className="t-label text-mute">Try the filter on a decision</p>
        <button
          type="button"
          onClick={() => setAnswers(values.map(() => null))}
          className="t-label text-mute hover:text-bone"
        >
          Reset
        </button>
      </div>
      <ul>
        {values.map((v, i) => (
          <li key={v.name} className="grid gap-4 border-b border-line px-5 py-5 md:grid-cols-12 md:items-center md:px-8">
            <div className="md:col-span-8">
              <p className="t-label mb-1 text-crimson-bright">
                {v.index} {v.name}
              </p>
              <p className="text-bone/85">{v.question}</p>
            </div>
            <div className="flex gap-2 md:col-span-4 md:justify-end" role="group" aria-label={`${v.name}: answer`}>
              {(["yes", "no"] as const).map((a) => (
                <button
                  key={a}
                  type="button"
                  aria-pressed={answers[i] === a}
                  onClick={() => set(i, a)}
                  className={cn(
                    "t-label min-w-20 rounded-full border px-5 py-2.5 transition-colors",
                    answers[i] === a
                      ? a === "yes"
                        ? "border-bone bg-bone text-ink"
                        : "border-crimson bg-crimson text-bone"
                      : "border-line text-bone/70 hover:border-bone/40"
                  )}
                >
                  {a}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div
        aria-live="polite"
        className={cn(
          "px-5 py-8 transition-colors duration-500 md:px-8",
          anyNo ? "bg-crimson text-bone" : allYes ? "bg-bone text-ink" : "bg-transparent text-bone"
        )}
      >
        <p className="font-display text-3xl md:text-4xl">
          {anyNo ? "Stop. We wait until it is yes." : allYes ? "Proceed." : `${answered} of 5 answered.`}
        </p>
        <p className={cn("mt-2 text-sm", anyNo || allYes ? "opacity-80" : "text-mute")}>
          If any answer is no, we stop until it is yes.
        </p>
      </div>
    </div>
  );
}
