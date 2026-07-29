import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import AffiliateCta from "@/components/marketing/AffiliateCta";

export const metadata: Metadata = {
  title: "Strømforbrug husstand 2026 → Se normalt forbrug pr. person",
  description:
    "En dansk husstand bruger 3.000-4.500 kWh/år uden varmepumpe. Se normalt strømforbrug for 1 person, par og familie — og hvad det koster i kr.",
  alternates: { canonical: `${SITE_CONFIG.url}/husstand/` },
};

export default function HusstandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Husstand", url: `${SITE_CONFIG.url}/husstand/` },
            ])
          ),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Strømforbrug husstand" }]} />

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Strømforbrug pr. husstand i Danmark
        </h1>

        <QuickAnswer>
          <p>
            En gennemsnitlig dansk husstand bruger 3.000-4.500 kWh strøm om
            året uden varmepumpe. Det svarer til 7.500-11.250 kr. ved 2,50
            kr./kWh. En enlig person bruger ca. 1.500-2.500 kWh, mens en
            familie på 4 bruger 4.000-5.500 kWh.
          </p>
        </QuickAnswer>

        {/* Sub-page links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <Link href="/husstand/1-person/" className="p-4 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-center">
            <p className="font-heading font-medium text-ink-900 text-sm">1 person</p>
            <p className="text-xs text-ink-500 mt-1">1.500-2.500 kWh</p>
          </Link>
          <Link href="/husstand/2-personer/" className="p-4 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-center">
            <p className="font-heading font-medium text-ink-900 text-sm">2 personer</p>
            <p className="text-xs text-ink-500 mt-1">2.500-3.500 kWh</p>
          </Link>
          <Link href="/husstand/familie/" className="p-4 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-center">
            <p className="font-heading font-medium text-ink-900 text-sm">Familie (3-4)</p>
            <p className="text-xs text-ink-500 mt-1">4.000-5.500 kWh</p>
          </Link>
          <Link href="/husstand/med-varmepumpe/" className="p-4 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-center">
            <p className="font-heading font-medium text-ink-900 text-sm">Med varmepumpe</p>
            <p className="text-xs text-ink-500 mt-1">7.000-11.000 kWh</p>
          </Link>
        </div>

        <div className="prose-editorial">
          <h2>Normalt strømforbrug — hvornår bruger du for meget?</h2>
          <p>
            Det normale strømforbrug afhænger af tre faktorer: antal personer,
            boligtype og opvarmningsform. Herunder ser du det typiske forbrug
            for de mest almindelige husstandstyper i Danmark.
          </p>
          <table>
            <thead>
              <tr>
                <th>Husstand</th>
                <th>Normalt (kWh/år)</th>
                <th>Højt (kWh/år)</th>
                <th>Meget højt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1 person</strong></td>
                <td>1.500-2.500</td>
                <td>2.500-3.500</td>
                <td>3.500+</td>
              </tr>
              <tr>
                <td><strong>2 personer</strong></td>
                <td>2.500-3.500</td>
                <td>3.500-4.500</td>
                <td>4.500+</td>
              </tr>
              <tr>
                <td><strong>Familie (3-4)</strong></td>
                <td>3.500-5.000</td>
                <td>5.000-6.500</td>
                <td>6.500+</td>
              </tr>
              <tr>
                <td><strong>Stor familie (5+)</strong></td>
                <td>4.500-6.000</td>
                <td>6.000-8.000</td>
                <td>8.000+</td>
              </tr>
            </tbody>
          </table>
          <p>
            <em>Tallene er uden varmepumpe. Med <Link href="/varmepumpe/">varmepumpe</Link> tilføjes typisk 2.000-6.000 kWh/år afhængigt af type og boligstørrelse.</em>
          </p>

          <h2>Strømforbrug familie på 4</h2>
          <p>
            En typisk dansk familie på 4 i et parcelhus bruger 4.000-5.500 kWh strøm om året
            (uden varmepumpe), svarende til 10.000-13.750 kr. De største poster er{" "}
            <Link href="/koeleskab/">køleskab/fryser</Link> (24/7),{" "}
            <Link href="/toerretumbler/">tørretumbler</Link> og{" "}
            <Link href="/opvaskemaskine/">opvaskemaskine</Link>.
          </p>

          <h2>Strømforbrug 1 person</h2>
          <p>
            Bor du alene i en lejlighed, er et normalt strømforbrug 1.500-2.000 kWh/år
            (3.750-5.000 kr.). I et hus stiger det til 2.000-2.500 kWh/år fordi der er
            flere apparater og større arealer at belyse.
          </p>

          <h2>Strømforbrug husstand med varmepumpe</h2>
          <p>
            Har du en <Link href="/varmepumpe/">varmepumpe</Link>, stiger det samlede elforbrug
            markant — men din samlede energiudgift falder fordi varmepumpen erstatter gas eller
            olie. En familie på 4 med luft-til-vand varmepumpe bruger typisk 8.000-11.000 kWh/år
            (20.000-27.500 kr. i strøm), men sparer 6.000-14.000 kr./år i gasfyr-udgifter.
          </p>

          <h2>Sådan tjekker du dit eget forbrug</h2>
          <p>
            Log ind på <strong>Eloverblik.dk</strong> med NemID/MitID for at se dit præcise
            strømforbrug time for time. Sammenlign dit årsforbrug med tabellerne ovenfor.
            Er du over det &quot;normale&quot; interval, kan vores{" "}
            <Link href="/beregner/">strømberegner</Link> hjælpe dig med at identificere
            hvilke apparater der bruger mest.
          </p>
        </div>

        <AffiliateCta />
      </article>
    </>
  );
}
