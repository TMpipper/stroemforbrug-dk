"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/brand/Logo";
import { CHROME, CTA, NAV, NAV_SECONDARY, REGIONS, type NavItem, type NavLang } from "./nav";

/**
 * Menuen på telefoner og tablets: en <dialog> som skuffe fra højre.
 *
 * Native dialog frem for en egen overlay: Escape, fokusfælde og baggrundsklik følger
 * med gratis, og `usePathname` (ikke useSearchParams — det ville tømme den statiske
 * HTML) lukker den, når man har valgt en side. Under hovedmenuen: de sekundære sider og
 * de fire landsdele som chips — byerne selv står i footerens bybånd.
 */
export default function MobileNav({ lang = "da", items, secondary: secondaryItems }: { lang?: NavLang; items?: NavItem[]; secondary?: NavItem[] }) {
  const ref = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const t = CHROME[lang];
  const cta = CTA[lang];
  const primary = items ?? NAV[lang];
  const secondary = secondaryItems ?? NAV_SECONDARY[lang];

  const open = () => ref.current?.showModal();
  const close = () => ref.current?.close();

  useEffect(() => { ref.current?.close(); }, [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={t.openMenu}
        aria-haspopup="dialog"
        aria-controls="mobile-nav"
        className="inline-flex h-11 w-11 items-center justify-center rounded-pill text-ink hover:bg-brand-50 min-[1360px]:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>
      <dialog
        id="mobile-nav"
        ref={ref}
        onClick={(e) => { if (e.target === ref.current) close(); }}
        className="m-0 ml-auto h-dvh max-h-none w-[86vw] max-w-sm bg-surface p-0 text-ink shadow-lift backdrop:bg-brand/50 backdrop:backdrop-blur-sm open:flex open:flex-col"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Logo lang={lang} />
          <button type="button" onClick={close} aria-label={t.closeMenu} className="inline-flex h-11 w-11 items-center justify-center rounded-pill hover:bg-brand-50">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label={t.mobileMenu}>
          {primary.map((n) => (
            <Link key={n.href} href={n.href} onClick={close} className="block rounded-card px-3 py-3.5 text-lg font-medium text-ink hover:bg-brand-50">
              {n.label}
            </Link>
          ))}
          {secondary.length > 0 && (
            <div className="mt-2 border-t border-border pt-3">
              {secondary.map((n) => (
                <Link key={n.href} href={n.href} onClick={close} className="block rounded-card px-3 py-2.5 text-base text-ink-muted hover:bg-brand-50 hover:text-ink">
                  {n.label}
                </Link>
              ))}
            </div>
          )}
          {t.regions && (
            <div className="mt-2 border-t border-border px-3 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{t.regions}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {REGIONS.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      onClick={close}
                      className="inline-flex rounded-pill border border-border px-3 py-1.5 text-sm text-ink-body transition-colors hover:border-brand-500 hover:text-ink"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
        <div className="border-t border-border p-5">
          <Link href={cta.href} onClick={close} className="flex w-full items-center justify-center rounded-pill bg-accent px-6 py-3.5 text-base font-semibold text-on-accent shadow-md hover:bg-accent-hover">
            {cta.label}
          </Link>
          {t.drawerNote && <p className="mt-2 text-center text-xs text-ink-muted">{t.drawerNote}</p>}
        </div>
      </dialog>
    </>
  );
}
