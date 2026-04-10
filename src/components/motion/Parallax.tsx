"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type ParallaxSectionProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
  scaleRange?: [number, number];
};

export function ParallaxSection({
  children,
  className,
  speed = 120,
  scaleRange = [1, 1.12],
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translate = useSpring(
    useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-speed, speed]),
    { stiffness: 120, damping: 22, mass: 0.25 },
  );
  const scale = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      prefersReducedMotion ? [1, 1] : scaleRange,
    ),
    { stiffness: 120, damping: 24, mass: 0.3 },
  );

  return (
    <motion.div ref={ref} className={className} style={{ y: translate, scale }}>
      {children}
    </motion.div>
  );
}

type ParallaxBackgroundProps = {
  className?: string;
};

export function ParallaxBackground({ className }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 180]),
    { stiffness: 110, damping: 26, mass: 0.35 },
  );

  return <motion.div ref={ref} aria-hidden className={className} style={{ y }} />;
}
