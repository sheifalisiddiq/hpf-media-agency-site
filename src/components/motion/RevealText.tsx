"use client";

import { useRef, type ElementType } from "react";
import { cn } from "@/lib/utils";
import { gsap, SplitText, MOTION_OK, useGSAP } from "@/lib/gsap";

type RevealTextProps = {
  children: string;
  as?: ElementType;
  className?: string;
  /** "load" plays immediately (after `delay`); "scroll" waits until the text enters the viewport. */
  trigger?: "load" | "scroll";
  delay?: number;
  /** Split unit that animates. */
  by?: "lines" | "words" | "chars";
  stagger?: number;
};

export default function RevealText({
  children,
  as: Tag = "p",
  className,
  trigger = "scroll",
  delay = 0,
  by = "lines",
  stagger,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const split = SplitText.create(el, {
          type: by === "chars" ? "lines,words,chars" : by === "words" ? "lines,words" : "lines",
          mask: "lines",
          linesClass: "split-line",
          autoSplit: true,
          onSplit(self) {
            const targets = by === "chars" ? self.chars : by === "words" ? self.words : self.lines;
            return gsap.from(targets, {
              yPercent: 110,
              rotate: by === "lines" ? 2 : 0,
              duration: 1.25,
              delay,
              stagger: stagger ?? (by === "chars" ? 0.025 : by === "words" ? 0.04 : 0.1),
              ease: "expo.out",
              scrollTrigger:
                trigger === "scroll" ? { trigger: el, start: "top 88%", once: true } : undefined,
            });
          },
        });
        return () => split.revert();
      });
      return () => mm.revert();
    },
    { scope: ref, dependencies: [children] }
  );

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
