import {
  REFERENCE_KWH,
  formatKr,
  formatPrice,
  typicalAnnualCost,
} from "@/lib/pricing";
import {
  bestOfferFor,
  campaignValue,
  formatOre,
  OFFERS_VERIFIED_AT,
} from "@/lib/offers";

interface Props {
  /**
   * The household this page is about, kWh/år. The recommendation is computed
   * for this consumption, because the cheapest aftale genuinely differs between
   * a flat at 1.600 kWh and a house with a heat pump at 9.000 kWh.
   */
  kwh?: number;
  /** Short label for the household, e.g. "et hus med varmepumpe". */
  household?: string;
}

export default function AffiliateCta({ kwh = REFERENCE_KWH, household }: Props) {
  const best = bestOfferFor(kwh);
  const { offer, product, firstYear, campaign } = best;

  // All-in, so the figure is comparable to what the visitor pays today.
  const pricePerKwh = firstYear / kwh;
  const saving = Math.max(0, typicalAnnualCost(kwh) - firstYear);
  const fee = product.feeTiers.find((t) => t.upToKwh === null || kwh <= t.upToKwh) ?? product.feeTiers[0];
  const campaignWorth = campaign ? Math.round(campaignValue(offer, kwh)) : 0;

  return (
    <div className="border-2 border-brand-500 rounded-card p-6 my-8 bg-brand-50/50">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1">
          <p className="font-heading font-medium text-ink-900 mb-1">
            Billigste elaftale ved {formatKr(kwh)} kWh/år
            {household ? ` — ${household}` : ""}
          </p>
          <ul className="text-sm text-ink-600 space-y-1">
            <li>
              &#10003; {offer.name} {product.name} —{" "}
              {formatPrice(pricePerKwh)} kr./kWh alt i alt det første år
            </li>
            <li>
              &#10003; {formatOre(product.tillaegOre)} øre i spottillæg,{" "}
              {fee.feeKrMonth} kr./md. i abonnement
            </li>
            {campaign && campaignWorth > 0 ? (
              <li>
                &#10003; {campaign.label} — {formatKr(campaignWorth)} kr. det
                første år
              </li>
            ) : null}
            <li>
              &#10003; {offer.binding} &middot; {formatPrice(offer.trustpilot)} på
              Trustpilot
            </li>
          </ul>
          <p className="text-xs text-ink-400 mt-2">
            {saving > 0 ? (
              <>
                Ca. {formatKr(saving)} kr./år billigere end gennemsnittet af de 30
                mest solgte elaftaler ved {formatKr(kwh)} kWh.{" "}
              </>
            ) : null}
            Beregnet på alle syv elaftaler vi følger, første års pris inkl.
            abonnement og aktuelle introtilbud. Vilkår kontrolleret{" "}
            {new Date(OFFERS_VERIFIED_AT).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}.
          </p>
        </div>
        <a
          href={`/go/${offer.slug}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-cta whitespace-nowrap"
        >
          Gå til {offer.name}
        </a>
      </div>
    </div>
  );
}
