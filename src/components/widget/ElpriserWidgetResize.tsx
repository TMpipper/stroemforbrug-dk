"use client";
// Fælles komponent fra el-feed (examples/site/components/widget/) — ret den dér, ikke her.
import { useEffect } from "react";

const MESSAGE = "elpriser-widget:height";

/**
 * Holder iframen fra Elpriser.dk lige så høj som kortet i den: kortet sender `{ type, height }` ved montering, ved
 * hver størrelsesændring og når skrifterne er inde. Kun beskeder fra elpriser.dk og kun til den iframe, de kom fra
 * (event.source) — så flere kort på én side får hver sin højde.
 */
/** Kortets målte højder pr. bredde (samme tabel som public/widget.js på elpriser.dk): under 768 px er kortet en timeliste. */
const defaultHeight = (w: number): number => (w < 360 ? 2250 : w < 430 ? 2200 : w < 600 ? 2160 : w < 768 ? 1960 : w < 800 ? 1320 : 1090);

export default function ElpriserWidgetResize({ origin }: { origin: string }) {
  useEffect(() => {
    // Før iframen (lazy) er hentet: sæt rammen efter dens bredde, så værtssiden ikke springer, når beskeden kommer.
    for (const frame of document.querySelectorAll<HTMLIFrameElement>("[data-elpriser-widget] iframe")) {
      if (!frame.style.minHeight || !frame.clientWidth) continue; // fast højde (hoejde) har ingen min-height
      const h = `${defaultHeight(frame.clientWidth)}px`;
      frame.style.height = h;
      frame.style.minHeight = h;
    }
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== origin) return;
      const data = e.data as { type?: string; height?: number } | null;
      if (!data || data.type !== MESSAGE || typeof data.height !== "number" || !Number.isFinite(data.height) || data.height < 100) return;
      for (const frame of document.querySelectorAll<HTMLIFrameElement>("[data-elpriser-widget] iframe")) {
        if (frame.contentWindow !== e.source || !frame.offsetWidth) continue;
        frame.style.height = `${Math.ceil(data.height)}px`;
        frame.style.minHeight = "";
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [origin]);
  return null;
}
