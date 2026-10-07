"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "@/lib/gsap";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "crimson" | "ghost" | "bone";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

const variants = {
  crimson: "bg-crimson text-bone",
  bone: "bg-bone text-ink",
  ghost: "border border-bone/25 text-bone",
};

const fills = {
  crimson: "bg-bone",
  bone: "bg-crimson",
  ghost: "bg-bone",
};

const hoverText = {
  crimson: "group-hover:text-ink",
  bone: "group-hover:text-bone",
  ghost: "group-hover:text-ink",
};

/** Primary CTA: a wipe fill on hover, and a gentle pull toward the pointer on fine-pointer devices. */
export default function MagneticButton({
  href,
  children,
  variant = "crimson",
  size = "md",
  className,
  external,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    gsap.to(ref.current, {
      x: (e.clientX - r.left - r.width / 2) * 0.25,
      y: (e.clientY - r.top - r.height / 2) * 0.35,
      duration: 0.6,
      ease: "power3.out",
    });
  };
  const onLeave = () => {
    if (ref.current) gsap.to(ref.current, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.4)" });
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full font-medium tracking-tight",
    size === "lg" ? "px-9 py-5 text-base md:text-lg" : "px-6 py-3.5 text-sm",
    variants[variant],
    className
  );

  const inner = (
    <>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 origin-bottom scale-y-0 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:scale-y-100",
          fills[variant]
        )}
      />
      <span className={cn("relative z-10 flex items-center gap-3 transition-colors duration-500", hoverText[variant])}>
        {children}
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </>
  );

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={classes}
        data-cursor="link"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={classes}
      data-cursor="link"
    >
      {inner}
    </Link>
  );
}
