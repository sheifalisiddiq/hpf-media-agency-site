import Link from "next/link";
import Image from "next/image";
import { navLinks, site, valueNames } from "@/content/site";
import ParallaxLayer from "./motion/ParallaxLayer";

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-line bg-black">
      <div className="wrap grid gap-12 pb-10 pt-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="mb-6 flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15">
              <Image src="/logo.jpg" alt="HPF Media Logo" fill sizes="48px" className="object-cover" />
            </div>
            <span className="text-xl font-black uppercase tracking-tighter text-white">HPF Media</span>
          </div>
          <span className="crimson-bar" />
          <p className="t-h3 mt-6 max-w-md text-bone">
            Marketing that never asks you to compromise.
          </p>
          <Link
            href="/clarity-check"
            className="t-label mt-8 inline-flex items-center gap-3 border-b border-crimson pb-1 text-bone transition-colors hover:text-crimson-bright"
          >
            Start your free Clarity Check <span aria-hidden>→</span>
          </Link>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <p className="t-label mb-5 text-mute">Explore</p>
          <ul className="space-y-2.5">
            {[{ name: "Home", href: "/" }, ...navLinks, { name: "Clarity Check", href: "/clarity-check" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-bone/75 transition-colors hover:text-bone">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="t-label mb-5 text-mute">Talk to us</p>
          <ul className="space-y-2.5 text-bone/75">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-bone">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-bone">
                WhatsApp {site.phone}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-bone">
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li className="text-mute">{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="relative" aria-hidden>
        <ParallaxLayer y={-30}>
          <p className="select-none whitespace-nowrap px-[var(--gutter)] font-display text-[17vw] leading-[0.85] text-bone/[0.06]">
            HPF Media
          </p>
        </ParallaxLayer>
      </div>

      <div className="wrap flex flex-col gap-4 border-t border-line py-6 text-xs text-mute md:flex-row md:items-center md:justify-between">
        <p className="t-label">{valueNames.join(" · ")}</p>
        <div className="flex gap-6">
          <span>© {new Date().getFullYear()} HPF Media</span>
          <Link href="/privacy" className="hover:text-bone">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-bone">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
