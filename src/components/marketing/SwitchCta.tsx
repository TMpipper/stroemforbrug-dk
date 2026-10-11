import { getDealMarket, getPrices, type Region } from "@/lib/prices";
import { formatKr, formatPrice } from "@/lib/format";

interface Props {
  /** Husstanden, siden handler om, kWh/år. Den billigste aftale skifter mellem 1.600 og 9.000 kWh. */
  kwh?: number;
  /** Kort beskrivelse, fx "et hus med varmepumpe". */
  household?: string;
}

/**
 * "Billigste elaftale ved X kWh" — feedets hele marked, aldrig vores syv partnere.
 *
 * Superlativet står med sit omfang i samme sætning (scopeText), badge kun på rene, varige
 * aftaler, og en knap kun når selskabet er partner. Hele regningen (all-in) mod hele regningen
 * (typisk aftale) — aldrig mod en marginalpris.
 */
export default async function SwitchCta({ kwh = 4000, household }: Props) {
  const [prices, dk1, dk2] = await Promise.all([getPrices(), getDealMarket("DK1", kwh), getDealMarket("DK2", kwh)]);
  const markets: { region: Region; label: string; m: typeof dk1 }[] = [
    { region: "DK1", label: "Vestdanmark (DK1)", m: dk1 },
    { region: "DK2", label: "Østdanmark (DK2)", m: dk2 },
  ];
  if (!dk1.cheapest && !dk2.cheapest) return null;

  return (
    <div className="my-8 rounded-card bg-bg-blue p-6" data-switch-cta data-kwh={kwh}>
      <p className="font-heading text-lg font-semibold text-ink">
        Billigste elaftale ved {formatKr(kwh)} kWh om året{household ? ` — ${household}` : ""}
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {markets.map(({ region, label, m }) => {
          const c = m.cheapest;
          if (!c) return null;
          const saving = m.typical ? Math.max(0, m.typical.allInKr - c.allInKr) : 0;
          return (
            <div key={region} className="rounded-card bg-surface p-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">{label}</p>
              <p className="mt-1 font-semibold text-ink">
                {c.supplierName} · {c.productName}
              </p>
              <p className="mt-1 text-sm text-ink-body">
                <strong className="tabular">{formatKr(c.allInKr)} kr.</strong> om året alt inklusive — {formatPrice(c.allInKrPerKwh)} kr./kWh med abonnement.
                {saving > 0 && m.typical ? (
                  <>
                    {" "}
                    Det er {formatKr(saving)} kr. billigere end en typisk aftale ({formatKr(m.typical.allInKr)} kr.).
                  </>
                ) : null}
              </p>
              <p className="mt-2 text-xs text-ink-muted">Billigst {m.scope}.</p>
              {c.goSlug ? (
                <a href={`/go/${c.goSlug}`} target="_blank" rel="noopener noreferrer nofollow" className="btn-cta mt-3 inline-flex">
                  Gå til {c.supplierName}
                  <span className="sr-only"> (annoncelink)</span>
                </a>
              ) : (
                <p className="mt-3 text-xs text-ink-muted">Vi har ingen aftale med {c.supplierName} — find aftalen på selskabets egen side.</p>
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-ink-muted" data-prices-generated={prices.generatedAt}>
        Hele regningen over 12 måneder inkl. abonnement, nettarif, afgifter og moms; velkomstrabatter og introtilbud er ikke med i
        &quot;billigst&quot;. Priser fra elpris.dk via el-feed.
      </p>
    </div>
  );
}
