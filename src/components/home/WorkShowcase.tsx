"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import ScrollReveal from "@/components/ScrollReveal";

type SocialReel = {
  id: string;
  platform: "Instagram" | "TikTok";
  sourceUrl: string;
  embedUrl?: string;
  title: string;
  views: string;
};

const socialReels: SocialReel[] = [
  {
    id: "DbGmkN1uJY9",
    platform: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/DbGmkN1uJY9/?igsi=MXQwaWtsMWR2NWRscQ==",
    embedUrl: "https://www.instagram.com/reel/DbGmkN1uJY9/embed/",
    title: "Instagram reel, HPF Media client work",
    views: "550k+",
  },
  {
    id: "DbLzGuetoPZ",
    platform: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/DbLzGuetoPZ/?igsi=MThqdWlyZGRheml4OA==",
    embedUrl: "https://www.instagram.com/reel/DbLzGuetoPZ/embed/",
    title: "Instagram reel, HPF Media client work",
    views: "150k+",
  },
  {
    id: "DbbI_WsNwIB",
    platform: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/DbbI_WsNwIB/?igsi=NnFqeWs3b3ZyMTEx",
    embedUrl: "https://www.instagram.com/reel/DbbI_WsNwIB/embed/",
    title: "Instagram reel, HPF Media client work",
    views: "560k+",
  },
  {
    id: "Dblf-tyNzjv",
    platform: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/Dblf-tyNzjv/?igsi=MXFxaXJub3dhNXRvaQ==",
    embedUrl: "https://www.instagram.com/reel/Dblf-tyNzjv/embed/",
    title: "Instagram reel, HPF Media client work",
    views: "200k+",
  },
  {
    id: "DcL5K-voLRp",
    platform: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/DcL5K-voLRp/?igsi=aGR2YTduZGJpN2Rr",
    embedUrl: "https://www.instagram.com/reel/DcL5K-voLRp/embed/",
    title: "Instagram reel, HPF Media client work",
    views: "11k+",
  },
  {
    id: "7650522024233667847",
    platform: "TikTok",
    sourceUrl: "https://www.tiktok.com/@windmaster.ae/video/7650522024233667847",
    title: "TikTok video, HPF Media client work",
    views: "1.2M+",
  },
];

function SocialReelCard({
  reel,
  isActive,
  onPlay,
}: {
  reel: SocialReel;
  isActive: boolean;
  onPlay: () => void;
}) {
  const handleClick = () => {
    if (!reel.embedUrl && reel.sourceUrl) {
      window.open(reel.sourceUrl, "_blank", "noopener,noreferrer");
    } else {
      onPlay();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group relative block w-[17.5rem] shrink-0 cursor-pointer overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#090909] shadow-[0_22px_55px_rgba(0,0,0,0.38)] sm:w-[19rem]"
    >
      <div className="relative aspect-[9/13] overflow-hidden bg-[#090909]">
        {reel.embedUrl ? (
          <>
            <iframe
              key={isActive ? "active" : "inactive"}
              src={isActive ? `${reel.embedUrl}?autoplay=1` : reel.embedUrl}
              title={reel.title}
              loading="lazy"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="absolute inset-0 h-full w-full border-0"
              style={{
                transform: reel.platform === "TikTok" ? "scale(1.55)" : "translateY(-4%) scale(1.35)",
                transformOrigin: "center center",
                pointerEvents: isActive ? "auto" : "none",
              }}
            />

            {/* Top dark mask to cover iframe edge */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-[#090909] pointer-events-none z-10" />
            {/* Bottom dark mask to cover iframe footer */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#090909] via-[#090909]/80 to-transparent pointer-events-none z-10" />
            
            {/* View count badge */}
            {reel.views && (
              <div className="absolute bottom-2.5 left-3 z-20 flex items-baseline gap-1 pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-headline">
                  {reel.views}
                </span>
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-neutral-300">
                  VIEWS
                </span>
              </div>
            )}
          </>
        ) : (
          <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_75%_15%,rgba(255,84,73,0.28),transparent_34%),linear-gradient(145deg,#202020_0%,#080808_55%,#131313_100%)] p-6">
            <span className="text-[11px] font-black uppercase tracking-[0.32em] text-white/55">TikTok</span>
            <div><Icon name="play_circle" className="mb-4 h-12 w-12 text-primary" /><p className="text-xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-white">Watch the<br />full reel.</p></div>
            <div className="flex items-baseline justify-between pt-4 border-t border-white/15">
              <span className="text-2xl font-black tracking-tight text-white font-headline">{reel.views}</span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-300">VIEWS</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function WorkShowcase() {
  const [activeReelId, setActiveReelId] = useState<string | null>(null);
  const loopingReels = [...socialReels, ...socialReels];
  const logos = [["/emirates_FC_logo.jpeg", "Emirates FC"], ["/Mecca_al_mukarramah_perfumes.jpeg", "Mecca Al Mukarramah Perfumes"], ["/talal_market_logo.png", "Talal Market"]] as const;

  return (
    <section id="our-work" className="relative overflow-hidden border-y border-white/5 bg-black py-24 text-on-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal className="max-w-3xl space-y-6"><p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">Portfolio</p><h2 className="text-4xl font-black uppercase tracking-[-0.05em] text-white md:text-6xl font-headline">Content that gets seen.</h2><p className="max-w-2xl text-base leading-7 text-on-surface-variant md:text-lg">A live stream of the short-form content we produce for UAE brands. Open any reel to see its current views and engagement on the original platform.</p></ScrollReveal>
          <ScrollReveal delay={0.2} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45"><span className="h-2 w-2 animate-pulse rounded-full bg-primary" />Hover to pause</ScrollReveal>
        </div>
        <ScrollReveal delay={0.15} className="mb-14"><p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">Brands we&apos;ve worked with</p><div className="flex flex-wrap items-center gap-6 md:gap-10">{logos.map(([src, alt]) => <div key={src} className="relative h-20 w-40 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 shadow-lg transition-colors hover:border-white/20 hover:bg-white/[0.05] md:h-24 md:w-48"><Image src={src} alt={alt} fill className="object-contain p-2" /></div>)}</div></ScrollReveal>
      </div>
      <div className="social-reel-marquee group/marquee overflow-hidden" aria-label="HPF Media social video portfolio"><div className="social-reel-track flex w-max gap-5 px-4 sm:gap-6 sm:px-6 lg:px-8">{loopingReels.map((reel, index) => <div key={`${reel.id}-${index}`} aria-hidden={index >= socialReels.length || undefined}><SocialReelCard reel={reel} isActive={activeReelId === reel.id} onPlay={() => setActiveReelId(activeReelId === reel.id ? null : reel.id)} /></div>)}</div></div>
      <style jsx>{`
        .social-reel-track { animation: social-reel-drift 45s linear infinite; will-change: transform; }
        .social-reel-marquee:hover .social-reel-track, .social-reel-marquee:focus-within .social-reel-track { animation-play-state: paused; }
        .social-reel-embed { top: -22%; left: -17.5%; width: 135%; height: 170%; pointer-events: none; overflow: hidden; scrollbar-width: none; -ms-overflow-style: none; }
        .social-reel-embed::-webkit-scrollbar { display: none; }
        @keyframes social-reel-drift { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(-50%, 0, 0); } }
        @media (max-width: 768px), (prefers-reduced-motion: reduce) { .social-reel-marquee { overflow-x: auto; scrollbar-width: none; } .social-reel-marquee::-webkit-scrollbar { display: none; } .social-reel-track { animation: none; } .social-reel-track > div:nth-child(n + 6) { display: none; } }
      `}</style>
    </section>
  );
}
