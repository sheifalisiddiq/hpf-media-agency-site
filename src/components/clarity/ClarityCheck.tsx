"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { questions, dimensions } from "@/content/clarity-check";
import { scoreClarity, type Answers } from "@/lib/clarity-score";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/content/site";

type Step = "intro" | "quiz" | "result" | "report";

const ease = [0.16, 1, 0.3, 1] as const;

function ScoreDial({ score, band }: { score: number; band: string }) {
  const [shown, setShown] = useState(0);
  const r = 88;
  const c = 2 * Math.PI * r;

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1600);
      setShown(Math.round(score * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [score]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[18rem]">
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90" aria-hidden>
        <circle cx="100" cy="100" r={r} fill="none" stroke="rgb(242 239 234 / 0.1)" strokeWidth="2" />
        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="#ff5449"
          strokeWidth="6"
          strokeLinecap="butt"
          strokeDasharray={c}
          strokeDashoffset={c - (shown / 100) * c}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-8xl leading-none text-bone">{shown}</span>
        <span className="t-label mt-2 text-mute">Gap score / 100</span>
        <span className="t-label mt-4 text-crimson-bright">{band}</span>
      </div>
    </div>
  );
}

export default function ClarityCheck() {
  const [step, setStep] = useState<Step>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [direction, setDirection] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const result = useMemo(
    () => (Object.keys(answers).length === questions.length ? scoreClarity(answers) : null),
    [answers]
  );

  const q = questions[index];
  const dimension = dimensions.find((d) => d.id === q?.dimension);

  const choose = useCallback(
    (optionIndex: number) => {
      setAnswers((prev) => ({ ...prev, [q.id]: optionIndex }));
      setDirection(1);
      window.setTimeout(() => {
        if (index < questions.length - 1) setIndex((i) => i + 1);
        else setStep("result");
      }, 320);
    },
    [q, index]
  );

  const back = () => {
    setDirection(-1);
    if (index > 0) setIndex((i) => i - 1);
    else setStep("intro");
  };

  useEffect(() => {
    if (step !== "quiz") return;
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;
      const n = Number(e.key);
      if (n >= 1 && n <= q.options.length) choose(n - 1);
      if (e.key === "Backspace" || e.key === "ArrowLeft") back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, q, choose]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/clarity-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, contact: data }),
      });
      if (res.ok || res.status === 503) {
        setStep("report");
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("We couldn't reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const restart = () => {
    setAnswers({});
    setIndex(0);
    setStep("intro");
  };

  return (
    <div className="wrap min-h-[100svh] pb-24 pt-28 md:pt-36">
      <AnimatePresence mode="wait" custom={direction}>
        {step === "intro" && (
          <motion.section
            key="intro"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease }}
            className="grid gap-14 lg:grid-cols-12"
            aria-label="Clarity Check introduction"
          >
            <div className="lg:col-span-7">
              <p className="t-label flex items-center gap-4 text-mute">
                <span className="h-1 w-8 bg-crimson" /> Stage 00 · Free
              </p>
              <h1 className="t-display mt-8 text-bone">
                Clarity <span className="text-bone/60">Check</span>
                <span className="text-crimson">.</span>
              </h1>
              <p className="t-h3 mt-8 max-w-2xl text-bone/80">10 questions. 4 minutes. No sales call required.</p>
              <p className="t-lead mt-6 max-w-xl">
                Answer honestly. You&apos;ll see your gap score instantly, then get a breakdown across the five dimensions
                Identifier investigates, with the most likely root cause behind each.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStep("quiz");
                  setIndex(0);
                }}
                className="group mt-12 inline-flex items-center gap-4 bg-crimson-bright px-9 py-5 text-sm font-black uppercase tracking-[0.24em] text-black transition-colors hover:bg-white"
              >
                Begin <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <p className="t-label mt-5 text-mute">Tip: use keys 1–4 to answer</p>
            </div>
            <ol className="self-end border-t border-line lg:col-span-4 lg:col-start-9">
              {dimensions.map((d, i) => (
                <li key={d.id} className="flex items-baseline gap-4 border-b border-line py-4">
                  <span className="t-label text-crimson-bright">0{i + 1}</span>
                  <span className="text-lg text-bone/85">{d.name}</span>
                </li>
              ))}
            </ol>
          </motion.section>
        )}

        {step === "quiz" && q && (
          <motion.section
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Clarity Check questions"
          >
            <div className="mb-10 flex items-center justify-between gap-6">
              <button type="button" onClick={back} className="t-label text-mute transition-colors hover:text-bone">
                ← Back
              </button>
              <span className="t-label text-mute">
                <span className="text-bone">{String(index + 1).padStart(2, "0")}</span> / {questions.length}
              </span>
            </div>
            <div className="mb-14 h-px w-full bg-line">
              <motion.div
                className="h-px origin-left bg-crimson"
                animate={{ scaleX: (index + (answers[q.id] !== undefined ? 1 : 0)) / questions.length }}
                transition={{ duration: 0.6, ease }}
              />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={q.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.55, ease }}
                className="grid gap-12 lg:grid-cols-12"
              >
                <div className="lg:col-span-6">
                  <p className="t-label mb-6 text-crimson-bright">{dimension?.name}</p>
                  <h2 className="t-h2 text-bone">{q.prompt}</h2>
                </div>
                <fieldset className="lg:col-span-5 lg:col-start-8">
                  <legend className="sr-only">{q.prompt}</legend>
                  <div className="space-y-3">
                    {q.options.map((o, oi) => {
                      const selected = answers[q.id] === oi;
                      return (
                        <button
                          key={o.label}
                          type="button"
                          onClick={() => choose(oi)}
                          aria-pressed={selected}
                          className={cn(
                            "group flex w-full items-center gap-5 rounded-2xl border px-5 py-5 text-left backdrop-blur-xl transition-colors duration-300",
                            selected ? "border-crimson bg-crimson/15" : "border-line bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]"
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-8 w-8 shrink-0 items-center justify-center border text-xs",
                              selected ? "border-crimson-bright bg-crimson-bright text-black" : "border-line text-mute group-hover:text-bone"
                            )}
                          >
                            {oi + 1}
                          </span>
                          <span className="text-lg leading-snug text-bone">{o.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              </motion.div>
            </AnimatePresence>
          </motion.section>
        )}

        {(step === "result" || step === "report") && result && (
          <motion.section
            key="result"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease }}
            aria-label="Your Clarity Check result"
          >
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <ScoreDial score={result.score} band={result.band.label} />
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="t-label flex items-center gap-4 text-mute">
                  <span className="h-1 w-8 bg-crimson" /> Your result
                </p>
                <h1 className="t-h1 mt-6 text-bone">
                  {result.band.label}
                  <span className="text-crimson">.</span>
                </h1>
                <p className="t-lead mt-6">{result.band.summary}</p>
                <p className="mt-4 text-sm text-mute">
                  Higher means wider gaps. This is a self-assessment, a first read on your own evidence, not a diagnosis.
                </p>
              </div>
            </div>

            {step === "result" && (
              <div className="mt-20 grid gap-12 border-t border-line pt-14 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <h2 className="t-h2 text-bone">See where the gaps are.</h2>
                  <p className="t-lead mt-6">
                    Get your breakdown across all five dimensions, the likely root cause behind each, and the recommended
                    next step. We&apos;ll also send a copy to our strategy team so we can follow up, once.
                  </p>
                </div>
                <form onSubmit={submit} className="space-y-4 lg:col-span-6 lg:col-start-7" noValidate={false}>
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                  <label className="block">
                    <span className="sr-only">Full name</span>
                    <input name="name" required placeholder="Full name *" className="field" autoComplete="name" />
                  </label>
                  <label className="block">
                    <span className="sr-only">Work email</span>
                    <input name="email" type="email" required placeholder="Work email *" className="field" autoComplete="email" />
                  </label>
                  <label className="block">
                    <span className="sr-only">Company</span>
                    <input name="company" required placeholder="Company *" className="field" autoComplete="organization" />
                  </label>
                  <label className="block">
                    <span className="sr-only">Phone or WhatsApp</span>
                    <input name="phone" placeholder="Phone / WhatsApp (optional)" className="field" autoComplete="tel" />
                  </label>
                  {error && <p className="pt-3 text-sm text-crimson-bright">{error}</p>}
                  <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-3 bg-crimson-bright px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-black transition-colors hover:bg-white disabled:opacity-60"
                    >
                      {submitting ? "Preparing your breakdown…" : "Show my full breakdown →"}
                    </button>
                    <p className="text-xs text-mute">
                      No spam, ever. See our{" "}
                      <Link href="/privacy" className="underline">
                        privacy policy
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </div>
            )}

            {step === "report" && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.2 }}
                className="mt-20 border-t border-line pt-14"
              >
                <h2 className="t-h2 text-bone">Your breakdown</h2>
                <ul className="mt-12 border-t border-line">
                  {result.dimensions.map((d, i) => (
                    <li key={d.id} className="grid gap-6 border-b border-line py-8 lg:grid-cols-12">
                      <div className="lg:col-span-4">
                        <p className="t-label mb-2 text-mute">{i === 0 ? "Largest gap" : `Dimension`}</p>
                        <p className="t-h3 text-bone">{d.name}</p>
                        <div className="mt-5 flex items-center gap-4">
                          <div className="h-1.5 flex-1 bg-line">
                            <motion.div
                              className="h-full bg-crimson"
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.max(d.score, 2)}%` }}
                              transition={{ duration: 1.2, ease, delay: 0.3 + i * 0.1 }}
                            />
                          </div>
                          <span className="text-sm text-bone">{d.score}</span>
                        </div>
                      </div>
                      <div className="lg:col-span-4 lg:col-start-6">
                        <p className="t-label mb-2 text-crimson-bright">Likely root cause</p>
                        <p className="text-bone/85">{d.score >= 34 ? d.rootCause : "No significant gap reported here."}</p>
                      </div>
                      <div className="lg:col-span-3 lg:col-start-10">
                        <p className="t-label mb-2 text-mute">What Identifier does</p>
                        <p className="text-sm leading-relaxed text-bone/65">{d.remedy}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-16 grid gap-10 border border-crimson/40 bg-crimson/[0.07] p-8 md:p-12 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <p className="t-label mb-4 text-crimson-bright">Recommended next step · Stage 01</p>
                    <h3 className="t-h2 text-bone">Identifier</h3>
                    <p className="t-lead mt-4">
                      A 2–3 week root-cause diagnostic of your marketing, inside and out, ending in the Identifier Report and
                      a working session. AED 15,000 – 20,000.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 lg:col-span-4 lg:col-start-9">
                    <a
                      href={whatsappLink(
                        `Hi HPF, I just completed the Clarity Check (gap score ${result.score}, ${result.band.label}). I'd like to book an Identifier working session.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-crimson-bright px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-black transition-colors hover:bg-white"
                    >
                      Book a working session →
                    </a>
                    <Link
                      href="/method#identifier"
                      className="inline-flex items-center justify-center border border-white/15 px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-bone transition-colors hover:bg-white/5"
                    >
                      See inside Identifier
                    </Link>
                    <button type="button" onClick={restart} className="t-label mt-2 text-mute hover:text-bone">
                      Retake the check
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
