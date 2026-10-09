"use client";

import { ScrollTrigger } from "@/lib/gsap";

type LenisLike = {
  on: (event: "scroll", cb: () => void) => void;
  off: (event: "scroll", cb: () => void) => void;
} | null;

let curtainEl: HTMLDivElement | null = null;
let lenisInstance: LenisLike = null;
let watchdog: ReturnType<typeof setTimeout> | null = null;
let patched = false;

// Pure defense-in-depth — pushState only ever fires for navigations that go on to
// commit, per Next's own discarded-action bookkeeping, so a corresponding Template
// mount and its endTransition() call are effectively guaranteed to follow. Kept only
// to guard against the truly exceptional case (e.g. a thrown error aborting the
// destination page's render), so scroll-driven animations can never stay silently
// frozen sitewide.
const RESUME_WATCHDOG_MS = 4000;

export function registerCurtainElement(el: HTMLDivElement | null) {
  curtainEl = el;
}

export function registerLenis(instance: LenisLike) {
  lenisInstance = instance;
}

function killPageScrollTriggers() {
  // Scope to content inside <main> — the subtree this navigation is about to
  // unmount anyway. Leaves layout-level triggers (e.g. Footer's ParallaxLayer,
  // mounted once in layout.tsx and never recreated) untouched.
  ScrollTrigger.getAll().forEach((st) => {
    const trigger = st.trigger;
    if (trigger instanceof Element && trigger.closest("main")) st.kill();
  });
}

function clearWatchdog() {
  if (watchdog) {
    clearTimeout(watchdog);
    watchdog = null;
  }
}

function beginTransition() {
  // Cover the viewport instantly (plain class toggle, no CSS transition defined on
  // this property) and THEN kill ScrollTriggers, in the same synchronous call — the
  // browser cannot paint an intermediate "unpinned, curtain not yet visible" frame
  // because no yield point exists between these two DOM writes.
  curtainEl?.classList.remove("is-leaving");
  curtainEl?.classList.add("is-covering");
  killPageScrollTriggers();
  lenisInstance?.off("scroll", ScrollTrigger.update);
  clearWatchdog();
  watchdog = setTimeout(() => {
    lenisInstance?.on("scroll", ScrollTrigger.update);
  }, RESUME_WATCHDOG_MS);
}

/** Called from template.tsx once the destination page has mounted. */
export function endTransition() {
  lenisInstance?.on("scroll", ScrollTrigger.update);
  clearWatchdog();
  const el = curtainEl;
  if (!el) return;
  el.classList.add("is-leaving");
  const onEnd = () => {
    el.classList.remove("is-covering", "is-leaving");
    el.removeEventListener("animationend", onEnd);
  };
  el.addEventListener("animationend", onEnd);
}

function shouldTransition(url: string | URL | null | undefined): boolean {
  if (!url) return false;
  try {
    return new URL(url, window.location.href).pathname !== window.location.pathname;
  } catch {
    return false;
  }
}

/**
 * Next's App Router exposes no public "navigation start" event. Next's own
 * `HistoryUpdater` (next/dist/client/components/app-router.js) calls
 * `window.history.pushState`/`replaceState` exactly once per navigation, only once
 * that navigation's data has resolved and is about to commit — and only for
 * navigations that actually commit (superseded/discarded ones never call it, per
 * Next's own action-queue bookkeeping). Because `HistoryUpdater` renders before the
 * content tree containing <main>, React's deterministic mutation-phase traversal
 * runs our side effects in the SAME commit, strictly before <main>'s old children
 * are deleted — not merely "early," but provably immediately-before. Next also
 * wraps these same two methods internally (permanently, for the session); both
 * patches wrap-and-delegate to whatever was previously assigned, so they compose
 * safely regardless of mount order. `popstate` is handled separately since browser
 * back/forward doesn't call pushState/replaceState at all.
 */
export function installNavigationGuard() {
  if (patched || typeof window === "undefined") return;
  patched = true;

  const originalPush = window.history.pushState.bind(window.history);
  const originalReplace = window.history.replaceState.bind(window.history);

  window.history.pushState = function (data: unknown, unused: string, url?: string | URL | null) {
    if (shouldTransition(url)) beginTransition();
    return originalPush(data, unused, url);
  } as typeof window.history.pushState;

  window.history.replaceState = function (data: unknown, unused: string, url?: string | URL | null) {
    if (shouldTransition(url)) beginTransition();
    return originalReplace(data, unused, url);
  } as typeof window.history.replaceState;

  window.addEventListener("popstate", beginTransition);
}
