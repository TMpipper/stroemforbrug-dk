// Fælles komponent fra el-feed (examples/site/components/app-promo/) — ret den dér, ikke her.
"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { appClickTarget } from "@/lib/feed/app-promo";

/**
 * Hvert klik på appens knapper (`data-app-cta="<placering>:<mål>"`) bliver Vercel-hændelsen
 * `app_click` {placement, target, lp} — samme navn og felter som på Elpriser.dk. Capture-fasen,
 * så intet andet klik-handler kan sluge den. Monteres én gang i sitets layout.
 */
export default function AppClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("[data-app-cta]") as HTMLElement | null;
      if (!el) return;
      const [placement = "ukendt", kind = "ukendt"] = (el.dataset.appCta ?? "").split(":");
      const href = el instanceof HTMLAnchorElement ? el.href : null;
      try {
        track("app_click", { placement, target: appClickTarget(href, kind, location.origin), lp: location.pathname });
      } catch {
        /* analytics blokeret — et klik må aldrig fejle på grund af måling */
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
