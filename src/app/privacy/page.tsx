import React from "react";
import type { Metadata } from "next";
import RevealText from "@/components/motion/RevealText";
import SectionLabel from "@/components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "HPF Media's privacy policy. Learn how we collect, use, and protect your personal data in compliance with UAE regulations.",
  alternates: {
    canonical: "https://www.hpf-media.com/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="wrap min-h-screen pb-28 pt-36 md:pt-48">
      <div className="max-w-3xl space-y-14">
        <div>
          <SectionLabel>Legal</SectionLabel>
          <RevealText as="h1" trigger="load" delay={0.1} className="t-h1 mt-8 text-bone">
            Privacy Policy
          </RevealText>
        </div>

        <div className="legal space-y-10 text-lg leading-relaxed text-bone/70">
          <section className="space-y-4">
            <h2 className="t-h3 text-bone">1. Introduction</h2>
            <p>
              HPF Media (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="t-h3 text-bone">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us through our contact forms and strategy audit applications, including:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-crimson">
              <li>Name and contact information (Email, WhatsApp number)</li>
              <li>Company details and business information</li>
              <li>Project requirements and growth objectives</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="t-h3 text-bone">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-crimson">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you regarding your inquiries</li>
              <li>Analyze performance and optimize user experience</li>
              <li>Comply with legal obligations in the UAE</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="t-h3 text-bone">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="t-h3 text-bone">5. UAE Jurisdiction</h2>
            <p>
              Your data is processed and stored in accordance with the laws of the United Arab Emirates. By using our site, you consent to this processing.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <p className="text-sm italic">
              Last updated: April 2026. For questions regarding this policy, please contact us at admin@hpf-media.com.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
