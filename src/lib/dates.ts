/**
 * Datoer i dansk tid.
 *
 * Feedet stempler i UTC. Importen kører omkring midnat, så et UTC-udsnit af tidsstemplet
 * kan hedde "i går", mens læseren i Danmark allerede er nået til "i dag". Hver visning af
 * feedets dato går derfor gennem én af de her, så alle steder på siden er enige.
 */
const COPENHAGEN = "Europe/Copenhagen";

/** "24. september 2026" */
export function copenhagenLongDate(iso: string): string {
  return new Date(iso).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric", timeZone: COPENHAGEN });
}

/** "2026-09-24" — til komponenter, der tager YYYY-MM-DD. */
export function copenhagenDay(iso: string): string {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: COPENHAGEN, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(iso));
}

/** "september 2026" — til "Opdateret {måned år}" i bjælker og bylines. */
export function copenhagenMonthYear(iso: string): string {
  return new Date(iso).toLocaleDateString("da-DK", { month: "long", year: "numeric", timeZone: COPENHAGEN });
}

/** "2026-10-05" ± dage, regnet i UTC på middagstid, så sommertid aldrig flytter datoen. */
export function shiftDay(day: string, days: number): string {
  const d = new Date(`${day}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * Sidste gyldige danske dag af en slutdato, der peger på det første øjeblik EFTER perioden
 * (feedets `validTo` er dansk midnat): "2027-01-01T00:00+01:00" → "2026-12-31". null → null.
 */
export function lastValidDay(iso: string | Date | null): string | null {
  if (!iso) return null;
  const day = copenhagenDay(String(iso));
  return /T00:00:00|T23:00:00|T22:00:00/.test(new Date(iso).toISOString()) ? shiftDay(day, -1) : day;
}
