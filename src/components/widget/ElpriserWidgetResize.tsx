"use client";
// Fælles komponent fra el-feed (examples/site/components/widget/) — ret den dér, ikke her.
import { useEffect } from "react";

const MESSAGE = "elpriser-widget:height";

/**
 * Holder iframen fra Elpriser.dk lige så høj som kortet i den: kortet sender `{ type, height }` ved montering, ved
 * hver størrelsesændring og når skrifterne er inde. Kun beskeder fra elpriser.dk og kun til den iframe, de kom fra
 * (event.source) — så flere kort på én side får hver sin højde.
 */
export default function ElpriserWidgetResize({ origin }: { origin: string }) {
  useEffect(() => {
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
