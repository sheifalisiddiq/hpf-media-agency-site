"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import ScrollReveal, { RevealItem } from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import Parallax from "@/components/Parallax";

const videos = [
  {
    id: "v1",
    src: "/IMG_2887.MOV",
    title: "Cinematic Narrative",
    category: "Video Production",
    description: "High-end visual storytelling tailored for social platforms."
  },
  {
    id: "v2",
    src: "/IMG_2889.MOV",
    title: "Brand Strategy",
    category: "Social Media Growth",
    description: "Strategic content designed to increase reach and engagement."
  },
  {
    id: "v3",
    src: "/IMG_2890.MOV",
    title: "Personal Branding",
    category: "Personal Brand",
    description: "Establishing authority through professional video content."
  },
  {
    id: "v4",
    src: "/IMG_2892.MOV",
    title: "Digital Edge",
    category: "Web & Strategy",
    description: "Turning viewers into customers with high-conversion visuals."
  },
  {
    id: "v5",
    src: "/work1.MOV",
    title: "UAE Luxury Showcase",
    category: "Video Production",
    description: "Capturing the essence of luxury in the heart of the UAE."
  },
  {
    id: "v6",
    src: "/work2.MOV",
    title: "Business Growth Reel",
    category: "Social Media Growth",
    description: "Dynamic reels designed for maximum impact and retention."
  },
  {
    id: "v7",
    src: "/work3.MOV",
    title: "Event Highlights",
    category: "Video Production",
    description: "Professional event coverage with a cinematic touch."
  },
  {
    id: "v8",
    src: "/work4.mp4",
    title: "Product Feature",
    category: "Brand Strategy",
    description: "Highlighting product features through engaging visual content."
  },
  {
    id: "v9",
    src: "/work5.mp4",
    title: "Lifestyle Branding",
    category: "Personal Brand",
    description: "Building personal brands through lifestyle storytelling."
  },
  {
    id: "v10",
    src: "/work6.MOV",
    title: "Corporate Vision",
    category: "Web & Strategy",
    description: "Defining corporate identity through high-quality video production."
  }
];

function WorkVideoCard({
  video,
  isPlaying,
  onPlay,
  onPause
}: {
  video: typeof videos[0],
  isPlaying: boolean,
  onPlay: () => void,
  onPause: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.muted = true;
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isPlaying) {
          onPause();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isPlaying, onPause]);

  return (
    <RevealItem className="glass-card rounded-2xl overflow-hidden group flex flex-col bg-black border border-white/10 transition-[border-color] duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:border-primary/30 shadow-2xl mx-auto w-full">
      <div
        ref={containerRef}
        className="relative aspect-[9/16] md:h-[65vh] md:aspect-[9/16] mx-auto overflow-hidden bg-neutral-900 w-full flex items-center justify-center cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          if (isPlaying) onPause();
          else onPlay();
        }}
      >
        <video
          ref={videoRef}
          src={video.src}
          className={`w-full h-full object-contain transition-[filter,transform] duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${isHovered || isPlaying ? 'grayscale-0 scale-105' : 'grayscale'}`}
          loop
          muted={!isPlaying}
          autoPlay
          playsInline
          preload="none"
          poster="/logo.jpg"
          aria-label={`${video.title} — ${video.category} video by HPF Media`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-[opacity] duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${isHovered || isPlaying ? 'opacity-30' : 'opacity-60'}`} />

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-16 w-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] scale-95 group-hover:scale-100 shadow-2xl">
               <Icon name="videocam" className="h-8 w-8" />
            </div>
          </div>
        )}

        {isPlaying && (
          <div className="absolute bottom-6 right-6 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-black shadow-lg animate-pulse z-10">
            <Icon name="volume_up" className="h-5 w-5" />
          </div>
        )}
      </div>
    </RevealItem>
  );
}

export default function WorksPage() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <>
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 pt-32 pb-20 bg-transparent text-on-surface overflow-hidden">
        <ScrollReveal className="max-w-4xl mx-auto z-10">
          <ScrollReveal yOffset={10} delay={0.2}>
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-6">
              Short-Form Video Portfolio — UAE
            </p>
          </ScrollReveal>

          <StaggerText
            tag="h1"
            text="Short-Form Content for UAE Brands."
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter font-headline mb-8 leading-[0.95] text-on-surface uppercase"
          />

          <ScrollReveal delay={0.4}>
            <p className="max-w-2xl text-base leading-7 text-neutral-400 md:text-lg mx-auto mb-6">
              Every video in this portfolio was produced by HPF Media for UAE businesses competing on Instagram and TikTok. We design short-form content engineered to hold attention, grow organic reach, and generate inbound leads for Dubai and UAE brands.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="max-w-2xl text-sm leading-6 text-neutral-500 mx-auto mb-12">
              Our portfolio spans industries including real estate, luxury, hospitality, personal branding, and retail — all produced with the high production standards the UAE market demands.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6} className="mt-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-8">Brands We've Worked With:</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <div className="group relative h-20 w-40 md:h-24 md:w-48 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05] hover:border-white/20 shadow-lg">
                <Image
                  src="/emirates_FC_logo.jpeg"
                  alt="Emirates FC — social media client of HPF Media"
                  fill
                  className="object-contain p-2 transition-all duration-500"
                />
              </div>
              <div className="group relative h-20 w-40 md:h-24 md:w-48 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05] hover:border-white/20 shadow-lg">
                <Image
                  src="/Mecca_al_mukarramah_perfumes.jpeg"
                  alt="Mecca Al Mukarramah Perfumes — social media client of HPF Media"
                  fill
                  className="object-contain p-2 transition-all duration-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </ScrollReveal>

        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Parallax speed={0.8} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-t from-red-600/20 to-transparent blur-3xl" />
        </div>
      </section>

      <section className="relative py-20 lg:py-24 px-6 md:px-8 mx-auto bg-transparent text-on-surface overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal isContainer staggerChildren={0.2} scale={0.96} yOffset={30} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {videos.map((video) => (
              <WorkVideoCard
                key={video.id}
                video={video}
                isPlaying={playingVideoId === video.id}
                onPlay={() => setPlayingVideoId(video.id)}
                onPause={() => setPlayingVideoId(null)}
              />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Content Context ─── */}
      <section
        aria-label="About our work"
        className="relative py-16 px-6 md:px-10 lg:px-14 bg-transparent text-on-surface border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white font-headline mb-6">
                How We Produce Content for UAE Brands
              </h2>
              <div className="space-y-4 text-neutral-400 text-base leading-7">
                <p>
                  Every video in this portfolio follows HPF Media's full production process — starting with business analysis and audience research, moving through viral scripting and professional filming, and finishing with high-retention editing optimised for Instagram Reels and TikTok distribution.
                </p>
                <p>
                  We produce short-form video content that performs because it is built on strategy, not guesswork. Our approach combines deep knowledge of the UAE market with platform-specific production techniques that consistently generate above-average organic reach and engagement for Dubai and UAE businesses.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-fit">
              {[
                { label: "Strategy-Led", detail: "Every video starts with a clear strategic objective tied to your business goals." },
                { label: "UAE-Optimised", detail: "Content produced for the specific preferences and behaviours of the UAE social media audience." },
                { label: "Platform-Native", detail: "Edited for Instagram Reels and TikTok algorithm requirements — not adapted from other formats." },
                { label: "Results-Focused", detail: "We measure success by organic reach, engagement, and inbound leads — not vanity metrics." },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-sm font-bold text-primary uppercase tracking-wide mb-2">{item.label}</p>
                  <p className="text-xs leading-5 text-neutral-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Internal Links */}
          <ScrollReveal isContainer staggerChildren={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/services", label: "Our Services", desc: "See the full range of social media marketing services we offer UAE businesses.", icon: "rocket_launch" },
              { href: "/about", label: "About HPF Media", desc: "Learn about our UAE market expertise, philosophy, and creative process.", icon: "info" },
              { href: "/contact", label: "Start Your Project", desc: "Book a strategy call. Limited client spots available each month.", icon: "calendar_month" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className="block rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <Icon name={link.icon as any} className="h-6 w-6 text-primary mb-3" />
                <p className="font-bold text-white uppercase tracking-wide text-sm mb-2 group-hover:text-primary transition-colors">{link.label}</p>
                <p className="text-neutral-500 text-sm leading-6">{link.desc}</p>
              </a>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="py-32 px-8 bg-transparent">
        <ScrollReveal scale={0.97} rotateX={2} className="max-w-5xl mx-auto glass-card rounded-lg p-16 text-center relative overflow-hidden bg-transparent text-on-surface border border-white/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

          <StaggerText
            tag="h2"
            text="Ready to Scale?"
            className="text-5xl md:text-6xl font-headline font-bold mb-6 uppercase tracking-tighter"
          />

          <ScrollReveal delay={0.4}>
            <p className="text-neutral-400 text-xl mb-12 max-w-2xl mx-auto font-light">
              Transform your UAE brand&apos;s social media presence with high-performance short-form video content that drives organic reach and real inbound leads.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6} yOffset={20} scale={0.9}>
            <a
              href="/contact"
              aria-label="Book a strategy call with HPF Media"
              className="bg-primary-container text-on-primary-container px-12 py-5 rounded font-black text-xl uppercase tracking-tighter hover:scale-[1.02] active:scale-[0.97] transition-[transform] duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] shadow-xl shadow-primary/20 inline-flex items-center justify-center"
            >
              Start Your Project
            </a>
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </>
  );
}
