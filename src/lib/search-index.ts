/**
 * Søgeindekset: alle udgivne apparater (navn + katalogets synonymer), kategorihubberne og guiderne.
 * Ingen priser — kun kWh — så indekset aldrig bærer et tal, der kan blive forældet mellem to byg.
 */
import { getPublishedAppliances } from "./appliances";
import { CATEGORIES, category, liveHubs, metaOf } from "./catalogue";
import { termsFor, type SearchEntry } from "./search";

/** Sider uden for apparatkataloget, med de ord folk faktisk søger dem med. */
const PAGES: { t: string; u: string; k: SearchEntry["k"]; d: string; w: string[] }[] = [
  { t: "Beregn dit strømforbrug", u: "/beregner/", k: "værktøj", d: "Watt × timer → kWh og kroner", w: ["beregner", "udregn", "regn ud", "watt til kwh", "beregning", "lommeregner"] },
  { t: "Elpriser i dag time for time", u: "/elpriser/", k: "værktøj", d: "Billigste og dyreste timer i dag", w: ["elpris", "elpriser", "timepris", "i dag", "billigste tidspunkt", "hvornår er strømmen billigst", "spotpris"] },
  { t: "Hvad koster en kWh?", u: "/hvad-koster-en-kwh/", k: "guide", d: "Prisen pr. kWh og hvad den består af", w: ["kwh pris", "pris pr kwh", "hvad koster 1 kwh", "kilowatttime", "afgift", "nettarif"] },
  { t: "Gennemsnitligt strømforbrug", u: "/gennemsnitligt/", k: "guide", d: "Hvad bruger en dansk husstand?", w: ["gennemsnit", "gennemsnitligt", "normalt forbrug", "normalt elforbrug", "husstand", "danmark"] },
  { t: "Strømslugere i hjemmet", u: "/stromslugere/", k: "guide", d: "Hvad bruger mest strøm?", w: ["strømsluger", "strømslugere", "hvad bruger mest strøm", "største forbrug"] },
  { t: "Standby-forbrug", u: "/standby/", k: "guide", d: "Hvad koster apparater, der står på standby?", w: ["standby", "slukket", "stand by", "tage stikket ud", "dvale"] },
  { t: "Sparetips", u: "/sparetips/", k: "guide", d: "Sådan bruger du mindre strøm", w: ["spare", "spar strøm", "sparetips", "spare på strømmen", "spare penge", "energibesparelse"] },
  { t: "Hvad koster det at lade en elbil?", u: "/hvad-koster-det-at-lade-en-elbil/", k: "guide", d: "Pris pr. opladning hjemme og ude", w: ["lade elbil", "opladning", "ladepris", "lade bil", "hjemmeladning"] },
  { t: "Strømforbrug for husstanden", u: "/husstand/", k: "husstand", d: "Forbrug efter husstandens størrelse", w: ["husstand", "hjem", "bolig", "hus", "lejlighed"] },
  { t: "Strømforbrug for 1 person", u: "/husstand/1-person/", k: "husstand", d: "Enlig i lejlighed eller hus", w: ["1 person", "en person", "enlig", "single", "studerende", "alene"] },
  { t: "Strømforbrug for 2 personer", u: "/husstand/2-personer/", k: "husstand", d: "Par i lejlighed eller hus", w: ["2 personer", "to personer", "par", "to voksne"] },
  { t: "Strømforbrug for en familie", u: "/husstand/familie/", k: "husstand", d: "Familie på 3, 4 og 5", w: ["familie", "børnefamilie", "4 personer", "3 personer", "5 personer", "gennemsnitsfamilie"] },
  { t: "Husstand med varmepumpe", u: "/husstand/med-varmepumpe/", k: "husstand", d: "Forbruget med varmepumpe", w: ["varmepumpe husstand", "hus med varmepumpe", "elvarme"] },
  { t: "Luft-til-luft varmepumpe", u: "/varmepumpe/luft-til-luft/", k: "apparat", d: "Opvarmning", w: ["luft til luft", "luft-til-luft", "aircondition varme"] },
  { t: "Luft-til-vand varmepumpe", u: "/varmepumpe/luft-til-vand/", k: "apparat", d: "Opvarmning", w: ["luft til vand", "luft-til-vand"] },
  { t: "Elpriser.dk-appen", u: "/app/", k: "værktøj", d: "Få besked om de billigste timer", w: ["app", "notifikation", "besked"] },
  { t: "Sådan regner vi", u: "/metode/", k: "guide", d: "Metode og kilder", w: ["metode", "kilder", "beregning"] },
];

export function buildSearchIndex(): SearchEntry[] {
  const appliances: SearchEntry[] = getPublishedAppliances().map((a) => {
    const m = metaOf(a);
    return {
      t: a.name,
      u: `/${a.slug}/`,
      k: "apparat",
      d: category(m.category).label,
      w: termsFor([a.name, a.slug.replace(/-/g, " "), ...m.synonyms]),
      kwh: a.typicalKwh,
    };
  });
  const hubs: SearchEntry[] = liveHubs().map((c) => ({
    t: c.label,
    u: `/apparater/${c.slug}/`,
    k: "kategori",
    d: c.blurb,
    w: termsFor([c.label, c.slug.replace(/-/g, " ")]),
  }));
  const all: SearchEntry = { t: "Alle apparater", u: "/apparater/", k: "kategori", d: `${appliances.length} apparater fra A til Å`, w: termsFor(["apparater", "alle apparater", "oversigt", "liste", ...CATEGORIES.map((c) => c.label)]) };
  const pages: SearchEntry[] = PAGES.map((p) => ({ ...p, w: termsFor([p.t, ...p.w]) }));
  return [...appliances, ...hubs, all, ...pages];
}
