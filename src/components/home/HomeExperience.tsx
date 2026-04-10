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
    icon: "insights",
    title: "Organic Strategy",
    description:
      "We build the blueprint for unavoidable reach. No generic templates—just high-impact strategy tailored for UAE SMEs.",
    span: "lg:col-span-7",
  },
  {
    icon: "edit_note",
    title: "Viral Scripting",
    description:
      "Content is won in the first 3 seconds. Our scripts are engineered to hook viewers and force them to take notice.",
    span: "lg:col-span-5",
  },
  {
    icon: "movie_filter",
    title: "High-Retention Editing",
    description:
      "Retention is the only metric that matters. We edit for speed, psychological triggers, and absolute brand clarity.",
    span: "lg:col-span-5",
  },
  {
    icon: "send",
    title: "Posting Systems",
    description:
      "Consistency kills competition. We manage your entire distribution pipeline so you stay dominant across IG and TikTok.",
    span: "lg:col-span-7",
  },
];

const processSteps = [
  {
    num: "01",
    title: "The Audit",
    desc: "We identify exactly where your current content is failing and where you're losing leads.",
  },
  {
    num: "02",
    title: "The Blueprint",
    desc: "A custom 90-day roadmap designed to hit 5–10 million views for your UAE business.",
  },
  {
    num: "03",
    title: "Velocity Production",
    desc: "High-speed filming and editing cycles that keep your feed fresh and high-performing.",
  },
  {
    num: "04",
    title: "Market Dominance",
    desc: "Scaling winning content into a compounding lead generation engine for your brand.",
  },
];

const stickyFrames = [
  {
    label: "Month 01",
    title: "The Reset",
    description:
      "We overhaul your positioning and start the velocity posting cycle. Our target is the first 500k views and baseline engagement.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeDiP024rVyKNnjcQdLTZRSgJyvweO-N20uRgSZa5dSk5FnbBXerf6NGsplK4Omia94fh-x_JmuqoCS3kl77HO84XIJZWWMHA1f4beNJ-JA33DR-f15Vl9bAXnKdnbqrvdCYXOAfAZl0zt3R-KmdxFe_c6wciHVJWYQougqlHBEGLryyf61w_H8dkyycYWI87d5aGHzOifopkSLL3TPFcmdg97OJ9n1K7aBKDOPsP9iAq5iHZ6K0UcK91VCdZof2PRQKOCGVqTA1c",
  },
  {
    label: "Month 02",
    title: "The Surge",
    description:
      "The algorithm recognizes your authority. We double down on high-retention hooks and viral formats. Expected: 2M+ views.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAm04fis2eDF95mGghyIGwpGqjo_nyk2qRimt0oHCVI8AmrV5pdzwB1IhAvTyA5nuZXM8PLDXgwfC_N_O5aqyafVsRt8hSUnouznGq9J3HHXJ8tIjo6jXWv9_h8Ud5ZE0pRVFzKAkbC-pIvsuZN6npNWz9YOTQuvXyTVyTDFXQeBe1cQUC3KEc9sG1nTJ8d2koC4QmY3e0h2XXoEIHFKHedg0tzLFAaitsBlOfO4cwDFS6DzrDAMK8EiOODgUBS75l7Qxu06kJBywA",
  },
  {
    label: "Month 03",
    title: "Dominance",
    description:
      "You become the go-to brand in your niche. Leads start flowing in automatically as you hit the 5M-10M view milestone.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzY8jNlWbaC-J55Y6GHH4Us3sv-GRvWWjJxirCXrgrEVron8j_rgRo-lfXZONFIE1VsHiMenoxpN14cTsEM8e29lkCzlOTgTMoyHg_1SSaHydfWds1pUCuVKx6jqRPCZGzvgrdBgMot2ogNply58rZoYC59SvrH-Jpc2Zo4qrIk3jPSpvIRNq6-6hWwVfjPnInhW8my1B_pMMH_8ufiD0Mt_FLg0k-2uwi3mMEoYBHEo2u1qAM0As7rMWOp2jXzwP8FAHQuqYdg1Q",
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
        className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-20 text-on-surface sm:px-6 lg:px-8"
      >
        <ParallaxBackground className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,84,73,0.18),transparent_38%),linear-gradient(180deg,rgba(255,84,73,0.08),transparent_28%),linear-gradient(180deg,#010101_0%,#000_55%,#000_100%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-x-0 top-[18%] h-[32rem] bg-[radial-gradient(circle,rgba(255,84,73,0.24),transparent_62%)] blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <motion.div style={{ y: heroTextY, opacity: heroTextOpacity }} className="space-y-10">
            <ScrollReveal className="space-y-8" distance={20}>
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Trusted by 50+ UAE Brands | 500M+ Views
              </div>
              <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-headline">
                5–10 Million
                <br />
                Organic Views
                <br />
                In 90 Days.
              </h1>
              <p className="max-w-xl text-base leading-7 text-on-surface-variant md:text-lg">
                We build creator-led short-form content for UAE SMEs that turns zero
                reach into undeniable market authority. Stop guessing—start dominating.
              </p>
            </ScrollReveal>

            <StaggerReveal className="flex flex-col gap-4 sm:flex-row" stagger={0.1}>
              <StaggerItem>
                <button className="bg-primary px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-black transition-transform duration-300 hover:scale-[1.03]">
                  Book Strategy Call
                </button>
              </StaggerItem>
              <StaggerItem>
                <button className="border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-white/5">
                  See Our Work
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
                  The HPF Promise
                </p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                  We don't just post; we engineer attention. Built for UAE business
                  owners who demand real-world impact and trackable leads.
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
              The Problem
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl font-headline">
              Is Your Brand
              <br />
              Invisible?
            </h2>
            <p className="max-w-2xl text-lg text-on-surface-variant">
              Most UAE businesses are struggling to stay relevant. Low reach, no
              engagement, and zero leads. Your competitors are winning the attention
              game. We help you take it back.
            </p>
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
        eyebrow="The Roadmap"
        title="From Zero to 10 Million Views"
        intro="The algorithm doesn't reward hard work; it rewards strategy. Here is our 90-day blueprint to turning your brand into a UAE powerhouse."
        items={stickyFrames}
      />

      <section className="bg-black px-6 py-24 text-on-surface md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.1fr)] lg:items-center">
          <ScrollReveal className="space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
              The Architect
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl font-headline">
              Mo Bilal:
              <br />
              Creator-Led Authority
            </h2>
            <p className="max-w-md text-base leading-7 text-on-surface-variant">
              Mo doesn't just manage media; he understands the psychology of
              attention. Built by a creator for creators, HPF Media brings
              real-world results to the UAE's high-growth SMEs.
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
                The Founder
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                Strategic engineering meets cinematic soul. Every client strategy
                passes through Mo's hands.
              </p>
            </div>
          </ParallaxSection>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-on-surface md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-14 max-w-2xl space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
              Our Values
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl font-headline">
              No Generic
              <br />
              Marketing. Ever.
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
              Ready to Claim
              <br />
              Your Market?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/70">
              Stop posting content that no one sees. Join the elite UAE brands
              scaling their impact through HPF Media. Your seat at the top is
              waiting.
            </p>
            <button className="bg-white px-10 py-5 text-sm font-black uppercase tracking-[0.24em] text-black transition-transform duration-300 hover:scale-[1.03]">
              Book Your Strategy Call
            </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
