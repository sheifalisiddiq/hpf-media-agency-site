"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black text-on-surface">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 w-full h-[500px] bg-gradient-to-t from-red-900/20 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-6 block">Dubai Organic Growth Agency</span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8 text-glow font-headline">
            ORGANIC SHORT-FORM CONTENT THAT GROWS YOUR BUSINESS
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
            HPF Media helps UAE business owners grow visibility, engagement, and inbound leads through strategic Instagram and TikTok content.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-lg text-lg font-bold tracking-tight hover:scale-105 transition-transform duration-300 shadow-2xl shadow-primary/30">
              See How We Work
            </button>
          </div>
        </div>
      </section>

      {/* Founder Section: Mo Bilal */}
      <section className="relative py-20 lg:py-32 bg-black overflow-hidden border-y border-white/5 text-on-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-red-600/20 blur-3xl opacity-50 rounded-full group-hover:opacity-70 transition-opacity"></div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/5">
              <Image
                fill
                alt="Mo Bilal"
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVn51E1u5cggqQmxsBsC_-s2RYraGoAVaibpstXP6T0XuszhwhS2WLBMk1pOtjva7cVyG0vzAcSqqdVjiQKiz0iYGh0bg-_gYEWKkvTlQ2IZkirMcJorAx2UR85yzbFuQrYRwM2C5SrLdYaedFZGWqpAIuChegiq5EhajEOq7NRIxzI8ZYQxoP5wD-LYHdOx8g1olo-mSOEUlg8ONSSbkupohdOXg-udhFzb3XdxJZh4hoU3LrxMWJ5NA3xeZmb86q1Ayo8GEcQRk"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 hidden xl:block">
              <div className="text-[12rem] font-black text-white/5 select-none leading-none font-headline">MO</div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Meet the Founder</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface font-headline">Mo Bilal</h3>
              <div className="w-20 h-1 bg-primary-container"></div>
            </div>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-light">
              <p>
                Mo Bilal leads HPF Media with a clear focus: helping businesses turn short-form content into real attention, stronger positioning, and qualified inbound demand.
              </p>
              <p>
                Working with brands across the UAE, he has built content systems designed for Instagram and TikTok growth, combining strategy, scripting, production, and editing into one execution process.
              </p>
              <p>
                The goal is simple: create content that gets seen, keeps people watching, and helps business owners convert attention into trust and leads.
              </p>
            </div>
            <div className="flex gap-8 pt-6">
              <div className="text-center">
                <div className="text-4xl font-black text-on-surface">500M+</div>
                <div className="text-xs uppercase tracking-widest text-primary font-bold mt-1">Organic Views Generated</div>
              </div>
              <div className="text-center border-l border-white/10 pl-8">
                <div className="text-4xl font-black text-on-surface">50+</div>
                <div className="text-xs uppercase tracking-widest text-primary font-bold mt-1">Brands Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 lg:mb-20 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase font-headline">Why Businesses Choose HPF</h2>
            <p className="text-white/70 font-light text-lg">Clear strategy, strong execution, and short-form content built to help you grow in the UAE market.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "architecture",
                title: "Strategy First",
                desc: "We build content around your offer, audience, and goals so every post supports real business growth."
              },
              {
                icon: "movie_filter",
                title: "Attention Engineering",
                desc: "From scripting to editing, we create short-form videos designed to stop the scroll and keep viewers watching."
              },
              {
                icon: "diamond",
                title: "Growth You Can Feel",
                desc: "We prioritize actual reach and leads over vanity metrics, ensuring your brand gains real authority."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 md:p-10 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 shadow-2xl"
              >
                <div className="mb-8 flex items-center justify-center w-12 h-12 rounded-lg bg-red-600/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4 font-headline">{feature.title}</h4>
                <p className="text-white/70 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic FAQ */}
      <section className="py-32 bg-black border-t border-white/5 text-on-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter text-on-surface mb-4 font-headline">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant font-light">Straight answers for business owners considering short-form content growth.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does it take to see results?", a: "Most clients start seeing stronger reach, better engagement, and clearer content direction within the first 60 to 90 days. Sustainable growth comes from consistent execution, not one viral post." },
              { q: "Who do you work with?", a: "We work with UAE business owners and brands that want to grow through Instagram and TikTok. That includes service businesses, personal brands, real estate, hospitality, and other high-value offers." },
              { q: "Is Mo Bilal involved in the work?", a: "Yes. Mo leads the strategic direction behind client content so the messaging, positioning, and execution stay aligned with business goals." },
              { q: "What makes your approach different?", a: "We focus on content that supports growth. That means strategy, scripting, production, editing, and posting systems built around visibility, engagement, and lead generation." },
              { q: "What does working with HPF Media look like?", a: "We start by understanding your business, audience, and offer. Then we build a clear short-form content plan and execute it with your team so your content becomes consistent and effective." }
            ].map((faq, i) => (
              <div key={i} className="group bg-neutral-950 p-6 rounded-lg cursor-pointer border border-white/5 hover:border-primary/30 transition-all">
                <div className="flex justify-between items-center">
                  <h5 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{faq.q}</h5>
                  <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform duration-300">expand_more</span>
                </div>
                <div className="mt-4 text-on-surface-variant font-light leading-relaxed hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-4 duration-300">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-40 overflow-hidden bg-black text-on-surface">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            className="object-cover opacity-20"
            alt="Abstract flowing red light"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzY8jNlWbaC-J55Y6GHH4Us3sv-GRvWWjJxirCXrgrEVron8j_rgRo-lfXZONFIE1VsHiMenoxpN14cTsEM8e29lkCzlOTgTMoyHg_1SSaHydfWds1pUCuVKx6jqRPCZGzvgrdBgMot2ogNply58rZoYC59SvrH-Jpc2Zo4qrIk3jPSpvIRNq6-6hWwVfjPnInhW8my1B_pMMH_8ufiD0Mt_FLg0k-2uwi3mMEoYBHEo2u1qAM0As7rMWOp2jXzwP8FAHQuqYdg1Q"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface mb-10 max-w-4xl mx-auto font-headline">READY TO GROW YOUR BUSINESS WITH BETTER CONTENT?</h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto font-light">If you want more visibility, stronger engagement, and content that actually supports sales, HPF Media is ready to help.</p>
          <button className="bg-primary-container text-on-primary-container px-14 py-6 rounded-full text-xl font-bold tracking-tight hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_60px_rgba(255,84,73,0.5)]">
            Book Your Strategy Call
          </button>
        </div>
      </section>
    </>
  );
}
