/**
 * SPEJL af @theme-blokken i src/app/globals.css — hold de to i sync.
 *
 * Bruges de steder, hvor CSS-variabler ikke findes: OG-billedet, manifestet,
 * <meta name="theme-color"> og inline SVG. Paletten er søstrenes (tjekelregning.dk via
 * billigste-elselskab.nu og elselskab.dk): dyb navy som blæk, råhvid side, pilleknapper —
 * men Elpriser.dk's EGEN grønne (#0B8457, 4,7:1 mod hvid tekst) som den ene handlingsfarve,
 * og mintgrønne bånd i stedet for de lyseblå. Lynbolten er appens (#22A763) — pynt, aldrig tekst.
 */
export const color = {
  bg: "#F7F9FC",
  bgWarm: "#FFF8F1",
  bgBlue: "#EEF7F2",
  surface: "#FFFFFF",
  border: "#E3E8F0",

  ink: "#0B2A4A",
  inkBody: "#334155",
  inkMuted: "#5B6B80",

  brand: "#0B2A4A",
  brand600: "#1E4F8F",
  brand500: "#3B6FD1",
  brand100: "#D5EEDF",
  brand50: "#EEF7F2",

  accent: "#0B8457",
  accentHover: "#096B46",
  accentSoft: "#DFF5EA",

  success: "#0B8457",
  successSoft: "#DFF5EA",
  successInk: "#0F5A33",
  warning: "#9A5B00",
  warningSoft: "#FFF1DC",
  warningInk: "#6E4300",
  danger: "#C7423E",
  dangerSoft: "#FCE8E7",

  amber: "#E9A23B",
  coral: "#C7423E",
  plum: "#7A3E6B",
  peach: "#FBDCC9",

  /** Bomærkets lynbolt — appens grønne. Kun i logoet og ikonet, aldrig som tekst eller knap. */
  logoBolt: "#22A763",
  /**
   * Prisniveauer i søjlediagrammerne (samme regel som i appen: billig ≤ 33. percentil, dyr ≥ 67.).
   * Bløde nuancer — søjlerne bærer aldrig tekst, niveauet står også som ord. "Nu" er navy.
   * Ejerens valg 5. oktober 2026; appens tokens (docs/design/tokens.json) følger efter i næste udgivelse.
   */
  priceCheap: "#6FCF97",
  priceMid: "#DCE3EC",
  priceExpensive: "#F28B82",
  priceNow: "#0B2A4A",
} as const;
