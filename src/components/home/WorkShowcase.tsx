"use client";

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

export function SocialReelCard({ reel, className }: { reel: SocialReel; className?: string }) {
  return (
    <div
      className={cn(
        "group relative block w-[17.5rem] shrink-0 overflow-hidden border border-line bg-ink-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:w-[19rem]",
        className
      )}
    >
      <div className="relative aspect-[9/13] overflow-hidden bg-ink-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={reel.poster} alt={reel.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
        {reel.views && <ViewCount views={reel.views} />}
      </div>
      <div className="flex items-center justify-between border-t border-line px-4 py-3">
        <span className="t-label text-mute">{reel.platform}</span>
        <a
          href={reel.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="t-label text-bone/70 transition-colors hover:text-crimson-bright"
        >
          Open ↗
        </a>
      </div>
    </div>
  );
}

/** Drifting marquee of reels, static thumbnails only — no inline playback. */
export default function WorkShowcase() {
  const loopingReels = [...socialReels, ...socialReels];

  return (
    <div className="social-reel-marquee group/marquee overflow-hidden" aria-label="HPF Media social video portfolio">
      <div className="social-reel-track flex w-max gap-5 px-[var(--gutter)] sm:gap-6">
        {loopingReels.map((reel, index) => {
          const cardKey = `${reel.id}-${index}`;
          return (
            <div key={cardKey} aria-hidden={index >= socialReels.length || undefined}>
              <SocialReelCard reel={reel} />
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
