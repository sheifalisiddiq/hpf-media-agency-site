"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = loaderRef.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.visibility = "hidden";
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hpf-fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hpf-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
      <div
        ref={loaderRef}
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "28px",
          transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), visibility 0.8s",
        }}
      >
        <div
          style={{
            opacity: 0,
            animation: "hpf-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.1s forwards",
          }}
        >
          <Image
            src="/logo.jpg"
            alt="HPF Media"
            width={130}
            height={65}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div
          style={{
            width: "260px",
            height: "1px",
            background: "rgba(255,84,73,0.18)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              background: "linear-gradient(90deg, #FF5449, #ff7b73)",
              animation: "hpf-bar 1.8s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          />
        </div>

        <span
          style={{
            fontSize: "9px",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            opacity: 0,
            animation: "hpf-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards",
          }}
        >
          UAE Social Media Agency
        </span>
      </div>
    </>
  );
}
