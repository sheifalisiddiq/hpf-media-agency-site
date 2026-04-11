import Icon from "@/components/Icon";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Contact() {
  return (
    <>
      <section className="min-h-screen cinematic-bg flex items-center justify-center py-20 px-4 md:px-12 overflow-hidden relative text-white">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-container rounded-full blur-[160px]"></div>
        </div>
        
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 pt-16">
          {/* Left Side: Content */}
          <RevealOnScroll className="space-y-12">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.2em] text-primary font-bold">Contact Us</span>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-white font-headline">
                Work With Us.
              </h1>
            </div>
            
            <div className="space-y-8 max-w-lg">
              <p className="text-lg text-on-surface-variant leading-relaxed font-light">
                HPF Media is an exclusive boutique agency for high-growth enterprises. We don't just manage media; we architect influence. 
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <Icon name="location_on" className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-primary mb-1">Headquarters</h4>
                    <p className="text-white font-medium">Dubai Design District, Building 4<br />Dubai, United Arab Emirates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="mail" className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-primary mb-1">Direct Inquiry</h4>
                    <p className="text-white font-medium">concierge@hpfmedia.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtle Brand Texture */}
            <div className="hidden lg:block opacity-[0.03] select-none pointer-events-none absolute bottom-0 left-0">
              <span className="text-[12rem] font-black tracking-tighter leading-none font-headline">HPF</span>
            </div>
          </RevealOnScroll>
          
          {/* Right Side: Form */}
          <RevealOnScroll className="glass-panel p-6 md:p-12 rounded-lg border border-white/5 shadow-[0_48px_48px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-white font-headline">Strategy Audit</h2>
            <form className="space-y-8">
              <div className="relative">
                <input 
                  type="text" 
                  id="fullname" 
                  name="fullname" 
                  placeholder=" " 
                  className="w-full bg-black/40 border-0 border-b border-white/10 py-4 px-0 text-white focus:ring-0 focus:border-primary transition-all duration-300 peer"
                />
                <label 
                  htmlFor="fullname" 
                  className="absolute left-0 top-4 text-white/50 text-sm uppercase tracking-wider transition-all duration-300 pointer-events-none peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-90"
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
                    className="w-full bg-black/40 border-0 border-b border-white/10 py-4 px-0 text-white focus:ring-0 focus:border-primary transition-all duration-300 peer"
                  />
                  <label 
                    htmlFor="domain" 
                    className="absolute left-0 top-4 text-white/50 text-sm uppercase tracking-wider transition-all duration-300 pointer-events-none peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-90"
                  >
                    Company Domain
                  </label>
                </div>
                
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder=" " 
                    className="w-full bg-black/40 border-0 border-b border-white/10 py-4 px-0 text-white focus:ring-0 focus:border-primary transition-all duration-300 peer"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 top-4 text-white/50 text-sm uppercase tracking-wider transition-all duration-300 pointer-events-none peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-90"
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
                  className="w-full bg-black/40 border-0 border-b border-white/10 py-4 px-0 text-white/70 focus:ring-0 focus:border-primary transition-all duration-300 appearance-none"
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
                  placeholder=" " 
                  rows={3}
                  className="w-full bg-black/40 border-0 border-b border-white/10 py-4 px-0 text-white focus:ring-0 focus:border-primary transition-all duration-300 peer resize-none"
                ></textarea>
                <label 
                  htmlFor="objectives" 
                  className="absolute left-0 top-4 text-white/50 text-sm uppercase tracking-wider transition-all duration-300 pointer-events-none peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-90"
                >
                  Growth Objectives
                </label>
              </div>
              
              <div className="pt-4">
                <button 
                  type="button" 
                  className="w-full bg-gradient-to-r from-primary-container to-red-500 text-white font-bold py-5 rounded uppercase tracking-widest text-sm shadow-xl hover:shadow-primary-container/20 transition-all duration-500 ease-out active:scale-[0.98]"
                >
                  Apply for Consultation
                </button>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
