"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

interface Card {
  id: number;
  title: string;
  text: string;
}

interface CardSwapProps {
  cards: Card[];
}

export default function CardSwap({ cards }: CardSwapProps) {
  const container = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useGSAP(
    () => {
      // Set styles for all cards based on their relative index to activeIndex
      cards.forEach((_, i) => {
        const isForward = i >= activeIndex;
        const relativeIndex = isForward ? i - activeIndex : i + cards.length - activeIndex;
        
        gsap.set(`.swap-card-${i}`, {
          zIndex: cards.length - relativeIndex,
          opacity: relativeIndex === 0 ? 1 : relativeIndex === 1 ? 0.3 : 0,
          scale: 1 - relativeIndex * 0.05,
          y: relativeIndex * 12,
          x: 0,
          rotate: 0,
          pointerEvents: relativeIndex === 0 ? "auto" : "none",
        });
      });
    },
    { scope: container, dependencies: [activeIndex, cards] }
  );

  const swap = () => {
    if (animating) return;
    setAnimating(true);

    const currentCard = `.swap-card-${activeIndex}`;
    const nextIndex = (activeIndex + 1) % cards.length;

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(nextIndex);
        setAnimating(false);
      }
    });

    // Animate current card out using percentage for better responsiveness
    tl.to(currentCard, {
      xPercent: 120,
      opacity: 0,
      rotate: 12,
      scale: 0.9,
      duration: 0.5,
      ease: "power2.inOut"
    });
  };

  const goToCard = (index: number) => {
    if (animating || index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <div className="relative h-[480px] w-full flex flex-col items-center justify-center px-4" ref={container}>
      {/* Card Container */}
      <div className="relative w-full max-w-[340px] md:max-w-md aspect-[4/3] cursor-pointer" onClick={swap}>
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`swap-card swap-card-${i} absolute inset-0 bg-black border border-white/20 rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-2xl overflow-hidden`}
            style={{ transformOrigin: "bottom center" }}
          >
            {/* Subtle brand glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/5 blur-[80px] rounded-full pointer-events-none" />
            
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-white mb-4 relative z-10 leading-none">
              {card.title}
            </h3>
            <p className="text-white/60 text-sm md:text-lg leading-snug max-w-[260px] relative z-10">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute -bottom-2 md:bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
        <button 
          onClick={swap}
          className="text-white/30 text-[10px] font-bold uppercase tracking-[0.4em] hover:text-red-500 transition-colors"
        >
          Click to Swap
        </button>
        
        <div className="flex gap-3">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                goToCard(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-red-600 w-6" : "bg-white/10 hover:bg-white/20"
              }`}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
