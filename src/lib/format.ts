/**
 * Dansk formatering af tal — ingen priser her, kun form.
 *
 * Navnene `formatKr`/`formatPrice`/`formatKrExact` er sitets egne (bruges hundredvis af steder);
 * `kr`/`krPerKwh`/`danishMonth`/`danishDate` er søstersidernes navne, så komponenter kan løftes 1:1.
 */

/** "1.234" — hele kroner med dansk tusindtalsseparator (uden enhed). */
export function formatKr(amount: number): string {
  return Math.round(amount).toLocaleString("da-DK");
}

/** "1,85" — to decimaler, dansk komma (uden enhed). */
export function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",");
}

/** "2,45" — små beløb, hvor hele kroner ville miste pointen. */
export function formatKrExact(amount: number): string {
  return amount.toFixed(2).replace(".", ",");
}

/** "1.234 kr." / "2,45 kr." — beløb under 10 kr. får to decimaler. */
export function kr(amount: number): string {
  return `${Math.abs(amount) < 10 ? formatKrExact(amount) : formatKr(amount)} kr.`;
}

/** "1,52 kr./kWh" */
export function krPerKwh(price: number): string {
  return `${formatPrice(price)} kr./kWh`;
}

/** "18 øre" */
export function ore(amount: number): string {
  return `${Math.round(amount).toLocaleString("da-DK")} øre`;
}

/** "4.000 kWh" */
export function kwh(amount: number): string {
  return `${Math.round(amount).toLocaleString("da-DK")} kWh`;
}

const MONTHS = ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"];

/** "2026-10" eller "2026-10-01" → "oktober 2026" */
export function danishMonth(isoMonthOrDate: string): string {
  const [y, m] = isoMonthOrDate.split("-").map(Number);
  return `${MONTHS[(m ?? 1) - 1]} ${y}`;
}

/** "2026-10-11" → "11. oktober 2026" */
export function danishDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}. ${MONTHS[(m ?? 1) - 1]} ${y}`;
}

/**
 * Bytter årstallet i en titel eller beskrivelse ud med det aktuelle ved build.
 * Titlerne står med et bogstaveligt "(2026)" i indholdsfilerne, så de læses rigtigt i editoren.
 */
export function withCurrentYear(text: string, now: Date = new Date()): string {
  return text.replace(/\((19|20)\d{2}\)/g, `(${now.getFullYear()})`);
}
