import Image from "next/image";

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
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-6 block">Legacy Architecture</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8 text-glow font-headline">
            THE ARCHITECTS OF AUTHORITY
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
            We don't just create content; we build digital monuments. HPF Media is the sanctuary where elite visionaries transform into industry titans.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-lg text-lg font-bold tracking-tight hover:scale-105 transition-transform duration-300 shadow-2xl shadow-primary/30">
              Explore the Vision
            </button>
          </div>
        </div>
      </section>

      {/* Founder Section: Mo Bilal */}
      <section className="relative py-32 bg-black overflow-hidden border-y border-white/5 text-on-surface">
        <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Meet the Visionary</h2>
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface font-headline">Mo Bilal</h3>
              <div className="w-20 h-1 bg-primary-container"></div>
            </div>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-light">
              <p>
                Mo Bilal is the mastermind behind the growth of the world's most influential figures. With a background in engineering digital monuments and cinematic movements, Mo approaches brand authority with the precision of an architect and the soul of a filmmaker.
              </p>
              <p>
                Based in the heart of the UAE's luxury market, he has pioneered a methodology that transcends traditional marketing. It is about <span className="text-primary font-medium italic">Cinematic Authority</span>—the art of being felt before being seen, and heard long after the screen goes dark.
              </p>
              <p>
                "In a world of noise, true authority is silent, certain, and undeniable. We don't chase attention; we demand it through excellence."
              </p>
            </div>
            <div className="flex gap-8 pt-6">
              <div className="text-center">
                <div className="text-4xl font-black text-on-surface">500M+</div>
                <div className="text-xs uppercase tracking-widest text-primary font-bold mt-1">Total Reach</div>
              </div>
              <div className="text-center border-l border-white/10 pl-8">
                <div className="text-4xl font-black text-on-surface">50+</div>
                <div className="text-xs uppercase tracking-widest text-primary font-bold mt-1">Titans Scaled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 bg-black text-on-surface">
        <div className="max-w-screen-2xl mx-auto px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface mb-6 uppercase font-headline">Why the Elite Choose HPF</h2>
            <p className="text-on-surface-variant font-light text-lg">Precision. Exclusivity. Results. We operate at the intersection of high-art and high-conversion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-10 bg-neutral-950 rounded-lg transition-all duration-500 hover:bg-neutral-900 hover:-translate-y-2 outline outline-1 outline-white/5">
              <div className="mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">architecture</span>
              </div>
              <h4 className="text-2xl font-bold text-on-surface mb-4">Strategic Engineering</h4>
              <p className="text-on-surface-variant font-light leading-relaxed">We don't guess. Every campaign is engineered with forensic precision to ensure your message hits with maximum impact.</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary-container transition-all duration-500 group-hover:w-full"></div>
            </div>
            <div className="group relative p-10 bg-neutral-950 rounded-lg transition-all duration-500 hover:bg-neutral-900 hover:-translate-y-2 outline outline-1 outline-white/5">
              <div className="mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">movie_filter</span>
              </div>
              <h4 className="text-2xl font-bold text-on-surface mb-4">Cinematic Excellence</h4>
              <p className="text-on-surface-variant font-light leading-relaxed">Your brand is treated like a feature film. We use high-end production techniques to create a visual language of luxury.</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary-container transition-all duration-500 group-hover:w-full"></div>
            </div>
            <div className="group relative p-10 bg-neutral-950 rounded-lg transition-all duration-500 hover:bg-neutral-900 hover:-translate-y-2 outline outline-1 outline-white/5">
              <div className="mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">diamond</span>
              </div>
              <h4 className="text-2xl font-bold text-on-surface mb-4">Market Domination</h4>
              <p className="text-on-surface-variant font-light leading-relaxed">We focus on the top 1% of the market. Our strategies are designed to position you as the only logical choice in your niche.</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary-container transition-all duration-500 group-hover:w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic FAQ */}
      <section className="py-32 bg-black border-t border-white/5 text-on-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter text-on-surface mb-4 font-headline">Strategy & Logistics</h2>
            <p className="text-on-surface-variant font-light">Unfiltered answers for the discerning client.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long until I see results?", a: "Authority isn't built overnight, but our momentum strategies typically show significant market shifts within the first 60-90 days. We focus on long-term assets over short-term spikes." },
              { q: "What industries do you specialize in?", a: "We specialize in the high-ticket, luxury, and professional services sectors. Real estate titans, elite coaches, and venture capitalists are where we perform best." },
              { q: "Is Mo Bilal personally involved?", a: "Mo oversees the architectural strategy for every elite client. While we have a world-class execution team, the visionary blueprint always passes through his hands." },
              { q: "How do you measure authority?", a: "Through three pillars: Market Recognition, Inbound Deal Flow, and Pricing Power. When you can charge 10x your competitors and still have a waitlist, authority has been achieved." },
              { q: "What is the investment?", a: "HPF Media is a boutique firm. Our partnerships begin at a premium level, reflecting the value of the digital real estate and market position we secure for you." }
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
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface mb-10 max-w-4xl mx-auto font-headline">READY TO CLAIM YOUR AUTHORITY?</h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto font-light">The architects are ready. Your seat at the top is waiting.</p>
          <button className="bg-primary-container text-on-primary-container px-14 py-6 rounded-full text-xl font-bold tracking-tight hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_60px_rgba(255,84,73,0.5)]">
            Secure Your Consultation
          </button>
        </div>
      </section>
    </>
  );
}
