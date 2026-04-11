"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export default function HorizontalScroll({
  children,
  className = "",
}: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    const ctx = gsap.context(() => {
      const totalWidth = section.scrollWidth;
      const viewportWidth = window.innerWidth;
      const xDistance = -(totalWidth - viewportWidth);

      gsap.to(section, {
        x: xDistance,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden">
      <div 
        ref={sectionRef} 
        className={`flex w-max flex-nowrap ${className}`}
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
