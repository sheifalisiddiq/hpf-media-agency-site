import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import ScrollReveal, { RevealItem } from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import Parallax from "@/components/Parallax";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About HPF Media — Social Media Marketing Agency Dubai UAE",
  description:
    "HPF Media is a Dubai-based social media marketing agency specialising in Instagram and TikTok growth for UAE businesses. Learn about our founder, philosophy, creative process, and UAE market expertise.",
  alternates: {
    canonical: "https://www.hpf-media.com/about",
  },
  openGraph: {
    title: "About HPF Media — Social Media Marketing Agency Dubai UAE",
    description:
      "Meet HPF Media — a Dubai-based social media agency built on strategic short-form content, UAE market expertise, and organic growth systems for businesses in Dubai and Abu Dhabi.",
    url: "https://www.hpf-media.com/about",
    type: "website",
  },
  twitter: {
    title: "About HPF Media — Social Media Marketing Agency Dubai UAE",
    description:
      "Dubai-based social media marketing agency. Strategic short-form content, UAE market expertise, and organic growth systems for UAE businesses.",
  },
};

const pillars = [
  {
    icon: "architecture" as const,
    title: "Strategy First",
    desc: "We never produce content without a clear strategic foundation. Every post, script, and campaign is built around your specific business goals, audience, and the competitive landscape of the UAE market.",
  },
  {
    icon: "movie_filter" as const,
    title: "Attention Engineering",
    desc: "From scripting to editing, we create short-form videos engineered to stop the scroll, hold attention, and guide viewers toward action. Content is won or lost in the first 3 seconds — we design for that reality.",
  },
  {
    icon: "diamond" as const,
    title: "Measurable Growth",
    desc: "We prioritise actual reach, engagement, and inbound leads over vanity metrics. Every HPF Media engagement is tracked against real business outcomes — not follower counts and impressions.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "The Audit",
    desc: "We start by understanding your business, audience, offers, and current content performance. We identify exactly where you are losing reach and leads, and what content opportunities your competitors are missing.",
  },
  {
    num: "02",
    title: "The Blueprint",
    desc: "A custom 90-day content roadmap built around your business goals. We map content pillars, hooks, formats, and posting schedules designed to push your brand toward consistent organic growth in the UAE market.",
  },
  {
    num: "03",
    title: "Velocity Production",
    desc: "High-speed filming and editing cycles that keep your Instagram and TikTok feeds fresh, sharp, and high-performing. Every video is scripted, filmed, and edited to retention benchmarks — not arbitrary creative preferences.",
  },
  {
    num: "04",
    title: "Market Dominance",
    desc: "We identify the content formats and topics that are performing best for your audience, then scale them into a compounding organic growth engine. More reach, more inbound leads, stronger brand authority in your UAE market.",
  },
];

const values = [
  {
    icon: "verified" as const,
    title: "Transparency",
    desc: "We report on what matters: reach, engagement rate, follower growth, and inbound leads. No vanity metrics, no inflated numbers — just honest performance data.",
  },
  {
    icon: "speed" as const,
    title: "Speed",
    desc: "The UAE market moves fast. We build content production systems that deliver high-quality output quickly, keeping your brand consistently active without sacrificing standards.",
  },
  {
    icon: "psychology" as const,
    title: "Creativity Within Strategy",
    desc: "Great content is creative and strategic. We bring bold creative ideas that serve a clear strategic purpose — content that looks exceptional and delivers measurable results.",
  },
  {
    icon: "handshake" as const,
    title: "Partnership",
    desc: "We work as an extension of your business, not as an outsourced vendor. We care about your long-term growth and build our strategies accordingly.",
  },
];

const faqs = [
  {
    q: "How long does it take to see results from social media marketing?",
    a: "Most HPF Media clients start seeing stronger reach, better engagement, and clearer content direction within the first 30 to 60 days. Significant follower growth and consistent inbound leads typically develop over 60 to 90 days. Sustainable growth comes from consistent execution, not a single viral post — and we build systems designed for long-term compounding results.",
  },
  {
    q: "Who does HPF Media work with?",
    a: "We work with UAE business owners, SMEs, and personal brands that want to grow through Instagram and TikTok. That includes service businesses, personal brands, real estate, hospitality, food and beverage, retail, e-commerce, and any high-value offer with a defined UAE target audience.",
  },
  {
    q: "Is the founder involved in client work?",
    a: "Yes. Bilal leads the strategic direction behind every HPF Media client engagement. The messaging, positioning, and content execution are all guided by his direct involvement to ensure strategies stay aligned with real business goals.",
  },
  {
    q: "What makes HPF Media different from other social media agencies in UAE?",
    a: "Our focus is exclusively on short-form video content and organic growth for UAE businesses. We are not a generalist digital marketing agency that does social media on the side. Every service we offer, every hire we make, and every strategy we build is built around one specific outcome: organic social media growth for businesses competing in the UAE market.",
  },
  {
    q: "What does working with HPF Media look like day to day?",
    a: "After onboarding and strategy alignment, we operate largely independently on your behalf. We handle content planning, scripting, production, editing, and posting. You review content before it goes live and stay informed through regular performance reports. Most clients describe working with HPF Media as having a full creative and strategy team without the overhead.",
  },
  {
    q: "Do you only work with UAE-based businesses?",
    a: "HPF Media's expertise and focus is the UAE market — Dubai and Abu Dhabi specifically. While our strategies are built around UAE consumer behaviour and the UAE competitive landscape, we have supported businesses headquartered in the UAE with content for both local and international audiences.",
  },
  {
    q: "Can HPF Media help with both Instagram and TikTok?",
    a: "Yes. Instagram and TikTok are the two platforms we specialise in. We build integrated strategies that work across both platforms, adapting content for each platform's specific format requirements, algorithm preferences, and audience expectations.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.hpf-media.com/about#webpage",
      name: "About HPF Media — Social Media Marketing Agency Dubai UAE",
      description:
        "HPF Media is a Dubai-based social media marketing agency specialising in Instagram and TikTok growth for UAE businesses. Strategic short-form content, UAE market expertise, and organic growth systems.",
      url: "https://www.hpf-media.com/about",
      isPartOf: { "@id": "https://www.hpf-media.com/#website" },
      about: { "@id": "https://www.hpf-media.com/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hpf-media.com" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://www.hpf-media.com/about" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.hpf-media.com/about#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "Person",
      "@id": "https://www.hpf-media.com/#founder",
      name: "Bilal",
      jobTitle: "Founder, HPF Media",
      worksFor: { "@id": "https://www.hpf-media.com/#organization" },
      knowsAbout: [
        "Social Media Marketing UAE",
        "Short-Form Video Production",
        "Instagram Marketing Strategy",
        "TikTok Content Creation",
        "Organic Social Media Growth",
        "UAE Digital Marketing",
      ],
    },
  ],
};

export default function About() {
  return (
    <>
      <JsonLd data={aboutSchema} />

      {/* ─── Hero ─── */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent text-on-surface">
        <div className="absolute inset-0 z-0 text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
          <Parallax speed={0.8} className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[150px] rounded-full"></div>
          </Parallax>
        </div>

        <ScrollReveal className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <ScrollReveal yOffset={10} delay={0.2}>
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-6 block">
              Dubai-Based Social Media Agency
            </span>
          </ScrollReveal>

          <StaggerText
            tag="h1"
            text="Growth Through Content."
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8 text-glow font-headline"
          />

          <ScrollReveal delay={0.4}>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-8">
              HPF Media is a Dubai-based social media marketing agency that helps UAE business owners grow visibility, engagement, and inbound leads through strategic Instagram and TikTok content — built specifically for the UAE market.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              aria-label="View HPF Media services"
              className="bg-primary px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-black transition-[transform] duration-[160ms] hover:scale-[1.02] active:scale-[0.97] inline-flex items-center justify-center"
            >
              Our Services
            </a>
            <a
              href="/contact"
              aria-label="Book a strategy call"
              className="border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white hover:bg-white/5 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Book a Strategy Call
            </a>
          </ScrollReveal>
        </ScrollReveal>
      </section>

      {/* ─── Founder Vision & Mission ─── */}
      <section
        aria-label="Our mission and vision"
        className="relative py-24 lg:py-32 bg-transparent overflow-hidden border-t border-white/5 px-6 md:px-10 lg:px-14"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-4">The Mission</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-8 uppercase font-headline">
              Why HPF Media Exists.
            </h2>
            <div className="space-y-5 text-on-surface-variant text-base leading-7">
              <p>
                HPF Media was built because most UAE businesses are losing to competitors who understand social media better — not because those competitors have better products or services, but because they are more visible, more consistent, and more trusted in the digital space.
              </p>
              <p>
                The founder, Bilal, started HPF Media with a clear vision: to give UAE small and medium businesses access to the same quality of strategic short-form content that large brands use to dominate social platforms. High-quality Instagram and TikTok content should not be the exclusive domain of companies with massive marketing budgets.
              </p>
              <p>
                Today, HPF Media works with UAE businesses across real estate, hospitality, retail, professional services, and personal brands — helping them build genuine authority and inbound lead generation through organic social media content. Every strategy we build is grounded in the specific realities of the UAE digital market.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal yOffset={30} className="grid grid-cols-2 gap-4">
            {[
              { label: "Dubai-Based", detail: "Founded and operating in Dubai, UAE. Deep understanding of the local market and consumer behaviour." },
              { label: "Short-Form First", detail: "Our entire agency is built around short-form video content — the highest-performing format on Instagram and TikTok." },
              { label: "UAE SME Focus", detail: "Our services, pricing, and strategies are built specifically for UAE small and medium businesses." },
              { label: "Organic Only", detail: "We specialise in organic content growth — not paid advertising. Sustainable, compounding results without ongoing ad spend." },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-6">
                <p className="text-lg font-black text-white font-headline mb-2">{item.label}</p>
                <p className="text-sm leading-6 text-on-surface-variant">{item.detail}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Core Pillars ─── */}
      <section
        aria-label="Core pillars"
        className="relative py-24 lg:py-32 bg-transparent overflow-hidden border-t border-white/5 px-6 md:px-10 lg:px-14"
      >
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/[0.02] blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-4">What We Stand For</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase font-headline">
              Our Content Philosophy
            </h2>
            <p className="text-white/70 font-light text-lg">
              Clear strategy, strong execution, and short-form content built to perform in the UAE market — these are the principles behind every HPF Media engagement.
            </p>
          </ScrollReveal>

          <ScrollReveal isContainer staggerChildren={0.15} scale={0.96} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar) => (
              <RevealItem
                key={pillar.title}
                className="group relative p-8 md:p-10 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 shadow-2xl"
              >
                <div className="mb-8 flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <Icon name={pillar.icon} className="h-7 w-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 font-headline">{pillar.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{pillar.desc}</p>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section
        aria-label="Our process"
        className="relative overflow-hidden bg-transparent px-6 py-24 text-on-surface md:px-10 lg:px-14 border-t border-white/5"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl space-y-5">
            <ScrollReveal yOffset={10}>
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">How We Work</p>
            </ScrollReveal>
            <StaggerText
              tag="h2"
              text="No Generic Marketing."
              className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl font-headline"
            />
            <ScrollReveal delay={0.3}>
              <p className="max-w-2xl text-lg text-on-surface-variant">
                Every HPF Media engagement follows a structured process — from deep business audit through to full content execution and ongoing optimisation. Here is how we work.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal isContainer staggerChildren={0.1} scale={0.98} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <RevealItem
                key={step.num}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8"
              >
                <div className="space-y-6">
                  <p className="text-sm font-black tracking-[0.25em] text-primary">{step.num}</p>
                  <h3 className="text-2xl font-black uppercase tracking-[-0.05em] text-white font-headline">{step.title}</h3>
                  <p className="text-sm leading-7 text-on-surface-variant">{step.desc}</p>
                </div>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section
        aria-label="Our values"
        className="relative overflow-hidden bg-transparent px-6 py-24 text-on-surface md:px-10 lg:px-14 border-t border-white/5"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal className="mb-16 max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-4">What Drives Us</p>
            <h2 className="text-4xl font-black tracking-tighter text-white mb-6 uppercase font-headline md:text-5xl">
              The HPF Media Values
            </h2>
            <p className="text-on-surface-variant text-lg leading-7">
              The principles behind every strategy, piece of content, and client relationship HPF Media builds.
            </p>
          </ScrollReveal>

          <ScrollReveal isContainer staggerChildren={0.1} scale={0.96} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <RevealItem
                key={value.title}
                className="group flex gap-6 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-600/10 flex items-center justify-center rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <Icon name={value.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase tracking-wide text-white font-headline mb-3">{value.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">{value.desc}</p>
                </div>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── UAE Expertise ─── */}
      <section
        aria-label="UAE market expertise"
        className="relative overflow-hidden bg-transparent px-6 py-24 text-on-surface md:px-10 lg:px-14 border-t border-white/5"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal className="mb-12 max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-4">Local Knowledge</p>
            <h2 className="text-4xl font-black tracking-tighter text-white mb-6 uppercase font-headline md:text-5xl">
              UAE Market Understanding
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ScrollReveal className="space-y-5 text-on-surface-variant text-base leading-7">
              <p>
                Social media strategy in the UAE is not the same as social media strategy in the UK, US, or Australia. Dubai and Abu Dhabi consumers have distinct behaviours, platform preferences, content expectations, and purchasing decision patterns. A strategy built for a Western market will underperform here.
              </p>
              <p>
                HPF Media's entire playbook is built around the UAE market. We understand the Arabic and English content split, the peak engagement windows in the UAE timezone, the industries and topics that resonate with Dubai audiences, and the competitive landscape that UAE businesses operate in.
              </p>
              <p>
                We also understand the opportunities. The UAE has one of the highest social media penetration rates in the world, with Dubai regularly ranking among the most social-media-active cities globally. For UAE businesses willing to invest in strategic content, the organic reach potential is significantly higher than most global markets.
              </p>
            </ScrollReveal>

            <ScrollReveal yOffset={30} className="grid grid-cols-2 gap-4 h-fit">
              {[
                { label: "High Social Media Penetration", detail: "UAE has among the world's highest rates of social media usage, creating significant organic reach opportunities for local businesses." },
                { label: "Bilingual Content Market", detail: "Effective UAE content strategy accounts for both Arabic and English-speaking audiences — often within the same campaign." },
                { label: "Mobile-First Audience", detail: "UAE consumers are among the world's most mobile-first — short-form vertical video is the dominant content format." },
                { label: "Premium Brand Expectations", detail: "Dubai consumers expect premium production quality from brands they trust — low-quality content actively damages brand credibility in this market." },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-sm font-bold text-primary uppercase tracking-wide mb-2">{item.label}</p>
                  <p className="text-xs leading-5 text-on-surface-variant">{item.detail}</p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Internal Links ─── */}
      <section
        aria-label="Explore more"
        className="relative py-16 px-6 md:px-10 lg:px-14 bg-transparent text-on-surface border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-10">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white font-headline">Explore More</h2>
          </ScrollReveal>
          <ScrollReveal isContainer staggerChildren={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/services", label: "Our Services", desc: "Instagram marketing, TikTok growth, video production, and social media management for UAE businesses.", icon: "rocket_launch" as const },
              { href: "/works", label: "Portfolio", desc: "High-performance short-form video content produced for UAE brands across Instagram and TikTok.", icon: "play_circle" as const },
              { href: "/contact", label: "Get in Touch", desc: "Book your strategy call. Limited spots available each month.", icon: "calendar_month" as const },
            ].map((link) => (
              <RevealItem key={link.href}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="block rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <Icon name={link.icon} className="h-6 w-6 text-primary mb-3" />
                  <p className="font-bold text-white uppercase tracking-wide text-sm mb-2 group-hover:text-primary transition-colors">{link.label}</p>
                  <p className="text-on-surface-variant text-sm leading-6">{link.desc}</p>
                </a>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section
        aria-label="Frequently asked questions"
        className="relative overflow-hidden py-24 bg-transparent border-t border-white/5 text-on-surface px-6 md:px-10 lg:px-14"
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollReveal className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter text-on-surface mb-4 font-headline">
              Frequently Asked Questions
            </h2>
            <p className="text-on-surface-variant font-light text-lg max-w-2xl">
              Straight answers for UAE business owners considering short-form content growth with HPF Media.
            </p>
          </ScrollReveal>
          <ScrollReveal isContainer staggerChildren={0.1} yOffset={20} className="space-y-3">
            {faqs.map((faq, i) => (
              <RevealItem key={i}>
                <details className="group rounded-lg border border-white/5 bg-neutral-950 p-6 hover:border-primary/30 transition-all">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{faq.q}</h3>
                    <Icon name="expand_more" className="h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="mt-4 text-on-surface-variant font-light leading-relaxed">{faq.a}</div>
                </details>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-40 overflow-hidden bg-black text-on-surface">
        <div className="absolute inset-0 z-0">
          <Parallax speed={0.7} className="absolute inset-0 pointer-events-none">
            <Image
              fill
              className="object-cover opacity-20"
              alt="Abstract flowing red light — HPF Media social media marketing agency Dubai UAE"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzY8jNlWbaC-J55Y6GHH4Us3sv-GRvWWjJxirCXrgrEVron8j_rgRo-lfXZONFIE1VsHiMenoxpN14cTsEM8e29lkCzlOTgTMoyHg_1SSaHydfWds1pUCuVKx6jqRPCZGzvgrdBgMot2ogNply58rZoYC59SvrH-Jpc2Zo4qrIk3jPSpvIRNq6-6hWwVfjPnInhW8my1B_pMMH_8ufiD0Mt_FLg0k-2uwi3mMEoYBHEo2u1qAM0As7rMWOp2jXzwP8FAHQuqYdg1Q"
              quality={64}
              sizes="100vw"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </div>
        <ScrollReveal className="relative z-10 text-center px-6">
          <StaggerText
            tag="h2"
            text="Start Growing Today."
            className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface mb-10 max-w-4xl mx-auto font-headline"
          />
          <ScrollReveal delay={0.4}>
            <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto font-light">
              If you want more visibility, stronger engagement, and content that actually supports sales in the UAE market, HPF Media is ready to help.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6} scale={0.8}>
            <a
              href="/contact"
              aria-label="Book your strategy call with HPF Media"
              className="bg-primary-container text-on-primary-container px-14 py-6 rounded-full text-xl font-bold tracking-tight hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_60px_rgba(255,84,73,0.5)] inline-flex items-center justify-center"
            >
              Book Your Strategy Call
            </a>
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </>
  );
}
