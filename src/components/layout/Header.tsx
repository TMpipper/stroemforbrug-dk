import Link from "next/link";
import Logo from "@/components/brand/Logo";
import MobileNav from "./MobileNav";
import { CHROME, CTA, liveNav, liveSecondary, type NavLang } from "./nav";

/**
 * Serverkomponent — al tilstand bor i MobileNav. <header> og <nav> er semantiske med
 * vilje: audit-claims fjerner dem, før den leder efter superlativer, så menupunkter som
 * "Billigste elselskab" ikke tæller som påstande.
 *
 * Pillen vises først fra xl (1280): fem punkter, mærket, knappen og mellemrummene skal
 * stå på én linje; ved md ombrydes punkterne, og pillen bliver højere end headeren.
 * Byerne står ikke her længere — de bor i footerens bybånd og i skuffens landsdelschips.
 */
export default function Header({ lang = "da" }: { lang?: NavLang }) {
  const t = CHROME[lang];
  const cta = CTA[lang];
  const items = liveNav(lang);
  const secondary = liveSecondary(lang);
  return (
    <header className="sticky top-0 z-40 bg-bg md:bg-bg/85 md:backdrop-blur-md">
      <div className="container-site flex h-20 items-center justify-between gap-2 sm:gap-4">
        <Logo lang={lang} />
        <nav aria-label={t.mainMenu} className="hidden items-center rounded-pill border border-border bg-surface px-2 py-1 shadow-sm min-[1360px]:flex">
          {items.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="whitespace-nowrap rounded-pill px-2.5 py-2 text-[14px] font-medium text-ink-body transition-colors hover:bg-brand-50 hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={cta.href}
            className="hidden items-center whitespace-nowrap rounded-pill bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent shadow-sm transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            {cta.label}
          </Link>
          <MobileNav lang={lang} items={items} secondary={secondary} />
        </div>
      </div>
    </header>
  );
}
