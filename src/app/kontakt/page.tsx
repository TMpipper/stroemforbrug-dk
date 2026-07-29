import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Kontakt Strømforbrug.dk",
  description: `Kontakt Strømforbrug.dk på ${SITE_CONFIG.company.email} eller ${SITE_CONFIG.company.phone}.`,
  alternates: { canonical: `${SITE_CONFIG.url}/kontakt/` },
};

export default function KontaktPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumb items={[{ name: "Kontakt" }]} />

      <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6">
        Kontakt os
      </h1>

      <div className="prose-editorial">
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
  );
}
