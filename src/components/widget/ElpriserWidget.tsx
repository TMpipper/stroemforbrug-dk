// Fælles komponent fra el-feed (examples/site/components/widget/) — ret den dér, ikke her.
import ElpriserWidgetResize from "./ElpriserWidgetResize";

/**
 * Elpris-widgetten fra Elpriser.dk på et søstersite: det kompakte kort med dagens elpriser time for time i en
 * iframe fra elpriser.dk (dokumentation: https://elpriser.dk/elpris-widget/). Renderes på serveren som en rigtig
 * <iframe> (ingen loader-script), så den indlæses dovent og uden layoutskift fra et script; højden følger kortet
 * gennem ElpriserWidgetResize, der lytter til beskeden `elpriser-widget:height` fra elpriser.dk.
 *
 * Al kreditering (»Leveret af Elpriser.dk«, »Se alle timer«) ligger inde i iframen — der kommer aldrig et link til
 * Elpriser.dk i sitets egen HTML (ejerens valg 7. okt. 2026). Sitets link-audit skal undtage iframe[src] til
 * elpriser.dk. Sted: `dk1` | `dk2`, et postnummer eller `a<netområdekode>`.
 */
const ORIGIN = "https://elpriser.dk";
/** Kortets målte højde ved almindelige bredder — rammen før første højdebesked. */
const DEFAULT_HEIGHT = 1040;

interface Props {
  /** `dk1`, `dk2`, fire cifre eller `a<netområdekode>` (fx `a151`). */
  sted?: string;
  /** Startvisning: morgendagen, når priserne er ude. */
  dag?: "i-dag" | "i-morgen";
  /** Alt inkl. moms (standard) eller spotprisen alene. */
  basis?: "alt" | "spot";
  /** Uden timepriserne under søjlerne. */
  kompakt?: boolean;
  /** Låst højde i px: slår den automatiske højde fra; kortet ruller selv indeni. */
  hoejde?: number;
  className?: string;
}

export function elpriserWidgetSrc({ sted = "dk1", dag, basis, kompakt }: Pick<Props, "sted" | "dag" | "basis" | "kompakt">): string {
  const q = new URLSearchParams();
  if (dag === "i-morgen") q.set("dag", "i-morgen");
  if (basis === "spot") q.set("basis", "spot");
  if (kompakt) q.set("kompakt", "1");
  const s = q.toString();
  return `${ORIGIN}/embed/elpriser/${encodeURIComponent(sted.toLowerCase())}/${s ? `?${s}` : ""}`;
}

export default function ElpriserWidget({ sted = "dk1", dag, basis, kompakt, hoejde, className = "" }: Props) {
  const height = hoejde ?? DEFAULT_HEIGHT;
  return (
    <div data-elpriser-widget={sted} className={className}>
      <iframe
        src={elpriserWidgetSrc({ sted, dag, basis, kompakt })}
        title="Elpriser time for time – Elpriser.dk"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ width: "100%", border: 0, display: "block", height: `${height}px`, ...(hoejde ? {} : { minHeight: `${height}px` }) }}
      />
      {!hoejde && <ElpriserWidgetResize origin={ORIGIN} />}
    </div>
  );
}
