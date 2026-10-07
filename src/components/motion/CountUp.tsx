"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Format large numbers as 1.0M / 150k. */
  compact?: boolean;
};

const format = (n: number, compact: boolean) => {
  if (!compact) return Math.round(n).toLocaleString("en-US");
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}k`;
  return Math.round(n).toString();
};

export default function CountUp({ value, prefix = "", suffix = "", className, compact = false }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const state = { n: 0 };
      el.textContent = `${prefix}${format(0, compact)}${suffix}`;
      gsap.to(state, {
        n: value,
        duration: 2.2,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${format(state.n, compact)}${suffix}`;
        },
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className}>
      {`${prefix}${format(value, compact)}${suffix}`}
    </span>
  );
}
