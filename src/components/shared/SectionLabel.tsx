import { cn } from "@/lib/utils";

/** "PART 0X — Title" marker, echoing the Corporate DNA document. */
export default function SectionLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("t-label flex items-center gap-4 text-mute", className)}>
      <span className="h-1 w-8 bg-crimson" aria-hidden />
      {index && <span className="text-crimson-bright">{index}</span>}
      <span>{children}</span>
    </p>
  );
}
