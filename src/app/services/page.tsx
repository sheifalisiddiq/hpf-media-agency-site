import Image from "next/image";
import Icon from "@/components/Icon";
import ScrollReveal, { RevealItem } from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import Parallax from "@/components/Parallax";


export default function Services() {
  return (
    <>
      <section className="relative min-h-[921px] flex flex-col justify-center items-center text-center px-4 pt-20 bg-transparent text-on-surface overflow-hidden">
        <ScrollReveal className="max-w-4xl mx-auto z-10">
          <ScrollReveal yOffset={10} delay={0.2}>
            <span className="text-sm uppercase tracking-[0.3em] text-primary mb-6 block font-medium">Dubai / Abu Dhabi / Global</span>
          </ScrollReveal>
          
          <StaggerText
            tag="h1"
            text="Strategies That Scale."
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter font-headline mb-8 leading-[0.95] text-on-surface"
          />
          
          <ScrollReveal delay={0.4}>
            <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10 text-lg">
              We help UAE business owners get more views, more leads, and more customers through strategic Instagram and TikTok videos.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6} yOffset={20} scale={0.9}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services-list" className="bg-primary-container text-on-primary-container px-10 py-4 rounded font-bold text-lg hover:bg-primary transition-all inline-flex items-center justify-center">See Our Services</a>
              <a href="/#our-work" className="border border-red-600/30 text-on-surface px-10 py-4 rounded font-bold text-lg hover:bg-white/5 transition-all backdrop-blur-md inline-flex items-center justify-center">View Case Studies</a>
            </div>
          </ScrollReveal>

        </ScrollReveal>
        
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Parallax speed={0.8} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-t from-red-600/20 to-transparent blur-3xl" />
        </div>
      </section>

      <section id="services-list" className="relative py-20 lg:py-24 px-6 md:px-8 mx-auto bg-transparent text-on-surface overflow-hidden">
        <div className="relative z-10 max-w-screen-2xl mx-auto">

          <ScrollReveal className="flex flex-col mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4 uppercase tracking-tight">Services</h2>
            <div className="w-24 h-1 bg-red-600"></div>
          </ScrollReveal>
        
        <ScrollReveal isContainer staggerChildren={0.15} scale={0.96} yOffset={30} className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <RevealItem className="md:col-span-7 glass-card rounded-lg p-6 md:p-10 flex flex-col justify-between overflow-hidden relative group bg-black">
            <div className="z-10">
              <Icon name="dynamic_feed" className="mb-6 h-8 w-8 text-primary md:h-10 md:w-10" />
              <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4 uppercase">Social Media Growth</h3>
              <p className="text-neutral-400 text-base md:text-lg mb-8 max-w-md">We manage your entire organic strategy to increase your reach. We don't just post; we build a plan to make your brand visible to the right people in the UAE.</p>
            </div>
            <Parallax speed={1.1} className="absolute right-[-10%] bottom-[-10%] w-2/3 pointer-events-none">
              <Image
                width={800}
                height={600}
                className="w-full object-cover rounded-xl opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                alt="Social media management concept"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgH9mK_9Cfu1a1EU9PnVoqzhzhoR8BHV51BeUA6C5EHc6N0IABj31lkRrOmJ_C5zJz5InsWKSCcmJlJNbqmvjf1-cdPY-tA2WVM0e7gsIK2ddcgrdZuczpJuhB-8l1VPq2_1xGfS4bMUcF6IrhKMb86F2tdAIcfetyIgdd_ZdFPBjJQt9pndRtDIPAz9FgmkFeho_mTFy30wQveEAKPvJBr5JmSuJ7GXGNPoKC50NcYmSwA5IksrdMN1anRJZ8JR13MerF1MpctcM"
                sizes="(min-width: 768px) 40vw, 100vw"
                quality={64}
              />
            </Parallax>
            <div className="mt-auto z-10 w-fit">
              <button className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wider text-sm">Increase Your Reach <Icon name="trending_flat" className="h-4 w-4" /></button>
            </div>
          </RevealItem>

          <RevealItem className="md:col-span-5 glass-card rounded-lg p-6 md:p-10 flex flex-col relative group overflow-hidden bg-black">
            <div className="z-10">
              <Icon name="movie_filter" className="mb-6 h-8 w-8 text-primary md:h-10 md:w-10" />
              <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4 uppercase">Video Production</h3>
              <p className="text-neutral-400 mb-8">High-quality video content designed for mobile screens. We handle everything from filming to editing so your videos look professional and keep people watching.</p>
            </div>
            <Parallax speed={1.2} className="absolute right-[-20%] top-[40%] w-full h-1/2 pointer-events-none">
              <Image
                width={600}
                height={400}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-700"
                alt="Cinematic production concept"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy0JhtGu7QQIB4_ADA_JSiJwYzcLxdO-ion3FRm-EeG_e8moSWn-NZmDdvXijVUAIXpHOSgDJSAnInf4hFOxhQmxeSWcH4pomQu664QOBoOd4NzOwRIXUcjf4f-Sab7xpETLL5FLYLEWoCqE8JAFO3X3Zk3ETXv6QEBxJyrJhrGun3ZmEvWTj-kS1RIQ1JOEM3vEBKHMPe_IoRRCB-g5r7ZIZrJREMRq9VDwD-yrleFmzBpgQLNpBfMtJ6QDSkCUBnX4NVtMdTplU"
                sizes="(min-width: 768px) 32vw, 100vw"
                quality={64}
              />
            </Parallax>
            <div className="mt-auto z-10 w-fit">
              <button className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wider text-sm">Start Production <Icon name="trending_flat" className="h-4 w-4" /></button>
            </div>
          </RevealItem>

          <RevealItem className="md:col-span-6 glass-card rounded-lg p-6 md:p-10 flex flex-col group border-l-4 border-l-primary-container bg-black">
            <Icon name="workspace_premium" className="mb-6 h-8 w-8 text-primary md:h-10 md:w-10" />
            <h3 className="text-xl md:text-2xl font-headline font-bold mb-4 uppercase">Personal Branding</h3>
            <p className="text-neutral-400 mb-6 flex-grow">We help business owners become the face of their industry. We build your reputation and voice so you are recognized as an expert in your field.</p>
            <div className="mt-auto">
              <button className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wider text-sm">Build Your Authority <Icon name="trending_flat" className="h-4 w-4" /></button>
            </div>
          </RevealItem>

          <RevealItem className="md:col-span-6 glass-card rounded-lg p-6 md:p-10 flex flex-col group border-l-4 border-l-primary-container bg-black">
            <Icon name="language" className="mb-6 h-8 w-8 text-primary md:h-10 md:w-10" />
            <h3 className="text-xl md:text-2xl font-headline font-bold mb-4 uppercase">Web Design & Strategy</h3>
            <p className="text-neutral-400 mb-6 flex-grow">Fast, professional websites built to turn your social media followers into paying customers. We ensure your digital presence is built to convert.</p>
            <div className="mt-auto">
              <button className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wider text-sm">Launch Your Site <Icon name="trending_flat" className="h-4 w-4" /></button>
            </div>
          </RevealItem>
        </ScrollReveal>
        </div>
      </section>

      <section className="relative py-24 px-8 mx-auto bg-transparent text-on-surface overflow-hidden border-t border-white/5">
        <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-5xl font-headline font-bold mb-8 leading-tight uppercase tracking-tighter">The <span className="text-primary">HPF Edge</span></h2>
            <div className="space-y-8">
              {[
                { icon: "pinch", title: "Local Market Expertise", desc: "Deep understanding of what Dubai and UAE customers want to see in their feeds." },
                { icon: "bolt", title: "Fast Results", desc: "We deliver high-quality content quickly so you start seeing growth in weeks, not months." },
                { icon: "auto_awesome", title: "High-Quality Standards", desc: "Professional filming and editing that makes your brand stand out from the competition." }
              ].map((edge, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black border border-primary/20 flex items-center justify-center rounded-lg">
                    <Icon name={edge.icon as any} className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-2 uppercase tracking-wide">{edge.title}</h4>
                    <p className="text-neutral-400 font-light">{edge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          
          <Parallax speed={1.1} className="relative h-[600px] rounded-lg overflow-hidden glass-card p-4">
            <ScrollReveal scale={1.1} rotateX={5} className="h-full w-full relative">
              <Image
                fill
                className="object-cover rounded-lg opacity-80"
                alt="Dubai architecture night scene"
                src="/services-hero.png"
                sizes="(min-width: 768px) 50vw, 100vw"
                quality={64}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <ScrollReveal delay={0.6} yOffset={20} scale={0.8}>
                  <div className="bg-[#0a0a0a] p-6 rounded-lg border border-primary/30 shadow-2xl">
                    <p className="font-headline font-bold text-xl italic leading-relaxed">"They handle everything. I just focus on my business while the leads come in."</p>
                    <p className="text-primary mt-2 text-sm font-bold uppercase tracking-widest">- UAE Business Owner</p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </Parallax>
        </div>
      </section>

      <section className="py-32 px-8 bg-transparent">
        <ScrollReveal scale={0.97} rotateX={2} className="max-w-5xl mx-auto glass-card rounded-lg p-16 text-center relative overflow-hidden bg-transparent text-on-surface border border-white/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          
          <StaggerText
            tag="h2"
            text="Let's Start."
            className="text-5xl md:text-6xl font-headline font-bold mb-6 uppercase tracking-tighter"
          />
          
          <ScrollReveal delay={0.4}>
            <p className="text-neutral-400 text-xl mb-12 max-w-2xl mx-auto font-light">We take on a limited number of clients each month to ensure the highest quality of service. Book your strategy call today to secure your spot.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6} yOffset={20} scale={0.9}>
            <a href="/contact" className="bg-primary-container text-on-primary-container px-12 py-5 rounded font-black text-xl uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 inline-flex items-center justify-center">
              Book Your Strategy Call
            </a>
          </ScrollReveal>

          
          <ScrollReveal delay={0.8} yOffset={10} isContainer staggerChildren={0.2} className="mt-8 flex justify-center gap-8 text-neutral-500">
            <RevealItem className="flex items-center gap-2">
              <Icon name="check_circle" className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold uppercase tracking-widest">Global Reach</span>
            </RevealItem>
            <RevealItem className="flex items-center gap-2">
              <Icon name="check_circle" className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold uppercase tracking-widest">Premium Assets</span>
            </RevealItem>
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </>
  );
}
