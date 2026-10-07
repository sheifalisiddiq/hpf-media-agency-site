import React from "react";
import type { Metadata } from "next";
import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "HPF Media's terms of service for marketing strategy, brand architecture and execution services.",
  alternates: {
    canonical: "https://www.hpf-media.com/terms",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className="wrap min-h-screen pb-28 pt-36 md:pt-48">
      <div className="max-w-3xl space-y-14">
        <div>
          <SectionLabel>Legal</SectionLabel>
          <RevealText as="h1" trigger="load" delay={0.1} className="t-h1 mt-8 text-bone">
            Terms of Service
          </RevealText>
        </div>

        <div className="legal space-y-10 text-lg leading-relaxed text-bone/70">
          <section className="space-y-4">
            <h2 className="t-h3 text-bone">1. Services</h2>
            <p>
              HPF Media provides marketing diagnostic, brand strategy and execution services, including content production, paid media, SEO and social media management. By engaging with our services, you agree to comply with these Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="t-h3 text-bone">2. Project Engagement</h2>
            <p>
              Specific scopes of work, deliverables, and timelines will be outlined in separate service agreements or project orders. These Terms of Service apply to all interactions with HPF Media.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="t-h3 text-bone">3. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all final video assets delivered to the client become the property of the client upon full payment. HPF Media retains the right to use delivered content for promotional and portfolio purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="t-h3 text-bone">4. Client Responsibilities</h2>
            <p>
              Clients are responsible for providing necessary brand assets, access to platforms, and timely feedback during the production process. Delays in providing these materials may impact project timelines.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="t-h3 text-bone">5. Liability</h2>
            <p>
              HPF Media is not responsible for changes made by third-party platforms (such as Meta, Google, Instagram and TikTok) that may impact content reach or performance. We do not guarantee specific viral outcomes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="t-h3 text-bone">6. Jurisdiction</h2>
            <p>
              These terms are governed by the laws of the United Arab Emirates. Any disputes will be subject to the exclusive jurisdiction of the courts of Dubai.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <p className="text-sm italic">
              Last updated: April 2026. For questions regarding these terms, please contact us at admin@hpf-media.com.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
