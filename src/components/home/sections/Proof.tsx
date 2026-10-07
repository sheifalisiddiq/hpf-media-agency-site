"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/motion/RevealText";
import Marquee from "@/components/motion/Marquee";
import CountUp from "@/components/motion/CountUp";
import { SocialReelCard } from "@/components/home/WorkShowcase";
import { brandLogos, featuredViewTotal, socialReels } from "@/content/works";
import { gsap, ScrollTrigger, DESKTOP_MOTION, useGSAP } from "@/lib/gsap";

const teaser = [socialReels[1], socialReels[4], socialReels[2]];

export default function Proof() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(DESKTOP_MOTION, () => {
        // Logo rows skew with scroll velocity.
        const skew = gsap.quickTo(".proof-logos", "skewX", { duration: 0.5, ease: "power3.out" });
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => skew(gsap.utils.clamp(-4, 4, self.getVelocity() / -600)),
        });
        // Reels drift at different speeds.
        gsap.utils.toArray<HTMLElement>(".proof-reel").forEach((el, i) => {
          gsap.fromTo(
            el,
            { yPercent: [10, -6, 18][i] },
            {
              yPercent: [-10, 6, -14][i],
              ease: "none",
              scrollTrigger: { trigger: ".proof-reels", start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  const logoRow = (reverse: boolean) => (
    <Marquee duration={38} reverse={reverse} trackClassName="gap-4 pr-4 md:gap-6 md:pr-6" className="mask-fade-x">
      {brandLogos.map((logo) => (
        <div
          key={logo.name}
          className="relative h-20 w-40 shrink-0 overflow-hidden border border-line bg-bone md:h-24 md:w-52"
          title={logo.name}
        >
          <Image src={logo.src} alt={`${logo.name} logo`} fill sizes="208px" className="object-contain p-3" />
        </div>
      ))}
    </Marquee>
  );

  return (
    <section ref={ref} aria-label="Proof" className="relative overflow-hidden border-t border-line py-28 md:py-40">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel index="04">Proof, not promises</SectionLabel>
            <RevealText as="h2" className="t-h2 mt-6 text-bone">
              Work that the market actually watched.
            </RevealText>
          </div>
          <dl className="grid grid-cols-3 gap-6 self-end md:col-span-5">
            <div>
              <dt className="t-label mb-2 text-mute">Brands</dt>
              <dd className="font-display text-5xl text-bone md:text-6xl">
                <CountUp value={brandLogos.length} />
              </dd>
            </div>
            <div>
              <dt className="t-label mb-2 text-mute">Views, featured</dt>
              <dd className="font-display text-5xl text-bone md:text-6xl">
                <CountUp value={featuredViewTotal} compact suffix="+" />
              </dd>
            </div>
            <div>
              <dt className="t-label mb-2 text-mute">Values-aligned</dt>
              <dd className="font-display text-5xl text-crimson-bright md:text-6xl">
                <CountUp value={100} suffix="%" />
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="proof-logos mt-16 space-y-4 md:mt-24 md:space-y-6">
        {logoRow(false)}
        {logoRow(true)}
      </div>

      <div className="wrap">
        <div className="proof-reels mt-20 flex snap-x gap-5 overflow-x-auto pb-4 md:mt-32 md:justify-center md:gap-8 md:overflow-visible [scrollbar-width:none]">
          {teaser.map((reel, i) => (
            <div key={reel.id} className={`proof-reel snap-center ${i === 1 ? "md:mt-24" : ""}`}>
              <SocialReelCard
                reel={reel}
                isActive={active === reel.id}
                onPlay={() => setActive(active === reel.id ? null : reel.id)}
              />
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="max-w-lg text-sm text-mute">
            View counts are the published figures on each original post. Tap a reel to play it with sound.
          </p>
          <Link href="/works" className="t-label border-b border-crimson pb-1 text-bone hover:text-crimson-bright">
            See all work →
          </Link>
        </div>
      </div>
    </section>
  );
}
