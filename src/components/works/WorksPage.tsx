import RevealText from "@/components/motion/RevealText";
import Reveal from "@/components/motion/Reveal";
import ParallaxLayer from "@/components/motion/ParallaxLayer";
import MagneticButton from "@/components/motion/MagneticButton";
import CountUp from "@/components/motion/CountUp";
import SectionLabel from "@/components/shared/SectionLabel";
import DocumentCover from "@/components/shared/DocumentCover";
import FinalCTA from "@/components/shared/FinalCTA";
import WorkShowcase from "@/components/home/WorkShowcase";
import LogoMarquee from "@/components/shared/LogoMarquee";
import { brandLogos, featuredViewTotal, socialReels } from "@/content/works";

export default function WorksPage() {
  return (
    <>
      <section aria-label="Introduction" className="relative overflow-hidden pb-16 pt-36 md:pt-48">
        <div className="wrap">
          <SectionLabel>Works</SectionLabel>
          <RevealText as="h1" trigger="load" delay={0.2} className="t-display mt-8 max-w-[12ch] text-bone">
            Proof, on the record.
          </RevealText>
          <div className="mt-14 grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal delay={0.5} className="md:col-span-6">
              <p className="t-lead">
                Work made for real businesses, measured on real numbers. Every view count below is the published figure on
                the original post. Nothing rounded up, nothing borrowed.
              </p>
            </Reveal>
            <Reveal delay={0.6} stagger={0.1} as="dl" className="grid grid-cols-3 gap-3 sm:gap-6 md:col-span-5 md:col-start-8">
              <div className="min-w-0">
                <dt className="t-label mb-2 text-mute">Brands</dt>
                <dd className="font-display text-3xl text-bone sm:text-5xl">
                  <CountUp value={brandLogos.length} />
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="t-label mb-2 text-mute">Featured reels</dt>
                <dd className="font-display text-3xl text-bone sm:text-5xl">
                  <CountUp value={socialReels.length} />
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="t-label mb-2 text-mute">Views</dt>
                <dd className="font-display text-3xl text-crimson-bright sm:text-5xl">
                  <CountUp value={featuredViewTotal} compact suffix="+" />
                </dd>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="Brands we've worked with" className="border-t border-line py-20 md:py-28">
        <div className="wrap mb-12 flex items-end justify-between">
          <p className="t-label text-mute">Brands we&apos;ve worked with</p>
          <p className="t-label hidden text-mute md:block">Hover to pause</p>
        </div>
        <LogoMarquee />
      </section>

      <section aria-label="Content portfolio" className="border-t border-line py-20 md:py-28">
        <div className="wrap mb-14 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel>Content</SectionLabel>
            <RevealText as="h2" className="t-h2 mt-6 text-bone">
              Content the market actually watched.
            </RevealText>
          </div>
          <p className="t-lead md:col-span-4 md:col-start-9">
            Short-form content produced under LaunchX. Tap any reel to play it with sound. Only one plays at a time.
          </p>
        </div>
        <WorkShowcase />
      </section>

      <section aria-label="Case studies" className="relative overflow-hidden border-t border-line py-24 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionLabel>Case studies</SectionLabel>
            <RevealText as="h2" className="t-h1 mt-6 text-bone">
              The full breakdown.
            </RevealText>
            <p className="t-lead mt-6 max-w-md">
              Briefs, decisions and results from our client work, in one document.
            </p>
            <div className="mt-10">
              <MagneticButton href="/HPF-Media-Case-Studies.pdf" external size="lg">
                Open case studies (PDF)
              </MagneticButton>
            </div>
          </div>
          <div className="relative mx-auto h-[28rem] w-full max-w-md lg:col-span-5 lg:col-start-8">
            <ParallaxLayer y={20} rotate={8} className="absolute left-0 top-6 w-[62%]">
              <DocumentCover kicker="Results" title="Case Studies" meta="HPF Media" tone="bone" />
            </ParallaxLayer>
            <ParallaxLayer y={-24} rotate={-6} className="absolute right-0 top-0 w-[62%]">
              <DocumentCover kicker="Client work" title="Proof, on the record." meta="2026" />
            </ParallaxLayer>
          </div>
        </div>
      </section>

      <FinalCTA title="Your brand could be next." />
    </>
  );
}
