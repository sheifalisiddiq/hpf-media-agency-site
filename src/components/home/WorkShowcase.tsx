"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";
import { socialReels, type SocialReel } from "@/content/works";

function ViewCount({ views }: { views: string }) {
  return (
    <div className="pointer-events-none absolute bottom-3 left-4 z-20 flex items-baseline gap-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
      <span className="font-display text-3xl leading-none text-bone">{views}</span>
      <span className="t-label text-bone/70">views</span>
    </div>
  );
}

function ReelVideo({
  reel,
  isActive,
  onToggleOff,
}: {
  reel: SocialReel;
  isActive: boolean;
  onToggleOff: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.muted = false;
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
    }
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) onToggleOff();
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [isActive, onToggleOff]);

  return (
    <>
      <video
        ref={videoRef}
        src={reel.videoSrc}
        poster={reel.poster}
        title={reel.title}
        loop
        playsInline
        preload="none"
        muted={!isActive}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {!isActive && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-bone/30 bg-ink/40 text-bone backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            <Icon name="play_circle" className="h-8 w-8" />
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
      {reel.views && <ViewCount views={reel.views} />}
    </>
  );
}

export function SocialReelCard({
  reel,
  isActive,
  onPlay,
  className,
}: {
  reel: SocialReel;
  isActive: boolean;
  onPlay: () => void;
  className?: string;
}) {
  const handleClick = () => {
    if (!reel.embedUrl && !reel.videoSrc && reel.sourceUrl) {
      window.open(reel.sourceUrl, "_blank", "noopener,noreferrer");
    } else {
      onPlay();
    }
  };

  return (
    <div
      onClick={handleClick}
      data-cursor={isActive ? undefined : "play"}
      className={cn(
        "group relative block w-[17.5rem] shrink-0 cursor-pointer overflow-hidden border border-line bg-ink-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:w-[19rem]",
        isActive && "border-crimson",
        className
      )}
    >
      <div className="relative aspect-[9/13] overflow-hidden bg-ink-2">
        {reel.videoSrc ? (
          <ReelVideo reel={reel} isActive={isActive} onToggleOff={onPlay} />
        ) : reel.embedUrl ? (
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
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-4 bg-ink-2" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-ink-2 via-ink-2/80 to-transparent" />
            {reel.views && <ViewCount views={reel.views} />}
          </>
        ) : null}
      </div>
      <div className="flex items-center justify-between border-t border-line px-4 py-3">
        <span className="t-label text-mute">{reel.platform}</span>
        <a
          href={reel.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="t-label text-bone/70 transition-colors hover:text-crimson-bright"
        >
          Open ↗
        </a>
      </div>
    </div>
  );
}

/** Drifting marquee of reels. Only one reel plays at a time. Native horizontal scroll on mobile. */
export default function WorkShowcase() {
  const [activeReelId, setActiveReelId] = useState<string | null>(null);
  const loopingReels = [...socialReels, ...socialReels];

  return (
    <div className="social-reel-marquee group/marquee overflow-hidden" aria-label="HPF Media social video portfolio">
      <div className="social-reel-track flex w-max gap-5 px-[var(--gutter)] sm:gap-6">
        {loopingReels.map((reel, index) => {
          const cardKey = `${reel.id}-${index}`;
          return (
            <div key={cardKey} aria-hidden={index >= socialReels.length || undefined}>
              <SocialReelCard
                reel={reel}
                isActive={activeReelId === cardKey}
                onPlay={() => setActiveReelId(activeReelId === cardKey ? null : cardKey)}
              />
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .social-reel-track {
          animation: social-reel-drift 50s linear infinite;
          will-change: transform;
        }
        .social-reel-marquee:hover .social-reel-track,
        .social-reel-marquee:focus-within .social-reel-track {
          animation-play-state: paused;
        }
        @keyframes social-reel-drift {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @media (max-width: 768px), (prefers-reduced-motion: reduce) {
          .social-reel-marquee {
            overflow-x: auto;
            scrollbar-width: none;
          }
          .social-reel-marquee::-webkit-scrollbar {
            display: none;
          }
          .social-reel-track {
            animation: none;
          }
          .social-reel-track > div:nth-child(n + 6) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
