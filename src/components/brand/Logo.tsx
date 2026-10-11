import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { color } from "@/lib/theme";
import { CHROME, type NavLang } from "@/components/layout/nav";

/**
 * Familiens bomærke: Elpriser.dk's navy squircle med den grønne lynbolt (samme sti som i
 * elpriser-dk og appen), så Strømforbrug.dk læses som et site af Elpriser.dk. `currentColor`
 * styrer kvadratet, så mærket virker på lys bund (navy) og på navy (hvid/15, hvid bolt).
 */
export function LogoMark({ size = 36, className = "", bolt = color.logoBolt }: { size?: number; className?: string; bolt?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden className={className}>
      <rect width="64" height="64" rx="18" fill="currentColor" />
      <path
        d="M34.7 8.7 10.7 40.7h18.6l-2.7 21.3 24-32H32l2.7-21.3z"
        fill={bolt}
        stroke={bolt}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * »En del af Elpriser.dk« — familielinjen under ordmærket. Et almindeligt link (dofollow, samme
 * fane) efter ejerens beslutning 11. okt. 2026: forbindelsen skal være synlig, ikke gemt.
 */
export function FamilyLine({ inverted = false, className = "" }: { inverted?: boolean; className?: string }) {
  return (
    <a
      href={SITE_CONFIG.parent.url}
      data-family-link
      className={`inline-flex items-center gap-1 whitespace-nowrap text-[11px] font-medium leading-none tracking-wide ${inverted ? "text-white/60 hover:text-white" : "text-ink-muted hover:text-ink"} ${className}`}
    >
      En del af <span className={inverted ? "text-white" : "text-accent"}>el</span>
      <span className={inverted ? "text-white" : "text-ink"}>priser</span>
      <span className={inverted ? "text-white/60" : "text-brand-500"}>.dk</span>
    </a>
  );
}

/** 20 px på telefoner: ordmærke, mærke, familielinje og menuknap skal kunne stå på 360 px. */
export default function Logo({ inverted = false, lang = "da", className = "", family = true }: { inverted?: boolean; lang?: NavLang; className?: string; family?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Link
        href="/"
        aria-label={`${SITE_CONFIG.name} – ${CHROME[lang].home}`}
        className={`inline-flex min-w-0 items-center gap-2 whitespace-nowrap font-heading text-[15px] font-bold tracking-tight min-[380px]:text-[17px] sm:gap-2.5 sm:text-[22px] ${inverted ? "text-white" : "text-ink"}`}
      >
        <LogoMark size={28} className={`shrink-0 min-[380px]:h-8 min-[380px]:w-8 sm:h-9 sm:w-9 ${inverted ? "text-white/15" : "text-ink"}`} bolt={inverted ? color.surface : color.logoBolt} />
        <span className="flex flex-col leading-none">
          <span>
            <span className={inverted ? "text-white" : "text-accent"}>strøm</span>forbrug<span className={inverted ? "text-white/60" : "text-brand-500"}>.dk</span>
          </span>
        </span>
      </Link>
      {/* Tailwind v4 lader `inline-flex` vinde over `hidden` i samme klasseliste — derfor en wrapper. */}
      {family && (
        <span className="hidden lg:inline-flex">
          <FamilyLine inverted={inverted} />
        </span>
      )}
    </span>
  );
}
