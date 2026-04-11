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
  stagger = 0.03, // Tighter stagger for more fluid feel
  duration = 1.0,
  tag: Tag = "div",
  once = true,
}: StaggerTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Split text into words with a masked container for each word
    const words = text.split(" ");
    element.innerHTML = words
      .map((word) => 
        `<span class="inline-block overflow-hidden py-1 mb-[-0.25em]">` +
          `<span class="inline-block transform-cpu opacity-0 translate-y-full">${word}&nbsp;</span>` +
        `</span>`
      )
      .join("");

    const innerSpans = element.querySelectorAll("span > span");

    const ctx = gsap.context(() => {
      gsap.to(innerSpans, {
        y: "0%",
        opacity: 1,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "expo.out",
        scrollTrigger: {
          trigger: element,
          start: "top 92%", // Delayed trigger
          toggleActions: "play none none none",
          once: once,
        },
      });
    });

    return () => ctx.revert();
  }, [text, delay, stagger, duration, once]);

  return (
    <Tag
      ref={containerRef as any}
      className={`${className} leading-tight`}
      style={{ willChange: "transform, opacity" }}
    />
  );
}
