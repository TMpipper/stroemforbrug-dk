import Link from "next/link";
import Logo, { FamilyLine } from "@/components/brand/Logo";
import Wave from "@/components/marketing/Wave";
import { SITE_CONFIG } from "@/lib/config";
import { getPublishedAppliances } from "@/lib/appliances";
import { isLive } from "@/lib/publish";
import type { NavLang } from "./nav";

type Column = { title: string; links: Array<[href: string, label: string, publishDate?: string]> };

const COLS: Record<NavLang, Column[]> = {
  da: [
    {
      title: "Strømforbrug",
      links: [
        ["/", "Strømforbrug i Danmark"],
        ["/apparater/", "Alle apparater", "2026-10-12"],
        ["/stromslugere/", "Strømslugere i hjemmet"],
        ["/standby/", "Standby-forbrug"],
        ["/gennemsnitligt/", "Gennemsnitligt strømforbrug"],
        ["/sparetips/", "Sparetips"],
        ["/spare-paa-stroemmen/", "Spar på strømmen"],
      ],
    },
    {
      title: "Husstand og varme",
      links: [
        ["/husstand/", "Strømforbrug pr. husstand"],
        ["/husstand/1-person/", "1 person"],
        ["/husstand/2-personer/", "2 personer"],
        ["/husstand/familie/", "Familie"],
        ["/husstand/med-varmepumpe/", "Med varmepumpe"],
        ["/varmepumpe/", "Varmepumpens strømforbrug"],
        ["/varmepumpe/luft-til-luft/", "Luft-til-luft"],
        ["/varmepumpe/luft-til-vand/", "Luft-til-vand"],
      ],
    },
    {
      title: "Priser og værktøjer",
      links: [
        ["/beregner/", "Strømberegner"],
        ["/elpriser/", "Elpriser time for time", "2026-10-12"],
        ["/hvad-koster-en-kwh/", "Hvad koster en kWh?"],
        ["/hvad-koster-det-at-lade-en-elbil/", "Hvad koster det at lade en elbil?"],
      ],
    },
    {
      title: "Om",
      links: [
        ["/om-os/", "Om Strømforbrug.dk"],
        ["/metode/", "Sådan regner vi", "2026-10-12"],
        ["/kontakt/", "Kontakt"],
        ["/privatlivspolitik/", "Privatlivspolitik"],
        ["/sitemap.xml", "Sitemap"],
      ],
    },
  ],
};

/** <footer> er semantisk med vilje: audit-claims fjerner den, før den leder efter påstande. */
export default function Footer({ lang = "da" }: { lang?: NavLang }) {
  const cols = COLS[lang];
  const appliances = [...getPublishedAppliances()].sort((a, b) => a.name.localeCompare(b.name, "da"));
  return (
    <footer className="mt-24 text-white">
      <Wave fill="var(--color-ink)" />
      <div className="bg-ink">
        <div className="container-site grid gap-10 py-14 md:grid-cols-4 lg:grid-cols-6">
          <div className="md:col-span-4 lg:col-span-2">
            <Logo inverted lang={lang} family={false} />
            <p className="mt-3">
              <FamilyLine inverted className="text-xs" />
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {SITE_CONFIG.name} drives af {SITE_CONFIG.company.legalName} — samme selskab, samme data og samme metode som{" "}
              <a href={SITE_CONFIG.parent.url} className="underline hover:text-white" data-family-link>
                {SITE_CONFIG.parent.name}
              </a>
              . Siden har reklamelinks: klikker du videre til et elselskab, vi har en aftale med, kan vi få provision.
              Din pris er den samme, og apparaternes priser regnes med hele markedets marginalpris — aldrig en partners.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-white">{c.title}</p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {c.links
                  .filter(([, , publishDate]) => !publishDate || isLive(publishDate))
                  .map(([href, label]) => (
                    <li key={href}>
                      {href.endsWith(".xml") ? (
                        <a href={href} className="hover:text-white">{label}</a>
                      ) : (
                        <Link href={href} className="hover:text-white">{label}</Link>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10">
          <div className="container-site py-8">
            <p className="text-sm font-semibold text-white">Apparaternes strømforbrug</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {appliances.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${a.slug}/`}
                  className="rounded-pill bg-white/10 px-3 py-1 text-xs text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-site py-6 text-xs text-white/70">
            <p>
              © {new Date().getFullYear()} · {SITE_CONFIG.company.legalName} · CVR{" "}
              <a href={SITE_CONFIG.company.cvrUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                {SITE_CONFIG.company.cvr}
              </a>{" "}
              · {SITE_CONFIG.company.address} ·{" "}
              <a href={`mailto:${SITE_CONFIG.company.email}`} className="hover:text-white">{SITE_CONFIG.company.email}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
