import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Om Strømforbrug.dk — Hvem vi er",
  description: "Strømforbrug.dk drives af Mondo Media ApS. Vi hjælper danske forbrugere med at forstå, beregne og reducere deres strømforbrug.",
  alternates: { canonical: `${SITE_CONFIG.url}/om-os/` },
};

export default function OmOsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumb items={[{ name: "Om os" }]} />

      <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6">
        Om Strømforbrug.dk
      </h1>

      <div className="prose-editorial">
        <p>
          <strong>Strømforbrug.dk</strong> er Danmarks dedikerede guide til
          strømforbrug i husholdningen. Vi hjælper dig med at forstå, beregne
          og reducere dit strømforbrug — så du kan spare penge på elregningen
          uden at gå på kompromis med komforten.
        </p>

        <h2>Vores mission</h2>
        <p>
          Vi mener, at alle danske forbrugere fortjener gennemsigtigt og
          letforståeligt overblik over hvad deres apparater bruger i strøm.
          Derfor tilbyder vi interaktive beregnere, detaljerede guider og
          konkrete sparetips — alt sammen baseret på faktiske data fra
          Energistyrelsen, EU-energimærkninger og producentspecifikationer.
        </p>

        <h2>Redaktion</h2>
        <p>
          Strømforbrug.dk skrives og redigeres af <strong>{SITE_CONFIG.editorName}</strong>,
          {" "}{SITE_CONFIG.editorRole.toLowerCase()} hos {SITE_CONFIG.company.legalName}.
          Mathias har analyseret det danske energimarked siden 2024 og driver
          også Billigste-elselskab.nu — Danmarks største uafhængige
          sammenligning af elselskaber.
        </p>

        <h2>Selskabsoplysninger</h2>
        <ul>
          <li><strong>Selskab:</strong> {SITE_CONFIG.company.legalName}</li>
          <li><strong>CVR:</strong> {SITE_CONFIG.company.cvr}</li>
          <li><strong>Adresse:</strong> {SITE_CONFIG.company.address}</li>
          <li><strong>Telefon:</strong> {SITE_CONFIG.company.phone}</li>
          <li><strong>Email:</strong> {SITE_CONFIG.company.email}</li>
        </ul>

        <h2>Reklamelinks</h2>
        <p>
          Strømforbrug.dk indeholder reklamelinks til elselskaber. Når du
          klikker på et reklamelink og bliver kunde, modtager vi en
          kommission. Dette påvirker ikke vores redaktionelle indhold eller
          anbefalinger — vores data og beregnere er baseret på faktiske
          forbrugstal, ikke partnerinteresser.
        </p>
      </div>
    </article>
  );
}
