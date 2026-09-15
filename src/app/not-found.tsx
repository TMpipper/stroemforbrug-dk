import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

/**
 * Without this, the 404 inherited the homepage's title and description, so a
 * missing page announced itself as "Strømforbrug (2026) → Se hvad dine
 * apparater bruger i strøm" — confusing for anyone who lands on one, and a
 * duplicate title in any crawl.
 */
export const metadata: Metadata = {
  title: "Siden findes ikke (404) — Strømforbrug.dk",
  description:
    "Siden her findes ikke. Find i stedet strømforbruget for et bestemt apparat, beregn dit eget forbrug, eller se hvad en gennemsnitlig husstand bruger om året.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_CONFIG.url}/` },
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
      <p className="text-sm font-medium tracking-wide text-brand-700 uppercase mb-3">404</p>
      <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-4">
        Siden findes ikke
      </h1>
      <p className="text-ink-700 mb-8">
        Måske er den flyttet, eller også er linket forkert. Herunder er de steder,
        folk oftest skal hen.
      </p>
      <div className="grid sm:grid-cols-3 gap-3 text-left">
        {[
          { href: "/", label: "Alle apparater", desc: "Se strømforbrug for 43 apparater" },
          { href: "/beregner/", label: "Strømberegner", desc: "Beregn dit eget forbrug" },
          { href: "/husstand/", label: "Normalt forbrug", desc: "Hvad bruger en husstand som din?" },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="block p-4 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-surface-alt transition-colors"
          >
            <span className="block font-medium text-ink-900">{l.label}</span>
            <span className="block text-sm text-ink-600 mt-1">{l.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
