/**
 * Ren beregning: feedets `timepris`-svar → de tal, sitet skriver (min, max, gennemsnit, billigste/dyreste
 * 3-timers vindue, i morgen). Ingen imports ud over typer, så audit-prices kan køre præcis den samme
 * funktion mod feedet og efterregne hvert timetal i den byggede HTML.
 */
import type { FeedTimeprisDay, FeedTimeprisHour, FeedTimeprisResponse } from "./feed/types";
import type { Region } from "./prices";

export interface HourWindow {
  /** Første time i vinduet, 0–23. */
  start: number;
  /** Timen efter den sidste, fx 3 for kl. 00–03. */
  end: number;
  /** Gennemsnit i vinduet, kr./kWh inkl. moms. */
  krPerKwh: number;
}

export interface TodayPrices {
  region: Region;
  /** Netområdets navn (repræsentativt for landsdelen). */
  areaLabel: string;
  regionRepresentative: boolean;
  /** YYYY-MM-DD i dansk tid. */
  day: string;
  hours: { hour: number; krPerKwh: number }[];
  avg: number;
  min: number;
  max: number;
  cheapest: HourWindow;
  dearest: HourWindow;
  /** Timeprisen i den time, feedet kalder "nu" (serverens klokkeslæt ved generering). */
  nowHour: number;
  now: number;
  tomorrowAvailable: boolean;
  tomorrowCheapest: HourWindow | null;
  generatedAt: string;
}

const WINDOW_HOURS = 3;

function window(hours: { hour: number; krPerKwh: number }[], pick: "min" | "max"): HourWindow {
  if (hours.length < WINDOW_HOURS) throw new Error(`timepris: kun ${hours.length} timer`);
  let best: HourWindow | null = null;
  for (let i = 0; i + WINDOW_HOURS <= hours.length; i++) {
    const slice = hours.slice(i, i + WINDOW_HOURS);
    const avg = slice.reduce((n, h) => n + h.krPerKwh, 0) / WINDOW_HOURS;
    if (!best || (pick === "min" ? avg < best.krPerKwh : avg > best.krPerKwh)) {
      best = { start: slice[0].hour, end: slice[slice.length - 1].hour + 1, krPerKwh: Math.round(avg * 100) / 100 };
    }
  }
  return best!;
}

const toHours = (day: FeedTimeprisDay): { hour: number; krPerKwh: number }[] =>
  day.hours
    .filter((h: FeedTimeprisHour) => typeof h.totalOre === "number")
    .map((h) => ({ hour: h.hour, krPerKwh: Math.round(h.totalOre) / 100 }));

export function summariseTimepris(region: Region, res: FeedTimeprisResponse): TodayPrices {
  const today = res.market.today;
  const hours = toHours(today);
  if (hours.length < 23) throw new Error(`timepris ${region}: dagens priser har kun ${hours.length} timer`);
  const tomorrow = res.meta.tomorrowAvailable && res.market.tomorrow ? toHours(res.market.tomorrow) : [];
  const cheapest = window(hours, "min");
  const dearest = window(hours, "max");
  const nowSlot = res.market.now as FeedTimeprisHour | null | undefined;
  const nowHour = nowSlot?.hour ?? Number(String(res.meta.nowHour).slice(11, 13)) ?? hours[0].hour;
  const now = hours.find((h) => h.hour === nowHour)?.krPerKwh ?? hours[0].krPerKwh;
  return {
    region,
    areaLabel: res.meta.area.gridCompany ?? res.meta.area.gridArea,
    regionRepresentative: res.meta.area.regionRepresentative,
    day: hours.length ? String(today.hours[0].start).slice(0, 10) : "",
    hours,
    avg: Math.round(today.avgOre) / 100,
    min: Math.round(today.minOre) / 100,
    max: Math.round(today.maxOre) / 100,
    cheapest,
    dearest,
    nowHour,
    now,
    tomorrowAvailable: tomorrow.length >= 23,
    tomorrowCheapest: tomorrow.length >= 23 ? window(tomorrow, "min") : null,
    generatedAt: res.meta.generatedAt,
  };
}
