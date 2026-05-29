import React from "react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";

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
    <div className="min-h-screen bg-transparent pt-32 pb-20 px-6 sm:px-12 lg:px-24 text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <ScrollReveal>
          <div className="space-y-4">
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">Legal</span>
            <StaggerText
              tag="h1"
              text="Privacy Policy"
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-headline"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="prose prose-invert max-w-none space-y-8 text-on-surface-variant font-light leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Introduction</h2>
            <p>
              HPF Media ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us through our contact forms and strategy audit applications, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (Email, WhatsApp number)</li>
              <li>Company details and business information</li>
              <li>Project requirements and growth objectives</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you regarding your inquiries</li>
              <li>Analyze performance and optimize user experience</li>
              <li>Comply with legal obligations in the UAE</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">5. UAE Jurisdiction</h2>
            <p>
              Your data is processed and stored in accordance with the laws of the United Arab Emirates. By using our site, you consent to this processing.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <p className="text-sm italic">
              Last updated: April 2026. For questions regarding this policy, please contact us at admin@hpf-media.com.
            </p>
          </section>

        </ScrollReveal>
      </div>
    </div>
  );
}
