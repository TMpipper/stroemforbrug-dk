import type { ModelData } from "@/lib/models";
import macbookAirM4 from "./macbook-air-m4";
import macbookAirM5 from "./macbook-air-m5";
import macbookProM5 from "./macbook-pro-m5";
import macbookAirM3 from "./macbook-air-m3";
import macbookProM4 from "./macbook-pro-m4";
import macMiniM4 from "./mac-mini-m4";
import imacM4 from "./imac-m4";
import macbookProM6 from "./macbook-pro-m6";
import macbookProProledXdr from "./macbook-pro-proled-xdr";
import macMiniM6 from "./mac-mini-m6";
import imacM6 from "./imac-m6";
import macStudio from "./mac-studio";

/**
 * Modelsiderne (ejeren 22. nov. 2026): én fil pr. modelfamilie (`export default`), side på /<parent>/<slug>/.
 * Kun officielle tal i filerne; årsforbrug og pris regnes i src/lib/models.ts. Tjek: npx tsx scripts/check-model.mts <slug>.
 */
export const MODELS_ALL: ModelData[] = [
  macbookAirM4,
  macbookAirM5,
  macbookProM5,
  macbookAirM3,
  macbookProM4,
  macMiniM4,
  imacM4,
  macbookProM6,
  macbookProProledXdr,
  macMiniM6,
  imacM6,
  macStudio,
];
