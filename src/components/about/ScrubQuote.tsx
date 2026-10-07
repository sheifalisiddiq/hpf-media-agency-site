"use client";

import { useRef } from "react";
import { gsap, SplitText, MOTION_OK, useGSAP } from "@/lib/gsap";

/** Pinned quote whose words light up one by one as you scroll. */
export default function ScrubQuote({ text, label }: { text: string; label: string }) {
  const ref = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const split = SplitText.create(quoteRef.current, { type: "words", autoSplit: true });
        gsap.fromTo(
          split.words,
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top top",
              end: "+=140%",
              pin: true,
              scrub: 0.6,
            },
          }
        );
        return () => split.revert();
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section ref={ref} aria-label={label} className="relative flex min-h-[100svh] items-center border-t border-line py-24">
      <div className="wrap">
        <p className="t-label mb-10 flex items-center gap-4 text-mute">
          <span className="h-1 w-8 bg-crimson" />
          <span className="text-crimson-bright">Part 01</span> {label}
        </p>
        <blockquote ref={quoteRef} className="max-w-6xl font-display text-[clamp(2.2rem,5.4vw,5.6rem)] leading-[1.04] tracking-[-0.02em] text-bone">
          &ldquo;{text}&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
