import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import RevealText from "@/components/motion/RevealText";
import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import FinalCTA from "@/components/shared/FinalCTA";
import ServicesFaqAccordion from "@/components/ServicesFaqAccordion";
import MethodJourney from "@/components/method/MethodJourney";
import { launchxCapabilities, stages } from "@/content/method";
import { methodFaqs } from "@/content/faqs";
import { site } from "@/content/site";

const title = "The HPF Method: Identifier, BrandArch & LaunchX";
const description =
  "How HPF Media works: a free Clarity Check, then Identifier (root-cause marketing gap analysis, AED 15–20k), BrandArch (brand architecture and campaign frameworks with KPIs, AED 20–30k) and LaunchX (execution retainer). Each stage earns the next.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/method` },
  openGraph: { title: `${title} | HPF Media`, description, url: `${site.url}/method`, type: "website" },
  twitter: { title: `${title} | HPF Media`, description },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...stages.map((s) => ({
      "@type": "Service",
      "@id": `${site.url}/method#${s.id}`,
      name: s.name,
      description: s.summary,
      serviceType: "Marketing consultancy",
      provider: { "@id": `${site.url}/#organization` },
      areaServed: "AE",
    })),
    {
      "@type": "FAQPage",
      mainEntity: methodFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Method", item: `${site.url}/method` },
      ],
    },
  ],
};

export default function MethodPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section aria-label="Introduction" className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-48">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[15vw] top-0 h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.14),transparent_60%)]"
        />
        <div className="wrap relative">
          <SectionLabel>The HPF Method</SectionLabel>
          <RevealText as="h1" trigger="load" delay={0.2} className="t-display mt-8 max-w-6xl text-bone">
            One method. Four steps.
          </RevealText>
          <RevealText as="p" trigger="load" delay={0.5} className="t-h2 mt-2 italic text-bone/55">
            Each one earns the next.
          </RevealText>
          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-6" delay={0.6}>
              <p className="t-lead">
                Each stage&apos;s output is the direct input for the next. You are only ever offered the next immediate step,
                never the whole journey upfront. The findings from one stage are what justify moving to the next, on your
                own evidence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <MethodJourney />

      <section aria-label="LaunchX capabilities" className="border-t border-line py-24 md:py-32">
        <div className="wrap">
          <SectionLabel>Inside LaunchX</SectionLabel>
          <RevealText as="h2" className="t-h2 mt-6 max-w-3xl text-bone">
            Execution, scoped by your Playbook.
          </RevealText>
          <Reveal stagger={0.1} className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {launchxCapabilities.map((c, i) => (
              <div key={c.name} className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-ink-2">
                <span className="t-label text-crimson-bright">0{i + 1}</span>
                <h3 className="t-h3 mt-10 text-bone">{c.name}</h3>
                <p className="mt-4 text-bone/65">{c.detail}</p>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-crimson transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-label="Compare stages" className="border-t border-line py-24 md:py-32">
        <div className="wrap">
          <SectionLabel>At a glance</SectionLabel>
          <RevealText as="h2" className="t-h2 mt-6 text-bone">
            What each stage delivers.
          </RevealText>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-bone/30">
                  {["Stage", "What it delivers", "Duration", "Investment"].map((h) => (
                    <th key={h} className="t-label py-4 pr-6 font-normal text-mute">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stages.map((s) => (
                  <tr key={s.id} className="border-b border-line align-top">
                    <td className="py-6 pr-6">
                      <span className="t-label mr-3 text-crimson-bright">{s.index}</span>
                      <span className="font-display text-2xl text-bone">{s.name}</span>
                    </td>
                    <td className="max-w-md py-6 pr-6 text-bone/75">{s.deliverable}</td>
                    <td className="py-6 pr-6 text-bone/75">{s.duration}</td>
                    <td className={`py-6 ${s.price === "Free" ? "text-crimson-bright" : "text-bone"}`}>{s.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-label="Questions" className="border-t border-line py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>Questions</SectionLabel>
            <RevealText as="h2" className="t-h2 mt-6 text-bone">
              Asked honestly. Answered honestly.
            </RevealText>
          </div>
          <div className="lg:col-span-8">
            <ServicesFaqAccordion faqs={methodFaqs} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
