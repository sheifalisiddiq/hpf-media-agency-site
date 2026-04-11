"use client";

import { useEffect, useRef, ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StaggerTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  tag?: ElementType;
  once?: boolean;
}

export default function StaggerText({
  text,
  className = "",
  delay = 0,
  stagger = 0.05,
  duration = 0.8,
  tag: Tag = "div",
  once = true,
}: StaggerTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Split text into words
    const words = text.split(" ");
    element.innerHTML = words
      .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block transform-cpu">${word}&nbsp;</span></span>`)
      .join("");

    const innerSpans = element.querySelectorAll("span > span");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerSpans,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: "expo.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
            once: once,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [text, delay, stagger, duration, once]);

  return (
    <Tag
      ref={containerRef as any}
      className={className}
      style={{ willChange: "transform, opacity" }}
    />
  );
}
