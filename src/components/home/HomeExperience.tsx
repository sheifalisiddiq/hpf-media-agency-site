"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Icon from "@/components/Icon";
import ScrollReveal, { RevealItem } from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import Parallax from "@/components/Parallax";

import GlowingDivider from "@/components/GlowingDivider";

const CTAForm = dynamic(() => import("./CTAForm"), {
  ssr: false
});

const WorkShowcase = dynamic(() => import("./WorkShowcase"), {
  ssr: false
});

const services = [
  {
    icon: "insights" as const,
    title: "Organic Strategy",
    description:
      "We build the blueprint for unavoidable reach. No generic templates, just high-impact strategy tailored for UAE SMEs.",
    span: "lg:col-span-7",
  },
  {
    icon: "movie_filter" as const,
    title: "Viral Scripting",
    description:
      "Content is won in the first 3 seconds. Our scripts are engineered to hook viewers and force them to take notice.",
    span: "lg:col-span-5",
  },
  {
    icon: "videocam" as const,
    title: "High-Retention Editing",
    description:
      "Retention is the metric that matters. We edit for speed, clarity, and strong watch time so your content keeps performing.",
    span: "lg:col-span-5",
  },
  {
    icon: "send" as const,
    title: "Posting Systems",
    description:
      "Consistency kills competition. We manage your distribution pipeline so your brand stays visible across Instagram and TikTok.",
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
    desc: "A custom 90-day roadmap designed to push your business toward five to ten million organic views.",
  },
  {
    num: "03",
    title: "Velocity Production",
    desc: "High-speed filming and editing cycles that keep your feed fresh, sharp, and high-performing.",
  },
  {
    num: "04",
    title: "Market Dominance",
    desc: "Scaling winning content into a compounding lead generation engine for your brand.",
  },
];

const roadmapItems = [
  {
    label: "Month 01",
    title: "The Reset",
    description:
      "We overhaul your positioning and begin a disciplined posting cycle. The immediate target is your first 500k views and a stronger baseline for engagement.",
    image: "/roadmap-1.png",
  },
  {
    label: "Month 02",
    title: "The Surge",
    description:
      "The algorithm begins recognizing your authority. We double down on high-retention hooks and proven formats with a target of two million plus views.",
    image: "/roadmap-2.png",
  },
  {
    label: "Month 03",
    title: "Dominance",
    description:
      "You become the go-to brand in your niche. Leads begin flowing more consistently as your content pushes toward the five to ten million view milestone.",
    image: "/roadmap-3.png",
  },
];

const executionSteps = [
  { icon: "search" as const, step: "01", label: "Business Review", desc: "Audit and strategy" },
  { icon: "insights" as const, step: "02", label: "Content Plan", desc: "90-day roadmap" },
  { icon: "description" as const, step: "03", label: "Script Writing", desc: "Viral hooks" },
  { icon: "videocam" as const, step: "04", label: "Filming", desc: "Premium production" },
  { icon: "send" as const, step: "05", label: "Publishing", desc: "Distribution" },
];

export default function HomeExperience() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-transparent px-4 py-20 text-on-surface sm:px-6 lg:px-8">
        
        <Parallax speed={0.8} className="absolute inset-x-0 top-[10%] h-[40rem] pointer-events-none">

          <div className="h-full w-full bg-[radial-gradient(circle,rgba(255,84,73,0.15),transparent_62%)] blur-2xl" />
        </Parallax>


        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <div className="space-y-10">
            <div className="space-y-8">
              <ScrollReveal delay={0.2} yOffset={20}>
                <div className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Growth for UAE Brands
                </div>
              </ScrollReveal>
              
              <StaggerText
                tag="h1"
                text="Content That Works."
                className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-headline"
              />
              
              <ScrollReveal delay={0.4} duration={1.2}>
                <p className="max-w-xl text-base leading-7 text-on-surface-variant md:text-lg">
                  We build creator-led short-form content for UAE SMEs that turns low reach into stronger visibility, better engagement, and real inbound leads.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.6} yOffset={20} className="flex flex-col gap-4 sm:flex-row">
              <a href="/contact" className="bg-primary px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-black transition-transform duration-300 hover:scale-[1.03] inline-flex items-center justify-center">
                Book Strategy Call
              </a>

              <a href="#our-work" className="border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-white/5 inline-flex items-center justify-center">
                See Our Work
              </a>
            </ScrollReveal>
          </div>

          <Parallax speed={1.15} className="relative ml-auto hidden w-full max-w-md lg:block">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(255,84,73,0.24),transparent_60%)] blur-3xl" />
            <ScrollReveal scale={0.9} rotateX={10} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_40px_140px_rgba(0,0,0,0.55)]">
              <Image
                alt="Architectural night scene"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeDiP024rVyKNnjcQdLTZRSgJyvweO-N20uRgSZa5dSk5FnbBXerf6NGsplK4Omia94fh-x_JmuqoCS3kl77HO84XIJZWWMHA1f4beNJ-JA33DR-f15Vl9bAXnKdnbqrvdCYXOAfAZl0zt3R-KmdxFe_c6wciHVJWYQougqlHBEGLryyf61w_H8dkyycYWI87d5aGHzOifopkSLL3TPFcmdg97OJ9n1K7aBKDOPsP9iAq5iHZ6K0UcK91VCdZof2PRQKOCGVqTA1c"
                width={896}
                height={1120}
                priority
                quality={72}
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="h-full w-full object-cover brightness-[0.55] saturate-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
                  The HPF Promise
                </p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                  We build content systems for UAE business owners who want measurable growth, not empty brand fluff.
                </p>
              </div>
            </ScrollReveal>
          </Parallax>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative overflow-hidden bg-transparent px-6 py-24 text-on-surface md:px-10 lg:px-14">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl space-y-5">
            <ScrollReveal yOffset={10}>
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
                The Problem
              </p>
            </ScrollReveal>
            <StaggerText
              tag="h2"
              text="Visibility is Authority."
              className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl font-headline"
            />
            <ScrollReveal delay={0.3}>
              <p className="max-w-2xl text-lg text-on-surface-variant">
                Most UAE businesses are struggling to stay relevant. Low reach, weak engagement, and inconsistent leads. We help you take attention back.
              </p>
            </ScrollReveal>
          </div>

          {/* Execution Process */}
          <div className="mb-24 max-w-7xl mx-auto">
            <ScrollReveal className="mb-12 border-l border-primary pl-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-2">The Execution</p>
              <h3 className="text-3xl font-black uppercase tracking-[-0.05em] text-white font-headline">The Process</h3>
            </ScrollReveal>
            
            <div className="relative">
              {/* Horizontal line for desktop */}
              <div className="absolute top-[40px] left-0 hidden h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />
              
              <ScrollReveal isContainer staggerChildren={0.15} scale={1} className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                {executionSteps.map((step, idx) => (
                  <RevealItem key={step.step} className="group relative flex flex-col items-center text-center">
                    {/* Circle Node */}
                    <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(255,84,73,0.15)]">
                      {/* Outer Rings */}
                      <div className="absolute inset-[-4px] rounded-full border border-white/5 opacity-50 transition-all duration-500 group-hover:opacity-100" />
                      
                      {/* Step Badge */}
                      <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-black text-black shadow-lg">
                        {step.step}
                      </div>

                      <Icon name={step.icon} className="h-8 w-8 text-white/40 transition-colors duration-500 group-hover:text-primary" />
                    </div>

                    {/* Content */}
                    <div className="max-w-[200px] space-y-3">
                      <h4 className="text-lg font-black uppercase tracking-tight text-white font-headline leading-tight">
                        {step.label}
                      </h4>
                      <div className="mx-auto h-[1px] w-8 bg-primary/30 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </ScrollReveal>
            </div>

          </div>

          <ScrollReveal isContainer staggerChildren={0.15} scale={0.96} yOffset={30} className="grid gap-6 lg:grid-cols-12">
            {services.map((service) => (
              <RevealItem
                key={service.title}
                className={`${service.span} group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 md:p-10`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,84,73,0.14),transparent_48%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative space-y-8">
                  <Icon name={service.icon} className="h-10 w-10 text-primary" />
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black uppercase tracking-[-0.05em] text-white font-headline">
                      {service.title}
                    </h3>
                    <p className="max-w-lg text-base leading-7 text-on-surface-variant">
                      {service.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </ScrollReveal>

        </div>
      </section>
      
      <WorkShowcase />


      {/* Roadmap Section (Horizontal Scroll) */}
      <section className="relative overflow-hidden bg-transparent px-4 py-24 text-on-surface sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <ScrollReveal className="max-w-3xl space-y-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
                The Process
              </p>
              <h2 className="text-4xl font-black uppercase tracking-[-0.05em] text-white md:text-6xl font-headline">
                How We Grow
              </h2>
              <p className="max-w-2xl text-base leading-7 text-on-surface-variant md:text-lg">
                The algorithm does not reward hard work alone. It rewards clarity, consistency, and content people actually want to watch.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal isContainer staggerChildren={0.15} scale={0.96} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
            {roadmapItems.map((item) => (
              <RevealItem
                key={item.label}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-xl transition-all duration-300 hover:bg-[#111111] hover:border-white/20"
              >
                <div className="relative h-48 md:h-56 w-full overflow-hidden border-b border-white/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={60}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover brightness-[0.7] saturate-[0.85] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                <div className="flex flex-1 flex-col justify-end p-6 md:p-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                      {item.label}
                    </p>
                    <h3 className="text-2xl font-black uppercase tracking-[-0.05em] text-white md:text-3xl font-headline">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-on-surface-variant">
                      {item.description}
                    </p>

                  </div>
                </div>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Section */}

      <section className="relative overflow-hidden bg-transparent px-6 py-24 text-on-surface md:px-10 lg:px-14">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl space-y-5">
            <ScrollReveal yOffset={10}>
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
                The Philosophy
              </p>
            </ScrollReveal>
            <StaggerText
              tag="h2"
              text="No Generic Marketing."
              className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl font-headline"
            />
          </div>

          <ScrollReveal isContainer staggerChildren={0.1} scale={0.98} className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <RevealItem
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
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <CTAForm />
    </>
  );
}

