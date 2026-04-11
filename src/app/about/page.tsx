import Image from "next/image";
import Icon from "@/components/Icon";
import ScrollReveal, { RevealItem } from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import Parallax from "@/components/Parallax";
import { DottedSurface } from "@/components/ui/dotted-surface";
import GlowingDivider from "@/components/GlowingDivider";

const features = [
  {
    icon: "architecture" as const,
    title: "Strategy First",
    desc: "We build content around your offer, audience, and goals so every post supports real business growth.",
  },
  {
    icon: "movie_filter" as const,
    title: "Attention Engineering",
    desc: "From scripting to editing, we create short-form videos designed to stop the scroll and keep viewers watching.",
  },
  {
    icon: "diamond" as const,
    title: "Growth You Can Feel",
    desc: "We prioritize actual reach and leads over vanity metrics, ensuring your brand gains real authority.",
  },
];

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "Most clients start seeing stronger reach, better engagement, and clearer content direction within the first 60 to 90 days. Sustainable growth comes from consistent execution, not one viral post.",
  },
  {
    q: "Who do you work with?",
    a: "We work with UAE business owners and brands that want to grow through Instagram and TikTok. That includes service businesses, personal brands, real estate, hospitality, and other high-value offers.",
  },
  {
    q: "Is Mo Bilal involved in the work?",
    a: "Yes. Mo leads the strategic direction behind client content so the messaging, positioning, and execution stay aligned with business goals.",
  },
  {
    q: "What makes your approach different?",
    a: "We focus on content that supports growth. That means strategy, scripting, production, editing, and posting systems built around visibility, engagement, and lead generation.",
  },
  {
    q: "What does working with HPF Media look like?",
    a: "We start by understanding your business, audience, and offer. Then we build a clear short-form content plan and execute it with your team so your content becomes consistent and effective.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black text-on-surface">
        <div className="absolute inset-0 z-0 text-white">
          <DottedSurface className="opacity-20 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
          <Parallax speed={0.8} className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[150px] rounded-full"></div>
          </Parallax>
          <div className="absolute bottom-0 w-full h-[500px] bg-gradient-to-t from-red-900/20 to-transparent"></div>
        </div>
        
        <ScrollReveal className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <ScrollReveal yOffset={10} delay={0.2}>
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-6 block">Growth Agency for UAE</span>
          </ScrollReveal>
          
          <StaggerText
            tag="h1"
            text="GROWTH THROUGH CONTENT."
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8 text-glow font-headline"
          />
          
          <ScrollReveal delay={0.4}>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
              HPF Media helps UAE business owners grow visibility, engagement, and inbound leads through strategic Instagram and TikTok content.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6} yOffset={20} scale={0.9}>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-lg text-lg font-bold tracking-tight hover:scale-105 transition-transform duration-300 shadow-2xl shadow-primary/30">
                See How We Work
              </button>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </section>

      <section className="relative py-20 lg:py-32 bg-black overflow-hidden border-y border-white/5 text-on-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <ScrollReveal className="mb-16 text-center lg:text-left">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Leadership</p>
            <StaggerText
              tag="h3"
              text="Founding Partners"
              className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface font-headline uppercase"
            />
            <div className="w-20 h-1 bg-primary-container mt-6 mx-auto lg:mx-0"></div>
          </ScrollReveal>

          <ScrollReveal isContainer staggerChildren={0.2} scale={0.96} rotateX={5} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-start">
            {/* Bilal Sidheeq */}
            <RevealItem className="group space-y-8">
              <div className="relative">
                <Parallax speed={1.1} className="absolute -inset-4 bg-red-600/20 blur-3xl opacity-50 rounded-full group-hover:opacity-70 transition-opacity pointer-events-none" />
                <ScrollReveal scale={1.05} yOffset={30} className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/5">
                  <Image
                    fill
                    alt="Bilal Sidheeq"
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVn51E1u5cggqQmxsBsC_-s2RYraGoAVaibpstXP6T0XuszhwhS2WLBMk1pOtjva7cVyG0vzAcSqqdVjiQKiz0iYGh0bg-_gYEWKkvTlQ2IZkirMcJorAx2UR85yzbFuQrYRwM2C5SrLdYaedFZGWqpAIuChegiq5EhajEOq7NRIxzI8ZYQxoP5wD-LYHdOx8g1olo-mSOEUlg8ONSSbkupohdOXg-udhFzb3XdxJZh4hoU3LrxMWJ5NA3xeZmb86q1Ayo8GEcQRk"
                    sizes="(min-width: 1024px) 34rem, 100vw"
                    quality={68}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </ScrollReveal>
              </div>
              <div className="space-y-4">
                <ScrollReveal delay={0.2}>
                  <h4 className="text-3xl font-black tracking-tighter text-on-surface font-headline uppercase">Bilal Sidheeq</h4>
                  <p className="text-on-surface-variant leading-relaxed text-lg font-light">
                    Bilal leads HPF Media with a focus on turning short-form content into real attention and inbound demand. He specializes in creating scripted video systems that stop the scroll and build brand authority across the UAE.
                  </p>
                </ScrollReveal>
              </div>
            </RevealItem>

            {/* Glowing Divider */}
            <div className="hidden md:flex flex-col items-center justify-center self-stretch py-12">
              <GlowingDivider height="h-full" />
            </div>

            {/* Empty Second Founder */}
            <RevealItem className="space-y-8">
              <ScrollReveal yOffset={60} delay={0.2} scale={1.05}>
                <div className="relative h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] flex items-center justify-center bg-neutral-950">
                  <div className="text-white/5 text-8xl font-black font-headline select-none">HPF</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                </div>
              </ScrollReveal>
              <div className="space-y-4">
                <ScrollReveal delay={0.4}>
                  <h3 className="text-3xl font-black uppercase tracking-[-0.05em] text-white font-headline">&nbsp;</h3>
                  <p className="max-w-md text-base leading-7 text-on-surface-variant">
                    Our co-founding partner brings expertise in operational scaling and brand positioning, ensuring that every piece of content supports the long-term growth objectives of UAE businesses.
                  </p>
                </ScrollReveal>
              </div>
            </RevealItem>
          </ScrollReveal>

          <ScrollReveal isContainer staggerChildren={0.2} scale={0.98} className="flex flex-wrap gap-12 pt-20 justify-center">
            <RevealItem className="text-center">
              <div className="text-5xl font-black text-on-surface">500M+</div>
              <div className="text-xs uppercase tracking-widest text-primary font-bold mt-2">Organic Views Generated</div>
            </RevealItem>
            <RevealItem className="text-center border-l md:border-l-0 lg:border-l border-white/10 md:pl-0 lg:pl-12">
              <div className="text-5xl font-black text-on-surface">50+</div>
              <div className="text-xs uppercase tracking-widest text-primary font-bold mt-2">Brands Supported</div>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <ScrollReveal className="mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase font-headline">Why HPF</h2>
            <p className="text-white/70 font-light text-lg">Clear strategy, strong execution, and short-form content built to help you grow in the UAE market.</p>
          </ScrollReveal>

          <ScrollReveal isContainer staggerChildren={0.15} scale={0.96} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <RevealItem
                key={feature.title}
                className="group relative p-8 md:p-10 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 shadow-2xl"
              >
                <div className="mb-8 flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <Icon name={feature.icon} className="h-7 w-7" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4 font-headline">{feature.title}</h4>
                <p className="text-white/70 font-light leading-relaxed">{feature.desc}</p>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="py-32 bg-black border-t border-white/5 text-on-surface">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter text-on-surface mb-4 font-headline">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant font-light">Straight answers for business owners considering short-form content growth.</p>
          </ScrollReveal>
          <ScrollReveal isContainer staggerChildren={0.1} yOffset={20} className="space-y-4">
            {faqs.map((faq, i) => (
              <RevealItem key={i}>
                <details className="group rounded-lg border border-white/5 bg-neutral-950 p-6 hover:border-primary/30 transition-all">
                  <summary className="flex cursor-pointer list-none items-center justify-between">
                    <h5 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{faq.q}</h5>
                    <Icon name="expand_more" className="h-5 w-5 text-primary transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="mt-4 text-on-surface-variant font-light leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-40 overflow-hidden bg-black text-on-surface">
        <div className="absolute inset-0 z-0">
          <Parallax speed={0.7} className="absolute inset-0 pointer-events-none">
            <Image
              fill
              className="object-cover opacity-20"
              alt="Abstract flowing red light"
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
            text="START GROWING TODAY."
            className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface mb-10 max-w-4xl mx-auto font-headline"
          />
          <ScrollReveal delay={0.4}>
            <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto font-light">If you want more visibility, stronger engagement, and content that actually supports sales, HPF Media is ready to help.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.6} scale={0.8}>
            <button className="bg-primary-container text-on-primary-container px-14 py-6 rounded-full text-xl font-bold tracking-tight hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_60px_rgba(255,84,73,0.5)]">
              Book Your Strategy Call
            </button>
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </>
  );
}
