import Image from "next/image";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex flex-col justify-center items-center text-center px-4 pt-20 red-gradient-bg bg-black text-on-surface">
        <div className="max-w-4xl mx-auto z-10">
          <span className="text-sm uppercase tracking-[0.3em] text-primary mb-6 block font-medium">Dubai / Abu Dhabi / Global</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter font-headline mb-8 leading-[0.95] text-on-surface">
            Precision-Engineered <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-red-400">Dominance</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10 text-lg">
            We craft cinematic content and organic growth engines for UAE's elite brands. Not just impressions—authority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded font-bold text-lg hover:bg-red-500 transition-all">Explore Our Ecosystem</button>
            <button className="border border-red-600/30 text-on-surface px-10 py-4 rounded font-bold text-lg hover:bg-white/5 transition-all backdrop-blur-md">View Case Studies</button>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-t from-red-600/20 to-transparent blur-3xl"></div>
        </div>
      </section>

      {/* Core Services Bento Grid */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto bg-black text-on-surface">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">Core Ecosystem</h2>
          <div className="w-24 h-1 bg-red-600"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 glass-card rounded-lg p-10 flex flex-col justify-between overflow-hidden relative group">
            <div className="z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">dynamic_feed</span>
              <h3 className="text-3xl font-headline font-bold mb-4">Social Media Marketing / Organic Content</h3>
              <p className="text-neutral-400 text-lg mb-8 max-w-md">Aggressive organic scaling through high-retention storytelling. We don't chase trends; we set them for the UAE market.</p>
            </div>
            <Image
              fill
              className="absolute right-[-10%] bottom-[-10%] w-2/3 object-cover rounded-xl opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
              alt="Social media management concept"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgH9mK_9Cfu1a1EU9PnVoqzhzhoR8BHV51BeUA6C5EHc6N0IABj31lkRrOmJ_C5zJz5InsWKSCcmJlJNbqmvjf1-cdPY-tA2WVM0e7gsIK2ddcgrdZuczpJuhB-8l1VPq2_1xGfS4bMUcF6IrhKMb86F2tdAIcfetyIgdd_ZdFPBjJQt9pndRtDIPAz9FgmkFeho_mTFy30wQveEAKPvJBr5JmSuJ7GXGNPoKC50NcYmSwA5IksrdMN1anRJZ8JR13MerF1MpctcM"
            />
            <div className="mt-auto z-10 w-fit">
              <button className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">Command Growth <span className="material-symbols-outlined">trending_flat</span></button>
            </div>
          </div>
          
          <div className="md:col-span-5 glass-card rounded-lg p-10 flex flex-col relative group overflow-hidden bg-black">
            <div className="z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">movie_filter</span>
              <h3 className="text-3xl font-headline font-bold mb-4">Content Creation</h3>
              <p className="text-neutral-400 mb-8">4K Cinematic production tailored for the discerning UAE audience. Commercial grade visual assets that demand attention.</p>
            </div>
            <Image
              fill
              className="absolute right-[-20%] top-[40%] w-full h-1/2 object-cover opacity-20 group-hover:opacity-40 transition-all duration-700"
              alt="Cinematic production concept"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy0JhtGu7QQIB4_ADA_JSiJwYzcLxdO-ion3FRm-EeG_e8moSWn-NZmDdvXijVUAIXpHOSgDJSAnInf4hFOxhQmxeSWcH4pomQu664QOBoOd4NzOwRIXUcjf4f-Sab7xpETLL5FLYLEWoCqE8JAFO3X3Zk3ETXv6QEBxJyrJhrGun3ZmEvWTj-kS1RIQ1JOEM3vEBKHMPe_IoRRCB-g5r7ZIZrJREMRq9VDwD-yrleFmzBpgQLNpBfMtJ6QDSkCUBnX4NVtMdTplU"
            />
            <div className="mt-auto z-10 w-fit">
              <button className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">Start Production <span className="material-symbols-outlined">trending_flat</span></button>
            </div>
          </div>

          <div className="md:col-span-6 glass-card rounded-lg p-10 flex flex-col group border-l-4 border-l-primary-container bg-black">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">workspace_premium</span>
            <h3 className="text-2xl font-headline font-bold mb-4">Personal Branding</h3>
            <p className="text-neutral-400 mb-6 flex-grow">Transforming executives into industry icons. We manage your reputation, voice, and presence across digital landscapes.</p>
            <div className="mt-auto">
              <button className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">Claim Authority <span className="material-symbols-outlined">trending_flat</span></button>
            </div>
          </div>

          <div className="md:col-span-6 glass-card rounded-lg p-10 flex flex-col group border-l-4 border-l-primary-container bg-black">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">language</span>
            <h3 className="text-2xl font-headline font-bold mb-4">SEO & Web Design</h3>
            <p className="text-neutral-400 mb-6 flex-grow">High-performance digital flagships that convert. Engineered for speed, optimized for search dominance.</p>
            <div className="mt-auto">
              <button className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">Launch Site <span className="material-symbols-outlined">trending_flat</span></button>
            </div>
          </div>
        </div>
      </section>

      {/* The Methodology */}
      <section className="py-24 bg-black text-on-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-headline font-bold mb-4">The Methodology</h2>
            <p className="text-neutral-500 max-w-xl mx-auto">A relentless 5-step flow designed for velocity and uncompromising cinematic quality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/30 to-transparent -translate-y-1/2"></div>
            
            {[
              { icon: 'search', step: '01', label: 'Discovery' },
              { icon: 'insights', step: '02', label: 'Strategy' },
              { icon: 'description', step: '03', label: 'Scripting' },
              { icon: 'videocam', step: '04', label: 'Production' },
              { icon: 'send', step: '05', label: 'Delivery' }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center p-6 group">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6 border border-red-600/20 group-hover:bg-primary-container group-hover:border-primary-container transition-all duration-500">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container transition-colors">{step.icon}</span>
                </div>
                <h4 className="font-headline font-bold text-xl mb-2">{step.label}</h4>
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Step {step.step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Edge */}
      <section className="py-24 px-8 max-w-screen-xl mx-auto bg-black text-on-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-headline font-bold mb-8 leading-tight">The <span className="text-primary">Strategic Edge</span> We Provide</h2>
            <div className="space-y-8">
              {[
                { icon: 'pinch', title: 'UAE Cultural Mastery', desc: 'Deep understanding of local nuances from Dubai luxury to regional business ethics.' },
                { icon: 'bolt', title: 'Velocity of Results', desc: 'Our content engines are built for speed, delivering measurable growth in weeks, not months.' },
                { icon: 'auto_awesome', title: 'Cinematic Standards', desc: 'Uncompromising visual quality that aligns with the premium status of your brand.' }
              ].map((edge, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black border border-red-600/10 flex items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-primary">{edge.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-2">{edge.title}</h4>
                    <p className="text-neutral-400">{edge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden glass-card p-4">
            <Image
              fill
              className="object-cover rounded-lg opacity-80"
              alt="Dubai architecture night scene"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm04fis2eDF95mGghyIGwpGqjo_nyk2qRimt0oHCVI8AmrV5pdzwB1IhAvTyA5nuZXM8PLDXgwfC_N_O5aqyafVsRt8hSUnouznGq9J3HHXJ8tIjo6jXWv9_h8Ud5ZE0pRVFzKAkbC-pIvsuZN6npNWz9YOTQuvXyTVyTDFXQeBe1cQUC3KEc9sG1nTJ8d2koC4QmY3e0h2XXoEIHFKHedg0tzLFAaitsBlOfO4cwDFS6DzrDAMK8EiOODgUBS75l7Qxu06kJBywA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-black/90 backdrop-blur-md p-6 rounded-lg border border-red-600/30">
                <p className="font-headline font-bold text-xl italic">"They don't just create content; they build digital empires."</p>
                <p className="text-neutral-400 mt-2 text-sm">— UAE Real Estate Titan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 bg-black">
        <div className="max-w-5xl mx-auto glass-card rounded-lg p-16 text-center relative overflow-hidden bg-black text-on-surface">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          <h2 className="text-5xl md:text-6xl font-headline font-bold mb-6">Ready to Claim Your Market?</h2>
          <p className="text-neutral-400 text-xl mb-12 max-w-2xl mx-auto">Slots for our strategic partnership program are limited to 3 new clients per quarter. Secure your dominance now.</p>
          <button className="bg-primary-container text-on-primary-container px-12 py-5 rounded font-black text-xl uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl shadow-red-600/20">
            Book Your Strategy Call
          </button>
          <div className="mt-8 flex justify-center gap-8 text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-red-600 text-sm">check_circle</span>
              <span className="text-sm font-bold uppercase tracking-widest">Global Reach</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-red-600 text-sm">check_circle</span>
              <span className="text-sm font-bold uppercase tracking-widest">Premium Assets</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
