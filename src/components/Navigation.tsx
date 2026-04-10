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

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,42,42,0.1)]">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/"
            className="text-2xl font-black uppercase tracking-tighter text-primary font-headline"
          >
            HPF Media
          </Link>

          <div className="hidden items-center gap-10 text-xs font-bold uppercase tracking-tighter md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded px-2 py-1 transition-colors duration-300 ${
                    isActive
                      ? "border-b-2 border-primary pb-1 text-primary"
                      : "text-neutral-500 hover:bg-white/5 hover:text-neutral-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <button className="rounded bg-primary-container px-6 py-2.5 font-bold uppercase tracking-wide text-on-primary-container transition-all duration-300 hover:scale-95 active:scale-90">
              Inquire
            </button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors duration-300 hover:bg-white/[0.08] md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              key="mobile-nav-backdrop"
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />

            <motion.aside
              key="mobile-nav-panel"
              id="mobile-navigation"
              className="fixed inset-x-4 top-20 z-50 overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-950/95 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:hidden"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-2">
                {links.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-2xl px-4 py-4 text-base font-bold uppercase tracking-[0.22em] transition-colors duration-300 ${
                        isActive
                          ? "bg-primary text-black"
                          : "bg-white/[0.03] text-white hover:bg-white/[0.07]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <button
                  type="button"
                  className="w-full rounded-2xl bg-primary-container px-6 py-4 font-bold uppercase tracking-[0.22em] text-on-primary-container transition-transform duration-300 active:scale-[0.98]"
                >
                  Inquire
                </button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
