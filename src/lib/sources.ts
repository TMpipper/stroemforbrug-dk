/**
 * Verified first-party sources.
 *
 * The appliance data used to cite "Energistyrelsen – Ovne og komfurer" and link
 * to https://ens.dk — a homepage. 68 citations across the site pointed at a
 * front page rather than anything that supported the claim, which is worse than
 * no citation: it looks sourced until a reader clicks.
 *
 * Every URL here returned 200 when checked on VERIFIED_AT. Add nothing to this
 * file without curl-ing it first, and prefer a named reference with no URL
 * (an EU regulation number, a named test) over a URL that does not resolve.
 */

export interface VerifiedSource {
  name: string;
  url?: string;
}

export const SOURCES_VERIFIED_AT = "2026-09-15";

export const SOURCES = {
  koelFrys: {
    name: "SparEnergi.dk (Energistyrelsen) – Spar energi på køl og frys",
    url: "https://sparenergi.dk/privat/spar-energi-i-hverdagen/spar-energi-paa-koel-og-frys",
  },
  ovnKomfur: {
    name: "SparEnergi.dk (Energistyrelsen) – Spar energi på ovn og komfur",
    url: "https://sparenergi.dk/privat/spar-energi-i-hverdagen/spar-energi-paa-ovn-og-komfur",
  },
  koekkenmaskiner: {
    name: "SparEnergi.dk (Energistyrelsen) – Spar energi på køkkenmaskinerne",
    url: "https://sparenergi.dk/privat/spar-energi-i-hverdagen/spar-energi-paa-koekkenmaskinerne",
  },
  vask: {
    name: "SparEnergi.dk (Energistyrelsen) – Spar el og vand, når du vasker tøj",
    url: "https://sparenergi.dk/privat/spar-energi-i-hverdagen/spar-energi-naar-du-vasker-toej",
  },
  toerring: {
    name: "SparEnergi.dk (Energistyrelsen) – Spar strøm ved tørring af tøj",
    url: "https://sparenergi.dk/privat/spar-energi-i-hverdagen/spar-energi-naar-du-toerrer-toej",
  },
  opvask: {
    name: "SparEnergi.dk (Energistyrelsen) – Spar energi på opvask",
    url: "https://sparenergi.dk/privat/spar-energi-i-hverdagen/spar-energi-paa-opvasken",
  },
  elbil: {
    name: "SparEnergi.dk (Energistyrelsen) – Spar energi med elbilen",
    url: "https://sparenergi.dk/privat/spar-energi-naar-du-oplader-elbilen",
  },
  standby: {
    name: "SparEnergi.dk (Energistyrelsen) – Slip for standbyforbrug",
    url: "https://sparenergi.dk/slip-standbyforbrug",
  },
  energimaerke: {
    name: "SparEnergi.dk (Energistyrelsen) – Spar energi med et godt energimærke",
    url: "https://sparenergi.dk/privat/spar-med-et-godt-energimaerke",
  },
  indkoeb: {
    name: "Energistyrelsen – Indkøbsanbefalinger for hårde hvidevarer",
    url: "https://sparenergi.dk/erhverv/energistyrelsens-indkoebsanbefalinger/haarde-hvidevarer-til-husholdninger",
  },
  myter: {
    name: "SparEnergi.dk (Energistyrelsen) – Myter om energiforbrug",
    url: "https://sparenergi.dk/spar-energi-i-hverdagen/myter-om-energiforbrug",
  },
  billigstStroem: {
    name: "SparEnergi.dk (Energistyrelsen) – Brug strømmen, når den er billigst",
    url: "https://sparenergi.dk/privat/spar-energi-i-hverdagen/brug-stroemmen-naar-den-er-billigst",
  },
  maaling: {
    name: "Bolius – Sådan måler du, hvor meget strøm dine apparater bruger",
    url: "https://www.bolius.dk/saadan-maaler-du-hvor-meget-stroem-dine-apparater-og-haarde-hvidevarer-bruger-98269",
  },
} as const satisfies Record<string, VerifiedSource>;

export type SourceKey = keyof typeof SOURCES;

/**
 * Which verified sources belong on which appliance page. An appliance not listed
 * here falls back to the universal set, so a new appliance never ships with a
 * citation that does not match its subject.
 */
export const APPLIANCE_SOURCES: Record<string, SourceKey[]> = {
  koeleskab: ["koelFrys", "energimaerke", "indkoeb"],
  fryser: ["koelFrys", "energimaerke", "indkoeb"],
  kummefryser: ["koelFrys", "energimaerke", "indkoeb"],

  ovn: ["ovnKomfur", "energimaerke", "myter"],
  komfur: ["ovnKomfur", "energimaerke"],
  induktion: ["ovnKomfur", "energimaerke"],
  mikroovn: ["ovnKomfur", "koekkenmaskiner"],

  airfryer: ["koekkenmaskiner", "ovnKomfur"],
  kaffemaskine: ["koekkenmaskiner", "standby"],
  elkedel: ["koekkenmaskiner", "myter"],
  broedrister: ["koekkenmaskiner"],
  quooker: ["koekkenmaskiner", "standby"],

  vaskemaskine: ["vask", "energimaerke", "indkoeb"],
  toerretumbler: ["toerring", "energimaerke", "indkoeb"],
  opvaskemaskine: ["opvask", "energimaerke", "indkoeb"],

  elbil: ["elbil", "billigstStroem"],
  ladestander: ["elbil", "billigstStroem"],

  tv: ["standby", "energimaerke"],
  router: ["standby", "maaling"],
  computer: ["standby", "maaling"],
  laptop: ["standby", "maaling"],
  playstation: ["standby", "maaling"],
  "gaming-pc": ["standby", "maaling"],
  "mobil-opladning": ["standby", "myter"],
  robotstoevsuger: ["standby", "maaling"],
  stoevsuger: ["maaling"],
  robotplaeneklipper: ["maaling", "billigstStroem"],

  varmepumpe: ["energimaerke", "billigstStroem"],
  elradiator: ["billigstStroem", "myter"],
  varmeblaeser: ["billigstStroem", "myter"],
  gulvvarme: ["billigstStroem"],
  "gulvvarme-el": ["billigstStroem"],
  jordvarme: ["energimaerke", "billigstStroem"],
  varmtvandsbeholder: ["billigstStroem", "energimaerke"],

  "led-paere": ["energimaerke", "myter"],
  lyskaede: ["energimaerke", "standby"],
  strygejern: ["myter", "maaling"],
  haartoerrere: ["maaling", "myter"],
  akvarium: ["maaling", "standby"],
  pool: ["maaling", "billigstStroem"],
  sauna: ["maaling", "billigstStroem"],
  solceller: ["billigstStroem"],
};

const UNIVERSAL: SourceKey[] = ["energimaerke", "maaling"];

export function sourcesFor(slug: string): VerifiedSource[] {
  return (APPLIANCE_SOURCES[slug] ?? UNIVERSAL).map((k) => SOURCES[k]);
}
