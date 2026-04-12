"use client";

import { motion } from "framer-motion";

export default function VisualBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      {/* Primary Vertical Gradient Background - Multiple stops for smoother transition */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000_0%,#080000_20%,#2a0000_50%,#080000_80%,#000000_100%)]" 
        style={{ willChange: "opacity" }}
      />

      {/* Subtle Glows for Depth - Improved opacity and blur */}
      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,84,73,0.03)_0%,transparent_70%)]"
      />

      {/* Grain / Noise Overlay - Kept for premium texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
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

      {/* Vignette for cinematic focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}

