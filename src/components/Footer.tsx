import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center md:items-start space-y-4 mb-8 md:mb-0">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10">
              <Image 
                src="/logo.jpg" 
                alt="HPF Media Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="text-xl font-black text-white font-headline tracking-tighter">HPF MEDIA</div>
          </div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-600 font-light text-center md:text-left">
            Copyright {new Date().getFullYear()} HPF Media. Organic growth content for UAE brands.
          </p>

        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-6 mb-2">
            <Link 
              href="https://www.instagram.com/hpfmedia?igsh=ODZxejNxdXlic3Zv&utm_source=qr" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white/50 hover:text-primary transition-colors duration-300"
            >
              <Icon name="instagram" className="h-5 w-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Instagram</span>
            </Link>
            <Link 
              href="https://wa.me/971509418430" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white/50 hover:text-primary transition-colors duration-300"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
            </Link>
          </div>

          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
            <Link href="/privacy" className="text-neutral-500 hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-500 hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

