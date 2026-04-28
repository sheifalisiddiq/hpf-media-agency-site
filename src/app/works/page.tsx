// Portfolio page for HPF Media
import { Metadata } from "next";
import Icon from "@/components/Icon";
import ScrollReveal, { RevealItem } from "@/components/ScrollReveal";
import StaggerText from "@/components/StaggerText";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "Our Works",
  description: "Explore HPF Media's portfolio of high-impact social media content and video production for UAE brands.",
};

const videos = [
  { 
    src: "/IMG_2887.MOV", 
    title: "Cinematic Narrative", 
    category: "Video Production",
    description: "High-end visual storytelling tailored for social platforms."
  },
  { 
    src: "/IMG_2889.MOV", 
    title: "Brand Strategy", 
    category: "Social Media Growth",
    description: "Strategic content designed to increase reach and engagement."
  },
  { 
    src: "/IMG_2890.MOV", 
    title: "Personal Branding", 
    category: "Personal Brand",
    description: "Establishing authority through professional video content."
  },
  { 
    src: "/IMG_2892.MOV", 
    title: "Digital Edge", 
    category: "Web & Strategy",
    description: "Turning viewers into customers with high-conversion visuals."
  },
  {
    src: "/work1.MOV",
    title: "UAE Luxury Showcase",
    category: "Video Production",
    description: "Capturing the essence of luxury in the heart of the UAE."
  },
  {
    src: "/work2.MOV",
    title: "Business Growth Reel",
    category: "Social Media Growth",
    description: "Dynamic reels designed for maximum impact and retention."
  },
  {
    src: "/work3.MOV",
    title: "Event Highlights",
    category: "Video Production",
    description: "Professional event coverage with a cinematic touch."
  },
  {
    src: "/work4.mp4",
    title: "Product Feature",
    category: "Brand Strategy",
    description: "Highlighting product features through engaging visual content."
  },
  {
    src: "/work5.mp4",
    title: "Lifestyle Branding",
    category: "Personal Brand",
    description: "Building personal brands through lifestyle storytelling."
  },
  {
    src: "/work6.MOV",
    title: "Corporate Vision",
    category: "Web & Strategy",
    description: "Defining corporate identity through high-quality video production."
  }
];

export default function Works() {
  return (
    <>
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 pt-32 pb-20 bg-transparent text-on-surface overflow-hidden">
        <ScrollReveal className="max-w-4xl mx-auto z-10">
          <ScrollReveal yOffset={10} delay={0.2}>
            <span className="text-sm uppercase tracking-[0.3em] text-primary mb-6 block font-medium">Portfolio / Showcase</span>
          </ScrollReveal>
          
          <StaggerText
            tag="h1"
            text="Our Works."
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter font-headline mb-8 leading-[0.95] text-on-surface"
          />
          
          <ScrollReveal delay={0.4}>
            <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10 text-lg">
              Explore our recent projects and see how we help brands in the UAE dominate social media through premium video production.
            </p>
          </ScrollReveal>
        </ScrollReveal>
        
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Parallax speed={0.8} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-t from-red-600/20 to-transparent blur-3xl" />
        </div>
      </section>

      <section className="relative py-20 lg:py-24 px-6 md:px-8 mx-auto bg-transparent text-on-surface overflow-hidden">
        <div className="relative z-10 max-w-screen-2xl mx-auto">
          <ScrollReveal isContainer staggerChildren={0.2} scale={0.96} yOffset={30} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {videos.map((video, index) => (
              <RevealItem key={index} className="glass-card rounded-lg overflow-hidden group flex flex-col bg-black border border-white/5">
                <div className="relative aspect-video overflow-hidden bg-neutral-900">
                  <video 
                    src={video.src} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loop
                    muted
                    playsInline
                    controls
                    poster="/logo.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">{video.category}</span>
                    <div className="h-[1px] w-8 bg-primary/30" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4 uppercase tracking-tight">{video.title}</h3>
                  <p className="text-neutral-400 text-lg mb-8 line-clamp-2">{video.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                    <a 
                      href="https://wa.me/971509418430" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-primary transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
                    >
                      Inquire About Similar <Icon name="trending_flat" className="h-4 w-4" />
                    </a>
                    <Icon name="videocam" className="h-6 w-6 text-primary/40" />
                  </div>
                </div>
              </RevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="py-32 px-8 bg-transparent">
        <ScrollReveal scale={0.97} rotateX={2} className="max-w-5xl mx-auto glass-card rounded-lg p-16 text-center relative overflow-hidden bg-transparent text-on-surface border border-white/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          
          <StaggerText
            tag="h2"
            text="Ready to Scale?"
            className="text-5xl md:text-6xl font-headline font-bold mb-6 uppercase tracking-tighter"
          />
          
          <ScrollReveal delay={0.4}>
            <p className="text-neutral-400 text-xl mb-12 max-w-2xl mx-auto font-light">Transform your brand's digital presence with high-impact video content that drives results.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6} yOffset={20} scale={0.9}>
            <a href="/contact" className="bg-primary-container text-on-primary-container px-12 py-5 rounded font-black text-xl uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 inline-flex items-center justify-center">
              Start Your Project
            </a>
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </>
  );
}
