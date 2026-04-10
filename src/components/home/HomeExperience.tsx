"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ParallaxBackground, ParallaxSection } from "@/components/motion/Parallax";
import {
  ScrollReveal,
  StaggerItem,
  StaggerReveal,
} from "@/components/motion/ScrollReveal";
import { StickyStory } from "@/components/motion/StickyStory";

const services = [
  {
    icon: "dynamic_feed",
    title: "Attention Systems",
    description:
      "We build editorial rhythms, launch windows, and distribution patterns that make premium brands feel unavoidable.",
    span: "lg:col-span-7",
  },
  {
    icon: "videocam",
    title: "Cinematic Production",
    description:
      "Frames with weight, pacing with tension, and assets engineered to survive both paid and organic distribution.",
    span: "lg:col-span-5",
  },
  {
    icon: "trending_up",
    title: "Growth Loops",
    description:
      "Hooks, sequencing, and offer architecture tuned for compounding reach instead of one-off spikes.",
    span: "lg:col-span-5",
  },
  {
    icon: "diamond",
    title: "Founder Authority",
    description:
      "We sharpen the face of the brand until the founder becomes the signal the market recognizes instantly.",
    span: "lg:col-span-7",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit The Signal",
    desc: "We strip the brand down to positioning, perception, and leverage gaps.",
  },
  {
    num: "02",
    title: "Design The Narrative",
    desc: "Every campaign is scored for rhythm, tension, and memorability before launch.",
  },
  {
    num: "03",
    title: "Capture The Assets",
    desc: "Production is built to feel precise on mobile and commanding on large screens.",
  },
  {
    num: "04",
    title: "Release In Waves",
    desc: "We sequence content and paid traffic so each touchpoint reinforces the next.",
  },
];

const stickyFrames = [
  {
    label: "Frame 01",
    title: "Open With Tension",
    description:
      "The first screen moves like a poster in motion: background drift, foreground lift, and text that arrives in measured beats.",
  },
  {
    label: "Frame 02",
    title: "Hold The Viewer",
    description:
      "As the page scrolls, sections lock into place long enough to feel intentional, not decorative. Each reveal earns its space.",
  },
  {
    label: "Frame 03",
    title: "Escalate The Payoff",
    description:
      "The cadence tightens near conversion. Visual density increases, copy gets shorter, and the call-to-action lands after a controlled build.",
  },
];

export default function HomeExperience() {
  const heroRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useSpring(
    useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -110]),
    { stiffness: 120, damping: 24, mass: 0.3 },
  );
  const heroTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    prefersReducedMotion ? [1, 1, 1] : [1, 0.82, 0.2],
  );
  const heroImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 140]),
    { stiffness: 115, damping: 25, mass: 0.35 },
  );
  const heroImageScale = useSpring(
    useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 1.12]),
    { stiffness: 110, damping: 24, mass: 0.3 },
  );

  return (
    <>
      <section
        ref={heroRef}
        className="relative flex min-h-[110svh] items-end overflow-hidden bg-black px-6 pb-16 pt-28 text-on-surface md:px-10 lg:px-14"
      >
        <ParallaxBackground className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,84,73,0.18),transparent_38%),linear-gradient(180deg,rgba(255,84,73,0.08),transparent_28%),linear-gradient(180deg,#010101_0%,#000_55%,#000_100%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-x-0 top-[18%] h-[32rem] bg-[radial-gradient(circle,rgba(255,84,73,0.24),transparent_62%)] blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)] lg:items-end">
          <motion.div style={{ y: heroTextY, opacity: heroTextOpacity }} className="space-y-8">
            <ScrollReveal className="space-y-6" distance={36}>
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-primary" />
                High Performance Narrative Systems
              </div>
              <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.08em] text-white md:text-8xl xl:text-[8.5rem] font-headline">
                Move Like A
                <br />
                Brand People
                <br />
                Cannot Ignore
              </h1>
              <p className="max-w-xl text-base leading-7 text-on-surface-variant md:text-lg">
                Inspired by cinematic editorial sites, this experience uses depth,
                parallax, and staged reveals to make every section feel authored
                instead of merely loaded.
              </p>
            </ScrollReveal>

            <StaggerReveal className="flex flex-col gap-4 sm:flex-row" stagger={0.1}>
              <StaggerItem>
                <button className="bg-primary px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-black transition-transform duration-300 hover:scale-[1.03]">
                  Start The Brief
                </button>
              </StaggerItem>
              <StaggerItem>
                <button className="border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-white/5">
                  See The Motion
                </button>
              </StaggerItem>
            </StaggerReveal>
          </motion.div>

          <motion.div
            className="relative ml-auto hidden w-full max-w-md lg:block"
            style={{ y: heroImageY, scale: heroImageScale }}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(255,84,73,0.24),transparent_60%)] blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_40px_140px_rgba(0,0,0,0.55)]">
              <Image
                alt="Architectural night scene"
                fill
                priority
                className="object-cover brightness-[0.55] saturate-[0.85]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeDiP024rVyKNnjcQdLTZRSgJyvweO-N20uRgSZa5dSk5FnbBXerf6NGsplK4Omia94fh-x_JmuqoCS3kl77HO84XIJZWWMHA1f4beNJ-JA33DR-f15Vl9bAXnKdnbqrvdCYXOAfAZl0zt3R-KmdxFe_c6wciHVJWYQougqlHBEGLryyf61w_H8dkyycYWI87d5aGHzOifopkSLL3TPFcmdg97OJ9n1K7aBKDOPsP9iAq5iHZ6K0UcK91VCdZof2PRQKOCGVqTA1c"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
                  Hero Parallax
                </p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                  Background and foreground move at different speeds so the entry
                  feels dimensional without heavy scripting.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-on-surface md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-16 max-w-3xl space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
              Progressive Sections
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl font-headline">
              Scroll Should Feel
              <br />
              Composed, Not Triggered
            </h2>
          </ScrollReveal>

          <StaggerReveal className="grid gap-6 lg:grid-cols-12" stagger={0.12}>
            {services.map((service) => (
              <StaggerItem
                key={service.title}
                className={`${service.span} group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 md:p-10`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,84,73,0.14),transparent_48%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative space-y-8">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    {service.icon}
                  </span>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black uppercase tracking-[-0.05em] text-white font-headline">
                      {service.title}
                    </h3>
                    <p className="max-w-lg text-base leading-7 text-on-surface-variant">
                      {service.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <StickyStory
        eyebrow="Sticky Narrative"
        title="Reveal The Story As The Viewport Travels"
        intro="This section pins the framing while the content advances in measured blocks, echoing the editorial pacing of the reference without copying its structure."
        items={stickyFrames}
      />

      <section className="bg-black px-6 py-24 text-on-surface md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.1fr)] lg:items-center">
          <ScrollReveal className="space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
              Layered Depth
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl font-headline">
              Background Drift
              <br />
              Keeps The Page Alive
            </h2>
            <p className="max-w-md text-base leading-7 text-on-surface-variant">
              Parallax is strongest when it stays subtle. The image breathes at a
              different rate than the copy, which adds depth without degrading
              readability or frame rate.
            </p>
          </ScrollReveal>

          <ParallaxSection className="relative h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <Image
              alt="Founder portrait"
              fill
              className="object-cover brightness-[0.55]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjppca15YrX1JXc96EFGOee8aatZ7_ElpID1yfGOtOtBfFsp489B0pQEfPN9dwxcriFnOGHawJcIR-YVKzEfj_3ed2fxCF2yzoobv5PX1WxrBCXGv6-eZdMnhiTt6ybyQOnLrB4R6gwkvjnqtALwZPAEbKJxSLl6XgUAcTKWA_SbLYDjbhKzlXDVG6hewmOAdiU5PCGH_otIMORNwoRBMFxIgchyKyV_gtp383ltQmTKNOVwKAtxHqnddKC3eb9ig8yRkf9kgxX0Q"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
                Motion Layer
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                Image panels use transform-only motion so the browser can keep the
                animation on the compositor thread.
              </p>
            </div>
          </ParallaxSection>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-on-surface md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-14 max-w-2xl space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
              Timed Reveal
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl font-headline">
              A Section Can
              <br />
              Unfold In Sequence
            </h2>
          </ScrollReveal>

          <StaggerReveal className="grid gap-6 md:grid-cols-2 xl:grid-cols-4" stagger={0.12}>
            {processSteps.map((step) => (
              <StaggerItem
                key={step.num}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8"
              >
                <div className="space-y-6">
                  <p className="text-sm font-black tracking-[0.25em] text-primary">
                    {step.num}
                  </p>
                  <h3 className="text-2xl font-black uppercase tracking-[-0.05em] text-white font-headline">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-on-surface-variant">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#050505_0%,#0d0504_55%,#180504_100%)] px-6 py-32 text-on-surface md:px-10 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,84,73,0.16),transparent_45%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <ScrollReveal className="space-y-8">
            <h2 className="text-5xl font-black uppercase tracking-[-0.08em] text-white md:text-7xl font-headline">
              Build A Scroll
              <br />
              People Remember
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/70">
              The motion system is client-only, reusable, and hydration-safe. From
              here we can apply the same primitives to the other routes without
              changing the document structure again.
            </p>
            <button className="bg-white px-10 py-5 text-sm font-black uppercase tracking-[0.24em] text-black transition-transform duration-300 hover:scale-[1.03]">
              Continue The Build
            </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
