/**
 * Motivbiblioteket — 36 flade SVG-motiver i Elpriser.dk's egen palet (src/lib/visuals/palette.ts),
 * tegnet i kode. Et motiv er et <g> i boksen 0 0 200 200; de fire wrappere (Cover, HeroArt,
 * MotifChip, OgMotif) ejer <svg>, størrelse, rolle og titel. Ingen tekst og ingen tal i noget
 * motiv (audit-prices og audit-visuals), ingen CSS-variabler eller <use> (OG-billedet går
 * gennem satori). Ejerens valg 7. oktober 2026: ingen stock- eller AI-billeder på sitet.
 */
import type { MotifKey } from "@/lib/visuals/motifs";
import type { MotifComponent } from "./types";
import * as apparater from "./motifs/apparater";
import * as bolig from "./motifs/bolig";
import * as dokumenter from "./motifs/dokumenter";
import * as energi from "./motifs/energi";

export type { MotifComponent, MotifProps } from "./types";

export const MOTIFS: Record<MotifKey, MotifComponent> = {
  skift: energi.skift,
  regning: energi.regning,
  maaler: energi.maaler,
  doegn: energi.doegn,
  dkkort: energi.dkkort,
  graf: energi.graf,
  kraftvaerk: energi.kraftvaerk,
  sol: energi.sol,
  vindmoelle: energi.vindmoelle,
  gasflamme: energi.gasflamme,
  batteri: energi.batteri,
  stik: energi.stik,
  hus: bolig.hus,
  by: bolig.by,
  nat: bolig.nat,
  varmepumpe: bolig.varmepumpe,
  radiator: bolig.radiator,
  sauna: bolig.sauna,
  elbil: bolig.elbil,
  app: bolig.app,
  vaskemaskine: apparater.vaskemaskine,
  koeleskab: apparater.koeleskab,
  ovn: apparater.ovn,
  elkedel: apparater.elkedel,
  tv: apparater.tv,
  computer: apparater.computer,
  lampe: apparater.lampe,
  robotklipper: apparater.robotklipper,
  printer3d: apparater.printer3d,
  moenter: dokumenter.moenter,
  kalender: dokumenter.kalender,
  kontrakt: dokumenter.kontrakt,
  skjold: dokumenter.skjold,
  megafon: dokumenter.megafon,
  lommeregner: dokumenter.lommeregner,
  stjerner: dokumenter.stjerner,
};
