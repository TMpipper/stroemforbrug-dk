/**
 * Omkostningsregning: kWh × pris. Prisen er ALTID et argument — der findes ingen standardpris.
 * Det er med vilje: når `price` mangler, finder tsc hvert sted, der stadig regner med en konstant.
 *
 * Prisen skal være marginalprisen (kr./kWh inkl. moms, uden abonnement) fra `getPrices()`
 * — se src/lib/prices.ts for hvorfor den aldrig må være all-in-prisen.
 */
import { formatKr } from "./format";

export type KrPerKwh = number;

/** Årlig udgift i kr. */
export function costPerYear(kwhPerYear: number, price: KrPerKwh): number {
  return kwhPerYear * price;
}

/** Månedlig udgift i kr. af et årsforbrug. */
export function costPerMonth(kwhPerYear: number, price: KrPerKwh): number {
  return (kwhPerYear * price) / 12;
}

/** "310-520" — et prisspænd af et kWh-spænd (uden enhed). */
export function costRange(kwhRange: readonly [number, number], price: KrPerKwh): string {
  return `${formatKr(kwhRange[0] * price)}-${formatKr(kwhRange[1] * price)}`;
}

/** "26-43" — månedligt spænd af et årligt kWh-spænd. */
export function costRangeMonthly(kwhRange: readonly [number, number], price: KrPerKwh): string {
  return `${formatKr((kwhRange[0] * price) / 12)}-${formatKr((kwhRange[1] * price) / 12)}`;
}

/** Udgiften for en lille mængde kWh i hele øre. */
export function costOre(kwhAmount: number, price: KrPerKwh): number {
  return Math.round(kwhAmount * price * 100);
}
