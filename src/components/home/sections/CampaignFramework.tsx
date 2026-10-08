"use client";

import { useRef, useState } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/motion/RevealText";
import { campaignAxes } from "@/content/method";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type Cell = { a: number; f: number; c: number };

/**
 * BrandArch's Three-Dimensional Campaign Framework as a CSS-3D stack:
 * one plane per channel, each a grid of audience segment × funnel stage.
 */
export default function CampaignFramework() {
  const ref = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Cell>({ a: 0, f: 0, c: 0 });

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          ".cf-plane",
          { z: 0, autoAlpha: 0.2 },
          {
            z: (i) => (i - 1) * 110,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: { trigger: sceneRef.current, start: "top 85%", end: "center 45%", scrub: 0.8 },
          }
        );
        gsap.fromTo(
          ".cf-rot",
          { rotateZ: -20 },
          {
            rotateZ: -45,
            ease: "none",
            scrollTrigger: { trigger: sceneRef.current, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  const onPointer = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !sceneRef.current) return;
    const r = sceneRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(".cf-tilt", { rotateY: px * 14, rotateX: 58 - py * 12, duration: 0.8, ease: "power3.out" });
  };

  const { audience, funnel, channel } = campaignAxes;

  return (
    <section ref={ref} aria-label="Three-dimensional campaign framework" className="relative overflow-hidden border-t border-line py-28 md:py-40">
      <div className="wrap grid gap-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionLabel index="03">Inside BrandArch</SectionLabel>
          <RevealText as="h2" className="t-h2 mt-6 text-bone">
            A campaign matrix, not isolated ideas.
          </RevealText>
          <p className="t-lead mt-8 max-w-md">
            Every campaign is engineered on three dimensions: <span className="text-bone">Audience Segment</span> ×{" "}
            <span className="text-bone">Funnel Stage</span> × <span className="text-bone">Channel</span>. Each cell gets its
            own message, its own content direction, and its own KPI, set before anything goes live.
          </p>

          <div className="glass mt-10 p-6" aria-live="polite">
            <p className="t-label mb-4 text-mute">Selected cell</p>
            <dl className="grid grid-cols-3 gap-4">
              {[
                [audience.label, audience.items[active.a]],
                [funnel.label, funnel.items[active.f]],
                [channel.label, channel.items[active.c]],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="t-label mb-1 text-[0.6rem] text-mute">{k}</dt>
                  <dd className="text-sm text-bone md:text-base">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 border-t border-line pt-4 text-sm text-bone/65">
              One message. One content direction. One KPI tied to the gap Identifier found.
            </p>
          </div>
          <p className="t-label mt-4 text-mute">Illustrative. Your axes come from your Identifier findings.</p>
        </div>

        <div
          ref={sceneRef}
          onPointerMove={onPointer}
          className="relative flex aspect-square items-center justify-center lg:col-span-7 lg:w-full lg:max-w-[560px] lg:mx-auto"
          style={{ perspective: "1600px" }}
        >
          <div className="cf-tilt relative h-[62%] w-[62%]" style={{ transformStyle: "preserve-3d", transform: "rotateX(58deg)" }}>
            <div className="cf-rot absolute inset-0" style={{ transformStyle: "preserve-3d", transform: "rotateZ(-45deg)" }}>
              {channel.items.map((ch, c) => (
                <div
                  key={ch}
                  className="cf-plane absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1.5 md:gap-2"
                  style={{ transformStyle: "preserve-3d", transform: `translateZ(${(c - 1) * 110}px)` }}
                >
                  {audience.items.map((_, a) =>
                    funnel.items.map((__, f) => {
                      const on = active.a === a && active.f === f && active.c === c;
                      const lit = active.c === c;
                      return (
                        <button
                          key={`${a}-${f}`}
                          type="button"
                          aria-label={`${audience.items[a]}, ${funnel.items[f]}, ${ch}`}
                          onPointerEnter={() => setActive({ a, f, c })}
                          onFocus={() => setActive({ a, f, c })}
                          onClick={() => setActive({ a, f, c })}
                          className={cn(
                            "border transition-[background-color,border-color] duration-300",
                            on
                              ? "border-crimson-bright bg-crimson shadow-[0_0_40px_rgba(255,84,73,0.6)]"
                              : lit
                                ? "border-bone/25 bg-bone/[0.07] hover:bg-crimson/60"
                                : "border-bone/10 bg-ink-2/70 hover:bg-crimson/60"
                          )}
                        />
                      );
                    })
                  )}
                  <span
                    className={cn(
                      "t-label pointer-events-none absolute -left-3 top-0 hidden -translate-x-full whitespace-nowrap transition-colors lg:block",
                      active.c === c ? "text-crimson-bright" : "text-bone/45"
                    )}
                  >
                    {ch}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
