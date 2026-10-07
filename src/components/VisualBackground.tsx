/** Fixed ink backdrop: film grain plus a soft vignette. No colour wash, so content carries the crimson. */
export default function VisualBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.65)_100%)]" />
      <div className="grain" />
    </div>
  );
}
