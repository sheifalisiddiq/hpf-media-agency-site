"use client";

import { motion } from "framer-motion";

export default function VisualBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      {/* Dynamic Glow 1 - Desktop Only */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-10%", "30%", "-10%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-red-700/5 blur-[80px] md:blur-[130px] opacity-0 md:opacity-100 hidden md:block"
        style={{ willChange: "transform" }}
      />

      {/* Dynamic Glow 2 - Persistent but subtle */}
      <motion.div
        animate={{
          x: ["10%", "-10%", "10%"],
          y: ["20%", "-5%", "20%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] md:w-[50%] md:h-[50%] rounded-full bg-red-600/5 blur-[90px] md:blur-[140px] opacity-40 md:opacity-100"
        style={{ willChange: "transform" }}
      />

      {/* Dynamic Glow 3 (Subtle Accent) - Static on mobile for performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] md:w-[40%] md:h-[40%] rounded-full bg-red-500/5 blur-[60px] md:blur-[100px] md:animate-pulse" />

      {/* Grain / Noise Overlay - Only on desktop */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none hidden md:block">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.65" 
              numOctaves="3" 
              stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  );
}
