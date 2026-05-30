import type { Metadata } from "next";
import Icon from "@/components/Icon";
import ScrollReveal, { RevealItem } from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import JsonLd from "@/components/JsonLd";
import ServicesFaqAccordion from "@/components/ServicesFaqAccordion";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "Social Media Services UAE",
  description:
    "HPF Media offers Instagram marketing, short-form video production, and social media management for UAE businesses.",
  alternates: {
    canonical: "https://www.hpf-media.com/services",
  },
  openGraph: {
    title: "Social Media Services UAE | HPF Media",
    description:
      "HPF Media offers Instagram marketing, short-form video production, and social media management for UAE businesses.",
    url: "https://www.hpf-media.com/services",
    type: "website",
  },
  twitter: {
    title: "Social Media Services UAE | HPF Media",
    description:
      "HPF Media offers Instagram marketing, short-form video production, and social media management for UAE businesses.",
  },
};

const serviceDetails = [
  {
    id: "instagram-marketing",
    icon: "trending_up" as const,
    title: "Instagram Marketing UAE",
    shortDesc: "Instagram growth strategy and Reels production for UAE businesses.",
  },
  {
    id: "viral-content-strategy",
    icon: "insights" as const,
    title: "Viral Content Strategy",
    shortDesc: "Content strategy built for organic reach in the UAE market.",
  },
  {
    id: "short-form-video-production",
    icon: "movie_filter" as const,
    title: "Short-Form Video Production UAE",
    shortDesc: "Scripting, filming, and editing for UAE Instagram Reels.",
  },
  {
    id: "organic-social-media-growth",
    icon: "show_chart" as const,
    title: "Organic Social Media Growth UAE",
    shortDesc: "Sustainable follower and engagement growth on Instagram for UAE businesses.",
  },
  {
    id: "content-systems",
    icon: "auto_awesome" as const,
    title: "Content Systems",
    shortDesc: "Repeatable content production systems for UAE brands.",
  },
  {
    id: "social-media-management",
    icon: "send" as const,
    title: "Social Media Management UAE",
    shortDesc: "Full Instagram management — content, posting, and reporting for UAE businesses.",
  },
];

const serviceFaqs = [
  {
    q: "Which social media platforms does HPF Media specialise in?",
    a: "HPF Media specialises in Instagram and TikTok — the two most powerful organic reach platforms for UAE businesses today. All our services are designed specifically for these platforms and the short-form video content format that both platforms prioritise in their algorithms.",
  },
  {
    q: "Do you offer content creation, or just strategy?",
    a: "HPF Media offers end-to-end content services — strategy, scripting, filming, editing, posting, and reporting. We are a full-service social media marketing agency, not just a strategy consultancy. You can engage us for a complete package or for specific elements of your content production pipeline.",
  },
  {
    q: "How does HPF Media measure success for UAE clients?",
    a: "We track reach, engagement rate, follower growth, profile visits, and — most importantly — inbound enquiries and leads generated from your social content. We report on these metrics regularly and adjust strategy based on what the data shows about what is working for your UAE audience.",
  },
  {
    q: "Do you work with businesses outside of Dubai?",
    a: "Yes. While HPF Media is based in Dubai and specialises in the UAE market, we work with businesses across the UAE including Abu Dhabi, Sharjah, Ajman, and beyond. We also work with UAE-headquartered businesses that have international audiences.",
  },
  {
    q: "Can I see examples of your work before starting?",
    a: "Absolutely. Visit our Works page to see examples of short-form video content we have produced for UAE businesses. You can also book a strategy call where we walk you through relevant case studies from our portfolio based on your industry and goals.",
  },
  {
    q: "How long are your contracts?",
    a: "HPF Media typically works on monthly retainer agreements with UAE businesses, reviewed at regular intervals based on performance and evolving goals. We believe results should keep clients — not contracts. Book a strategy call to discuss the right engagement structure for your business.",
  },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.hpf-media.com/services#webpage",
      name: "Social Media Marketing Services UAE — HPF Media",
      description:
        "Instagram marketing, TikTok growth, short-form video production, and organic content strategy for UAE businesses.",
      url: "https://www.hpf-media.com/services",
      isPartOf: { "@id": "https://www.hpf-media.com/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hpf-media.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.hpf-media.com/services" },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.hpf-media.com/services#servicelist",
      name: "HPF Media Social Media Marketing Services UAE",
      description: "Complete social media marketing services for UAE businesses including Instagram marketing, short-form video production, and social media management.",
      itemListElement: serviceDetails.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          "@id": `https://www.hpf-media.com/services#${s.id}`,
          name: s.title,
          description: s.shortDesc,
          provider: { "@id": "https://www.hpf-media.com/#organization" },
          areaServed: [
            { "@type": "City", name: "Dubai" },
            { "@type": "City", name: "Abu Dhabi" },
            { "@type": "City", name: "Sharjah" },
            { "@type": "City", name: "Ajman" },
            { "@type": "City", name: "Ras Al Khaimah" },
            { "@type": "City", name: "Fujairah" },
            { "@type": "City", name: "Umm Al Quwain" },
            { "@type": "Country", name: "United Arab Emirates" },
          ],
          url: `https://www.hpf-media.com/services#${s.id}`,
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.hpf-media.com/services#faq",
      mainEntity: serviceFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function Services() {
  return (
    <>
      <JsonLd data={servicesSchema} />

      {/* ─── Hero ─── */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 pt-20 pb-16 bg-transparent text-on-surface overflow-hidden">
        <ScrollReveal className="max-w-5xl mx-auto z-10">
          <ScrollReveal yOffset={10} delay={0.2}>
            <span className="text-sm uppercase tracking-[0.3em] text-primary mb-6 block font-medium">
              Social Media Agency — Across the UAE
            </span>
          </ScrollReveal>

          <StaggerText
            tag="h1"
            text="Social Media Marketing Services in UAE"
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter font-headline mb-8 leading-[0.95] text-on-surface"
          />

          <ScrollReveal delay={0.4}>
            <p className="text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-10 text-lg">
              Instagram marketing, short-form video production, and social media management. HPF Media builds organic content strategies for businesses across the UAE.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              aria-label="Book a strategy call with HPF Media"
              className="bg-primary px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-black transition-[transform] duration-[160ms] hover:scale-[1.02] active:scale-[0.97] inline-flex items-center justify-center"
            >
              Book Strategy Call
            </a>
            <a
              href="/works"
              aria-label="View HPF Media portfolio"
              className="border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white hover:bg-white/5 transition-colors duration-200 inline-flex items-center justify-center"
            >
              See Our Work
            </a>
          </ScrollReveal>
        </ScrollReveal>

        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Parallax speed={0.8} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-t from-red-600/20 to-transparent blur-3xl" />
        </div>
      </section>

      {/* ─── Services List ─── */}
      <section
        id="services-list"
        aria-label="All services"
        className="relative py-20 lg:py-24 px-6 md:px-8 mx-auto bg-transparent text-on-surface overflow-hidden border-t border-white/5"
      >
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <ScrollReveal className="flex flex-col mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-6 uppercase tracking-tight">What We Do</h2>
            <div className="w-24 h-1 bg-red-600"></div>
          </ScrollReveal>

          <ScrollReveal isContainer staggerChildren={0.12} scale={0.96} yOffset={30} className="space-y-6">
            {serviceDetails.map((service) => (
              <RevealItem
                key={service.id}
                className="glass-card rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-8 overflow-hidden relative group bg-black border border-white/10 hover:border-primary/20 transition-all duration-300"
              >
                <span id={service.id} className="sr-only" />
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-headline font-bold mb-3 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-primary text-sm font-bold uppercase tracking-wider">{service.shortDesc}</p>
                </div>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Internal Links ─── */}
      <section
        aria-label="Explore more"
        className="relative py-16 px-8 bg-transparent text-on-surface border-t border-white/5"
      >
        <div className="max-w-screen-xl mx-auto">
          <ScrollReveal className="mb-10">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white font-headline">Explore More</h2>
          </ScrollReveal>
          <ScrollReveal isContainer staggerChildren={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/works", label: "Our Portfolio", desc: "See high-performance short-form content we've produced for UAE brands.", icon: "play_circle" as const },
              { href: "/about", label: "About HPF Media", desc: "Learn about our approach, philosophy, and UAE market expertise.", icon: "info" as const },
              { href: "/contact", label: "Book a Strategy Call", desc: "Start the conversation. Limited spots available each month.", icon: "calendar_month" as const },
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

      {/* ─── Services FAQ ─── */}
      <section
        aria-label="Services FAQ"
        className="relative overflow-hidden py-24 bg-transparent border-t border-white/5 text-on-surface px-6 md:px-10 lg:px-14"
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-4">Questions</p>
            <h2 className="text-4xl font-black tracking-tighter text-on-surface mb-4 font-headline">
              Services FAQ
            </h2>
            <p className="text-on-surface-variant font-light text-lg max-w-2xl">
              Common questions about HPF Media's social media marketing services for UAE businesses.
            </p>
          </ScrollReveal>

          <ScrollReveal yOffset={20}>
            <ServicesFaqAccordion faqs={serviceFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 px-8 bg-transparent">
        <ScrollReveal scale={0.97} rotateX={2} className="max-w-5xl mx-auto glass-card rounded-lg p-16 text-center relative overflow-hidden bg-transparent text-on-surface border border-white/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

          <StaggerText
            tag="h2"
            text="Ready to Grow?"
            className="text-5xl md:text-6xl font-headline font-bold mb-6 uppercase tracking-tighter"
          />

          <ScrollReveal delay={0.4}>
            <p className="text-neutral-400 text-xl mb-12 max-w-2xl mx-auto font-light">
              HPF Media takes on a limited number of UAE clients each month to ensure the highest quality of strategy and execution. Book your strategy call today to secure your spot.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6} yOffset={20} scale={0.9}>
            <a
              href="/contact"
              aria-label="Book a strategy call with HPF Media"
              className="bg-primary-container text-on-primary-container px-12 py-5 rounded font-black text-xl uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 inline-flex items-center justify-center"
            >
              Book Your Strategy Call
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.8} yOffset={10} isContainer staggerChildren={0.2} className="mt-8 flex flex-wrap justify-center gap-8 text-neutral-500">
            <RevealItem className="flex items-center gap-2">
              <Icon name="check_circle" className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold uppercase tracking-widest">UAE Market Focus</span>
            </RevealItem>
            <RevealItem className="flex items-center gap-2">
              <Icon name="check_circle" className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold uppercase tracking-widest">Short-Form Specialists</span>
            </RevealItem>
            <RevealItem className="flex items-center gap-2">
              <Icon name="check_circle" className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold uppercase tracking-widest">Organic Growth</span>
            </RevealItem>
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </>
  );
}
