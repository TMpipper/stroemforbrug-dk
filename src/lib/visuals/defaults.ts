/**
 * Registret for sidehovedets motiv (PageHero's `motif`), kortenes chip og OG-billedet: hvilket motiv en
 * side får. Rækkefølgen er apparat-slug → kategori → rutens standard. Ingen tekst, ingen tal — bare
 * nøgler fra src/lib/visuals/motifs.ts. Nye motiver tegnes i src/components/visuals/motifs/.
 */
import { getAppliance } from "@/lib/appliances";
import { category, metaOf } from "@/lib/catalogue";
import type { MotifKey } from "./motifs";

/** Hub- og værktøjssiderne. */
export const ROUTE_MOTIF: Record<string, MotifKey> = {
  "/": "hus",
  "/apparater/": "stik",
  "/beregner/": "lommeregner",
  "/gennemsnitligt/": "graf",
  "/husstand/": "hus",
  "/husstand/1-person/": "hus",
  "/husstand/2-personer/": "hus",
  "/husstand/familie/": "hus",
  "/husstand/med-varmepumpe/": "varmepumpe",
  "/varmepumpe/": "varmepumpe",
  "/varmepumpe/luft-til-luft/": "varmepumpe",
  "/varmepumpe/luft-til-vand/": "varmepumpe",
  "/hvad-koster-en-kwh/": "regning",
  "/hvad-koster-det-at-lade-en-elbil/": "elbil",
  "/elpriser/": "doegn",
  "/app/": "doegn",
  "/sparetips/": "moenter",
  "/spare-paa-stroemmen/": "moenter",
  "/standby/": "nat",
  "/stromslugere/": "maaler",
  "/metode/": "kontrakt",
  "/om-os/": "dkkort",
  "/kontakt/": "megafon",
  "/privatlivspolitik/": "skjold",
};

/** Apparatets eget motiv fra kataloget, ellers kategoriens. */
export function applianceMotif(slug: string): MotifKey {
  const a = getAppliance(slug);
  if (!a) return "stik";
  const m = metaOf(a);
  return m.motif ?? category(m.category).motif;
}

export function motifForPath(path: string): MotifKey {
  if (ROUTE_MOTIF[path]) return ROUTE_MOTIF[path];
  const slug = path.replace(/^\/|\/$/g, "");
  return applianceMotif(slug);
}
