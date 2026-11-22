import type { ModelData } from "@/lib/models";
import macbookAirM4 from "./macbook-air-m4";

/**
 * Modelsiderne (ejeren 22. nov. 2026): én fil pr. modelfamilie (`export default`), side på /<parent>/<slug>/.
 * Kun officielle tal i filerne; årsforbrug og pris regnes i src/lib/models.ts. Tjek: npx tsx scripts/check-model.mts <slug>.
 */
export const MODELS_ALL: ModelData[] = [macbookAirM4];
