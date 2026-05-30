"use client";

import React, { useState, useRef, useEffect } from "react";
import Icon from "@/components/Icon";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import HorizontalScroll from "@/components/HorizontalScroll";
import Image from "next/image";


const workVideos = [
  { id: 1, src: "/work1.MOV" },
  { id: 2, src: "/work2.MOV" },
  { id: 3, src: "/work3.MOV" },
  { id: 4, src: "/work4.mp4" },
  { id: 5, src: "/work5.mp4" },
  { id: 6, src: "/work6.MOV" },
  { id: 7, src: "/IMG_2887.MOV" },
  { id: 8, src: "/IMG_2889.MOV" },
  { id: 9, src: "/IMG_2890.MOV" },
  { id: 10, src: "/IMG_2892.MOV" },
];

const VideoCard = ({ src }: { src: string }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger color activation on mobile/touch devices
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        if (isTouch) {
          setIsActive(entry.isIntersecting);
        }

        // Pause video when it leaves the viewport to save resources and stop audio
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
        } else if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {
            // Autoplay might be blocked if not muted
          });
        }
      },
      { 
        threshold: 0.2, // Trigger earlier than 70% for pause
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className="group relative flex w-[75vw] md:w-[45vw] lg:w-[25vw] aspect-[9/16] flex-col overflow-hidden rounded-2xl bg-[#0a0a0a] shadow-xl border border-white/10 transition-all duration-300 hover:border-white/20"
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className={`h-full w-full object-contain grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 ${isActive ? 'grayscale-0' : ''}`}
      />
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
      
      {/* Mute Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white transition-colors hover:bg-black/90 hover:text-primary"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        <Icon name={isMuted ? "volume_off" : "volume_up"} className="h-5 w-5" />
      </button>
    </div>
  );
};

export default function WorkShowcase() {
  return (
    <section id="our-work" className="relative overflow-hidden bg-black px-4 py-24 text-on-surface sm:px-6 lg:px-8 border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <ScrollReveal className="max-w-3xl space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
              Portfolio
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.05em] text-white md:text-6xl font-headline">
              Our Work
            </h2>
            <p className="max-w-2xl text-base leading-7 text-on-surface-variant md:text-lg">
              We design content engineered to hold attention. Watch how we scale reach and drive real engagement for UAE brands.
            </p>
          </ScrollReveal>

          {/* Trusted Brands / Logo Grid */}
          <ScrollReveal delay={0.4} className="mt-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-6">Brands We've Worked With:</p>
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
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
              <div className="group relative h-20 w-40 md:h-24 md:w-48 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05] hover:border-white/20 shadow-lg">
                <Image
                  src="/talal_market_logo.png"
                  alt="Talal Market"
                  fill
                  className="object-contain p-2 transition-all duration-500"
                />
              </div>

            </div>
          </ScrollReveal>
        </div>


        <HorizontalScroll className="gap-6 pb-6">
          {workVideos.map((video) => (
            <VideoCard key={video.id} src={video.src} />
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
