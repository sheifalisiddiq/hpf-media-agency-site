"use client";

import React, { useEffect, useRef, ReactNode, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParallaxProps {
  children?: ReactNode;
  speed?: number; // 0.1 to 1.0 (slower than scroll), > 1.0 (faster)
  className?: string;
}

const Parallax = memo(function Parallax({
  children,
  speed = 1,
  className = "",
}: ParallaxProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const reducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || reducedMotion || speed === 1) {
      gsap.set(element, { y: 0 });
      return;
    }

    const yMovement = (1 - speed) * 100;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: yMovement,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={targetRef} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
});

export default Parallax;
