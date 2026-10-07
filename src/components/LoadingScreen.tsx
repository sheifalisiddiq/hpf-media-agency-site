"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { LOADER_KEY } from "@/lib/intro";

/**
 * First-visit intro (once per browser session). An inline script in the root layout sets
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
    }, 1500);
    const t2 = setTimeout(() => el.remove(), 2500);
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
          position: fixed; inset: 0; z-index: 9998; display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 28px; background: #000; transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), visibility 0.8s;
        }
        .hpf-loader.is-done { opacity: 0; visibility: hidden; }
        .hpf-loader__logo { opacity: 0; animation: hpf-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.1s forwards; }
        .hpf-loader__track { position: relative; width: 260px; height: 1px; overflow: hidden; background: rgba(255,84,73,0.18); }
        .hpf-loader__bar { position: absolute; left: 0; top: 0; height: 100%; background: linear-gradient(90deg, #ff5449, #ff7b73);
          animation: hpf-bar 1.4s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hpf-loader__meta { font-size: 9px; font-weight: 700; letter-spacing: 0.5em; text-transform: uppercase; color: rgba(255,255,255,0.35);
          opacity: 0; animation: hpf-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards; }
        @keyframes hpf-fade-up { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes hpf-bar { from { width: 0%; } to { width: 100%; } }
      `}</style>
      <div className="hpf-loader__logo">
        <Image src="/logo.jpg" alt="" width={130} height={65} style={{ objectFit: "contain" }} priority />
      </div>
      <div className="hpf-loader__track">
        <div className="hpf-loader__bar" />
      </div>
      <span className="hpf-loader__meta">Marketing without compromise</span>
    </div>
  );
}
