// Fælles komponent fra el-feed (examples/site/components/app-promo/) — ret den dér, ikke her.
import type { CSSProperties } from "react";

/**
 * Promoens farver og former som CSS-variabler: sitet kan sætte `--app-promo-*` i sin globals.css
 * (én alias-blok), ellers bruges Elpriser.dk's egne værdier — appens farver. Komponenterne bruger
 * kun `bg-(--ap-…)`-klasser, så de virker på alle sites uanset sitets token-navne.
 */
export const PROMO_VARS = {
  "--ap-ink": "var(--app-promo-ink, #0B2A4A)",
  "--ap-body": "var(--app-promo-body, #334155)",
  "--ap-muted": "var(--app-promo-muted, #5B6B80)",
  "--ap-surface": "var(--app-promo-surface, #FFFFFF)",
  "--ap-tint": "var(--app-promo-tint, #EEF7F2)",
  "--ap-accent": "var(--app-promo-accent, #0B8457)",
  "--ap-accent-hover": "var(--app-promo-accent-hover, #096B46)",
  "--ap-on-accent": "var(--app-promo-on-accent, #FFFFFF)",
  "--ap-link": "var(--app-promo-link, #1E4F8F)",
  "--ap-radius": "var(--app-promo-radius, 12px)",
  "--ap-pill": "var(--app-promo-pill, 9999px)",
  "--ap-shadow": "var(--app-promo-shadow, 0 8px 16px rgba(11, 42, 74, 0.10))",
  "--ap-font-heading": "var(--app-promo-font-heading, inherit)",
} as CSSProperties;

export const PILL =
  "inline-flex min-h-11 items-center gap-2 rounded-(--ap-pill) bg-(--ap-accent) px-5 text-sm font-semibold text-(--ap-on-accent) no-underline shadow-sm transition-colors hover:bg-(--ap-accent-hover) motion-reduce:transition-none";

/** min-h-6: a 24 px tap target (WCAG 2.5.8) for the standalone text links. */
export const LINK = "inline-flex min-h-6 items-center gap-1.5 text-sm font-semibold text-(--ap-link) no-underline hover:underline";
