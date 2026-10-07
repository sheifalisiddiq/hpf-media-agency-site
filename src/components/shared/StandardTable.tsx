"use client";

import { useRef } from "react";
import { standard } from "@/content/dna";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

/** The HPF Standard: "We will never" against "We always deliver", revealed row by row. */
export default function StandardTable() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(".std-divider", {
          scaleY: 0,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 75%", end: "bottom 70%", scrub: true },
        });
        gsap.utils.toArray<HTMLElement>(".std-row").forEach((row) => {
          const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: "top 85%", once: true } });
          tl.from(row.querySelector(".std-never"), { x: -40, autoAlpha: 0, duration: 1 })
            .from(row.querySelector(".std-strike"), { scaleX: 0, duration: 0.7, ease: "power3.inOut" }, "-=0.4")
            .from(row.querySelector(".std-always"), { x: 40, autoAlpha: 0, duration: 1 }, "-=0.6");
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="relative overflow-x-clip">
      <div className="grid grid-cols-2 border-b border-line pb-5">
        <p className="t-label pr-6 text-mute">We will never</p>
        <p className="t-label pl-6 text-crimson-bright md:pl-12">We always deliver</p>
      </div>
      <div className="std-divider absolute bottom-0 left-1/2 top-0 hidden w-px bg-line md:block" aria-hidden />
      <ul>
        {standard.map((row, i) => (
          <li key={i} className="std-row grid grid-cols-1 gap-3 border-b border-line py-6 md:grid-cols-2 md:gap-0 md:py-8">
            <div className="std-never relative flex gap-4 pr-6 text-bone/55 md:pr-12">
              <span className="mt-1 text-xs text-mute">×</span>
              <p className="relative text-base leading-relaxed md:text-lg">
                {row.never}
                <span
                  aria-hidden
                  className="std-strike absolute left-0 right-0 top-1/2 hidden h-px origin-left bg-bone/40 md:block"
                />
              </p>
            </div>
            <div className="std-always flex gap-4 md:pl-12">
              <span className="mt-1 text-xs text-crimson-bright">✓</span>
              <p className="text-base leading-relaxed text-bone md:text-lg">{row.always}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
