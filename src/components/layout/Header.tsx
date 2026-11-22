import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { Search } from "lucide-react";
import MobileNav from "./MobileNav";
import SearchBox from "@/components/search/SearchBox";
import { liveHubs } from "@/lib/catalogue";
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
  const categories = liveHubs().map((c) => ({ href: `/apparater/${c.slug}/`, label: c.label }));
  return (
    <header className="sticky top-0 z-40 bg-bg md:bg-bg/85 md:backdrop-blur-md">
      <div className="container-site flex h-20 items-center justify-between gap-2 sm:gap-4">
        <Logo lang={lang} />
        {/* Søgningen (22. nov. 2026): feltet fra md, et ikon til /soeg/ på telefonen — virker også uden JavaScript. */}
        <div className="hidden flex-1 justify-center px-2 md:flex min-[1360px]:flex-none min-[1360px]:px-0">
          <SearchBox variant="header" placeholder="Søg apparat …" />
        </div>
        <nav aria-label={t.mainMenu} className="hidden items-center rounded-pill border border-border bg-surface px-2 py-1 shadow-sm min-[1360px]:flex">
          {/* Logoet er forsiden; pillen giver pladsen til søgefeltet (22. nov. 2026). Skuffen har stadig punktet. */}
          {items.filter((n) => n.href !== "/").map((n) => (
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
          <Link href="/soeg/" aria-label="Søg" className="inline-flex h-11 w-11 items-center justify-center rounded-pill text-ink hover:bg-brand-50 md:hidden">
            <Search className="h-5 w-5" aria-hidden />
          </Link>
          <MobileNav lang={lang} items={items} secondary={secondary} categories={categories} />
        </div>
      </div>
    </header>
  );
}
