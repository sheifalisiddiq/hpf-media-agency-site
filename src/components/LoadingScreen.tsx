"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const SHOW_MS = 2000;

/**
 * Preloader: plays every time the site is opened or hard-reloaded (the root layout does not remount
 * on client-side navigation, so moving between pages does not replay it). It is server-rendered, so
 * it covers the page from the first paint.
 */
export default function LoadingScreen() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = document.documentElement;
    root.dataset.preloading = "1";
    const done = setTimeout(() => {
      el.classList.add("is-done");
      root.dataset.introSeen = "1";
      delete root.dataset.preloading;
    }, SHOW_MS);
    const remove = setTimeout(() => el.remove(), SHOW_MS + 1000);
    return () => {
      clearTimeout(done);
      clearTimeout(remove);
      delete root.dataset.preloading;
    };
  }, []);

  return (
    <div ref={ref} className="hpf-loader" role="presentation" aria-hidden>
      <style>{`
        html[data-preloading] { overflow: hidden; }
        .hpf-loader {
          position: fixed; inset: 0; z-index: 9998; display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 28px; background: #000; transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), visibility 0.8s;
        }
        .hpf-loader.is-done { opacity: 0; visibility: hidden; pointer-events: none; }
        .hpf-loader__logo { opacity: 0; animation: hpf-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.1s forwards; }
        .hpf-loader__track { position: relative; width: 260px; max-width: 70vw; height: 1px; overflow: hidden; background: rgba(255,84,73,0.18); }
        .hpf-loader__bar { position: absolute; left: 0; top: 0; height: 100%; background: linear-gradient(90deg, #ff5449, #ff7b73);
          animation: hpf-bar 1.7s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hpf-loader__meta { font-size: 9px; font-weight: 700; letter-spacing: 0.5em; text-transform: uppercase; color: rgba(255,255,255,0.35);
          text-align: center; padding-left: 0.5em; opacity: 0; animation: hpf-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards; }
        @keyframes hpf-fade-up { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes hpf-bar { from { width: 0%; } to { width: 100%; } }
        @media (prefers-reduced-motion: reduce) { .hpf-loader__logo, .hpf-loader__meta { opacity: 1; animation: none; } }
      `}</style>
      <div className="hpf-loader__logo">
        <Image src="/logo.jpg" alt="" width={130} height={65} style={{ objectFit: "contain", width: 130, height: "auto" }} priority />
      </div>
      <div className="hpf-loader__track">
        <div className="hpf-loader__bar" />
      </div>
      <span className="hpf-loader__meta">Marketing without compromise</span>
    </div>
  );
}
