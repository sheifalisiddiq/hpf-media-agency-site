"use client";

import { motion } from "framer-motion";

interface GlowingDividerProps {
  className?: string;
  height?: string;
}

export default function GlowingDivider({ className = "", height = "h-32" }: GlowingDividerProps) {
  return (
    <div className={`relative flex flex-col items-center rotate-180 md:rotate-0 ${height} ${className}`}>
      {/* The Core Line */}
      <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      
      {/* The Glow Effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleY: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-[4px] h-full bg-primary/20 blur-[6px] -left-[1.5px]"
      />
      
      {/* Bright Core Pointer (Optional, for that sharp look) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-1/4 bg-primary/40 blur-[2px]" />
    </div>
  );
}
