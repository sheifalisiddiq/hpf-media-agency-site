"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  staggerChildren?: number;
  className?: string;
  isContainer?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 1.2,
  yOffset = 40,
  staggerChildren = 0,
  className = "",
  isContainer = false,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      if (isContainer && staggerChildren > 0) {
        // Target immediate children for staggering
        const targets = element.children;
        gsap.fromTo(
          targets,
          { opacity: 0, y: yOffset },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            stagger: staggerChildren,
            ease: "expo.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      } else {
        gsap.fromTo(
          element,
          { opacity: 0, y: yOffset },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: "expo.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [delay, duration, yOffset, staggerChildren, isContainer]);

  return (
    <div ref={elementRef} className={className} style={{ willChange: "transform, opacity" }}>
      {children}
    </div>
  );
}

// Helper for staggered items
export function RevealItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
