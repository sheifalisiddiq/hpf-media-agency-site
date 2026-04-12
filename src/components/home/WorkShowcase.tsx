"use client";

import React, { useState, useRef } from "react";
import Icon from "@/components/Icon";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import HorizontalScroll from "@/components/HorizontalScroll";

const workVideos = [
  { id: 1, src: "/work1.MOV" },
  { id: 2, src: "/work2.MOV" },
  { id: 3, src: "/work3.MOV" },
  { id: 4, src: "/work4.mp4" },
  { id: 5, src: "/work5.mp4" },
];

const VideoCard = ({ src }: { src: string }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="group relative flex w-[75vw] md:w-[45vw] lg:w-[25vw] aspect-[9/16] flex-col overflow-hidden rounded-2xl bg-[#0a0a0a] shadow-xl border border-white/10 transition-all duration-300 hover:border-white/20">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
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
