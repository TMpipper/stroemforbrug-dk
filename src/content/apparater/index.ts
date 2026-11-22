import type { ApplianceData } from "@/lib/types";
import aircondition from "./aircondition";
import emhaette from "./emhaette";
import olieradiator from "./olieradiator";
import vinkoeleskab from "./vinkoeleskab";
import espressomaskine from "./espressomaskine";
import mobilAircondition from "./mobil-aircondition";
import skaerm from "./skaerm";
import varmepumpeToerretumbler from "./varmepumpe-toerretumbler";
import haandklaedetoerrer from "./haandklaedetoerrer";
import spabad from "./spabad";
import terrassevarmer from "./terrassevarmer";
import xbox from "./xbox";
import luftfugter from "./luftfugter";
import luftrenser from "./luftrenser";
import slowCooker from "./slow-cooker";
import ventilator from "./ventilator";
import elLoebehjul from "./el-loebehjul";
import elcykel from "./elcykel";
import ipad from "./ipad";
import koeleboks from "./koeleboks";
import cirkulationspumpe from "./cirkulationspumpe";
import lysstofroer from "./lysstofroer";
import pillefyr from "./pillefyr";
import ventilationsanlaeg from "./ventilationsanlaeg";
import vaskemaskineMedToerretumbler from "./vaskemaskine-med-toerretumbler";

/**
 * Nye apparater fra 22. nov. 2026: én fil pr. apparat (src/content/apparater/<slug>.ts, `export default`),
 * så bølgerne kan skrives parallelt uden flettekonflikter. Rækkefølgen her er udgivelsesrækkefølgen.
 * Hver fil bærer `meta`, `calculatorConfig.per/perYear` og en `publishDate` (drypudgivelse, dansk dag).
 * Tjek en fil med `npx tsx scripts/check-appliance.mts <slug>` før den kommer på listen.
 */
export const APPLIANCES_NEW: ApplianceData[] = [
  aircondition,
  emhaette,
  olieradiator,
  vinkoeleskab,
  espressomaskine,
  mobilAircondition,
  skaerm,
  varmepumpeToerretumbler,
  haandklaedetoerrer,
  spabad,
  terrassevarmer,
  xbox,
  luftfugter,
  luftrenser,
  slowCooker,
  ventilator,
  elLoebehjul,
  elcykel,
  ipad,
  koeleboks,
  cirkulationspumpe,
  lysstofroer,
  pillefyr,
  ventilationsanlaeg,
  vaskemaskineMedToerretumbler,
];
