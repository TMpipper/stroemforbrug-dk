import Link from "next/link";
import { Plus } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { pageMeta } from "@/lib/pages";
import { PRICES_UPDATED } from "@/lib/prices-updated";
import { danishDate } from "@/lib/format";
import type { SitePrices } from "@/lib/prices";
import type { VerifiedSource } from "@/lib/sources";

export interface Source {
  name: string;
  url: string;
  /** Hvad kilden bruges til på siden — én sætning uden punktum, aldrig et tal skrevet i hånden. */
  what?: string;
}

interface Props {
  /** Sidens sti — datoerne kommer fra sideregistret. */
  path: string;
  /** Sidens priser, hvis siden har dem: giver tallenes dato og omfanget. */
  prices?: SitePrices | null;
  /** Sidens kilder ud over feedets faste (apparatets egne, verificerede). */
  sources?: (Source | VerifiedSource)[];
}

/**
 * Feedets faste kilder — står på hver side, fordi hver side regner med dem. Energi Data Service kræver
 * krediteringen (CC BY 4.0), og den står her, ét sted, i stedet for under hvert diagram.
 */
const BASE_SOURCES: Source[] = [
  { name: "elpris.dk (Forsyningstilsynet)", url: "https://elpris.dk/", what: "elselskabernes aftaler, tillæg og abonnementer, som de er indberettet — grundlaget for »billigste aftale« og markedets typiske tillæg" },
  { name: "Energi Data Service (Energinet)", url: "https://www.energidataservice.dk/", what: "spotpriser fra Nord Pools day-ahead-auktion, nettariffer og Energinets tariffer fra DataHub og elafgiften — leddene i marginalprisen" },
  { name: "Elpriser.dk", url: "https://elpriser.dk/", what: "feedet, timepriserne og beregningsmetoden, som Strømforbrug.dk deler med resten af familien" },
];

/** Én liste uden gentagelser: sidens egen forklaring vinder over den faste for samme adresse. */
export function mergeSources(extra: (Source | VerifiedSource)[]): Source[] {
  const key = (u: string) => u.replace(/\/+$/, "").toLowerCase();
  const out = new Map<string, Source>();
  for (const s of [...BASE_SOURCES, ...extra]) {
    if (!("url" in s) || !s.url) continue;
    const k = key(s.url);
    const prev = out.get(k);
    const next: Source = { name: s.name, url: s.url, what: (s as Source).what };
    out.set(k, prev ? { ...prev, ...next, what: next.what ?? prev.what } : next);
  }
  return [...out.values()];
}

/**
 * Hvem, hvordan og hvorfor — Googles tre spørgsmål til indhold, besvaret på siden selv — og sidens ene
 * kildeliste, foldet sammen under »Kilder« (familiens regel: ingen »Kilde:«-linjer under diagrammer og
 * tabeller; alle kilder ét sted nederst). Boksen bærer `data-shared`, så unikhedskontrollen ikke tæller
 * den med; kildelisten bærer `data-sources`, så audit-claims kan skelne den fra en kildelinje i designet.
 */
export default function WhoHowWhy({ path, prices, sources = [] }: Props) {
  const meta = pageMeta(path);
  const href = `${SITE_CONFIG.editorSlug}/`.replace(/\/\/$/, "/");
  const all = mergeSources(sources);
  const named = sources.filter((s) => !("url" in s) || !s.url).map((s) => s.name);

  return (
    <section data-shared aria-labelledby="hvem-hvordan-hvorfor" className="container-text my-12">
      <div className="rounded-card bg-bg-blue p-5 sm:p-6">
        <h2 id="hvem-hvordan-hvorfor" className="text-base font-semibold text-ink">
          Hvem står bag, hvordan er siden lavet, og hvorfor findes den?
        </h2>
        <dl className="mt-4 grid gap-4 text-sm leading-relaxed text-ink-body sm:grid-cols-3">
          <div>
            <dt className="font-semibold text-ink">Hvem</dt>
            <dd className="mt-1">
              Skrevet og gennemgået af{" "}
              <Link href={href} className="content-link">
                {SITE_CONFIG.editorName}
              </Link>
              , {SITE_CONFIG.editorRole.toLowerCase()}. Udgivet {danishDate(meta.published)}; teksten er sidst gennemgået{" "}
              {danishDate(meta.updated)}. Strømforbrug.dk er et site af{" "}
              <a href={SITE_CONFIG.parent.url} className="content-link" data-family-link>
                Elpriser.dk
              </a>
              .
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Hvordan</dt>
            <dd className="mt-1">
              Apparaternes forbrug er typetal fra energimærker, producenter og Energistyrelsen. Hver pris regnes ved visningen
              med markedets marginalpris fra Elpriser.dk&apos;s feed — spotpris, nettarif, afgifter og et typisk tillæg, uden
              abonnement{prices ? ` — priser fra ${danishDate(PRICES_UPDATED)}` : ""}. Teksten er skrevet af redaktøren; AI-værktøjer
              bruges til udkast og kontrol, aldrig til tal.{" "}
              <Link href="/metode/" className="content-link">
                Læs, hvordan vi regner
              </Link>
              .
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Hvorfor</dt>
            <dd className="mt-1">
              Strømforbrug.dk lever af provision, når en læser tegner den billigste elaftale gennem en knap hos et selskab, vi
              har en aftale med. Provisionen ændrer ikke, hvem der er billigst — det regnes over hele markedet — og en aftale
              uden partner vises på lige fod, blot uden knap. Fejl eller indsigelse:{" "}
              <a href={`mailto:${SITE_CONFIG.company.email}`} className="content-link">
                {SITE_CONFIG.company.email}
              </a>
              .
            </dd>
          </div>
        </dl>
        <details id="kilder" data-sources className="group mt-5 scroll-mt-24 border-t border-border pt-2">
          <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-4 py-1 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
            <span>Kilder ({all.length + named.length})</span>
            <span aria-hidden className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-pill bg-surface text-brand-600 shadow-sm transition-transform group-open:rotate-45">
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-ink-body">
            Priserne på siden er hentet af feedet fra de her kilder og regnet ved visningen; forbrugstallene er sidens egne
            typetal med kilde. Energi Data Services data er udgivet under CC BY 4.0 — kilde: Energinet (www.energidataservice.dk).
          </p>
          <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink-body">
            {all.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="content-link">
                  {s.name}
                </a>
                {s.what ? ` — ${s.what}` : ""}
              </li>
            ))}
            {named.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink-muted">
            Reglerne bag tallene står på{" "}
            <Link href="/metode/" className="content-link">
              metodesiden
            </Link>
            .
          </p>
        </details>
      </div>
    </section>
  );
}
