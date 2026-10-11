/**
 * Registret for sidehovedets motiv (PageHero's `motif`), kortenes chip og OG-billedet: hvilket motiv en
 * side får. Rækkefølgen er apparat-slug → kategori → rutens standard. Ingen tekst, ingen tal — bare
 * nøgler fra src/lib/visuals/motifs.ts. Nye motiver tegnes i src/components/visuals/motifs/.
 */
import { categoryOf, type CategoryKey } from "@/lib/home-insights";
import type { MotifKey } from "./motifs";

export const CATEGORY_MOTIF: Record<CategoryKey, MotifKey> = {
  koelFrys: "koeleskab",
  vaskToerring: "vaskemaskine",
  madlavning: "ovn",
  underholdning: "tv",
  varme: "radiator",
  transport: "elbil",
  oevrigt: "stik",
};

/** Apparater med et eget motiv — resten følger kategorien. */
export const APPLIANCE_MOTIF: Record<string, MotifKey> = {
  koeleskab: "koeleskab",
  fryser: "koeleskab",
  kummefryser: "koeleskab",
  elkedel: "elkedel",
  kaffemaskine: "elkedel",
  quooker: "elkedel",
  sauna: "sauna",
  varmepumpe: "varmepumpe",
  jordvarme: "varmepumpe",
  robotplaeneklipper: "robotklipper",
  robotstoevsuger: "robotklipper",
  elbil: "elbil",
  ladestander: "elbil",
  "mobil-opladning": "batteri",
  solceller: "sol",
  "led-paere": "lampe",
  lyskaede: "lampe",
  computer: "computer",
  laptop: "computer",
  "gaming-pc": "computer",
  router: "computer",
  playstation: "tv",
  tv: "tv",
  vaskemaskine: "vaskemaskine",
  opvaskemaskine: "vaskemaskine",
  toerretumbler: "vaskemaskine",
  ovn: "ovn",
  komfur: "ovn",
  induktion: "ovn",
  mikroovn: "ovn",
  airfryer: "ovn",
  broedrister: "ovn",
  elradiator: "radiator",
  varmeblaeser: "radiator",
  gulvvarme: "radiator",
  "gulvvarme-el": "radiator",
  varmtvandsbeholder: "radiator",
  akvarium: "stik",
  pool: "stik",
  affugter: "stik",
  strygejern: "stik",
  stoevsuger: "stik",
  haartoerrere: "stik",
};

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
  "/sparetips/": "moenter",
  "/spare-paa-stroemmen/": "moenter",
  "/standby/": "nat",
  "/stromslugere/": "maaler",
  "/metode/": "kontrakt",
  "/om-os/": "dkkort",
  "/kontakt/": "megafon",
  "/privatlivspolitik/": "skjold",
};

export function applianceMotif(slug: string): MotifKey {
  return APPLIANCE_MOTIF[slug] ?? CATEGORY_MOTIF[categoryOf(slug)];
}

export function motifForPath(path: string): MotifKey {
  if (ROUTE_MOTIF[path]) return ROUTE_MOTIF[path];
  const slug = path.replace(/^\/|\/$/g, "");
  return applianceMotif(slug);
}
