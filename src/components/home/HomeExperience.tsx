import Hero from "./sections/Hero";
import Symptoms from "./sections/Symptoms";
import MethodTrack from "./sections/MethodTrack";
import CampaignFramework from "./sections/CampaignFramework";
import Proof from "./sections/Proof";
import Values from "./sections/Values";
import SectionLabel from "@/components/shared/SectionLabel";
import StandardTable from "@/components/shared/StandardTable";
import RevealText from "@/components/motion/RevealText";
import FinalCTA from "@/components/shared/FinalCTA";
import Link from "next/link";

export default function HomeExperience() {
  return (
    <>
      <Hero />
      <Symptoms />
      <MethodTrack />
      <CampaignFramework />
      <Proof />

      <section aria-label="The HPF Standard" className="relative border-t border-line py-20 md:py-28">
        <div className="wrap">
          <div className="mb-16 grid gap-8 md:mb-20 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionLabel index="05">The HPF Standard</SectionLabel>
              <RevealText as="h2" className="t-h2 mt-6 text-bone">
                Boundaries, not preferences.
              </RevealText>
            </div>
            <div className="self-end md:col-span-4 md:col-start-9">
              <p className="t-lead">These are absolute. They protect the integrity of everything we build, for you and for us.</p>
              <Link href="/about" className="t-label mt-6 inline-block border-b border-crimson pb-1 text-bone hover:text-crimson-bright">
                Read our DNA →
              </Link>
            </div>
          </div>
          <StandardTable />
        </div>
      </section>

      <Values />
      <FinalCTA />
    </>
  );
}
