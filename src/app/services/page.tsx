import Image from "next/image";
import CardSwap from "@/components/motion/CardSwap";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex flex-col justify-center items-center text-center px-4 pt-20 red-gradient-bg bg-black text-on-surface">
        <div className="max-w-4xl mx-auto z-10">
          <span className="text-sm uppercase tracking-[0.3em] text-primary mb-6 block font-medium">Dubai / Abu Dhabi / Global</span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter font-headline mb-8 leading-[0.95] text-on-surface">
            Grow Your Business With <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-red-400">High-Impact Content</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10 text-lg">
            We help UAE business owners get more views, more leads, and more customers through strategic Instagram and TikTok videos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded font-bold text-lg hover:bg-red-500 transition-all">See Our Services</button>
            <button className="border border-red-600/30 text-on-surface px-10 py-4 rounded font-bold text-lg hover:bg-white/5 transition-all backdrop-blur-md">View Case Studies</button>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-t from-red-600/20 to-transparent blur-3xl"></div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 px-6 md:px-8 max-w-screen-2xl mx-auto bg-black text-on-surface">
        <div className="flex flex-col mb-20 text-center items-center">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4 uppercase tracking-tighter">Our Services</h2>
          <div className="w-24 h-1 bg-red-600"></div>
        </div>
        
        <div className="py-12">
          <CardSwap cards={[
            { id: 1, title: "Content Strategy", text: "We plan what to post so your content actually gets seen." },
            { id: 2, title: "Scriptwriting", text: "We write hooks and videos people can't scroll past." },
            { id: 3, title: "Video Editing", text: "We turn your footage into high-retention content." },
            { id: 4, title: "Content System", text: "You record. We handle everything else." },
          ]} />
        </div>
      </section>

      {/* The Methodology */}
      <section className="py-24 bg-black text-on-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-headline font-bold mb-4">How We Work</h2>
            <p className="text-neutral-500 max-w-xl mx-auto">Our simple 5-step process ensures your content is delivered on time and at the highest quality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/30 to-transparent -translate-y-1/2"></div>
            
            {[
              { icon: 'search', step: '01', label: 'Business Review' },
              { icon: 'insights', step: '02', label: 'Content Plan' },
              { icon: 'description', step: '03', label: 'Script Writing' },
              { icon: 'videocam', step: '04', label: 'Filming' },
              { icon: 'send', step: '05', label: 'Publishing' }
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
            <h2 className="text-5xl font-headline font-bold mb-8 leading-tight">Why <span className="text-primary">Business Owners</span> Choose Us</h2>
            <div className="space-y-8">
              {[
                { icon: 'pinch', title: 'Local Market Expertise', desc: 'Deep understanding of what Dubai and UAE customers want to see in their feeds.' },
                { icon: 'bolt', title: 'Fast Results', desc: 'We deliver high-quality content quickly so you start seeing growth in weeks, not months.' },
                { icon: 'auto_awesome', title: 'High-Quality Standards', desc: 'Professional filming and editing that makes your brand stand out from the competition.' }
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
                <p className="font-headline font-bold text-xl italic">"They handle everything—I just focus on my business while the leads come in."</p>
                <p className="text-neutral-400 mt-2 text-sm">— UAE Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 bg-black">
        <div className="max-w-5xl mx-auto glass-card rounded-lg p-16 text-center relative overflow-hidden bg-black text-on-surface">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          <h2 className="text-5xl md:text-6xl font-headline font-bold mb-6">Ready to Grow Your Reach and Revenue?</h2>
          <p className="text-neutral-400 text-xl mb-12 max-w-2xl mx-auto">We take on a limited number of clients each month to ensure the highest quality of service. Book your strategy call today to secure your spot.</p>
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
