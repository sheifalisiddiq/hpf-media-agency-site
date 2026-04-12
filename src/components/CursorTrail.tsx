"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * DEBUG VERSION: CursorTrail Component
 * 
 * Visibility priority:
 * - Disabled pointer/motion checks
 * - High z-index (9999)
 * - Removed blend modes
 * - Increased opacity
 * - Forced animation loop
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

  const [isClient, setIsClient] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsTouchDevice(checkTouch || reducedMotion);

    if (checkTouch || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const TRAIL_LENGTH = 15; // Shorter trail
    const LERP_FACTOR = 0.45; // Much faster following (was 0.18)
    const FRICTION = 0.65; // Less sluggish (was 0.5)
    const ACCENT_COLOR = "255, 84, 73"; 
    
    let width = 0;
    let height = 0;
    let dpr = 1;

    pointsRef.current = Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }));

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handlePointerMove = (e: PointerEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      
      const target = e.target as HTMLElement;
      hoverRef.current = !!target?.closest('a, button, [role="button"], input, textarea');
      
      if (!activeRef.current) {
        activeRef.current = true;
        pointsRef.current.forEach((p, i) => {
          p.x = e.clientX + i; 
          p.y = e.clientY + i;
        });
        render();
      }
    };

    const render = () => {
      if (!activeRef.current) return;

      ctx.clearRect(0, 0, width, height);

      const points = pointsRef.current;
      const target = cursorRef.current;

      points[0].x += (target.x - points[0].x) * LERP_FACTOR;
      points[0].y += (target.y - points[0].y) * LERP_FACTOR;

      for (let i = 1; i < points.length; i++) {
        const p = points[i];
        const prev = points[i - 1];
        p.x += (prev.x - p.x) * FRICTION;
        p.y += (prev.y - p.y) * FRICTION;
      }

      const baseOpacity = hoverRef.current ? 0.9 : 0.7;
      const glowBlur = hoverRef.current ? 10 : 8;
      
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }

      const gradient = ctx.createLinearGradient(
        points[0].x, points[0].y, 
        points[points.length - 1].x, points[points.length - 1].y
      );
      gradient.addColorStop(0, `rgba(${ACCENT_COLOR}, ${baseOpacity})`);
      gradient.addColorStop(1, `rgba(${ACCENT_COLOR}, 0.1)`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 4;
      
      ctx.shadowBlur = glowBlur;
      ctx.shadowColor = `rgba(${ACCENT_COLOR}, 1)`;
      
      ctx.stroke();
      
      const dist = Math.hypot(target.x - points[points.length - 1].x, target.y - points[points.length - 1].y);
      if (dist < 0.01) {
        activeRef.current = false;
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

  if (!isClient || isTouchDevice) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}


