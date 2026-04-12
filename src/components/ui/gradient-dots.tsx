"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GradientDotsProps = React.ComponentProps<typeof motion.div> & {
  /** Dot size (default: 8) */
  dotSize?: number;
  /** Spacing between dots (default: 10) */
  spacing?: number;
  /** Animation duration (default: 30) */
  duration?: number;
  /** Background color (default: '#000000') */
  backgroundColor?: string;
};

export function GradientDots({
  dotSize = 8,
  spacing = 10,
  duration = 45, // Slower for premium feel
  backgroundColor = "#000000",
  className,
  ...props
}: GradientDotsProps) {
  const hexSpacing = spacing * 1.732; // Hexagonal spacing calculation

  return (
    <motion.div
      className={cn("absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-40", className)}
      style={{
        backgroundColor,
        willChange: "background-position",
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, rgba(255, 84, 73, 0.4), transparent 60%),
          radial-gradient(circle at 50% 50%, rgba(147, 0, 10, 0.4), transparent 60%),
          radial-gradient(circle at 50% 50%, rgba(255, 42, 42, 0.4), transparent 60%),
          radial-gradient(ellipse at 50% 50%, rgba(65, 0, 2, 0.6), transparent 60%)
        `,
        backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
        backgroundPosition: `
          0px 0px, ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%,
          0% 0%,
          0% 0px
        `,
      }}
      animate={{
        backgroundPosition: [
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
        ]
      }}
      transition={{
        backgroundPosition: {
          duration: duration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }
      }}
      {...props}
    />
  );
}
