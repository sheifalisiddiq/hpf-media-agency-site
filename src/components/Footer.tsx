import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-screen-2xl mx-auto">
        <div className="space-y-4 mb-8 md:mb-0">
          <div className="text-xl font-black text-primary font-headline tracking-tighter">HPF MEDIA</div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-600 font-light">
            Copyright 2024 HPF Media. Organic growth content for UAE brands.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
            <Link href="#" className="text-neutral-500 hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-primary transition-colors duration-300">
              Careers
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-primary transition-colors duration-300">
              Press
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
