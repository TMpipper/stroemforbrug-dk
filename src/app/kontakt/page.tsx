import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";
import PageHero from "@/components/marketing/PageHero";
import { motifForPath } from "@/lib/visuals/defaults";
import { pageMeta } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Kontakt Strømforbrug.dk",
  description: `Kontakt Strømforbrug.dk på ${SITE_CONFIG.company.email} eller ${SITE_CONFIG.company.phone}.`,
  alternates: { canonical: `${SITE_CONFIG.url}/kontakt/` },
};

export default function KontaktPage() {
  return (
    <>
    <PageHero crumbs={[{ name: "Kontakt" }]} eyebrow="Kontakt" title="Kontakt os" lastUpdated={pageMeta("/kontakt/").updated} motif={motifForPath("/kontakt/")} />

      <article className="container-text py-10 md:py-14">

      <div className="prose-content">
        <p>
          Har du spørgsmål til indholdet på Strømforbrug.dk, eller vil du
          samarbejde med os? Du er altid velkommen til at kontakte os.
        </p>

        <div className="bg-surface-alt rounded-card p-6 my-6">
          <ul className="space-y-3 list-none pl-0">
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${SITE_CONFIG.company.email}`}>
                {SITE_CONFIG.company.email}
              </a>
            </li>
            <li>
              <strong>Telefon:</strong>{" "}
              <a href={`tel:${SITE_CONFIG.company.phone}`}>
                {SITE_CONFIG.company.phone}
              </a>
            </li>
            <li>
              <strong>Adresse:</strong> {SITE_CONFIG.company.address}
            </li>
          </ul>
        </div>

        <p>
          Vi svarer typisk inden for 1-2 hverdage.
        </p>

        <h2>Selskabsoplysninger</h2>
        <ul>
          <li><strong>Selskab:</strong> {SITE_CONFIG.company.legalName}</li>
          <li><strong>CVR:</strong> {SITE_CONFIG.company.cvr}</li>
        </ul>
      </div>
    </article>
      <WhoHowWhy path="/kontakt/" />
      <AuthorBox />
    </>
  );
}
