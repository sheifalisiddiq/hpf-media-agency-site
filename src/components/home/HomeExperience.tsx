"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Icon from "@/components/Icon";
import ScrollReveal, { RevealItem } from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import Parallax from "@/components/Parallax";
import OrbitalClients from "@/components/ui/OrbitalClients";

const CTAForm = dynamic(() => import("./CTAForm"), { ssr: false });

const services = [
  {
    icon: "trending_up" as const,
    title: "Instagram Marketing UAE",
    description: "Instagram Reels and growth strategy for UAE businesses.",
    span: "lg:col-span-7",
  },
  {
    icon: "insights" as const,
    title: "Viral Content Strategy",
    description: "Content strategy built around what UAE audiences stop to watch.",
    span: "lg:col-span-5",
  },
  {
    icon: "movie_filter" as const,
    title: "Short-Form Video Production",
    description: "End-to-end Reels production — scripted, filmed, and edited for UAE audiences.",
    span: "lg:col-span-5",
  },
  {
    icon: "show_chart" as const,
    title: "Organic Social Media Growth",
    description: "Real follower growth through consistent content. No bots.",
    span: "lg:col-span-7",
  },
  {
    icon: "auto_awesome" as const,
    title: "Content Systems",
    description: "Scalable content systems so your brand stays consistently active.",
    span: "lg:col-span-6",
  },
  {
    icon: "send" as const,
    title: "Social Media Management UAE",
    description: "Full Instagram and TikTok management — posting, strategy, and monthly reporting.",
    span: "lg:col-span-6",
  },
];


const clientTypes = [
  {
    icon: "storefront" as const,
    label: "UAE SMEs",
    desc: "Small and medium businesses across UAE. Brand awareness and leads through organic social content.",
  },
  {
    icon: "restaurant" as const,
    label: "F&B & Hospitality",
    desc: "Restaurants, cafes, and hotels needing consistent content to stay visible across the UAE.",
  },
  {
    icon: "home_work" as const,
    label: "Real Estate",
    desc: "Property developers and brokers using short-form video to showcase listings across the UAE.",
  },
  {
    icon: "person" as const,
    label: "Personal Brands",
    desc: "Founders and consultants building their personal brand in the UAE.",
  },
  {
    icon: "local_mall" as const,
    label: "Retail & E-commerce",
    desc: "Product brands using organic video to build trust and convert followers into buyers.",
  },
  {
    icon: "fitness_center" as const,
    label: "Health & Wellness",
    desc: "Gyms, clinics, and wellness brands using short-form content to attract health-conscious UAE customers.",
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
                  Stop Posting. Start Growing.
                </div>
              </ScrollReveal>

              <StaggerText
                tag="h1"
                text="Content That Works."
                className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-7xl font-headline"
              />

              <ScrollReveal delay={0.4} duration={1.2}>
                <h2 className="max-w-xl text-base leading-7 text-on-surface-variant md:text-lg font-normal">
                  Social media marketing for UAE businesses on Instagram and TikTok.
                </h2>
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

      {/* ─── Problem Statement ─── */}
      <section
        aria-label="The problem we solve"
        className="relative overflow-hidden bg-transparent px-6 py-24 text-on-surface md:px-10 lg:px-14 border-t border-white/5"
      >
        <div className="relative z-10 mx-auto max-w-5xl">
          <ScrollReveal yOffset={10} className="mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-6">Sound Familiar?</p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-5xl font-headline leading-[0.95] mb-8">
              You're Posting.<br />Nobody's Watching.
            </h2>
          </ScrollReveal>
          <ScrollReveal isContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "visibility" as const, title: "Invisible on Social", body: "You post regularly but the algorithm buries you. No reach, no traction, no new customers from your content." },
              { icon: "groups" as const, title: "Competitors Are Winning", body: "Businesses with worse products are getting all the attention because they have a better content strategy." },
              { icon: "bolt" as const, title: "Content With No ROI", body: "You're spending time and money on content that generates zero leads, zero enquiries, and zero sales." },
            ].map((item) => (
              <RevealItem key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-red-600/10 text-primary">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-base font-black uppercase tracking-tight text-white mb-3 font-headline">{item.title}</h3>
                <p className="text-sm leading-6 text-on-surface-variant">{item.body}</p>
              </RevealItem>
            ))}
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="mt-12 max-w-2xl">
            <p className="text-lg text-on-surface-variant leading-8">
              HPF Media fixes this. We build a full content engine — strategy, scripting, editing, and posting cadence — built specifically for UAE businesses that want to dominate Instagram and TikTok through organic content.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Who We Help ─── */}
      <section
        aria-label="Who we help"
        className="relative overflow-hidden bg-transparent px-6 py-14 text-on-surface md:px-10 lg:px-14 border-t border-white/5"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal yOffset={10} className="mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-3">Built for UAE Businesses</p>
            <h2 className="text-2xl font-black uppercase tracking-[-0.06em] text-white font-headline">Who We Work With</h2>
          </ScrollReveal>
          <ScrollReveal yOffset={20} delay={0.1}>
            <OrbitalClients
              items={clientTypes.map((t, i) => ({
                id: i + 1,
                icon: t.icon,
                label: t.label,
                desc: t.desc,
              }))}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Services Overview ─── */}
      <section
        id="services"
        aria-label="Our services"
        className="relative overflow-hidden bg-transparent px-6 py-14 text-on-surface md:px-10 lg:px-14 border-t border-white/5"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal yOffset={10} className="mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-3">What We Do</p>
            <h2 className="text-2xl font-black uppercase tracking-[-0.06em] text-white font-headline">Social Media Services for UAE Brands</h2>
          </ScrollReveal>

          <ScrollReveal isContainer staggerChildren={0.08} scale={0.97} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {services.map((service) => (
              <RevealItem
                key={service.title}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-200"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,84,73,0.1),transparent_60%)] opacity-0 transition-[opacity] duration-200 group-hover:opacity-100" />
                <div className="relative">
                  <Icon name={service.icon} className="h-7 w-7 text-primary mb-3" />
                  <h3 className="text-xs font-black uppercase tracking-tight text-white font-headline leading-tight">
                    {service.title}
                  </h3>
                </div>
              </RevealItem>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="mt-6">
            <a
              href="/works"
              aria-label="View HPF Media portfolio and work"
              className="inline-flex items-center gap-3 border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white hover:bg-white/5 transition-colors duration-200"
            >
              See Our Work <Icon name="trending_flat" className="h-4 w-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section
        aria-label="How we work"
        className="relative overflow-hidden bg-transparent px-6 py-14 text-on-surface md:px-10 lg:px-14 border-t border-white/5"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal yOffset={10} className="mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-3">How We Work</p>
            <h2 className="text-2xl font-black uppercase tracking-[-0.06em] text-white font-headline">How We Build Your UAE Content Strategy</h2>
          </ScrollReveal>
          <ScrollReveal isContainer staggerChildren={0.08} className="grid grid-cols-1 sm:grid-cols-5 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { num: "01", label: "Business Analysis" },
              { num: "02", label: "Audience Research" },
              { num: "03", label: "Viral Scripting" },
              { num: "04", label: "Premium Filming" },
              { num: "05", label: "Publish & Optimise" },
            ].map((step) => (
              <RevealItem
                key={step.num}
                className="p-6 border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200"
              >
                <p className="text-sm font-black tracking-[0.25em] text-primary mb-3">{step.num}</p>
                <h3 className="text-sm font-black uppercase tracking-tight text-white font-headline leading-tight">{step.label}</h3>
              </RevealItem>
            ))}
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

          <ScrollReveal isContainer staggerChildren={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { stat: "5M+", label: "Organic Views Delivered", detail: "Across UAE client campaigns on Instagram and TikTok" },
              { stat: "90 Days", label: "Average Result Timeline", detail: "From strategy kickoff to visible organic growth for most clients" },
              { stat: "UAE-First", label: "Content Strategy", detail: "All strategies built specifically for the UAE market — not adapted from generic global templates" },
              { stat: "100%", label: "Halal Content", detail: "Every campaign we run is fully halal — music-free options, family-safe, and UAE-values aligned." },
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

      <CTAForm />
    </>
  );
}
