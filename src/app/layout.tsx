import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import DisclaimerBar from "@/components/layout/DisclaimerBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PartnerCta from "@/components/marketing/PartnerCta";
import { SITE_CONFIG } from "@/lib/config";
import { color } from "@/lib/theme";
import Attribution from "@/components/Attribution";
import GoogleTag from "@/components/GoogleTag";
import { withCurrentYear } from "@/lib/format";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "optional", adjustFontFallback: true });

/**
 * Hele sitet er ISR: priserne kommer fra el-feed, og den laveste revalidate i layout/side gælder
 * ruten. 300 s matcher feedets CDN og klientens fetch-cache; feedets webhook rammer /api/revalidate/.
 */
export const revalidate = 300;

const DEFAULT_TITLE = withCurrentYear("Strømforbrug (2026) → Se hvad dine apparater bruger i strøm");

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    // No brand suffix: it costs ~18 characters of title space on every page and Google rewrites it anyway.
    template: "%s",
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: DEFAULT_TITLE,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_CONFIG.url },
};

export const viewport: Viewport = {
  themeColor: color.brand,
  width: "device-width",
  initialScale: 1,
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      legalName: SITE_CONFIG.company.legalName,
      url: SITE_CONFIG.url,
      foundingDate: "2026",
      taxID: `DK${SITE_CONFIG.company.cvr}`,
      // Strømforbrug.dk er et site af Elpriser.dk — samme selskab, samme data (ejerens beslutning 11. okt. 2026).
      parentOrganization: { "@type": "Organization", "@id": SITE_CONFIG.parent.organizationId, name: SITE_CONFIG.parent.name, url: SITE_CONFIG.parent.url },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hestehave 15",
        addressLocality: "Sønderborg",
        postalCode: "6400",
        addressCountry: "DK",
      },
      telephone: SITE_CONFIG.company.phone,
      email: SITE_CONFIG.company.email,
      sameAs: [SITE_CONFIG.parent.url, SITE_CONFIG.company.linkedin, SITE_CONFIG.company.cvrUrl],
      areaServed: { "@type": "Country", name: "Danmark" },
      knowsAbout: ["Strømforbrug", "Energiforbrug i husholdninger", "Elforbrug apparater", "Elpriser time for time", "Energibesparelse"],
      founder: { "@id": `${SITE_CONFIG.url}/#founder` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/#founder`,
      name: SITE_CONFIG.editorName,
      jobTitle: SITE_CONFIG.editorRole,
      url: `${SITE_CONFIG.url}/om-os/`,
      image: `${SITE_CONFIG.url}${SITE_CONFIG.editorImage}`,
      worksFor: { "@id": `${SITE_CONFIG.url}/#organization` },
      sameAs: ["https://www.linkedin.com/in/mathias-c-ba041b125/", "https://mathiasclausen.dk/"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      inLanguage: "da-DK",
      about: "Strømforbrug i danske husholdninger",
      publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da" className={outfit.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <a href="#main" className="skip-link">
          Spring til indhold
        </a>
        <DisclaimerBar />
        <Header />
        <main id="main" className="flex-1">
          {children}
          {/* Den store elaftale-knap på hver side (ejerens ønske 2026-10-11) */}
          <PartnerCta />
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <Attribution />
        <GoogleTag />
      </body>
    </html>
  );
}
