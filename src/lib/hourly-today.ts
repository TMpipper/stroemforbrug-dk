/**
 * Dagens timepriser pr. landsdel — det, tidspunkt-blokken på apparatsiderne og /elpriser/ regner på.
 *
 * Kilden er feedets `timepris` (Elpriser.dk's produkt): spot + nettarif + Energinets tariffer + elafgift pr.
 * time, inkl. moms, uden abonnement og uden selskabets tillæg — altså markedets grundlag time for time i
 * landsdelens repræsentative netområde. Vi lægger ikke tillæg på her: blokken handler om HVORNÅR, ikke om
 * hvilken aftale, og forskellen mellem timerne er den samme uanset tillæg.
 *
 * Ingen "lige nu"-påstand i SSR-teksten: siden er ISR (op til 5 min gammel), så vi siger "kl. HH–HH" og
 * "i dag", og lader Elpriser.dk's kort (iframe) bære det levende tal.
 */
import { cache } from "react";
import { elFeed } from "./feed/client";
import { summariseTimepris, type HourWindow, type TodayPrices } from "./hourly-summary";
import type { Region } from "./prices";

export type { HourWindow, TodayPrices } from "./hourly-summary";

export const getToday = cache(async (region: Region): Promise<TodayPrices> => summariseTimepris(region, await elFeed.timepris({ region })));

export const getBothToday = cache(async () => {
  const [DK1, DK2] = await Promise.all([getToday("DK1"), getToday("DK2")]);
  return { DK1, DK2 };
});

/** "kl. 02–05" */
export const hourSpan = (w: HourWindow) => `kl. ${String(w.start).padStart(2, "0")}–${String(w.end).padStart(2, "0")}`;

/**
 * Dagens timetal som data-attributter (`data-hourly-basis`) på hver blok, der skriver dem. audit-prices
 * godtager en timepris i den byggede HTML, når den er et af disse tal, og regner dem om mod feedets
 * `timepris` med den samme `summariseTimepris` — så tallet er bevist beregnet, ikke skrevet.
 */
export function hourlyBasisAttrs(today: { DK1: TodayPrices; DK2: TodayPrices }): Record<string, string> {
  const attrs: Record<string, string> = { "data-hourly-basis": "", "data-hourly-day": today.DK1.day };
  for (const [key, t] of [["dk1", today.DK1], ["dk2", today.DK2]] as const) {
    attrs[`data-hourly-min-${key}`] = t.min.toFixed(2);
    attrs[`data-hourly-max-${key}`] = t.max.toFixed(2);
    attrs[`data-hourly-avg-${key}`] = t.avg.toFixed(2);
    attrs[`data-hourly-cheapest-${key}`] = t.cheapest.krPerKwh.toFixed(2);
    attrs[`data-hourly-dearest-${key}`] = t.dearest.krPerKwh.toFixed(2);
    if (t.tomorrowCheapest) attrs[`data-hourly-tomorrow-cheapest-${key}`] = t.tomorrowCheapest.krPerKwh.toFixed(2);
  }
  return attrs;
}
