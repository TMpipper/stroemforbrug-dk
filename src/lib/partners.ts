/**
 * De selskaber, sitet har en aftale med — og derfor kan sende til via /go/.
 *
 * Nøglen er /go/-sluggen (go.tjekelregning.dk/c/stroemforbrug/<slug>), værdien feedets
 * selskabs-slug. Kun en aftale fra et selskab her får en knap; alle andre vises uden link.
 * Listen er IKKE et grundlag for "billigst" — det er feedets hele marked (se prices.ts).
 */
export const PARTNERS: Record<string, string> = {
  "altid-energi": "altid-energi",
  "sef-energi": "sef-energi",
  ewii: "ewii",
  aura: "aura",
  ok: "ok",
  "dcc-energi": "dcc-energi",
  norlys: "norlys",
};

export const PARTNER_GO_SLUGS = new Set(Object.keys(PARTNERS));

/** /go/-slug for et feed-selskab, eller null når vi ikke har en aftale. */
export function goSlugFor(feedSupplierSlug: string): string | null {
  for (const [go, feed] of Object.entries(PARTNERS)) if (feed === feedSupplierSlug) return go;
  return null;
}
