import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";
import PageHero from "@/components/marketing/PageHero";
import { motifForPath } from "@/lib/visuals/defaults";
import { pageMeta } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Om Strømforbrug.dk → Et site af Elpriser.dk",
  description: "Strømforbrug.dk er et site af Elpriser.dk: samme selskab, samme data og samme metode. Her handler det om, hvad apparaterne bruger, hvad det koster, og hvornår det er billigst.",
  alternates: { canonical: `${SITE_CONFIG.url}/om-os/` },
};

export default function OmOsPage() {
  return (
    <>
    <PageHero crumbs={[{ name: "Om os" }]} eyebrow="Om os" title="Om Strømforbrug.dk" lastUpdated={pageMeta("/om-os/").updated} motif={motifForPath("/om-os/")} />

      <article className="container-text py-10 md:py-14">

      <div className="prose-content">
        <p>
          <strong>Strømforbrug.dk</strong> er et site af <a href={SITE_CONFIG.parent.url} data-family-link>Elpriser.dk</a> og handler om
          én ting: hvad dine apparater bruger i strøm, hvad det koster, og hvornår på dagen det er billigst at bruge dem. Elpriser.dk er
          stedet for elprisen time for time og for valget af elselskab; Strømforbrug.dk er stedet for apparaterne. Samme selskab, samme
          data, samme metode.
        </p>

        <h2>Sådan hænger siderne sammen</h2>
        <p>
          Hver pris på Strømforbrug.dk kommer fra det feed, Elpriser.dk har bygget over hele det danske elmarked: spotpriserne fra Energi
          Data Service, nettarifferne fra DataHub, elafgiften og alle elselskabernes aftaler, som de er indberettet til Forsyningstilsynets
          elpris.dk. Apparaternes priser regnes med markedets marginalpris; dagens billigste tidspunkt regnes på timepriserne; den billigste
          elaftale findes i hele markedet. Reglerne står på <Link href="/metode/">metodesiden</Link>, og de samme regler gælder på Elpriser.dk.
        </p>

        <h2>Redaktion</h2>
        <p>
          Strømforbrug.dk skrives og redigeres af <strong>{SITE_CONFIG.editorName}</strong>, {SITE_CONFIG.editorRole.toLowerCase()} hos{" "}
          {SITE_CONFIG.company.legalName}, der også står bag Elpriser.dk. Forbrugstallene er typetal fra energimærker, producenter og
          Energistyrelsen, skrevet og kontrolleret af redaktøren med kilde på hver side; kronerne regnes automatisk og kontrolleres, før en
          ny udgave kan udgives.
        </p>

        <h2>Selskabsoplysninger</h2>
        <ul>
          <li><strong>Selskab:</strong> {SITE_CONFIG.company.legalName}</li>
          <li><strong>CVR:</strong> {SITE_CONFIG.company.cvr}</li>
          <li><strong>Adresse:</strong> {SITE_CONFIG.company.address}</li>
          <li><strong>Telefon:</strong> {SITE_CONFIG.company.phone}</li>
          <li><strong>E-mail:</strong> {SITE_CONFIG.company.email}</li>
        </ul>

        <h2>Reklamelinks</h2>
        <p>
          Strømforbrug.dk har reklamelinks: tegner du den billigste elaftale gennem en knap hos et selskab, vi har en aftale med, får vi
          provision. Det ændrer ikke et tal — marginalprisen bruger hele markedets median, »billigst« regnes over hele markedet, og en aftale
          uden partner vises på lige fod, blot uden knap. Læs mere under <Link href="/metode/#provision">provision</Link>.
        </p>
      </div>
    </article>
      <WhoHowWhy path="/om-os/" />
      <AuthorBox />
    </>
  );
}
