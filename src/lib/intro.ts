/** Seconds the hero waits so its entrance lands as the preloader lifts. Short once the preloader has played. */
export function introDelay() {
  if (typeof document === "undefined") return 0.2;
  return document.documentElement.dataset.introSeen ? 0.15 : 1.9;
}
