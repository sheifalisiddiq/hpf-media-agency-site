"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  scale?: number;
  rotateX?: number; // Subtle 3D tilt
  staggerChildren?: number;
  className?: string;
  isContainer?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 1.4, // Increased for premium feel
  yOffset = 50,
  scale = 1, // Default to 1 (no scaling)
  rotateX = 0,
  staggerChildren = 0,
  className = "",
  isContainer = false,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      // Set perspective for 3D effects
      if (rotateX !== 0) {
        gsap.set(element.parentElement, { perspective: 1000 });
      }

      if (isContainer && staggerChildren > 0) {
        const targets = element.children;
        gsap.fromTo(
          targets,
          { 
            opacity: 0, 
            y: yOffset, 
            scale: scale,
            rotateX: rotateX
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: duration,
            delay: delay,
            stagger: staggerChildren,
            ease: "expo.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%", // Slightly later trigger for more intentional feel
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      } else {
        gsap.fromTo(
          element,
          { 
            opacity: 0, 
            y: yOffset, 
            scale: scale,
            rotateX: rotateX
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: duration,
            delay: delay,
            ease: "expo.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [delay, duration, yOffset, scale, rotateX, staggerChildren, isContainer]);

  return (
    <div 
      ref={elementRef} 
      className={className} 
      style={{ willChange: "transform, opacity", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

// Helper for staggered items
export function RevealItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
