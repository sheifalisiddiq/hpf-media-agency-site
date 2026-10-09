"use client";

import { useEffect, useRef } from "react";
import { registerCurtainElement, installNavigationGuard } from "@/lib/routeTransition";

/** Persistent route-change curtain: mounted once in layout.tsx, never torn down by navigation. */
export default function RouteTransitionCurtain() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerCurtainElement(ref.current);
    installNavigationGuard();
    return () => registerCurtainElement(null);
  }, []);

  return <div ref={ref} className="route-curtain" aria-hidden />;
}
