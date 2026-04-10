"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
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
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto rounded-full border border-white/20 bg-black/30 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="group flex min-h-12 items-center gap-3 rounded-full pr-4 text-white transition-opacity duration-300 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-black uppercase tracking-[0.24em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
              H
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.34em] text-white/55">
                Studio
              </span>
              <span className="text-base font-semibold tracking-[0.18em] text-white">
                HPF Media
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={getLinkClasses(isActive)}
                >
                  {link.name}
                </Link>
              );
            })}
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
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="mobile-nav-panel"
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto mt-3 overflow-hidden rounded-[2rem] border border-white/20 bg-black/40 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden"
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
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
