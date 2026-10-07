"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { stages } from "@/content/method";
import DocumentCover from "@/components/shared/DocumentCover";
import ParallaxLayer from "@/components/motion/ParallaxLayer";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import MagneticButton from "@/components/motion/MagneticButton";
import { useLenis } from "@/components/SmoothScrollProvider";
import { cn } from "@/lib/utils";
import PhaseTimeline from "./PhaseTimeline";

/** Sticky journey map on the left; one chapter per stage on the right. */
export default function MethodJourney() {
  const [active, setActive] = useState<string>(stages[0].id);
  const lenis = useLenis();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    stages.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const jump = (e: React.MouseEvent, id: string) => {
    if (!lenis) return;
    e.preventDefault();
    lenis.scrollTo(`#${id}`, { offset: -80 });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <section aria-label="The four stages" className="relative border-t border-line">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <aside className="hidden lg:col-span-3 lg:block">
          <nav className="sticky top-28 py-20" aria-label="Stages">
            <p className="t-label mb-6 text-mute">The journey</p>
            <ol className="relative space-y-1 border-l border-line">
              {stages.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => jump(e, s.id)}
                    className={cn(
                      "relative -ml-px block border-l py-3 pl-5 transition-colors duration-500",
                      active === s.id ? "border-crimson text-bone" : "border-transparent text-bone/45 hover:text-bone/80"
                    )}
                  >
                    <span className="t-label mr-3 text-crimson-bright">{s.index}</span>
                    <span className="font-display text-2xl">{s.name}</span>
                    <span className="t-label mt-1 block text-mute">{s.price}</span>
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <MagneticButton href="/clarity-check">Start free</MagneticButton>
            </div>
          </nav>
        </aside>

        <div className="min-w-0 lg:col-span-9 lg:border-l lg:border-line lg:pl-12">
          {stages.map((s, i) => (
            <article key={s.id} id={s.id} className="scroll-mt-24 border-b border-line py-20 last:border-b-0 md:py-28">
              <div className="flex items-center gap-4">
                <span className="t-label text-crimson-bright">Stage {s.index}</span>
                <span className="h-px flex-1 bg-line" />
                <span className="t-label text-mute">{s.duration}</span>
              </div>

              <div className="mt-10 grid gap-12 md:grid-cols-12">
                <div className="md:col-span-7">
                  <RevealText as="h2" className="t-h1 text-bone">
                    {s.name}
                  </RevealText>
                  <RevealText as="p" className="mt-6 font-display text-2xl leading-snug text-bone/75 md:text-3xl">
                    {s.tagline}
                  </RevealText>
                  <Reveal className="mt-8">
                    <p className="text-lg leading-relaxed text-bone/75">{s.summary}</p>
                  </Reveal>
                </div>
                <div className="md:col-span-5">
                  <ParallaxLayer y={-14} rotate={-4} className="mx-auto max-w-[19rem] md:mt-6">
                    {s.id === "clarity-check" ? (
                      <div className="flex aspect-[3/4] flex-col justify-between border border-crimson/40 bg-crimson/10 p-8">
                        <span className="t-label text-crimson-bright">Free · 4 minutes</span>
                        <p className="font-display text-7xl leading-none text-bone">
                          10<span className="text-crimson">.</span>
                        </p>
                        <p className="text-bone/75">honest questions across five dimensions of your marketing.</p>
                      </div>
                    ) : (
                      <DocumentCover
                        kicker={`Stage ${s.index} · ${s.name}`}
                        title={s.deliverableShort.replace(/^The /, "")}
                        meta={s.duration}
                        tone={i === 2 ? "bone" : "ink"}
                      />
                    )}
                  </ParallaxLayer>
                </div>
              </div>

              <dl className="mt-14 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
                <div>
                  <dt className="t-label mb-2 text-mute">Investment</dt>
                  <dd className={cn("text-xl", s.price === "Free" ? "text-crimson-bright" : "text-bone")}>{s.price}</dd>
                </div>
                <div>
                  <dt className="t-label mb-2 text-mute">Duration</dt>
                  <dd className="text-xl text-bone">{s.duration}</dd>
                </div>
                <div>
                  <dt className="t-label mb-2 text-mute">Deliverable</dt>
                  <dd className="text-base leading-snug text-bone/80">{s.deliverable}</dd>
                </div>
              </dl>

              {s.phases && (
                <>
                  <div className="mt-14">
                    <PhaseTimeline stage={s} />
                  </div>
                  <div className="mt-14 grid gap-10 md:grid-cols-3">
                    {(() => {
                      let n = 0;
                      return s.phases.map((p, pi) => (
                        <Reveal key={p.title} delay={pi * 0.08}>
                          <p className="t-label mb-2 text-crimson-bright">Phase {pi + 1}</p>
                          <h3 className="t-h3 text-bone">{p.title}</h3>
                          <p className="t-label mb-5 mt-2 text-mute">{p.weeks}</p>
                          <ol className="space-y-4">
                            {p.steps.map((step) => {
                              n += 1;
                              return (
                                <li key={step} className="flex gap-4 text-[0.95rem] leading-relaxed text-bone/75">
                                  <span className="text-xs leading-7 text-crimson-bright">{String(n).padStart(2, "0")}</span>
                                  <span>{step}</span>
                                </li>
                              );
                            })}
                          </ol>
                        </Reveal>
                      ));
                    })()}
                  </div>
                </>
              )}

              {s.id === "clarity-check" && (
                <div className="mt-10">
                  <MagneticButton href="/clarity-check" size="lg">
                    Take the Clarity Check
                  </MagneticButton>
                </div>
              )}

              {s.handoff && (
                <Reveal className="mt-14 flex gap-5 glass border-l-2 !border-l-crimson p-6 md:p-8">
                  <div>
                    <p className="t-label mb-3 text-crimson-bright">
                      {i < stages.length - 1 ? `Handoff to ${stages[i + 1].name}` : "On pricing"}
                    </p>
                    <p className="text-lg leading-relaxed text-bone">{s.handoff}</p>
                  </div>
                </Reveal>
              )}

              {i < stages.length - 1 && (
                <div className="mt-12 flex items-center gap-4 text-mute" aria-hidden>
                  <span className="h-10 w-px bg-crimson" />
                  <span className="t-label">Output becomes input</span>
                  <Link href={`#${stages[i + 1].id}`} tabIndex={-1} className="t-label text-bone/70">
                    ↓ {stages[i + 1].name}
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
