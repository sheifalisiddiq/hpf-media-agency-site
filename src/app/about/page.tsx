import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import RevealText from "@/components/motion/RevealText";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import Marquee from "@/components/motion/Marquee";
import SectionLabel from "@/components/shared/SectionLabel";
import StandardTable from "@/components/shared/StandardTable";
import FinalCTA from "@/components/shared/FinalCTA";
import ScrubQuote from "@/components/about/ScrubQuote";
import DecisionFilter from "@/components/about/DecisionFilter";
import {
  ambition,
  commitment,
  howWeTreatEachOther,
  hpfPerson,
  mission,
  purpose,
  values,
  vision,
  whoWeWorkWith,
} from "@/content/dna";
import { site } from "@/content/site";

const title = "About HPF Media: Our Corporate DNA";
const description =
  "Who HPF Media is, what we believe and how we work: our purpose, vision, mission, five core values (Truth, Dignity, Purity, Righteousness, Kindness) and the HPF Standard we never compromise on.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/about` },
  openGraph: { title: `${title}`, description, url: `${site.url}/about`, type: "website" },
  twitter: { title, description },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: title,
  description,
  url: `${site.url}/about`,
  about: { "@id": `${site.url}/#organization` },
  isPartOf: { "@id": `${site.url}/#website` },
};

const chapters = [
  { part: "02", name: "Vision", ...vision },
  { part: "03", name: "Mission", ...mission },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section aria-label="Introduction" className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-48">
        <div className="wrap">
          <SectionLabel>Corporate DNA</SectionLabel>
          <RevealText as="h1" trigger="load" delay={0.2} className="t-display mt-8 max-w-[14ch] text-bone">
            Who we are. What we believe.
          </RevealText>
          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <Reveal delay={0.5} className="md:col-span-6">
              <p className="t-lead">
                This is not a marketing brochure or a list of aspirations. It is the blueprint that governs every decision
                we make, every client we take on, and every piece of work we produce. We share it openly so you know
                exactly what to expect from us, and what we will hold ourselves to.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="mt-20 border-y border-line py-6">
          <Marquee duration={36} trackClassName="gap-14 pr-14">
            {values.map((v) => (
              <span key={v.name} className="flex items-center gap-14 font-display text-6xl text-bone/80 md:text-8xl">
                {v.name}
                <span className="h-3 w-3 bg-crimson" aria-hidden />
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      <ScrubQuote label="Purpose" text={purpose.quote} />
      <section aria-label="Purpose explained" className="pb-24">
        <div className="wrap grid gap-8 md:grid-cols-12">
          {purpose.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.1} className={i === 0 ? "md:col-span-5 md:col-start-2" : "md:col-span-5"}>
              <p className="text-lg leading-relaxed text-bone/75">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-label="Vision and mission" className="relative">
        {chapters.map((c) => (
          <article key={c.name} className="flex items-center border-t border-line py-24 md:py-32">
            <div className="wrap grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="t-label flex items-center gap-4 text-mute">
                  <span className="h-1 w-8 bg-crimson" />
                  <span className="text-crimson-bright">Part {c.part}</span>
                </p>
                <h2 className="t-display mt-6 text-bone">{c.name}</h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <blockquote className="border-l-2 border-crimson pl-6 font-display text-3xl leading-snug text-bone md:text-[2.6rem]">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
                <div className="mt-10 space-y-5">
                  {c.body.map((p, i) => (
                    <p key={i} className="text-lg leading-relaxed text-bone/70">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section aria-label="Core values" className="relative z-10 border-t border-line py-24 md:py-36">
        <div className="wrap">
          <SectionLabel index="Part 04">Core values</SectionLabel>
          <RevealText as="h2" className="t-h1 mt-6 max-w-4xl text-bone">
            Five non-negotiable principles.
          </RevealText>
          <p className="t-lead mt-6 max-w-xl">
            They cannot be suspended for commercial convenience, client pressure, or short-term gain.
          </p>

          <Reveal stagger={0.08} className="mt-16 border-t border-line">
            {values.map((v) => (
              <div key={v.name} className="group grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-baseline">
                <span className="t-label text-crimson-bright md:col-span-1">{v.index}</span>
                <h3 className="font-display text-4xl text-bone transition-[color,transform] sm:text-5xl duration-500 group-hover:translate-x-3 group-hover:text-crimson-bright md:col-span-4 md:text-6xl">
                  {v.name}
                </h3>
                <p className="text-lg leading-relaxed text-bone/70 md:col-span-6 md:col-start-7">{v.body}</p>
              </div>
            ))}
          </Reveal>

          <div className="mt-24 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="t-h2 text-bone">How our values guide decisions.</h3>
              <p className="t-lead mt-6">
                Every decision at HPF, big or small, runs through the same filter. Run one of yours through it.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <DecisionFilter />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="The HPF Standard" className="relative z-10 border-t border-line py-24 md:py-36">
        <div className="wrap">
          <SectionLabel index="Part 06">The HPF Standard</SectionLabel>
          <RevealText as="h2" className="t-h1 mt-6 max-w-4xl text-bone">
            Absolute boundaries.
          </RevealText>
          <p className="t-lead mt-6 max-w-xl">
            These are not preferences. They are absolute, and they protect the integrity of everything we build.
          </p>
          <div className="mt-16">
            <StandardTable />
          </div>
        </div>
      </section>

      <section aria-label="Who we work with" className="relative z-10 border-t border-line py-24 md:py-36">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Who we work with</SectionLabel>
            <RevealText as="h2" className="t-h2 mt-6 text-bone">
              Ethical businesses, led with integrity.
            </RevealText>
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            {whoWeWorkWith.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg leading-relaxed text-bone/75">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="wrap mt-16">
          <p className="t-label mb-5 text-mute">We do not work with</p>
          <Reveal stagger={0.06} className="flex flex-wrap gap-3">
            {whoWeWorkWith.excluded.map((x) => (
              <span key={x} className="relative rounded-full border border-line px-6 py-3 text-lg text-bone/60">
                {x}
                <span aria-hidden className="absolute inset-x-4 top-1/2 h-px bg-crimson" />
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-label="Our ambition" className="relative z-10 overflow-hidden border-t border-line py-24 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[10vw] bottom-0 h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(255,84,73,0.18),transparent_60%)]"
        />
        <div className="wrap relative">
          <SectionLabel index="Part 05">Our ambition</SectionLabel>
          <div className="mt-12 grid gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="t-label mb-4 text-mute">The 5-year milestone</p>
              <p className="font-display text-[clamp(6rem,22vw,20rem)] leading-[0.8] tracking-[-0.04em] text-bone">
                <CountUp value={ambition.milestone} />
                <span className="text-crimson">+</span>
              </p>
              <p className="t-h3 mt-6 max-w-xl text-bone/80">{ambition.milestoneText}</p>
              <p className="mt-4 max-w-lg text-bone/60">{ambition.milestoneBody}</p>
            </div>
            <div className="border-l-2 border-crimson pl-6 lg:col-span-4 lg:col-start-9">
              <p className="t-label mb-4 text-crimson-bright">The big goal</p>
              <p className="font-display text-4xl leading-tight text-bone">&ldquo;{ambition.bigGoal}&rdquo;</p>
              <p className="mt-4 text-bone/60">{ambition.bigGoalBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="The HPF person" className="relative z-10 border-t border-line py-24 md:py-36">
        <div className="wrap">
          <SectionLabel index="Part 07">The HPF person</SectionLabel>
          <RevealText as="h2" className="t-h2 mt-6 max-w-4xl text-bone">
            Defined not by religion, background, or nationality, but by character.
          </RevealText>
          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            <div>
              <p className="t-label mb-6 text-mute">An HPF person</p>
              <Reveal stagger={0.05} as="ul" className="border-t border-line">
                {hpfPerson.map((t) => (
                  <li key={t} className="flex gap-4 border-b border-line py-4 text-bone/80">
                    <span className="text-crimson-bright" aria-hidden>
                      —
                    </span>
                    {t}
                  </li>
                ))}
              </Reveal>
            </div>
            <div>
              <p className="t-label mb-6 text-mute">How we treat each other</p>
              <Reveal stagger={0.05} as="ul" className="border-t border-line">
                {howWeTreatEachOther.map((t) => (
                  <li key={t} className="flex gap-4 border-b border-line py-4 text-bone/80">
                    <span className="text-crimson-bright" aria-hidden>
                      —
                    </span>
                    {t}
                  </li>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Our commitment" className="relative z-10 border-t border-line py-24 md:py-36">
        <div className="wrap max-w-5xl text-center">
          <p className="t-label mb-8 text-crimson-bright">Our commitment</p>
          {commitment.map((p, i) => (
            <RevealText key={i} as="p" className={i === 0 ? "t-h2 text-bone" : "t-lead mx-auto mt-8 max-w-2xl"}>
              {p}
            </RevealText>
          ))}
          <p className="mt-12 font-display text-3xl text-bone/70">HPF</p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
