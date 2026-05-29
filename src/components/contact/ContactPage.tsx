"use client";

import React, { useState } from "react";
import Icon from "@/components/Icon";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import Parallax from "@/components/Parallax";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-12 overflow-hidden relative text-white bg-transparent">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 z-0 text-white">
          <Parallax speed={0.8} className="absolute -top-24 -left-24 w-96 h-96 bg-primary-container rounded-full blur-[160px]" />
        </div>

        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 pt-16">
          <ScrollReveal className="space-y-12">
            <div className="space-y-4">
              <ScrollReveal yOffset={10} delay={0.2}>
                <span className="text-sm uppercase tracking-[0.2em] text-primary font-bold">Contact Us</span>
              </ScrollReveal>
              <StaggerText
                tag="h1"
                text="Work With Us."
                className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-white font-headline uppercase"
              />
            </div>

            <div className="space-y-8 max-w-lg">
              <ScrollReveal delay={0.4}>
                <p className="text-lg text-on-surface-variant leading-relaxed font-light">
                  HPF Media is an exclusive boutique agency for high-growth enterprises. We don't just manage media; we architect influence.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.6} isContainer staggerChildren={0.1} className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <Icon name="mail" className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary mb-1 font-bold">Direct Inquiry</p>
                    <a href="mailto:admin@hpf-media.com" className="text-white font-medium hover:text-primary transition-colors">
                      admin@hpf-media.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="instagram" className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary mb-1 font-bold">Social</p>
                    <a
                      href="https://www.instagram.com/hpfmedia?igsh=ODZxejNxdXlic3Zv&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-primary transition-colors"
                    >
                      @hpfmedia
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="whatsapp" className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary mb-1 font-bold">24/7 Support</p>
                    <a
                      href="https://wa.me/971509418430"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-primary transition-colors"
                    >
                      +971 50 941 8430
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <Parallax speed={1.2} className="hidden lg:block opacity-[0.03] select-none pointer-events-none absolute bottom-0 left-0">
              <span className="text-[12rem] font-black tracking-tighter leading-none font-headline">HPF</span>
            </Parallax>
          </ScrollReveal>

          <ScrollReveal delay={0.3} yOffset={60} scale={0.94} rotateX={5} className="bg-black/95 backdrop-blur-[40px] p-6 md:p-12 rounded-lg border border-white/10 shadow-[0_48px_48px_rgba(0,0,0,0.5)]">
            {isSuccess ? (
              <div className="text-center space-y-6 py-10">
                <div className="h-16 w-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="check" className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold font-headline uppercase text-white">Application Sent</h2>
                <p className="text-on-surface-variant">We have received your request and will get back to you within 24 hours.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-primary text-sm uppercase font-bold tracking-widest hover:underline"
                >
                  Apply Again
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold tracking-tight mb-8 text-white font-headline uppercase">Strategy Audit</h2>
                <form className="space-y-8" onSubmit={handleSubmit} aria-label="Strategy audit application form">
                  <div className="relative">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      required
                      placeholder=" "
                      className="w-full bg-black border-0 border-b border-white/10 py-4 px-0 text-white focus:ring-0 focus:border-primary transition-all duration-300 peer"
                    />
                    <label
                      htmlFor="fullname"
                      className="absolute left-0 top-4 text-white/50 text-sm uppercase tracking-wider transition-all duration-300 pointer-events-none peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-90 font-bold"
                    >
                      Full Name
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input
                        type="text"
                        id="domain"
                        name="domain"
                        placeholder=" "
                        className="w-full bg-black border-0 border-b border-white/10 py-4 px-0 text-white focus:ring-0 focus:border-primary transition-all duration-300 peer"
                      />
                      <label
                        htmlFor="domain"
                        className="absolute left-0 top-4 text-white/50 text-sm uppercase tracking-wider transition-all duration-300 pointer-events-none peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-90 font-bold"
                      >
                        Company Domain
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder=" "
                        className="w-full bg-black border-0 border-b border-white/10 py-4 px-0 text-white focus:ring-0 focus:border-primary transition-all duration-300 peer"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 top-4 text-white/50 text-sm uppercase tracking-wider transition-all duration-300 pointer-events-none peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-90 font-bold"
                      >
                        Corporate Email
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      id="revenue"
                      name="revenue"
                      defaultValue=""
                      className="w-full bg-black border-0 border-b border-white/10 py-4 px-0 text-white/70 focus:ring-0 focus:border-primary transition-all duration-300 appearance-none font-bold text-sm uppercase"
                    >
                      <option value="" disabled>Annual Revenue Range</option>
                      <option value="1-5m">$1M - $5M</option>
                      <option value="5-20m">$5M - $20M</option>
                      <option value="20-50m">$20M - $50M</option>
                      <option value="50m+">$50M+</option>
                    </select>
                    <div className="absolute right-0 top-4 pointer-events-none">
                      <Icon name="expand_more" className="h-5 w-5 text-white/30" />
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      id="objectives"
                      name="objectives"
                      required
                      placeholder=" "
                      rows={3}
                      className="w-full bg-black border-0 border-b border-white/10 py-4 px-0 text-white focus:ring-0 focus:border-primary transition-all duration-300 peer resize-none"
                    ></textarea>
                    <label
                      htmlFor="objectives"
                      className="absolute left-0 top-4 text-white/50 text-sm uppercase tracking-wider transition-all duration-300 pointer-events-none peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-90 font-bold"
                    >
                      Growth Objectives
                    </label>
                  </div>

                  {error && <p className="text-red-500 text-xs font-bold uppercase tracking-tight" role="alert">{error}</p>}

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary-container to-red-500 text-white font-black py-5 rounded uppercase tracking-[0.2em] text-sm shadow-xl hover:shadow-primary-container/20 transition-all duration-500 ease-out active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Processing..." : "Apply for Consultation"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
