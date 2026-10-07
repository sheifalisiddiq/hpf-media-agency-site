import { cn } from "@/lib/utils";

/** A CSS-rendered report cover, styled like the HPF documents: ink page, crimson bar, serif title. */
export default function DocumentCover({
  kicker,
  title,
  meta,
  className,
  tone = "ink",
}: {
  kicker: string;
  title: string;
  meta?: string;
  className?: string;
  tone?: "ink" | "bone";
}) {
  const bone = tone === "bone";
  return (
    <div
      className={cn(
        "relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden p-7 shadow-[0_40px_120px_rgba(0,0,0,0.6)] md:p-9",
        bone ? "bg-bone text-ink" : "border border-line bg-ink-2 text-bone",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className={cn("t-label", bone ? "text-ink/60" : "text-mute")}>HPF Media</span>
        <span className="h-1.5 w-8 bg-crimson" />
      </div>
      <div>
        <span className="mb-5 block h-1.5 w-12 bg-crimson" />
        <p className={cn("t-label mb-3", bone ? "text-ink/60" : "text-mute")}>{kicker}</p>
        <p className="font-display text-[2.4rem] leading-[0.95] tracking-tight md:text-5xl">{title}</p>
      </div>
      <div className={cn("flex items-end justify-between border-t pt-4", bone ? "border-ink/15" : "border-line")}>
        <span className={cn("t-label", bone ? "text-ink/55" : "text-mute")}>{meta ?? "Confidential"}</span>
        <span className={cn("t-label", bone ? "text-ink/55" : "text-mute")}>Truth · Dignity · Purity</span>
      </div>
      {/* page-edge sheen */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-3",
          bone ? "bg-gradient-to-r from-ink/10 to-transparent" : "bg-gradient-to-r from-bone/[0.06] to-transparent"
        )}
      />
    </div>
  );
}
