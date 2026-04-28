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

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
            // Autoplay might be blocked if not muted, but here it's triggered by state
        });
      } else {
        videoRef.current.pause();
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
    <RevealItem className="glass-card rounded-lg overflow-hidden group flex flex-col bg-black border border-white/5 mx-auto w-full">
      <div ref={containerRef} className="relative aspect-[9/16] md:h-[65vh] md:aspect-[9/16] mx-auto overflow-hidden bg-neutral-900 w-full flex items-center justify-center">
        <video 
          ref={videoRef}
          src={video.src} 
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          loop
          playsInline
          controls
          onPlay={() => {
            if (!isPlaying) onPlay();
          }}
          onPause={() => {
            // We only trigger parent pause if it was actually the one playing
            if (isPlaying) onPause();
          }}
          poster="/logo.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">{video.category}</span>
          <div className="h-[1px] w-8 bg-primary/30" />
        </div>
        <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4 uppercase tracking-tight">{video.title}</h3>
        <p className="text-neutral-400 text-lg mb-8 line-clamp-2">{video.description}</p>
        
        <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
          <a 
            href="https://wa.me/971509418430" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-primary transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
          >
            Inquire About Similar <Icon name="trending_flat" className="h-4 w-4" />
          </a>
          <Icon name="videocam" className="h-6 w-6 text-primary/40" />
        </div>
      </div>
    </RevealItem>
  );
}

export default function Works() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <>
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 pt-32 pb-20 bg-transparent text-on-surface overflow-hidden">
        <ScrollReveal className="max-w-4xl mx-auto z-10">
          <ScrollReveal yOffset={10} delay={0.2}>
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-6">
              Portfolio
            </p>
          </ScrollReveal>
          
          <StaggerText
            tag="h1"
            text="Our Work."
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter font-headline mb-8 leading-[0.95] text-on-surface uppercase"
          />
          
          <ScrollReveal delay={0.4}>
            <p className="max-w-2xl text-base leading-7 text-neutral-400 md:text-lg mx-auto mb-12">
              We design content engineered to hold attention. Watch how we scale reach and drive real engagement for UAE brands.
            </p>
          </ScrollReveal>

          {/* Trusted Brands / Logo Grid moved from Home */}
          <ScrollReveal delay={0.6} className="mt-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-8">Brands We've Worked With:</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <div className="group relative h-20 w-40 md:h-24 md:w-48 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05] hover:border-white/20 shadow-lg">
                <Image 
                  src="/emirates_FC_logo.jpeg" 
                  alt="Emirates FC" 
                  fill 
                  className="object-contain p-2 transition-all duration-500"
                />
              </div>
              <div className="group relative h-20 w-40 md:h-24 md:w-48 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05] hover:border-white/20 shadow-lg">
                <Image 
                  src="/Mecca_al_mukarramah_perfumes.jpeg" 
                  alt="Mecca Al Mukarramah Perfumes" 
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

      <section className="py-32 px-8 bg-transparent">
        <ScrollReveal scale={0.97} rotateX={2} className="max-w-5xl mx-auto glass-card rounded-lg p-16 text-center relative overflow-hidden bg-transparent text-on-surface border border-white/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          
          <StaggerText
            tag="h2"
            text="Ready to Scale?"
            className="text-5xl md:text-6xl font-headline font-bold mb-6 uppercase tracking-tighter"
          />
          
          <ScrollReveal delay={0.4}>
            <p className="text-neutral-400 text-xl mb-12 max-w-2xl mx-auto font-light">Transform your brand's digital presence with high-impact video content that drives results.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6} yOffset={20} scale={0.9}>
            <a href="/contact" className="bg-primary-container text-on-primary-container px-12 py-5 rounded font-black text-xl uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 inline-flex items-center justify-center">
              Start Your Project
            </a>
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </>
  );
}
