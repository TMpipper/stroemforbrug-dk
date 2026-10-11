/**
 * Ét sted for sidernes metadata.
 *
 * 26 ruter skrev hver deres `generateMetadata` med canonical, openGraph og — via
 * rodlayoutet — robots. Tre ting gik galt af det: beskrivelser på 185–246 tegn, som Google
 * klipper; titler på 62–86 tegn; og rodlayoutets `robots` + `canonical`, som 404-siden
 * arvede, så den bar BÅDE Next' "noindex" og vores "index, follow" med canonical til
 * forsiden.
 *
 * Nu sætter hver side kun sti, titel og beskrivelse. Canonical, hreflang, openGraph og
 * robots følger af det. Grænserne kontrolleres hårdt af audit-seo på den byggede HTML;
 * advarslen her er kun til udviklingstid, for prissidernes titler regnes ved kørsel.
 */
import type { Metadata } from "next";
import { OG_IMAGES, SITE_CONFIG } from "./config";

export const TITLE_MAX = 60;
export const DESCRIPTION_MIN = 120;
export const DESCRIPTION_MAX = 155;

export interface PageMetadataInput {
  /** "/", "/billigste/" — altid med afsluttende skråstreg. */
  path: string;
  /** ≤ 60 tegn. "Nøgleord (år) → støttetekst", aldrig sitets navn. */
  title: string;
  /** 120–155 tegn. */
  description: string;
  /** "website" for forside og om-sider; alt andet er "article". */
  type?: "website" | "article";
  /** YYYY-MM-DD — kun for "article". */
  published?: string;
  /** YYYY-MM-DD — kun for "article". */
  modified?: string;
  /** hreflang → sti (eller absolut URL). Begge sider af et sprogpar skal sætte den. */
  languages?: Record<string, string>;
  ogTitle?: string;
  ogDescription?: string;
  /** "da_DK" som standard; den engelske side sætter "en_DK". */
  locale?: string;
  noindex?: boolean;
  other?: Record<string, string>;
  /** Sidens eget delebillede (/og/<nøgle>/) — uden det bruges rodens billede. */
  ogImage?: string;
}

function absolute(pathOrUrl: string): string {
  return pathOrUrl.startsWith("/") ? `${SITE_CONFIG.url}${pathOrUrl}` : pathOrUrl;
}

export function buildMetadata(input: PageMetadataInput): Metadata {
  const { path } = input;
  if (!path.startsWith("/") || (path !== "/" && !path.endsWith("/"))) {
    throw new Error(`buildMetadata: stien skal starte og slutte med "/" — fik "${path}"`);
  }
  const url = absolute(path);

  if (process.env.NODE_ENV !== "production") {
    if (input.title.length > TITLE_MAX) console.warn(`metadata ${path}: titlen er ${input.title.length} tegn (max ${TITLE_MAX}): ${input.title}`);
    if (input.description.length < DESCRIPTION_MIN || input.description.length > DESCRIPTION_MAX) {
      console.warn(`metadata ${path}: beskrivelsen er ${input.description.length} tegn (${DESCRIPTION_MIN}–${DESCRIPTION_MAX})`);
    }
  }

  const common = {
    locale: input.locale ?? SITE_CONFIG.locale,
    url,
    siteName: SITE_CONFIG.name,
    title: input.ogTitle ?? input.title,
    description: input.ogDescription ?? input.description,
    images: input.ogImage ? [{ url: absolute(input.ogImage), width: 1200, height: 630, alt: input.ogTitle ?? input.title }] : OG_IMAGES,
  };
  const openGraph: NonNullable<Metadata["openGraph"]> =
    input.type === "website"
      ? { type: "website", ...common }
      : {
          type: "article",
          ...common,
          ...(input.published ? { publishedTime: input.published } : {}),
          ...(input.modified ? { modifiedTime: input.modified } : {}),
        };

  const languages = input.languages
    ? Object.fromEntries(Object.entries(input.languages).map(([lang, target]) => [lang, absolute(target)]))
    : undefined;

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    robots: input.noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
    openGraph,
    ...(input.other ? { other: input.other } : {}),
  };
}
