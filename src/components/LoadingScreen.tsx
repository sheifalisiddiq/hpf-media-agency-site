"use client";

import { useEffect, useRef } from "react";
import { LOADER_KEY } from "@/lib/intro";

/**
 * First-visit intro. Shown once per browser session: an inline script in the root layout sets
 * `data-intro-seen` on <html> before paint for returning visitors, and CSS hides the loader.
 */
export default function LoadingScreen() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (document.documentElement.dataset.introSeen) {
      el.remove();
      return;
    }
    try {
      sessionStorage.setItem(LOADER_KEY, "1");
    } catch {}
    const t = setTimeout(() => {
      el.classList.add("is-done");
      document.documentElement.dataset.introSeen = "1";
    }, 1400);
    const t2 = setTimeout(() => el.remove(), 2400);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div ref={ref} className="hpf-loader" aria-hidden>
      <style>{`
        html[data-intro-seen] .hpf-loader:not(.is-done) { display: none; }
        .hpf-loader {
          position: fixed; inset: 0; z-index: 9998; display: flex; align-items: center; justify-content: center;
          background: var(--color-ink); transition: transform 0.95s cubic-bezier(0.77,0,0.175,1);
        }
        .hpf-loader.is-done { transform: translateY(-100%); }
        .hpf-loader__inner { display: flex; flex-direction: column; align-items: flex-start; gap: 18px; }
        .hpf-loader__bar { width: 52px; height: 6px; background: var(--color-crimson); transform-origin: left;
          animation: hpf-bar 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .hpf-loader__word { display: flex; overflow: hidden; font-family: var(--font-display);
          font-size: clamp(5rem, 16vw, 11rem); line-height: 0.85; color: var(--color-bone); letter-spacing: -0.04em; }
        .hpf-loader__word span { display: inline-block; animation: hpf-rise 1s cubic-bezier(0.16,1,0.3,1) both; }
        .hpf-loader__word span:nth-child(2) { animation-delay: 0.08s; }
        .hpf-loader__word span:nth-child(3) { animation-delay: 0.16s; }
        .hpf-loader__meta { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.32em; text-transform: uppercase;
          color: var(--color-mute); animation: hpf-fade 0.8s ease 0.45s both; }
        @keyframes hpf-bar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes hpf-rise { from { transform: translateY(105%); } to { transform: translateY(0); } }
        @keyframes hpf-fade { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
      <div className="hpf-loader__inner">
        <div className="hpf-loader__bar" />
        <div className="hpf-loader__word">
          <span>H</span>
          <span>P</span>
          <span>F</span>
        </div>
        <div className="hpf-loader__meta">Truth · Dignity · Purity · Righteousness · Kindness</div>
      </div>
    </div>
  );
}
