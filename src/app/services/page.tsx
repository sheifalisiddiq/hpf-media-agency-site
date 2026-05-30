import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import ScrollReveal, { RevealItem } from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import Parallax from "@/components/Parallax";
import JsonLd from "@/components/JsonLd";
import ServicesFaqAccordion from "@/components/ServicesFaqAccordion";

export const metadata: Metadata = {
  title: "Social Media Marketing Services UAE — Instagram & TikTok Agency | HPF Media",
  description:
    "HPF Media offers expert social media marketing services in UAE: Instagram marketing, TikTok marketing, short-form video production, social media management, and organic content strategy for Dubai and UAE businesses.",
  alternates: {
    canonical: "https://www.hpf-media.com/services",
  },
  openGraph: {
    title: "Social Media Marketing Services UAE — Instagram & TikTok Agency | HPF Media",
    description:
      "Instagram marketing, TikTok growth, short-form video production, and social media management for UAE businesses and Dubai SMEs. Strategy-first organic content that drives real results.",
    url: "https://www.hpf-media.com/services",
    type: "website",
  },
  twitter: {
    title: "Social Media Marketing Services UAE | HPF Media",
    description:
      "Instagram marketing, TikTok growth, short-form video production, and social media management for UAE businesses.",
  },
};

const serviceDetails = [
  {
    id: "instagram-marketing",
    icon: "trending_up" as const,
    title: "Instagram Marketing UAE",
    shortDesc: "Complete Instagram growth strategy, Reels production, and audience targeting for UAE businesses.",
    fullDesc: [
      "Instagram remains the leading visual platform for consumer-facing UAE businesses, with Dubai's audience spending more time on Instagram than any other single platform. HPF Media builds complete Instagram marketing strategies that cover every element of your presence — from profile optimisation and content calendar planning to high-performance Reels production and strategic audience targeting.",
      "Our Instagram marketing approach is built around the UAE consumer. We create content that resonates with Dubai's multicultural, English and Arabic-speaking audience, timed for the posting windows that generate the highest reach in the UAE timezone. Every piece of Instagram content we produce is engineered to drive profile visits, follows, and inbound messages from your target customers.",
    ],
    results: "Consistent Reels reach growth, increased profile visits, stronger audience engagement",
    span: "md:col-span-7",
  },
  {
    id: "tiktok-marketing",
    icon: "music_note" as const,
    title: "TikTok Marketing Dubai",
    shortDesc: "TikTok content strategy, viral hooks, and organic reach growth for Dubai and UAE brands.",
    fullDesc: [
      "TikTok is the highest organic reach platform available to UAE businesses today. The algorithm rewards quality content regardless of follower count — which means a new Dubai business can reach tens of thousands of potential customers with a single well-produced video. HPF Media creates TikTok marketing strategies built specifically for the UAE market, using platform-native formats, trending audio, and culturally relevant content to maximise organic reach.",
      "We handle everything from TikTok account setup and content strategy through to scripting, filming, and editing. Our TikTok approach for UAE businesses focuses on creating content that feels native to the platform while clearly communicating your brand's value proposition to Dubai's increasingly savvy social media audience.",
    ],
    results: "Expanded organic reach, new audience segments, stronger brand awareness in UAE market",
    span: "md:col-span-5",
  },
  {
    id: "viral-content-strategy",
    icon: "insights" as const,
    title: "Viral Content Strategy",
    shortDesc: "Data-informed content strategy built for maximum organic reach and engagement in the UAE market.",
    fullDesc: [
      "Most UAE businesses create content reactively — posting when they have time, using formats they've seen others use, without a clear plan for what they're trying to achieve. HPF Media takes a completely different approach. We build forward-looking content strategies grounded in audience research, competitor analysis, and platform data specific to the UAE market.",
      "Our viral content strategy process starts with identifying the exact content formats, topics, and hooks that resonate with your target audience in Dubai and the wider UAE. We then build a 90-day content roadmap that balances educational content, entertainment, and conversion-focused posts — giving your brand a clear direction and a system for consistently producing content that reaches new audiences.",
    ],
    results: "Structured 90-day content plan, consistent brand messaging, scalable content production",
    span: "md:col-span-5",
  },
  {
    id: "short-form-video-production",
    icon: "movie_filter" as const,
    title: "Short-Form Video Production UAE",
    shortDesc: "Professional end-to-end short-form video production for Instagram Reels and TikTok in Dubai and UAE.",
    fullDesc: [
      "High-quality short-form video production is the core of HPF Media's service offering. We handle the complete production process — scripting, filming, and editing — to deliver high-retention short-form videos that perform across Instagram Reels and TikTok. Our production quality is built to match the standard UAE audiences expect from premium brands in Dubai.",
      "Every video we produce is optimised for mobile-first viewing, vertical format, and social algorithm requirements. We film for retention — structuring every video around a strong hook in the first 3 seconds, a compelling middle section that rewards continued watching, and a clear call-to-action at the end. The result is short-form video content that consistently outperforms organic benchmarks for UAE business accounts.",
    ],
    results: "High-retention videos, consistent visual identity, content library for ongoing publishing",
    span: "md:col-span-7",
  },
  {
    id: "organic-social-media-growth",
    icon: "show_chart" as const,
    title: "Organic Social Media Growth UAE",
    shortDesc: "Sustainable follower growth and audience building on Instagram and TikTok for UAE businesses.",
    fullDesc: [
      "Organic social media growth — building a real, engaged audience without paid advertising — is one of the most valuable long-term investments a UAE business can make in their marketing. HPF Media builds organic growth systems that increase your follower count, improve your engagement rate, and expand your content reach across Instagram and TikTok consistently over time.",
      "We use a combination of content strategy, posting frequency optimisation, hashtag research, and engagement tactics to drive organic growth for UAE businesses. Unlike follower-buying schemes or engagement pods, our organic growth approach builds a genuine audience of UAE consumers who are interested in your products or services — followers who become customers.",
    ],
    results: "Real follower growth, improved engagement rate, growing inbound enquiries",
    span: "md:col-span-6",
  },
  {
    id: "content-systems",
    icon: "auto_awesome" as const,
    title: "Content Systems",
    shortDesc: "Repeatable, scalable content production systems that keep your UAE brand consistently active.",
    fullDesc: [
      "The biggest challenge most UAE businesses face with social media is consistency. It is easy to post regularly for a few weeks, but maintaining a high-quality content schedule while running a business is extremely difficult without a system. HPF Media builds content systems — repeatable production processes, content pillar frameworks, and distribution pipelines — that make consistent content creation sustainable for your team.",
      "Our content systems are built around your specific business, brand voice, and resources. We create content calendars, scripting templates, filming batch schedules, and approval workflows that integrate into how your UAE business already operates. The result is a content machine that keeps your Instagram and TikTok active, consistent, and high-quality without requiring constant creative direction from your end.",
    ],
    results: "Sustainable content schedule, reduced production friction, consistent brand output",
    span: "md:col-span-6",
  },
  {
    id: "video-editing",
    icon: "videocam" as const,
    title: "High-Retention Video Editing",
    shortDesc: "Professional short-form video editing optimised for watch time, retention, and platform algorithms.",
    fullDesc: [
      "Video editing for social media platforms requires a completely different skillset than traditional video production. Short-form video editing is about pace, retention engineering, and visual storytelling in under 60 seconds. HPF Media's editing team specialises in high-retention short-form video editing for Instagram Reels and TikTok — producing edited content that consistently achieves above-average watch time metrics for UAE business accounts.",
      "We edit with retention as the primary metric. Our editing process focuses on tight pacing, pattern interrupts, graphic overlays, captions, music selection, and visual transitions that keep UAE viewers watching to the end. Strong watch time signals tell the algorithm that your content is worth showing to more people — which is what drives organic reach growth on both Instagram and TikTok.",
    ],
    results: "Higher watch time, better algorithm distribution, more consistent content quality",
    span: "md:col-span-7",
  },
  {
    id: "social-media-management",
    icon: "send" as const,
    title: "Social Media Management UAE",
    shortDesc: "Full-service Instagram and TikTok management for UAE businesses — posting, strategy, and reporting.",
    fullDesc: [
      "For UAE business owners who want to maintain a strong social media presence without managing the day-to-day themselves, HPF Media offers complete social media management services for Instagram and TikTok. We take full ownership of your social media channels — handling content planning, production, posting, caption writing, hashtag strategy, comment management, and monthly performance reporting.",
      "Our social media management service for UAE businesses is built around accountability and transparency. You receive regular performance reports showing reach, engagement, follower growth, and inbound leads generated from your social content. Every element of your social media management is handled by HPF Media, allowing you to focus on what you do best — running your business — while we build your digital presence.",
    ],
    results: "Fully managed social presence, regular performance reporting, consistent brand output",
    span: "md:col-span-5",
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
        "Instagram marketing, TikTok growth, short-form video production, social media management, and organic content strategy for UAE businesses in Dubai and Abu Dhabi.",
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
      description: "Complete social media marketing services for UAE businesses including Instagram marketing, TikTok marketing, and short-form video production.",
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
              Dubai / Abu Dhabi / UAE
            </span>
          </ScrollReveal>

          <StaggerText
            tag="h1"
            text="Social Media Marketing Services in UAE"
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter font-headline mb-8 leading-[0.95] text-on-surface"
          />

          <ScrollReveal delay={0.4}>
            <p className="text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-10 text-lg">
              From Instagram marketing and TikTok growth to short-form video production and full social media management — HPF Media delivers organic content strategies that help UAE businesses build authority and generate real inbound leads.
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
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4 uppercase tracking-tight">Our Services</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mb-4">
              Every HPF Media service is built around one outcome: organic growth that turns into real revenue for UAE businesses.
            </p>
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
                  <p className="text-primary text-sm font-bold uppercase tracking-wider mb-5">{service.shortDesc}</p>
                  <div className="space-y-4 text-neutral-400 text-base leading-7">
                    {service.fullDesc.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/50 bg-white/[0.03] border border-white/10 rounded-full px-4 py-2">
                    <Icon name="check_circle" className="h-4 w-4 text-primary" />
                    <span className="font-medium">{service.results}</span>
                  </div>
                </div>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── The HPF Edge ─── */}
      <section
        aria-label="Why choose HPF Media"
        className="relative py-24 px-8 mx-auto bg-transparent text-on-surface overflow-hidden border-t border-white/5"
      >
        <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-5xl font-headline font-bold mb-8 leading-tight uppercase tracking-tighter">
              The <span className="text-primary">HPF Edge</span>
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              What makes HPF Media different from other social media agencies in UAE is our laser focus on short-form video performance and our deep understanding of the Dubai and UAE market. We do not offer generic social media management — every strategy is built specifically for the UAE digital landscape.
            </p>
            <div className="space-y-8">
              {[
                {
                  icon: "pinch" as const,
                  title: "UAE Market Expertise",
                  desc: "Deep understanding of what Dubai and UAE consumers want to see in their feeds — bilingual content, culturally relevant topics, and platform-specific formats that resonate with the multicultural UAE audience.",
                },
                {
                  icon: "bolt" as const,
                  title: "Speed Without Compromise",
                  desc: "We deliver high-quality short-form content quickly so UAE businesses start seeing organic growth in weeks, not months. Our production systems are built for velocity without sacrificing visual quality.",
                },
                {
                  icon: "auto_awesome" as const,
                  title: "Performance-First Standards",
                  desc: "Every piece of content we produce is evaluated against one question: will this perform? Professional production, retention-focused editing, and strategic distribution combine to maximise every video's reach.",
                },
                {
                  icon: "insights" as const,
                  title: "Strategy Before Execution",
                  desc: "We never produce content without a clear strategic foundation. Every video, caption, and posting decision is informed by audience data, platform research, and your business goals.",
                },
              ].map((edge, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black border border-primary/20 flex items-center justify-center rounded-lg">
                    <Icon name={edge.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-lg mb-2 uppercase tracking-wide">{edge.title}</h3>
                    <p className="text-neutral-400 font-light leading-relaxed">{edge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <Parallax speed={1.1} className="relative h-[600px] rounded-lg overflow-hidden glass-card p-4">
            <ScrollReveal scale={1.1} rotateX={5} className="h-full w-full relative">
              <Image
                fill
                className="object-cover rounded-lg opacity-80"
                alt="Dubai skyline — HPF Media social media marketing agency serves Dubai and UAE businesses"
                src="/services-hero.png"
                sizes="(min-width: 768px) 50vw, 100vw"
                quality={64}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <ScrollReveal delay={0.6} yOffset={20} scale={0.8}>
                  <div className="bg-[#0a0a0a] p-6 rounded-lg border border-primary/30 shadow-2xl">
                    <p className="font-headline font-bold text-xl italic leading-relaxed">"They handle everything. I just focus on my business while the leads come in."</p>
                    <p className="text-primary mt-2 text-sm font-bold uppercase tracking-widest">— UAE Business Owner</p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </Parallax>
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
