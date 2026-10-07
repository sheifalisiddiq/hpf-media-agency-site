"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

type Point = { x: number; y: number };

const noopSubscribe = () => () => {};

/**
 * Crimson ink trail plus a follower ring. The ring grows over interactive elements and shows a
 * label for elements marked `data-cursor="play"` or `data-cursor="drag"`.
 * Disabled on touch devices and for reduced motion.
 */
export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const enabled = useSyncExternalStore(
    noopSubscribe,
    () => !matchMedia("(pointer: coarse)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!canvas || !ring || !label) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const TRAIL_LENGTH = 14;
    const ACCENT = "255, 84, 73";
    const target: Point = { x: -100, y: -100 };
    const ringPos: Point = { x: -100, y: -100 };
    const points: Point[] = Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 }));
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let mode: "default" | "link" | "play" | "drag" = "default";

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const setMode = (next: typeof mode) => {
      if (next === mode) return;
      mode = next;
      ring.dataset.mode = next;
      label.textContent = next === "play" ? "Play" : next === "drag" ? "Drag" : "";
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = e.clientX;
      target.y = e.clientY;
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor], a, button, [role='button'], input, textarea, select, label"
      );
      const explicit = el?.dataset.cursor;
      setMode(explicit === "play" || explicit === "drag" ? explicit : el ? "link" : "default");
      ring.style.opacity = "1";
      if (!running) {
        running = true;
        points.forEach((p) => {
          p.x = target.x;
          p.y = target.y;
        });
        if (ringPos.x < 0) {
          ringPos.x = target.x;
          ringPos.y = target.y;
        }
        raf = requestAnimationFrame(render);
      }
    };

    const onLeave = () => {
      ring.style.opacity = "0";
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      points[0].x += (target.x - points[0].x) * 0.5;
      points[0].y += (target.y - points[0].y) * 0.5;
      for (let i = 1; i < points.length; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.6;
        points[i].y += (points[i - 1].y - points[i].y) * 0.6;
      }

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      const last = points[points.length - 1];
      const g = ctx.createLinearGradient(points[0].x, points[0].y, last.x, last.y);
      g.addColorStop(0, `rgba(${ACCENT}, 0.85)`);
      g.addColorStop(1, `rgba(${ACCENT}, 0)`);
      ctx.strokeStyle = g;
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(${ACCENT}, 0.9)`;
      ctx.stroke();

      ringPos.x += (target.x - ringPos.x) * 0.18;
      ringPos.y += (target.y - ringPos.y) * 0.18;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;

      const settled =
        Math.hypot(target.x - last.x, target.y - last.y) < 0.1 &&
        Math.hypot(target.x - ringPos.x, target.y - ringPos.y) < 0.1;
      if (settled) {
        running = false;
        ctx.clearRect(0, 0, width, height);
      } else {
        raf = requestAnimationFrame(render);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        .hpf-ring { position: fixed; left: 0; top: 0; z-index: 9997; pointer-events: none; opacity: 0;
          transition: opacity .3s ease; }
        .hpf-ring__dot { position: absolute; left: 0; top: 0; width: 34px; height: 34px; margin: -17px 0 0 -17px;
          border-radius: 9999px; border: 1px solid rgb(242 239 234 / .35); display: flex; align-items: center; justify-content: center;
          transition: width .45s cubic-bezier(.16,1,.3,1), height .45s cubic-bezier(.16,1,.3,1), margin .45s cubic-bezier(.16,1,.3,1),
            background-color .3s ease, border-color .3s ease; }
        .hpf-ring[data-mode="link"] .hpf-ring__dot { width: 58px; height: 58px; margin: -29px 0 0 -29px; border-color: rgb(255 84 73 / .8); }
        .hpf-ring[data-mode="play"] .hpf-ring__dot, .hpf-ring[data-mode="drag"] .hpf-ring__dot {
          width: 84px; height: 84px; margin: -42px 0 0 -42px; background: var(--color-crimson); border-color: transparent; }
        .hpf-ring__label { font-family: var(--font-sans); font-weight: 700; font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: var(--color-bone); }
      `}</style>
      <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-[9996]" />
      <div ref={ringRef} className="hpf-ring" aria-hidden data-mode="default">
        <div className="hpf-ring__dot">
          <span ref={labelRef} className="hpf-ring__label" />
        </div>
      </div>
    </>
  );
}
