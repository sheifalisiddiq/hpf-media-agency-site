"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { endTransition } from "@/lib/routeTransition";

/** Re-mounts on every navigation: a crimson curtain lifts off the incoming page. Skipped on first load. */
let firstRender = true;

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isFirst] = useState(() => firstRender);

  useEffect(() => {
    firstRender = false;
    endTransition();
  }, [pathname]);

  if (isFirst) return <>{children}</>;

  return <div className="route-page">{children}</div>;
}
