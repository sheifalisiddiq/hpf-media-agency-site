"use client";

import { useRef } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import { values } from "@/content/dna";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

/** Five values as stacked sticky cards; each word fills crimson as it reaches the centre. */
export default function Values() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>(".val-card").forEach((card, i, all) => {
          const word = card.querySelector(".val-fill");
          gsap.fromTo(
            word,
            { clipPath: "inset(-10% 100% -25% 0)" },
            {
              clipPath: "inset(-10% 0% -25% 0)",
              ease: "none",
              scrollTrigger: { trigger: card, start: "top 75%", end: "top 25%", scrub: true },
            }
          );
          if (i < all.length - 1) {
            gsap.to(card.querySelector(".val-inner"), {
              scale: 0.92,
              autoAlpha: 0,
              ease: "none",
              scrollTrigger: { trigger: all[i + 1], start: "top bottom", end: "top 40%", scrub: true },
            });
          }
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section ref={ref} aria-label="Our values" className="relative border-t border-line pt-28 md:pt-40">
      <div className="wrap mb-16 grid gap-8 md:mb-24 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionLabel index="06">Five non-negotiables</SectionLabel>
          <h2 className="t-h2 mt-6 text-bone">Every decision runs through the same filter.</h2>
        </div>
        <p className="t-lead self-end md:col-span-4 md:col-start-9">
          They cannot be suspended for commercial convenience, client pressure, or short-term gain.
        </p>
      </div>

      <div>
        {values.map((v) => (
          <article key={v.name} className="val-card sticky top-0 flex min-h-[85svh] items-center md:min-h-[100svh]">
            <div className="val-inner wrap w-full origin-top border-t border-line py-12 md:py-16">
              <div className="mb-6 flex items-center justify-between">
                <span className="t-label text-crimson-bright">{v.index}</span>
                <span className="t-label text-mute">The filter</span>
              </div>
              <h3 className="relative font-display text-[10.5vw] leading-[0.9] md:text-[9.2vw]">
                <span className="text-bone/15">{v.name}</span>
                <span aria-hidden className="val-fill absolute inset-0 text-crimson">
                  {v.name}
                </span>
              </h3>
              <div className="mt-10 grid gap-8 md:grid-cols-12">
                <p className="text-lg leading-relaxed text-bone/75 md:col-span-5">{v.body}</p>
                <p className="font-display text-2xl leading-snug text-bone md:col-span-6 md:col-start-7 md:text-4xl">
                  &ldquo;{v.question}&rdquo;
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="wrap py-24 text-center md:py-32">
        <p className="font-display text-4xl leading-tight text-bone md:text-6xl">
          If any answer is no, <span className="text-crimson-bright">we stop until it is yes.</span>
        </p>
      </div>
    </section>
  );
}
