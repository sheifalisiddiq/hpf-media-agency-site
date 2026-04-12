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
      const isMobile = window.matchMedia("(pointer: coarse), (max-width: 768px)").matches;
      if (isMobile) return; // Use native scroll on mobile

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
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="w-full overflow-x-auto overflow-y-hidden md:overflow-visible no-scrollbar">
      <div 
        ref={sectionRef} 
        className={`flex w-max flex-nowrap ${className} px-4 md:px-0`}
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
