"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // 0.1 to 1.0 (slower than scroll), > 1.0 (faster)
  className?: string;
}

export default function Parallax({
  children,
  speed = 1,
  className = "",
}: ParallaxProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    // Movement calculation
    // Speed < 1: move less than scroll (lagging behind)
    // Speed > 1: move more than scroll (leading)
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
}
