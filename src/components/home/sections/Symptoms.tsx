"use client";

import { useRef } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/motion/RevealText";
import { symptoms } from "@/content/method";
import { gsap, DESKTOP_MOTION, useGSAP } from "@/lib/gsap";

/** Pinned: each symptom is struck through and its root cause rises in its place. */
export default function Symptoms() {
  const ref = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(DESKTOP_MOTION, () => {
        const rows = gsap.utils.toArray<HTMLElement>(".sym-row");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: `+=${rows.length * 70}%`,
            pin: true,
            scrub: 0.8,
          },
        });
        rows.forEach((row, i) => {
          const at = i * 1;
          tl.to(row.querySelector(".sym-strike"), { scaleX: 1, duration: 0.5, ease: "power2.inOut" }, at)
            .to(row.querySelector(".sym-text"), { color: "rgb(242 239 234 / 0.28)", duration: 0.5 }, at)
            .fromTo(
              row.querySelector(".sym-cause"),
              { yPercent: 100, autoAlpha: 0 },
              { yPercent: 0, autoAlpha: 1, duration: 0.6, ease: "expo.out" },
              at + 0.3
            )
            .to(row.querySelector(".sym-dot"), { backgroundColor: "#ff5449", scale: 1.6, duration: 0.3 }, at + 0.3);
        });
        tl.to(".sym-progress", { scaleX: 1, ease: "none", duration: tl.duration() }, 0);
      });
      mm.add("(prefers-reduced-motion: no-preference) and (max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLElement>(".sym-row").forEach((row) => {
          const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: "top 70%", once: true } });
          tl.to(row.querySelector(".sym-strike"), { scaleX: 1, duration: 0.6, ease: "power2.inOut" })
            .to(row.querySelector(".sym-text"), { color: "rgb(242 239 234 / 0.3)", duration: 0.4 }, "<")
            .fromTo(row.querySelector(".sym-cause"), { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.2");
        });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".sym-strike", { scaleX: 1 });
        gsap.set(".sym-cause", { autoAlpha: 1 });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section ref={ref} aria-label="Symptoms and root causes" className="relative border-t border-line">
      <div ref={pinRef} className="flex min-h-[100svh] flex-col justify-center py-24">
        <div className="wrap">
          <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionLabel index="01">The real problem</SectionLabel>
              <RevealText as="h2" className="t-h1 mt-6 text-bone">
                Most marketing fixes symptoms.
              </RevealText>
            </div>
            <p className="t-lead self-end md:col-span-4 md:col-start-9">
              More posts, more ads and a new logo rarely help, because the problem usually sits underneath. We trace every
              gap back to its root cause.
            </p>
          </div>

          <div className="mb-4 hidden grid-cols-12 gap-6 lg:grid">
            <p className="t-label col-span-6 text-mute">What you see</p>
            <p className="t-label col-span-6 text-crimson-bright">What&apos;s actually causing it</p>
          </div>

          <ul className="border-t border-line">
            {symptoms.map((s, i) => (
              <li key={s.symptom} className="sym-row grid gap-3 border-b border-line py-6 lg:grid-cols-12 lg:items-center lg:gap-6 lg:py-8">
                <div className="flex items-center gap-5 lg:col-span-6">
                  <span className="sym-dot h-2 w-2 shrink-0 rounded-full bg-bone/30" aria-hidden />
                  <span className="t-label w-6 text-mute">0{i + 1}</span>
                  <span className="relative">
                    <span className="sym-text t-h3 text-bone">{s.symptom}</span>
                    <span
                      aria-hidden
                      className="sym-strike absolute left-0 right-0 top-[55%] h-[2px] origin-left scale-x-0 bg-crimson"
                    />
                  </span>
                </div>
                <div className="overflow-hidden pl-[4.25rem] lg:col-span-6 lg:pl-0">
                  <p className="sym-cause flex items-center gap-3 text-lg text-bone md:text-2xl">
                    <span className="text-crimson-bright" aria-hidden>
                      →
                    </span>
                    {s.cause}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 h-px w-full bg-line">
            <div className="sym-progress h-px w-full origin-left scale-x-0 bg-crimson" />
          </div>
        </div>
      </div>
    </section>
  );
}
