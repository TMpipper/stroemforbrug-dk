import { SITE_CONFIG } from "@/lib/config";
import { getPrices, REFERENCE_KWH } from "@/lib/prices";
import { formatKr } from "@/lib/format";
import { CircleCheck } from "lucide-react";

/**
 * Den store knap på hver side (ejerens ønske 2026-10-11): den billigste elaftale ved 4.000 kWh blandt de
 * selskaber, vi har en aftale med — regnet af feedet ved hvert build, aldrig skrevet ind. I dag er det Altid
 * Energi, som også er på niveau med markedets billigste aftale; skifter det, skifter knappen.
 *
 * Superlativet står med sit omfang i samme sætning (partnerskopet), knappen er mærket »Annonce«, og båndet
 * bærer data-shared, så unikhedskontrollen ikke tæller det. Ingen kr./kWh her — kun hele regningen pr. år —
 * så båndet kan stå på sider uden grundlagssætning.
 */
export default async function PartnerCta() {
  const prices = await getPrices();
  const dk1 = prices.deals.DK1.cheapestPartner;
  const dk2 = prices.deals.DK2.cheapestPartner;
  if (!dk1) return null;
  const sameSupplier = dk2 && dk2.supplierSlug === dk1.supplierSlug;
  return (
    <section data-shared data-partner-cta={dk1.supplierSlug} aria-labelledby="partner-cta-titel" className="container-site mt-20">
      <div className="rounded-card bg-ink px-6 py-10 text-white shadow-lift sm:px-10 md:py-12">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Annonce · elaftale</p>
        <div className="mt-3 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="max-w-2xl">
            <h2 id="partner-cta-titel" className="font-heading text-2xl font-semibold text-white md:text-3xl">
              Billigste elaftale ved {formatKr(REFERENCE_KWH)} kWh: {dk1.supplierName}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/80">
              {dk1.productName}: <strong className="text-white tabular">{formatKr(dk1.allInKr)} kr.</strong> om året alt inklusive i Vestdanmark
              {sameSupplier && dk2 ? <> og <strong className="text-white tabular">{formatKr(dk2.allInKr)} kr.</strong> i Østdanmark</> : null} — billigst{" "}
              {dk1.partnerScope}
              {dk1.tiedWithCheapest ? ", og på niveau med markedets billigste aftale" : dk1.rankInMarket <= 3 ? `, og nr. ${dk1.rankInMarket} i hele markedet` : ""}.
            </p>
            {/* Elselskabets egen andel — feedets tal for netop denne aftale ved 4.000 kWh; en linje vises kun, når tallet bærer den. */}
            <ul className="mt-4 space-y-1.5 text-base text-white/90" aria-label="Det betaler du til elselskabet">
              <li className="flex items-start gap-2">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-price-cheap" aria-hidden />
                <span>
                  Elselskabet får kun <strong className="text-white tabular">{formatKr(dk1.subscriptionKrMonth)} kr. om måneden</strong>
                  {dk1.energyOreInclVat === 0 ? " — strømmen til indkøbspris uden spottillæg" : <> og <strong className="text-white tabular">{Math.round(dk1.energyOreInclVat)} øre</strong> pr. kWh i tillæg</>}
                </span>
              </li>
              {dk1.feesKrYear === 0 && (
                <li className="flex items-start gap-2">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-price-cheap" aria-hidden />
                  <span>Ingen gebyrer — ingen kWh-gebyr, intet månedligt gebyr, intet betalingsgebyr</span>
                </li>
              )}
              {dk1.bindingMonths === 0 && (
                <li className="flex items-start gap-2">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-price-cheap" aria-hidden />
                  <span>Ingen binding — skift frit, når du vil</span>
                </li>
              )}
            </ul>
            <p className="mt-3 text-sm text-white/70">
              Resten af de {formatKr(dk1.allInKr)} kr. — {formatKr(dk1.allInKr - dk1.supplierKrYear)} kr. — er strømmen selv, nettarif, Energinets tariffer, elafgift og
              moms, som du betaler uanset elselskab. Velkomstrabatter og introtilbud er ikke regnet med.
            </p>
            <p className="mt-2 text-sm text-white/60">
              Samme beregning som på{" "}
              <a href={`${SITE_CONFIG.parent.url}billigste-elselskab/`} data-family-link className="underline hover:text-white">
                Elpriser.dk
              </a>
              . Din pris er den samme, uanset om du tegner aftalen gennem os.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 md:items-end">
            <a
              href={`/go/${dk1.goSlug}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-cta !px-9 !py-4 !text-lg"
              data-partner-cta-button
            >
              Se {dk1.supplierName}
            </a>
            <span className="text-xs text-white/50">Annoncelink</span>
          </div>
        </div>
      </div>
    </section>
  );
}
