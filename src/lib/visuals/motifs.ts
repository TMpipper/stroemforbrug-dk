/**
 * Motivnøglerne og deres danske standardtekst (alt). Nøglerne er ASCII (å → aa, ø → oe), teksten
 * er dansk med æ/ø/å, højst fem ord, aldrig et tal, aldrig »billigst«/»bedst«/»grøn strøm«
 * (audit-visuals vogter). Teksten står som <title> på motivet, hvor det bærer mening, og udelades
 * (aria-hidden), hvor overskriften ved siden af siger det samme.
 */
export const MOTIF_KEYS = [
  "skift", "regning", "maaler", "doegn", "dkkort", "elbil", "batteri", "varmepumpe", "sol", "vindmoelle",
  "vaskemaskine", "koeleskab", "ovn", "elkedel", "tv", "computer", "lampe", "radiator", "sauna", "robotklipper",
  "printer3d", "gasflamme", "moenter", "kalender", "kontrakt", "skjold", "megafon", "lommeregner", "kraftvaerk", "by",
  "app", "stjerner", "graf", "hus", "stik", "nat",
] as const;

export type MotifKey = (typeof MOTIF_KEYS)[number];

export const MOTIF_ALT: Record<MotifKey, string> = {
  skift: "Illustration: skift af elselskab",
  regning: "Illustration: en elregning",
  maaler: "Illustration: en elmåler",
  doegn: "Illustration: døgnets elpriser",
  dkkort: "Illustration: Danmark i to prisområder",
  elbil: "Illustration: elbil ved lader",
  batteri: "Illustration: et batteri",
  varmepumpe: "Illustration: en varmepumpe",
  sol: "Illustration: solceller og sol",
  vindmoelle: "Illustration: en vindmølle",
  vaskemaskine: "Illustration: en vaskemaskine",
  koeleskab: "Illustration: et køleskab",
  ovn: "Illustration: ovn og køkken",
  elkedel: "Illustration: en elkedel",
  tv: "Illustration: fjernsyn og konsol",
  computer: "Illustration: computer og telefon",
  lampe: "Illustration: en LED-pære",
  radiator: "Illustration: en radiator",
  sauna: "Illustration: en sauna",
  robotklipper: "Illustration: en robotplæneklipper",
  printer3d: "Illustration: en 3D-printer",
  gasflamme: "Illustration: en gasflamme",
  moenter: "Illustration: mønter og besparelse",
  kalender: "Illustration: kalender og fast pris",
  kontrakt: "Illustration: en aftale med underskrift",
  skjold: "Illustration: et advarselsskjold",
  megafon: "Illustration: en megafon",
  lommeregner: "Illustration: en lommeregner",
  kraftvaerk: "Illustration: et kraftværk",
  by: "Illustration: en bys silhuet",
  app: "Illustration: appen på en telefon",
  stjerner: "Illustration: anmeldelse med stjerne",
  graf: "Illustration: elprisens kurve",
  hus: "Illustration: et hus med lyn",
  stik: "Illustration: stik og stikkontakt",
  nat: "Illustration: måne over et hus",
};

export const isMotifKey = (s: string): s is MotifKey => (MOTIF_KEYS as readonly string[]).includes(s);
