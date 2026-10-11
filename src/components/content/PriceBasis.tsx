import type { SitePrices } from "@/lib/prices";
import { PRICES_UPDATED } from "@/lib/prices-updated";
import { danishDate } from "@/lib/format";

/**
 * Grundlagssætningen — én pr. side, hvor en pris vises.
 *
 * Teksten er feedets egen (basisSentence fra el-feed), og attributterne er det, audit-prices
 * læser i den byggede HTML: hvert "x,xx kr./kWh" på siden skal være et af tallene her.
 */
export default function PriceBasis({ prices, className = "" }: { prices: SitePrices; className?: string }) {
  const { marginal, deals } = prices;
  return (
    <p
      data-price-basis
      data-dk1={marginal.dk1.krPerKwh.toFixed(2)}
      data-dk2={marginal.dk2.krPerKwh.toFixed(2)}
      data-dk={marginal.dk.toFixed(2)}
      data-month={marginal.month}
      data-prices-updated={PRICES_UPDATED}
      data-cheapest-dk1={deals.DK1.cheapest?.marginalKrPerKwh.toFixed(2)}
      data-cheapest-dk2={deals.DK2.cheapest?.marginalKrPerKwh.toFixed(2)}
      data-cheapest-allin-dk1={deals.DK1.cheapest?.allInKrPerKwh.toFixed(2)}
      data-cheapest-allin-dk2={deals.DK2.cheapest?.allInKrPerKwh.toFixed(2)}
      data-diff={Math.abs(marginal.dk2.krPerKwh - marginal.dk1.krPerKwh).toFixed(2)}
      data-typical-dk1={deals.DK1.typical?.allInKrPerKwh.toFixed(2)}
      data-typical-dk2={deals.DK2.typical?.allInKrPerKwh.toFixed(2)}
      className={`text-xs text-ink-muted ${className}`}
    >
      {marginal.basis} Tal fra el-feed, opdateret {danishDate(PRICES_UPDATED)}.
    </p>
  );
}
