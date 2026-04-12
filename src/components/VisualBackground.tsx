"use client";

export default function VisualBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-black overflow-hidden">
      {/* Primary Vertical Gradient Background */}
      {/* Dark black at top, deep red in middle, fade to black at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#260000] to-black" />
      
      {/* Subtle Glow for depth (highly performant alternative to CSS blur) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,0,0,0.06)_0%,transparent_80%)]" />
      
      {/* Edge Vignette to frame the content nicely */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
