import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  label?: string;
};

/** Infinite CSS marquee. Content is rendered twice; the copy is hidden from assistive tech. */
export default function Marquee({
  children,
  className,
  trackClassName,
  duration = 40,
  reverse = false,
  label,
}: MarqueeProps) {
  return (
    <div
      className={cn("marquee overflow-hidden", className)}
      aria-label={label}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <div
        className={cn(
          "marquee-track flex w-max motion-reduce:animate-none",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        <div className={cn("flex shrink-0 items-center", trackClassName)}>{children}</div>
        <div className={cn("flex shrink-0 items-center", trackClassName)} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
