import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Strømforbrug 2026 → Se hvad dine apparater bruger i strøm",
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Strømforbrug.dk — Alt om strømforbrug i Danmark",
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
  themeColor: "#1e40af",
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
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hestehave 15",
        addressLocality: "Sønderborg",
        postalCode: "6400",
        addressCountry: "DK",
      },
      telephone: SITE_CONFIG.company.phone,
      email: SITE_CONFIG.company.email,
      sameAs: [
        SITE_CONFIG.company.linkedin,
        SITE_CONFIG.company.website,
        `https://datacvr.virk.dk/enhed/virksomhed/${SITE_CONFIG.company.cvr}`,
      ],
      areaServed: {
        "@type": "Country",
        name: "Danmark",
      },
      knowsAbout: [
        "Strømforbrug",
        "Energiforbrug i husholdninger",
        "Elforbrug apparater",
        "Energibesparelse",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/#founder`,
      name: SITE_CONFIG.editorName,
      jobTitle: SITE_CONFIG.editorRole,
      url: `${SITE_CONFIG.url}/om-os/`,
      worksFor: { "@id": `${SITE_CONFIG.url}/#organization` },
      sameAs: [
        "https://www.linkedin.com/in/mathias-c-ba041b125/",
        "https://mathiasclausen.dk/",
      ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">
          Spring til indhold
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
