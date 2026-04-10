"use client";

import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

type StoryItem = {
  label: string;
  title: string;
  description: string;
};

type StickyStoryProps = {
  eyebrow: string;
  title: string;
  intro: string;
  items: StoryItem[];
};

export function StickyStory({
  eyebrow,
  title,
  intro,
  items,
}: StickyStoryProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative bg-black px-6 py-24 text-on-surface md:px-10 lg:px-14"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:self-start">
          <div className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_30px_120px_rgba(255,80,80,0.08)] backdrop-blur-md">
            <div className="space-y-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
                {eyebrow}
              </p>
              <h2 className="max-w-xl text-4xl font-black uppercase tracking-[-0.05em] text-white md:text-6xl font-headline">
                {title}
              </h2>
              <p className="max-w-md text-base leading-7 text-on-surface-variant md:text-lg">
                {intro}
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-px w-full bg-white/10" />
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.35em] text-white/50">
                <span>Scroll Sequence</span>
                <span>{items.length} Frames</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full origin-left rounded-full bg-gradient-to-r from-primary to-primary-container"
                  style={{ scaleX: prefersReducedMotion ? 1 : progress }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-20 pb-10 pt-2">
          {items.map((item, index) => (
            <StickyStoryCard
              key={item.label}
              item={item}
              index={index}
              length={items.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type StickyStoryCardProps = {
  item: StoryItem;
  index: number;
  length: number;
  progress: MotionValue<number>;
};

function StickyStoryCard({
  item,
  index,
  length,
  progress,
}: StickyStoryCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const start = index / length;
  const end = (index + 1) / length;

  const opacity = useSpring(
    useTransform(
      progress,
      [Math.max(0, start - 0.12), start, end],
      prefersReducedMotion ? [1, 1, 1] : [0.25, 1, 0.35],
    ),
    { stiffness: 140, damping: 26, mass: 0.2 },
  );
  const y = useSpring(
    useTransform(
      progress,
      [Math.max(0, start - 0.12), start, end],
      prefersReducedMotion ? [0, 0, 0] : [90, 0, -32],
    ),
    { stiffness: 120, damping: 24, mass: 0.22 },
  );
  const scale = useSpring(
    useTransform(
      progress,
      [Math.max(0, start - 0.12), start, end],
      prefersReducedMotion ? [1, 1, 1] : [0.94, 1, 0.98],
    ),
    { stiffness: 120, damping: 28, mass: 0.28 },
  );

  return (
    <motion.article
      className="relative min-h-[70vh] rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 md:p-12"
      style={{ opacity, y, scale }}
    >
      <div className="space-y-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary">
          {item.label}
        </p>
        <h3 className="max-w-2xl text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl font-headline">
          {item.title}
        </h3>
        <p className="max-w-2xl text-lg leading-8 text-on-surface-variant">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}
