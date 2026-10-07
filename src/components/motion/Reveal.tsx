"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Animate each direct child in sequence instead of the wrapper. */
  stagger?: number;
  y?: number;
  delay?: number;
  start?: string;
  id?: string;
};

export default function Reveal({
  children,
  as: Tag = "div",
  className,
  stagger,
  y = 48,
  delay = 0,
  start = "top 88%",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const targets = stagger !== undefined ? Array.from(el.children) : el;
        gsap.from(targets, {
          y,
          autoAlpha: 0,
          duration: 1.2,
          delay,
          stagger: stagger ?? 0,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start, once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} id={id}>
      {children}
    </Tag>
  );
}
