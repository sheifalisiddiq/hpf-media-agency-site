import React from "react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "HPF Media's terms of service for social media marketing, short-form video production, and digital strategy services in the UAE.",
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
    <div className="min-h-screen bg-transparent pt-32 pb-20 px-6 sm:px-12 lg:px-24 text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <ScrollReveal>
          <div className="space-y-4">
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Legal</span>
            <StaggerText
              tag="h1"
              text="Terms of Service"
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-headline"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="prose prose-invert max-w-none space-y-8 text-on-surface-variant font-light leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Services</h2>
            <p>
              HPF Media provides short-form video strategy, production, and distribution services on platforms such as Instagram and TikTok. By engaging with our services, you agree to comply with these Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Project Engagement</h2>
            <p>
              Specific scopes of work, deliverables, and timelines will be outlined in separate service agreements or project orders. These Terms of Service apply to all interactions with HPF Media.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all final video assets delivered to the client become the property of the client upon full payment. HPF Media retains the right to use delivered content for promotional and portfolio purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">4. Client Responsibilities</h2>
            <p>
              Clients are responsible for providing necessary brand assets, access to platforms, and timely feedback during the production process. Delays in providing these materials may impact project timelines.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">5. Liability</h2>
            <p>
              HPF Media is not responsible for changes made by third-party platforms (Instagram, TikTok) that may impact content reach or performance. We do not guarantee specific viral outcomes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">6. Jurisdiction</h2>
            <p>
              These terms are governed by the laws of the United Arab Emirates. Any disputes will be subject to the exclusive jurisdiction of the courts of Dubai.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <p className="text-sm italic">
              Last updated: April 2026. For questions regarding these terms, please contact us at admin@hpf-media.com.
            </p>
          </section>

        </ScrollReveal>
      </div>
    </div>
  );
}
