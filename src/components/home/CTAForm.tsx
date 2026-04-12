"use client";

import React, { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";

export default function CTAForm() {
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
    <section className="relative overflow-hidden bg-transparent px-6 py-32 text-on-surface md:px-10 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,84,73,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <ScrollReveal className="space-y-8">
          <StaggerText
            tag="h2"
            text="Let's Work Together."
            className="text-5xl font-black uppercase tracking-[-0.08em] text-white md:text-7xl font-headline"
          />
          <p className="max-w-xl text-lg leading-8 text-white/70">
            Stop posting content that no one sees. Join UAE brands scaling their impact through HPF Media and turn visibility into real business growth.
          </p>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-12 w-12 rounded-full border-2 border-black bg-white/10 overflow-hidden relative">
                  <Image 
                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i + 22}`} 
                    alt="Agency Client"
                    fill
                    className="object-cover translate-y-1" 
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Trusted by 20+ UAE Brands</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="relative">
          {isSuccess ? (
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-12 rounded-2xl text-center space-y-6">
              <div className="h-16 w-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="check" className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-headline uppercase text-white">Application Sent</h3>
              <p className="text-on-surface-variant">We'll reach out within 24 hours to schedule your strategy call.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-primary text-sm uppercase font-bold tracking-widest hover:underline"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl space-y-6 shadow-2xl">
              <div className="grid grid-cols-1 gap-6">
                <div className="relative">
                  <input 
                    type="text" 
                    id="fullname_home" 
                    name="fullname" 
                    required
                    placeholder=" " 
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 peer outline-none"
                  />
                  <label 
                    htmlFor="fullname_home" 
                    className="absolute left-4 top-4 text-white/40 text-xs uppercase tracking-widest transition-all duration-300 pointer-events-none peer-focus:-translate-y-7 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-7 font-bold"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input 
                    type="email" 
                    id="email_home" 
                    name="email" 
                    required
                    placeholder=" " 
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 peer outline-none"
                  />
                  <label 
                    htmlFor="email_home" 
                    className="absolute left-4 top-4 text-white/40 text-xs uppercase tracking-widest transition-all duration-300 pointer-events-none peer-focus:-translate-y-7 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-7 font-bold"
                  >
                    Corporate Email
                  </label>
                </div>

                <div className="relative">
                  <textarea 
                    id="objectives_home" 
                    name="objectives" 
                    required
                    placeholder=" " 
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 peer outline-none resize-none"
                  ></textarea>
                  <label 
                    htmlFor="objectives_home" 
                    className="absolute left-4 top-4 text-white/40 text-xs uppercase tracking-widest transition-all duration-300 pointer-events-none peer-focus:-translate-y-7 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-7 font-bold"
                  >
                    How can we help?
                  </label>
                </div>
              </div>

              {error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-tight">{error}</p>}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-red-500 text-black font-black py-5 rounded-lg uppercase tracking-[0.2em] text-sm transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Book Strategy Call"}
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
