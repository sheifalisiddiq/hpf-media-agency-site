"use client";
import { useState, useEffect, useRef } from "react";
import Icon, { type IconName } from "@/components/Icon";

interface OrbitalItem {
  id: number;
  icon: IconName;
  label: string;
  desc: string;
}

interface OrbitalClientsProps {
  items: OrbitalItem[];
}

export default function OrbitalClients({ items }: OrbitalClientsProps) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const calculatePosition = (index: number) => {
    const angle = ((index / items.length) * 360 + rotationAngle) % 360;
    const radius = 170;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.35, Math.min(1, 0.35 + 0.65 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, zIndex, opacity };
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full select-none"
      style={{ height: 440 }}
      onClick={(e) => {
        if (e.target === containerRef.current) {
          setActiveId(null);
          setAutoRotate(true);
        }
      }}
    >
      {/* Center orb */}
      <div className="absolute z-10 flex items-center justify-center" style={{ width: 56, height: 56 }}>
        <div
          className="absolute rounded-full border border-primary/20 animate-ping opacity-60"
          style={{ width: 72, height: 72 }}
        />
        <div
          className="absolute rounded-full border border-primary/10 animate-ping opacity-30"
          style={{ width: 92, height: 92, animationDelay: "0.6s" }}
        />
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary via-red-700 to-red-900 flex items-center justify-center animate-pulse">
          <div className="w-6 h-6 rounded-full bg-white/80" />
        </div>
      </div>

      {/* Orbit ring */}
      <div
        className="absolute rounded-full border border-white/8 pointer-events-none"
        style={{ width: 380, height: 380 }}
      />

      {/* Nodes */}
      {items.map((item, index) => {
        const pos = calculatePosition(index);
        const isActive = activeId === item.id;

        return (
          <div
            key={item.id}
            className="absolute transition-all duration-700 cursor-pointer"
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px)`,
              zIndex: isActive ? 200 : pos.zIndex,
              opacity: isActive ? 1 : pos.opacity,
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (isActive) {
                setActiveId(null);
                setAutoRotate(true);
              } else {
                setActiveId(item.id);
                setAutoRotate(false);
              }
            }}
          >
            {/* Glow halo */}
            <div
              className={`absolute rounded-full pointer-events-none transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
              style={{
                width: 64,
                height: 64,
                top: -12,
                left: -12,
                background: "radial-gradient(circle, rgba(255,84,73,0.25) 0%, transparent 70%)",
              }}
            />

            {/* Icon node */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                isActive
                  ? "bg-primary border-primary text-black scale-150 shadow-lg shadow-primary/30"
                  : "bg-black/80 border-white/25 text-primary hover:border-primary/50 hover:scale-110"
              }`}
            >
              <Icon name={item.icon} className="h-5 w-5" />
            </div>

            {/* Label */}
            <p
              className={`absolute whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.2em] text-center w-max transition-all duration-300 left-1/2 -translate-x-1/2 ${
                isActive ? "text-white" : "text-white/55"
              }`}
              style={{ top: 46 }}
            >
              {item.label}
            </p>

            {/* Description card — only when active */}
            {isActive && (
              <div className="absolute left-1/2 -translate-x-1/2 w-52 rounded-xl border border-white/15 bg-black/90 backdrop-blur-lg p-4 shadow-2xl shadow-black/60" style={{ top: 68 }}>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-2 bg-white/20" />
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary mb-2">{item.label}</p>
                <p className="text-[11px] leading-[1.6] text-white/70">{item.desc}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
