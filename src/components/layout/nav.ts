/**
 * Den ene kilde til menuen — Header, MobileNav og Footer læser herfra.
 * Afsluttende skråstreg overalt: `trailingSlash: true` giver ellers et 308.
 */
import { isLive } from "@/lib/publish";

export type NavLang = "da";

export interface NavItem {
  href: string;
  label: string;
  /** YYYY-MM-DD — punktet vises først fra den dag (samme regel som siden selv). */
  publishDate?: string;
}

/** Hovedmenuen: pillen fra xl og øverst i skuffen. */
export const NAV: Record<NavLang, NavItem[]> = {
  da: [
    { href: "/", label: "Strømforbrug" },
    { href: "/apparater/", label: "Apparater", publishDate: "2026-10-11" },
    { href: "/beregner/", label: "Beregner" },
    { href: "/husstand/", label: "Husstand" },
    { href: "/varmepumpe/", label: "Varmepumpe" },
    { href: "/elpriser/", label: "Elpriser", publishDate: "2026-10-11" },
    { href: "/sparetips/", label: "Sparetips" },
  ],
};

/** Sekundære links, kun i skuffen og footeren. */
export const NAV_SECONDARY: Record<NavLang, NavItem[]> = {
  da: [
    { href: "/gennemsnitligt/", label: "Gennemsnitligt strømforbrug" },
    { href: "/hvad-koster-en-kwh/", label: "Hvad koster en kWh?" },
    { href: "/stromslugere/", label: "Strømslugere i hjemmet" },
    { href: "/standby/", label: "Standby-forbrug" },
    { href: "/hvad-koster-det-at-lade-en-elbil/", label: "Lade en elbil" },
    { href: "/om-os/", label: "Om os" },
    { href: "/kontakt/", label: "Kontakt" },
  ],
};

/** Ingen landsdele på dette site — MobileNav læser listen og viser intet, når den er tom. */
export const REGIONS: NavItem[] = [];

/** Den grønne knap i headeren og nederst i skuffen. */
export const CTA: Record<NavLang, NavItem> = {
  da: { label: "Beregn dit forbrug", href: "/beregner/" },
};

export const CHROME: Record<
  NavLang,
  { mainMenu: string; mobileMenu: string; openMenu: string; closeMenu: string; home: string; regions?: string; drawerNote?: string }
> = {
  da: {
    mainMenu: "Hovedmenu",
    mobileMenu: "Mobilmenu",
    openMenu: "Åbn menu",
    closeMenu: "Luk menu",
    home: "forside",
    drawerNote: "Et site af Elpriser.dk · priser fra hele markedet",
  },
};

export function liveNav(lang: NavLang): NavItem[] {
  return NAV[lang].filter((n) => !n.publishDate || isLive(n.publishDate));
}

export function liveSecondary(lang: NavLang): NavItem[] {
  return NAV_SECONDARY[lang].filter((n) => !n.publishDate || isLive(n.publishDate));
}
