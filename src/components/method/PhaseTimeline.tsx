"use client";

import { useRef } from "react";
import type { Stage } from "@/content/method";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

/** Gantt-style week bars for a stage's phases; bars draw in as the timeline enters view. */
export default function PhaseTimeline({ stage }: { stage: Stage }) {
  const ref = useRef<HTMLDivElement>(null);
  const weeks = stage.axisWeeks ?? 4;
  const isRetainer = stage.id === "launchx";

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(".pt-bar", {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.4,
          stagger: 0.18,
          ease: "expo.inOut",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="glass overflow-hidden p-5 md:p-7">
      <div
        className="mb-4 grid text-mute"
        style={{ gridTemplateColumns: `clamp(6rem, 20vw, 9rem) repeat(${weeks}, 1fr)` }}
      >
        <span className="t-label">Phase</span>
        {Array.from({ length: weeks }, (_, w) => (
          <span key={w} className="t-label min-w-0 truncate border-l border-line pl-2 text-[0.55rem] tracking-[0.12em] sm:text-[0.68rem] sm:tracking-[0.32em]">
            {isRetainer ? (w === 0 ? "Wk 1" : `Cycle ${w}`) : `Wk ${w + 1}`}
          </span>
        ))}
      </div>
      <ul className="space-y-3">
        {stage.phases?.map((p) => (
          <li key={p.title} className="grid items-center" style={{ gridTemplateColumns: `clamp(6rem, 20vw, 9rem) 1fr` }}>
            <span className="pr-3 text-sm leading-tight text-bone/80">{p.title}</span>
            <span className="relative h-8">
              <span
                className="pt-bar absolute inset-y-0 flex items-center bg-crimson/85 px-3"
                style={{ left: `${(p.span[0] / weeks) * 100}%`, width: `${((p.span[1] - p.span[0]) / weeks) * 100}%` }}
              >
                <span className="t-label truncate text-[0.6rem] text-bone">{p.weeks}</span>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
