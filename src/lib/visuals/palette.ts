/**
 * Motivernes farver — hex alene, taget fra temaet (src/lib/theme.ts), så de samme tegninger kan
 * stå i HTML, i OG-billedet (satori kender ingen CSS-variabler) og i et standalone-SVG.
 *
 * Reglen (ejerens designsystem): én navy masse, én grøn/blå handlingsform, højst ét ferskenfarvet
 * eller blommefarvet strejf pr. motiv. Aldrig amber (den er »Billigst«/»Opdateret«), aldrig
 * logoets lynbolt-grøn (den er logoet). `MONO` er hvide alfatrin til vandmærket på navy.
 */
import { color } from "../theme";

export interface VisualPalette {
  /** Navy — den bærende masse. */
  ink: string;
  /** Brand-blå — den anden handlingsfarve. */
  blue: string;
  /** Elpriser.dk's grønne — den ene handlingsfarve. */
  green: string;
  /** Lys mint — bløde flader og grunde. */
  mint: string;
  /** Dybere mint — grunde, der skal stå mod mint. */
  mintDeep: string;
  /** Mintbåndets farve — kortets grund. */
  ground: string;
  /** Hvid — papir, vinduer, højlys. */
  paper: string;
  /** Neutral stål — metal, kanter, inaktive flader. */
  steel: string;
  /** Fersken — det ene varme strejf. */
  peach: string;
  /** Blomme — det ene mørke strejf. */
  plum: string;
}

export const VISUAL: VisualPalette = {
  ink: color.ink,
  blue: color.brand500,
  green: color.accent,
  mint: color.accentSoft,
  mintDeep: color.brand100,
  ground: color.bgBlue,
  paper: color.surface,
  steel: color.priceMid,
  peach: color.peach,
  plum: color.plum,
};

/** Vandmærket på navy: samme tegning i hvide alfatrin, så dybden bevares uden farve. */
export const MONO: VisualPalette = {
  ink: "rgba(255,255,255,0.92)",
  blue: "rgba(255,255,255,0.62)",
  green: "rgba(255,255,255,0.78)",
  mint: "rgba(255,255,255,0.22)",
  mintDeep: "rgba(255,255,255,0.3)",
  ground: "rgba(255,255,255,0.08)",
  paper: "rgba(255,255,255,0.5)",
  steel: "rgba(255,255,255,0.38)",
  peach: "rgba(255,255,255,0.7)",
  plum: "rgba(255,255,255,0.55)",
};
