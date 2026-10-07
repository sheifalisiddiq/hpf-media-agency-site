"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks, site, valueNames } from "@/content/site";
import { useLenis } from "./SmoothScrollProvider";

export default function Navigation() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 240 && y > lastY.current + 4 ? true : y < lastY.current - 4 ? false : hidden);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hidden]);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
  }, [open, lenis]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          scrolled && !open ? "border-b border-line bg-ink/75 backdrop-blur-xl" : "border-b border-transparent"
        )}
      >
        <nav className="wrap flex h-16 items-center justify-between md:h-20" aria-label="Main">
          <Link href="/" className="group flex items-center gap-3" aria-label="HPF Media home">
            <span className="h-1.5 w-6 bg-crimson transition-[width] duration-500 group-hover:w-9" />
            <span className="font-display text-2xl leading-none tracking-tight text-bone md:text-[1.7rem]">
              HPF <span className="text-mute">Media</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "group relative px-4 py-2 text-sm tracking-tight transition-colors",
                    isActive(l.href) ? "text-bone" : "text-bone/60 hover:text-bone"
                  )}
                >
                  {l.name}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-crimson transition-transform duration-500",
                      isActive(l.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/clarity-check"
              className="hidden rounded-full bg-crimson px-5 py-2.5 text-sm font-medium text-bone transition-colors hover:bg-crimson-bright sm:inline-flex"
            >
              Free Clarity Check
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
            >
              <span className={cn("absolute h-px w-5 bg-bone transition-transform duration-500", open ? "rotate-45" : "-translate-y-[4px]")} />
              <span className={cn("absolute h-px w-5 bg-bone transition-transform duration-500", open ? "-rotate-45" : "translate-y-[4px]")} />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ink px-[var(--gutter)] pb-10 pt-28 transition-[clip-path] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden",
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        )}
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-2">
          {[{ name: "Home", href: "/" }, ...navLinks, { name: "Clarity Check", href: "/clarity-check" }].map((l, i) => (
            <li key={l.href} className="overflow-hidden">
              <Link
                href={l.href}
                tabIndex={open ? 0 : -1}
                className={cn(
                  "flex items-baseline gap-4 font-display text-[3.2rem] leading-[1.05] transition-[transform,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  open ? "translate-y-0" : "translate-y-full",
                  isActive(l.href) && l.href !== "/" ? "text-crimson" : "text-bone"
                )}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <span className="t-label text-mute">0{i + 1}</span>
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-4 border-t border-line pt-6">
          <div className="flex gap-6 text-sm text-bone/70">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              WhatsApp
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              Instagram
            </a>
            <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>
              Email
            </a>
          </div>
          <p className="t-label text-mute">{valueNames.join(" · ")}</p>
        </div>
      </div>
    </>
  );
}
