"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  /** Distance travelled across the scroll range, as a percentage of the layer height. Negative moves up. */
  y?: number;
  x?: number;
  rotate?: number;
  scale?: [number, number];
  /** Run on phones too (default: desktop/tablet only). */
  mobile?: boolean;
};

export default function ParallaxLayer({
  children,
  className,
  y = -20,
  x = 0,
  rotate = 0,
  scale,
  mobile = false,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      const query = mobile
        ? "(prefers-reduced-motion: no-preference)"
        : "(prefers-reduced-motion: no-preference) and (min-width: 768px)";
      mm.add(query, () => {
        gsap.fromTo(
          el,
          { yPercent: -y / 2, xPercent: -x / 2, rotate: -rotate / 2, scale: scale?.[0] ?? 1 },
          {
            yPercent: y / 2,
            xPercent: x / 2,
            rotate: rotate / 2,
            scale: scale?.[1] ?? 1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
