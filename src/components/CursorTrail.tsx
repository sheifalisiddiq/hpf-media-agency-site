"use client";

import { useEffect, useRef } from "react";

/**
 * Enhanced CursorTrail Component
 * 
 * Features:
 * - Smooth Lerp (Linear Interpolation) for fluid motion
 * - Trail Lag/Friction for a premium, organic feel
 * - Single Canvas rendering for high performance (60fps)
 * - Accessibility: Disables for touch devices and reduced-motion settings
 * - Hover Detection: Subtly reacts to clickable elements
 */

type Point = {
  x: number;
  y: number;
};

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorRef = useRef<Point>({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const hoverRef = useRef(false);
  const rafRef = useRef<number>(0);
  const activeRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Accessibility and Device Checks
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isTouchDevice = window.matchMedia("(pointer: coarse)");

    if (prefersReducedMotion.matches || isTouchDevice.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configuration
    const TRAIL_LENGTH = 20;
    const LERP_FACTOR = 0.18; // Speed of the lead point
    const FRICTION = 0.5;    // Lag of the trailing points
    const ACCENT_COLOR = "255, 84, 73"; // Base RGB for #ff5449
    
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Initialize points
    pointsRef.current = Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }));

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const handlePointerMove = (e: PointerEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      
      // Check for hover on clickable elements
      const target = e.target as HTMLElement;
      hoverRef.current = !!target?.closest('a, button, [role="button"], input, textarea');
      
      if (!activeRef.current) {
        activeRef.current = true;
        // Initialize points to current cursor to avoid jump
        pointsRef.current.forEach(p => {
          p.x = e.clientX;
          p.y = e.clientY;
        });
        render();
      }
    };

    const render = () => {
      if (!activeRef.current) return;

      ctx.clearRect(0, 0, width, height);

      // 1. Update Points with Lerp and Friction
      const points = pointsRef.current;
      const target = cursorRef.current;

      // Lead point follows cursor
      points[0].x += (target.x - points[0].x) * LERP_FACTOR;
      points[0].y += (target.y - points[0].y) * LERP_FACTOR;

      // Rest of points follow previous point with lag
      for (let i = 1; i < points.length; i++) {
        const p = points[i];
        const prev = points[i - 1];
        p.x += (prev.x - p.x) * FRICTION;
        p.y += (prev.y - p.y) * FRICTION;
      }

      // 2. Visual Styling
      const baseOpacity = hoverRef.current ? 0.45 : 0.3;
      const glowBlur = hoverRef.current ? 6 : 4;
      
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      
      // Draw smooth curve using quadratic sections
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }

      // Create gradient along the trail
      const gradient = ctx.createLinearGradient(
        points[0].x, points[0].y, 
        points[points.length - 1].x, points[points.length - 1].y
      );
      gradient.addColorStop(0, `rgba(${ACCENT_COLOR}, ${baseOpacity})`);
      gradient.addColorStop(1, `rgba(${ACCENT_COLOR}, 0)`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2.5;
      
      // Premium Glow Effect
      ctx.shadowBlur = glowBlur;
      ctx.shadowColor = `rgba(${ACCENT_COLOR}, ${baseOpacity * 0.8})`;
      
      // Multiple passes for glass-like finish
      ctx.stroke();
      
      // Subtly shrink trailing edge (optional but premium)
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.5;
      ctx.stroke();
      ctx.globalAlpha = 1.0;

      // 3. Loop or Stop
      const dist = Math.hypot(target.x - points[points.length - 1].x, target.y - points[points.length - 1].y);
      if (dist < 0.1) {
        // Stop animation if trail has settled
        activeRef.current = false;
        ctx.clearRect(0, 0, width, height); // Clear final frame
      } else {
        rafRef.current = requestAnimationFrame(render);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 40,
        pointerEvents: 'none',
        mixBlendMode: 'screen', // Blends nicely with dark backgrounds
      }}
    />
  );
}

