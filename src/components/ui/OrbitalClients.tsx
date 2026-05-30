"use client";
import { useState, useEffect, useRef, useCallback } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const angleRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const autoRotateRef = useRef(true);
  const lastTimeRef = useRef<number | null>(null);
  const activeIdRef = useRef<number | null>(null);

  const updatePositions = useCallback(() => {
    const total = items.length;
    const radius = 170;
    nodeRefs.current.forEach((node, index) => {
      if (!node) return;
      const angle = ((index / total) * 360 + angleRef.current) % 360;
      const radian = (angle * Math.PI) / 180;
      const x = radius * Math.cos(radian);
      const y = radius * Math.sin(radian);
      const isActive = activeIdRef.current === items[index].id;
      const zIndex = isActive ? 200 : Math.round(100 + 50 * Math.cos(radian));
      const opacity = isActive ? 1 : Math.max(0.35, Math.min(1, 0.35 + 0.65 * ((1 + Math.sin(radian)) / 2)));
      node.style.transform = `translate(${x}px, ${y}px)`;
      node.style.zIndex = String(zIndex);
      node.style.opacity = String(opacity);
    });
  }, [items]);

  const animate = useCallback((time: number) => {
    if (autoRotateRef.current) {
      if (lastTimeRef.current !== null) {
        const delta = time - lastTimeRef.current;
        angleRef.current = (angleRef.current + delta * 0.006) % 360;
      }
      lastTimeRef.current = time;
    } else {
      lastTimeRef.current = null;
    }
    updatePositions();
    rafRef.current = requestAnimationFrame(animate);
  }, [updatePositions]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  const handleNodeClick = (id: number) => {
    if (activeIdRef.current === id) {
      activeIdRef.current = null;
      autoRotateRef.current = true;
      setActiveId(null);
    } else {
      activeIdRef.current = id;
      autoRotateRef.current = false;
      setActiveId(id);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full select-none"
      style={{ height: 440 }}
      onClick={(e) => {
        if (e.target === containerRef.current) {
          activeIdRef.current = null;
          autoRotateRef.current = true;
          setActiveId(null);
        }
      }}
    >
      {/* Center orb */}
      <div className="absolute z-10 flex items-center justify-center" style={{ width: 56, height: 56 }}>
        <div className="absolute rounded-full border border-primary/20 animate-ping opacity-60" style={{ width: 72, height: 72 }} />
        <div className="absolute rounded-full border border-primary/10 animate-ping opacity-30" style={{ width: 92, height: 92, animationDelay: "0.6s" }} />
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary via-red-700 to-red-900 flex items-center justify-center animate-pulse">
          <div className="w-6 h-6 rounded-full bg-white/80" />
        </div>
      </div>

      {/* Orbit ring */}
      <div className="absolute rounded-full border border-white/8 pointer-events-none" style={{ width: 380, height: 380 }} />

      {/* Nodes */}
      {items.map((item, index) => {
        const isActive = activeId === item.id;
        return (
          <div
            key={item.id}
            ref={(el) => { nodeRefs.current[index] = el; }}
            className="absolute cursor-pointer"
            style={{ willChange: "transform, opacity" }}
            onClick={(e) => {
              e.stopPropagation();
              handleNodeClick(item.id);
            }}
          >
            <div
              className={`absolute rounded-full pointer-events-none transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
              style={{
                width: 64, height: 64, top: -12, left: -12,
                background: "radial-gradient(circle, rgba(255,84,73,0.25) 0%, transparent 70%)",
              }}
            />

            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
              isActive
                ? "bg-primary border-primary text-black scale-150 shadow-lg shadow-primary/30"
                : "bg-black/80 border-white/25 text-primary"
            }`}>
              <Icon name={item.icon} className="h-5 w-5" />
            </div>

            <p
              className={`absolute whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.2em] text-center w-max left-1/2 -translate-x-1/2 ${
                isActive ? "text-white" : "text-white/55"
              }`}
              style={{ top: 46 }}
            >
              {item.label}
            </p>

            {isActive && (
              <div
                className="absolute left-1/2 -translate-x-1/2 w-52 rounded-xl border border-white/15 bg-black/90 backdrop-blur-lg p-4 shadow-2xl shadow-black/60"
                style={{ top: 68 }}
              >
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
