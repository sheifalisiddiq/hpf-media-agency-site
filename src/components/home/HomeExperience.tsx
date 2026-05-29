"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Icon from "@/components/Icon";
import ScrollReveal, { RevealItem } from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import Parallax from "@/components/Parallax";

const CTAForm = dynamic(() => import("./CTAForm"), { ssr: false });

const services = [
  {
    icon: "trending_up" as const,
    title: "Instagram Marketing UAE",
    description:
      "Complete Instagram strategies for UAE businesses — from profile optimisation to Reels production and audience targeting built for Dubai and Abu Dhabi markets.",
    span: "lg:col-span-6",
  },
  {
    icon: "music_note" as const,
    title: "TikTok Marketing Dubai",
    description:
      "TikTok content strategies built around trending formats and the Dubai market's audience behaviour to drive real follower growth.",
    span: "lg:col-span-6",
  },
  {
    icon: "insights" as const,
    title: "Viral Content Strategy",
    description:
      "High-impact content strategy for UAE SMEs — identifying what your audience wants before they know it, engineered to make them stop and watch.",
    span: "lg:col-span-7",
  },
  {
    icon: "movie_filter" as const,
    title: "Short-Form Video Production",
    description:
      "Professional scripting, filming, and editing producing high-retention short-form videos that keep UAE audiences watching and sharing.",
    span: "lg:col-span-5",
  },
  {
    icon: "show_chart" as const,
    title: "Organic Social Media Growth",
    description:
      "Real UAE follower growth through content consistency and engagement strategies — no bots, no shortcuts, no grey-area tactics.",
    span: "lg:col-span-5",
  },
  {
    icon: "auto_awesome" as const,
    title: "Content Systems",
    description:
      "Repeatable content production systems — content pillars, scripting templates, and distribution pipelines — so your brand stays consistently active.",
    span: "lg:col-span-7",
  },
  {
    icon: "videocam" as const,
    title: "High-Retention Video Editing",
    description:
      "Short-form video editing optimised for watch time, retention, and hook-to-close flow — visually premium and built for UAE platform algorithms.",
    span: "lg:col-span-7",
  },
  {
    icon: "send" as const,
    title: "Social Media Management UAE",
    description:
      "Full-service posting, scheduling, captions, hashtag strategy, and performance reporting across Instagram and TikTok — so you focus on your business.",
    span: "lg:col-span-5",
  },
];

const executionSteps = [
  {
    icon: "search" as const,
    step: "01",
    label: "Business Analysis",
    desc: "Deep-dive into your offer, audience, and competitive landscape in the UAE market to identify the highest-leverage content opportunities.",
  },
  {
    icon: "person_search" as const,
    step: "02",
    label: "Audience Research",
    desc: "Identify exactly who your UAE buyers are, what platforms they use, and what content makes them stop scrolling and take action.",
  },
  {
    icon: "description" as const,
    step: "03",
    label: "Viral Scripting",
    desc: "We write scripts engineered to hook viewers in the first 3 seconds, hold their attention, and guide them to take the next step.",
  },
  {
    icon: "videocam" as const,
    step: "04",
    label: "Premium Filming",
    desc: "High-quality production built for mobile-first audiences and social platform formats — shot and framed for maximum visual impact.",
  },
  {
    icon: "send" as const,
    step: "05",
    label: "Publish & Optimise",
    desc: "Strategic content distribution with optimal timing, hashtag research, captions, and ongoing performance tracking to maximise reach.",
  },
];

const whyShortForm = [
  {
    icon: "visibility" as const,
    stat: "10x",
    label: "Organic Reach",
    desc: "Short-form video generates up to 10x more organic reach than static posts on the same platforms — without paid promotion.",
  },
  {
    icon: "thumb_up" as const,
    stat: "3x",
    label: "Higher Engagement",
    desc: "Reels and TikToks consistently outperform photos and carousels in engagement rate for business accounts across all industries.",
  },
  {
    icon: "bolt" as const,
    stat: "60s",
    label: "Purchase Intent Window",
    desc: "Consumers form purchase intent within 60 seconds of watching branded short-form video — the fastest conversion trigger in digital marketing.",
  },
  {
    icon: "groups" as const,
    stat: "2B+",
    label: "Combined Platform Users",
    desc: "TikTok and Instagram Reels together reach over 2 billion monthly active users. The UAE audience is among the most active globally on both platforms.",
  },
];

const clientTypes = [
  {
    icon: "storefront" as const,
    label: "UAE SMEs",
    desc: "Small and medium businesses in Dubai and Abu Dhabi looking to build brand awareness and generate inbound leads through organic social content.",
  },
  {
    icon: "restaurant" as const,
    label: "F&B & Hospitality",
    desc: "Restaurants, cafes, hotels, and hospitality brands needing consistent, appetite-driving content to stay visible in Dubai's competitive market.",
  },
  {
    icon: "home_work" as const,
    label: "Real Estate",
    desc: "Property developers, agencies, and brokers using short-form video to showcase listings and build authority in the UAE property market.",
  },
  {
    icon: "person" as const,
    label: "Personal Brands",
    desc: "Founders, consultants, and executives building their personal brand to become a recognized voice in their industry across the UAE.",
  },
  {
    icon: "local_mall" as const,
    label: "Retail & E-commerce",
    desc: "Product brands and online stores using organic video to drive product discovery, build trust, and convert social followers into buyers.",
  },
  {
    icon: "fitness_center" as const,
    label: "Health & Wellness",
    desc: "Gyms, coaches, clinics, and wellness brands using short-form content to showcase expertise and attract health-conscious UAE consumers.",
  },
];

const faqs = [
  {
    q: "What does a social media marketing agency do?",
    a: "A social media marketing agency manages your brand's presence on platforms like Instagram and TikTok. This includes content strategy, scripting, video production, editing, posting, and performance optimisation. HPF Media specifically focuses on short-form video content for UAE businesses, helping you build organic reach, engagement, and inbound leads without paid advertising.",
  },
  {
    q: "How much does social media marketing cost in UAE?",
    a: "Social media marketing packages in the UAE typically range from AED 3,000 to AED 20,000+ per month depending on scope, number of platforms, and content volume. HPF Media offers tailored packages designed for UAE SMEs and growing businesses. Book a strategy call to discuss your specific goals and receive an accurate quote.",
  },
  {
    q: "Why is TikTok important for businesses in Dubai and UAE?",
    a: "TikTok has one of the highest organic reach rates of any social platform, meaning your content can reach thousands of potential customers without paid promotion. In the UAE, TikTok's user base is growing rapidly across both Arabic and English-speaking audiences. Businesses investing in TikTok marketing now are building a significant competitive advantage in the UAE market.",
  },
];

export default function HomeExperience() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        aria-label="Hero"
        className="relative flex min-h-screen items-center overflow-hidden bg-transparent px-4 py-20 text-on-surface sm:px-6 lg:px-8"
      >
        <Parallax speed={0.8} className="absolute inset-x-0 top-[10%] h-[40rem] pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(circle,rgba(255,84,73,0.15),transparent_62%)] blur-2xl" />
        </Parallax>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <div className="space-y-10">
            <div className="space-y-8">
              <ScrollReveal delay={0.2} yOffset={20}>
                <div className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Social Media Marketing Agency — UAE
                </div>
              </ScrollReveal>

              <StaggerText
                tag="h1"
                text="Social Media Marketing Agency in UAE"
                className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-7xl font-headline"
              />

              <ScrollReveal delay={0.4} duration={1.2}>
                <p className="max-w-xl text-base leading-7 text-on-surface-variant md:text-lg">
                  We grow UAE businesses on Instagram and TikTok through strategic short-form content, viral scripting, and organic lead generation systems built for the Dubai and UAE market.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.6} yOffset={20} className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                aria-label="Book a strategy call with HPF Media"
                className="bg-primary px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-black transition-[transform] duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02] active:scale-[0.97] inline-flex items-center justify-center"
              >
                Book Strategy Call
              </a>
              <a
                href="/works"
                aria-label="View HPF Media portfolio and case studies"
                className="border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white transition-[background-color,transform] duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:bg-white/5 active:scale-[0.97] inline-flex items-center justify-center"
              >
                See Our Work
              </a>
            </ScrollReveal>
          </div>

          <Parallax speed={1.15} className="relative ml-auto hidden w-full max-w-md lg:block">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(255,84,73,0.24),transparent_60%)] blur-3xl" />
            <ScrollReveal scale={0.9} rotateX={10} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_40px_140px_rgba(0,0,0,0.55)]">
              <Image
                alt="Dubai city at night — HPF Media social media marketing agency UAE"
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
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-primary">The HPF Promise</p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                  We build content systems for UAE business owners who want measurable growth, not empty brand fluff.
                </p>
              </div>
            </ScrollReveal>
          </Parallax>
        </div>
      </section>

      {/* ─── Who We Help ─── */}
      <section
        aria-label="Who we help"
        className="relative overflow-hidden bg-transparent px-6 py-24 text-on-surface md:px-10 lg:px-14 border-t border-white/5"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl space-y-5">
            <ScrollReveal yOffset={10}>
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">Built for UAE Businesses</p>
            </ScrollReveal>
            <StaggerText
              tag="h2"
              text="Who HPF Media Works With."
              className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-5xl font-headline"
            />
            <ScrollReveal delay={0.3}>
              <p className="max-w-2xl text-lg text-on-surface-variant">
                UAE businesses, startups, and personal brands serious about growing on Instagram and TikTok.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal isContainer staggerChildren={0.1} scale={0.96} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTypes.map((type) => (
              <RevealItem
                key={type.label}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-red-600/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <Icon name={type.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-white mb-3 font-headline">{type.label}</h3>
                <p className="text-sm leading-6 text-on-surface-variant">{type.desc}</p>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Services Overview ─── */}
      <section
        id="services"
        aria-label="Our services"
        className="relative overflow-hidden bg-transparent px-6 py-24 text-on-surface md:px-10 lg:px-14 border-t border-white/5"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl space-y-5">
            <ScrollReveal yOffset={10}>
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">What We Do</p>
            </ScrollReveal>
            <StaggerText
              tag="h2"
              text="Social Media Services for UAE Brands."
              className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-5xl font-headline"
            />
          </div>

          <ScrollReveal isContainer staggerChildren={0.15} scale={0.96} yOffset={30} className="grid gap-6 lg:grid-cols-12">
            {services.map((service) => (
              <RevealItem
                key={service.title}
                className={`${service.span} group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 md:p-10`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,84,73,0.14),transparent_48%)] opacity-0 transition-[opacity] duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-100" />
                <div className="relative space-y-6">
                  <Icon name={service.icon} className="h-10 w-10 text-primary" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black uppercase tracking-[-0.05em] text-white font-headline">
                      {service.title}
                    </h3>
                    <p className="max-w-lg text-base leading-7 text-on-surface-variant">
                      {service.description}
                    </p>
                  </div>
                  <a
                    href="/services"
                    aria-label={`Learn more about ${service.title}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:translate-x-2 transition-transform"
                  >
                    Learn More <Icon name="trending_flat" className="h-4 w-4" />
                  </a>
                </div>
              </RevealItem>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="mt-10 text-center">
            <a
              href="/services"
              aria-label="View all HPF Media social media services"
              className="inline-flex items-center gap-3 border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white hover:bg-white/5 transition-colors duration-200"
            >
              View All Services <Icon name="trending_flat" className="h-4 w-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section
        aria-label="Our process"
        className="relative overflow-hidden bg-transparent px-6 py-24 text-on-surface md:px-10 lg:px-14 border-t border-white/5"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 border-l border-primary pl-6">
            <ScrollReveal yOffset={10}>
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-2">How We Work</p>
            </ScrollReveal>
            <StaggerText
              tag="h2"
              text="The Content Creation Process."
              className="text-4xl font-black uppercase tracking-[-0.05em] text-white font-headline md:text-5xl"
            />
          </div>

          <div className="relative">
            <div className="absolute top-[40px] left-0 hidden h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />
            <ScrollReveal isContainer staggerChildren={0.15} scale={1} className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
              {executionSteps.map((step) => (
                <RevealItem key={step.step} className="group relative flex flex-col items-center text-center">
                  <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] shadow-2xl transition-[border-color,box-shadow] duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(255,84,73,0.15)]">
                    <div className="absolute inset-[-4px] rounded-full border border-white/5 opacity-50 transition-[opacity] duration-300 group-hover:opacity-100" />
                    <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-black text-black shadow-lg">
                      {step.step}
                    </div>
                    <Icon name={step.icon} className="h-8 w-8 text-white/40 transition-colors duration-200 group-hover:text-primary" />
                  </div>
                  <div className="max-w-[200px] space-y-3">
                    <h3 className="text-lg font-black uppercase tracking-tight text-white font-headline leading-tight">
                      {step.label}
                    </h3>
                    <div className="mx-auto h-[1px] w-8 bg-primary/30 transition-[width,background-color] duration-300 group-hover:w-16 group-hover:bg-primary" />
                    <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Why Short-Form Content Works ─── */}
      <section
        aria-label="Why short-form content works"
        className="relative overflow-hidden bg-transparent px-6 py-24 text-on-surface md:px-10 lg:px-14 border-t border-white/5"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/[0.04] blur-[150px] rounded-full pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl space-y-5">
            <ScrollReveal yOffset={10}>
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">The Science</p>
            </ScrollReveal>
            <StaggerText
              tag="h2"
              text="Why Short-Form Content Dominates."
              className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-5xl font-headline"
            />
          </div>

          <ScrollReveal isContainer staggerChildren={0.15} scale={0.96} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyShortForm.map((item) => (
              <RevealItem
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8 text-center"
              >
                <Icon name={item.icon} className="h-8 w-8 text-primary mx-auto mb-4" />
                <p className="text-4xl font-black text-white font-headline mb-2">{item.stat}</p>
                <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3">{item.label}</p>
                <p className="text-sm leading-6 text-on-surface-variant">{item.desc}</p>
              </RevealItem>
            ))}
          </ScrollReveal>

        </div>
      </section>

      {/* ─── UAE Market Expertise ─── */}
      <section
        aria-label="UAE market expertise"
        className="relative overflow-hidden bg-transparent px-6 py-24 text-on-surface md:px-10 lg:px-14 border-t border-white/5"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-4">UAE First</p>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white font-headline mb-8 md:text-5xl leading-[0.95]">
              We Know the <span className="text-primary">UAE Market.</span>
            </h2>
            <p className="max-w-2xl text-base leading-7 text-on-surface-variant mb-8">
              UAE consumer behaviour on social media is distinct from Western markets. Dubai's audience is multicultural, highly mobile, and bilingual — consuming content in both Arabic and English across multiple platforms simultaneously.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/about"
                aria-label="Learn more about HPF Media's approach"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:translate-x-1 transition-transform"
              >
                Our Story <Icon name="trending_flat" className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                aria-label="Book a strategy call with HPF Media"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors"
              >
                Book a Call <Icon name="trending_flat" className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Results / Social Proof ─── */}
      <section
        aria-label="Results and social proof"
        className="relative py-32 px-8 overflow-hidden bg-transparent border-y border-white/5"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,84,73,0.08),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-6">Track Record</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[-0.05em] text-white font-headline mb-6">
              Built to <span className="text-primary">Perform.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal isContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { stat: "5M+", label: "Organic Views Delivered", detail: "Across UAE client campaigns on Instagram and TikTok" },
              { stat: "90 Days", label: "Average Result Timeline", detail: "From strategy kickoff to visible organic growth for most clients" },
              { stat: "UAE-First", label: "Content Strategy", detail: "All strategies built specifically for the Dubai and UAE market — not adapted from generic global templates" },
            ].map((item) => (
              <RevealItem key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8 text-center">
                <p className="text-4xl font-black text-primary font-headline mb-2">{item.stat}</p>
                <p className="font-bold text-white uppercase tracking-wide text-sm mb-3">{item.label}</p>
                <p className="text-sm leading-6 text-on-surface-variant">{item.detail}</p>
              </RevealItem>
            ))}
          </ScrollReveal>

          <ScrollReveal className="max-w-3xl mx-auto">
            <div className="rounded-[1.5rem] border border-primary/20 bg-white/[0.02] p-8 text-center">
              <p className="text-xl font-light text-white leading-relaxed italic mb-4">
                "They handle everything. I just focus on my business while the leads come in."
              </p>
              <p className="text-primary text-sm font-bold uppercase tracking-widest">UAE Business Owner</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section
        id="faq"
        aria-label="Frequently asked questions"
        className="relative overflow-hidden py-24 bg-transparent border-t border-white/5 text-on-surface px-6 md:px-10 lg:px-14"
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-4">Common Questions</p>
            <h2 className="text-4xl font-black tracking-tighter text-on-surface mb-4 font-headline md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-on-surface-variant font-light text-lg max-w-2xl">
              Straight answers about social media marketing in UAE, TikTok for business, Instagram growth strategy, and working with HPF Media.
            </p>
          </ScrollReveal>

          <ScrollReveal isContainer staggerChildren={0.08} yOffset={20} className="space-y-3">
            {faqs.map((faq, i) => (
              <RevealItem key={i}>
                <details className="group rounded-lg border border-white/5 bg-neutral-950 p-6 hover:border-primary/30 transition-all">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{faq.q}</h3>
                    <Icon name="expand_more" className="h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="mt-4 text-on-surface-variant font-light leading-relaxed text-base">
                    {faq.a}
                  </div>
                </details>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <CTAForm />
    </>
  );
}
