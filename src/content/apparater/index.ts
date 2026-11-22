import type { ApplianceData } from "@/lib/types";

/**
 * Nye apparater fra 22. nov. 2026: én fil pr. apparat (src/content/apparater/<slug>.ts, `export default`),
 * så bølgerne kan skrives parallelt uden flettekonflikter. Rækkefølgen her er udgivelsesrækkefølgen.
 * Hver fil bærer `meta`, `calculatorConfig.per/perYear` og en `publishDate` (drypudgivelse, dansk dag).
 * Tjek en fil med `npx tsx scripts/check-appliance.mts <slug>` før den kommer på listen.
 */
export const APPLIANCES_NEW: ApplianceData[] = [];
