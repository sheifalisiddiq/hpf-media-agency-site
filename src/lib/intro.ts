export const LOADER_KEY = "hpf-intro-seen";

/** Seconds the hero should wait so its entrance lands just as the intro curtain lifts. */
export function introDelay() {
  if (typeof document === "undefined") return 0.2;
  return document.documentElement.dataset.introSeen ? 0.15 : 1.55;
}
