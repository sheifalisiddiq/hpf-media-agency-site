"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(255,42,42,0.1)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-2xl font-black tracking-tighter text-primary uppercase font-headline">
          HPF Media
        </Link>
        <div className="hidden md:flex items-center gap-10 tracking-tighter uppercase font-bold text-xs">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 px-2 py-1 rounded ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-neutral-500 hover:text-neutral-100 hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded font-bold uppercase tracking-wide hover:scale-95 active:scale-90 transition-all duration-300">
          Inquire
        </button>
      </div>
    </nav>
  );
}
