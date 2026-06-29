"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
 


const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Our Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

function getLinkClasses(isActive: boolean) {
  return [
    "rounded-full px-4 py-2 text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60",
    isActive
      ? "bg-white/14 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]"
      : "text-white/70 hover:text-white hover:bg-white/8",
  ].join(" ");
}

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed top-4 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 px-4">
      <nav className="pointer-events-auto rounded-full border border-white/20 bg-black/30 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="group flex min-h-12 items-center gap-3 rounded-full pr-4 text-white transition-opacity duration-300 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
              <Image
                src="/logo.jpg"
                alt="HPF Media Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="flex flex-col leading-none">
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.34em] text-white/55">
                Agency
              </span>

              <span className="text-base font-semibold tracking-[0.18em] text-white">
                HPF Media
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={getLinkClasses(pathname === link.href)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mx-2 h-4 w-[1px] bg-white/10" />
            <Link 
              href="https://www.instagram.com/hpfmedia?igsh=ODZxejNxdXlic3Zv&utm_source=qr" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full text-white/50 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <Icon name="instagram" className="h-5 w-5" />
            </Link>
            <Link 
              href="https://wa.me/971555214667" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full text-white/50 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
            </Link>
          </div>



          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors duration-300 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60 md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`pointer-events-auto mt-3 overflow-hidden rounded-[2rem] border border-white/20 bg-black/40 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-200 md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={[
                  "rounded-[1.25rem] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60",
                  isActive
                    ? "bg-white/14 text-white"
                    : "text-white/72 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="my-2 h-[1px] w-full bg-white/10" />
          <Link
            href="https://www.instagram.com/hpfmedia?igsh=ODZxejNxdXlic3Zv&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 rounded-[1.25rem] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/72 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            <Icon name="instagram" className="h-5 w-5" />
            Instagram
          </Link>
          <Link
            href="https://wa.me/971555214667"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 rounded-[1.25rem] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/72 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            WhatsApp
          </Link>
        </div>


      </div>
    </div>
  );
}
