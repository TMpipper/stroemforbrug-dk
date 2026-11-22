import routes from "../../content/routes.json";

/** Topniveau-ruter, der ikke er apparatsider — den ene liste (content/routes.json). */
export const RESERVED_SLUGS: readonly string[] = routes.reserved;
export const isReserved = (slug: string) => RESERVED_SLUGS.includes(slug);

/** Permanente omdirigeringer (sammenlagte dubletter). */
export const REDIRECTS: Readonly<Record<string, string>> = routes.redirects as Record<string, string>;
