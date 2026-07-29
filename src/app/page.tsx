import Link from "next/link";
import { Zap, Calculator, Home, BarChart3 } from "lucide-react";
import { SITE_CONFIG, ELECTRICITY_PRICE_KR_PER_KWH } from "@/lib/config";
import { getPublishedAppliances } from "@/lib/appliances";

export default function HomePage() {
  // Sort by typical kWh descending for the ranking
  const sorted = [...getPublishedAppliances()].sort((a, b) => b.typicalKwh - a.typicalKwh);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-800 text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-8 h-8 text-accent-400" />
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-medium mb-4 leading-tight">
            Strømforbrug i Danmark
          </h1>
          <p className="text-lg sm:text-xl text-brand-200 max-w-2xl mx-auto mb-8">
            Se hvor meget strøm dine apparater bruger, beregn din årlige udgift
            og få konkrete tips til at spare på elregningen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/beregner/"
              className="btn-cta bg-accent-500 hover:bg-accent-600 text-ink-900"
            >
              <span className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Beregn dit strømforbrug
              </span>
            </Link>
            <Link
              href="/gennemsnitligt/"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-200 hover:text-white transition-colors underline underline-offset-4"
            >
              Se gennemsnitligt forbrug
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-12 bg-surface-alt border-b border-ink-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              href="/beregner/"
              className="flex flex-col items-center gap-2 p-4 rounded-card hover:bg-white hover:shadow-sm transition-all text-center"
            >
              <Calculator className="w-6 h-6 text-brand-600" />
              <span className="text-sm font-medium text-ink-800">
                Strømberegner
              </span>
            </Link>
            <Link
              href="/gennemsnitligt/"
              className="flex flex-col items-center gap-2 p-4 rounded-card hover:bg-white hover:shadow-sm transition-all text-center"
            >
              <BarChart3 className="w-6 h-6 text-brand-600" />
              <span className="text-sm font-medium text-ink-800">
                Gennemsnitligt forbrug
              </span>
            </Link>
            <Link
              href="/varmepumpe/"
              className="flex flex-col items-center gap-2 p-4 rounded-card hover:bg-white hover:shadow-sm transition-all text-center"
            >
              <Zap className="w-6 h-6 text-brand-600" />
              <span className="text-sm font-medium text-ink-800">
                Varmepumpe
              </span>
            </Link>
            <Link
              href="/husstand/"
              className="flex flex-col items-center gap-2 p-4 rounded-card hover:bg-white hover:shadow-sm transition-all text-center"
            >
              <Home className="w-6 h-6 text-brand-600" />
              <span className="text-sm font-medium text-ink-800">
                Husstand
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Appliance ranking */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-medium text-ink-900 mb-2">
            Alle apparaters strømforbrug
          </h2>
          <p className="text-ink-600 mb-8 max-w-2xl">
            Oversigt over typisk årligt strømforbrug for de mest almindelige
            apparater i danske hjem. Klik på et apparat for at se detaljeret
            guide med beregner.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">
                    Apparat
                  </th>
                  <th className="text-left py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">
                    kWh/år
                  </th>
                  <th className="text-left py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">
                    Pris/år
                  </th>
                  <th className="text-left py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium hidden sm:table-cell">
                    Effekt (W)
                  </th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((appliance) => (
                  <tr key={appliance.slug} className="hover:bg-surface-alt group">
                    <td className="py-3 px-4 border-b border-ink-200">
                      <Link
                        href={`/${appliance.slug}/`}
                        className="font-medium text-brand-700 group-hover:text-brand-900 transition-colors"
                      >
                        {appliance.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 border-b border-ink-200">
                      {appliance.kwhRange[0].toLocaleString("da-DK")}-
                      {appliance.kwhRange[1].toLocaleString("da-DK")}
                    </td>
                    <td className="py-3 px-4 border-b border-ink-200">
                      {Math.round(
                        appliance.typicalKwh * ELECTRICITY_PRICE_KR_PER_KWH
                      ).toLocaleString("da-DK")}{" "}
                      kr.
                    </td>
                    <td className="py-3 px-4 border-b border-ink-200 hidden sm:table-cell">
                      {appliance.wattage.toLocaleString("da-DK")} W
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Editorial content */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose-editorial">
          <h2>Hvad er strømforbrug?</h2>
          <p>
            Strømforbrug måles i kilowatt-timer (kWh) og angiver hvor meget
            elektrisk energi dine apparater bruger over tid. 1 kWh svarer til at
            bruge 1.000 watt i én time — for eksempel en{" "}
            <Link href="/ovn/">ovn på 1.000W</Link> der kører i 60 minutter.
          </p>
          <p>
            Den gennemsnitlige danske husstand bruger{" "}
            <Link href="/gennemsnitligt/">3.000-4.500 kWh strøm om året</Link>,
            svarende til 7.500-11.250 kr. ved den aktuelle gennemsnitspris på
            2,50 kr./kWh. Inkluderer husstanden en{" "}
            <Link href="/varmepumpe/">varmepumpe</Link>, stiger forbruget typisk
            til 6.000-10.000 kWh/år.
          </p>

          <h2>Hvad bruger mest strøm i hjemmet?</h2>
          <p>
            De største strømslugere i en dansk husstand er typisk opvarmning
            (varmepumpe/elvarme), hvidevarer og underholdningselektronik. Her er
            top 5 for en gennemsnitlig familie uden varmepumpe:
          </p>
          <ol>
            <li>
              <strong>
                <Link href="/koeleskab/">Køleskab/fryser</Link>
              </strong>{" "}
              — 200-400 kWh/år (kører 24/7)
            </li>
            <li>
              <strong>
                <Link href="/toerretumbler/">Tørretumbler</Link>
              </strong>{" "}
              — 200-750 kWh/år (afhængigt af type og brug)
            </li>
            <li>
              <strong>
                <Link href="/opvaskemaskine/">Opvaskemaskine</Link>
              </strong>{" "}
              — 150-300 kWh/år
            </li>
            <li>
              <strong>
                <Link href="/vaskemaskine/">Vaskemaskine</Link>
              </strong>{" "}
              — 100-200 kWh/år
            </li>
            <li>
              <strong>
                <Link href="/tv/">TV og underholdning</Link>
              </strong>{" "}
              — 100-300 kWh/år (inkl. streaming-enheder)
            </li>
          </ol>

          <h2>Sådan beregner du dit strømforbrug</h2>
          <p>
            Formlen er enkel: <strong>Watt × timer × dage ÷ 1.000 = kWh</strong>
            . Eksempel: et <Link href="/tv/">55&quot; tv</Link> på 85W der kører 4
            timer dagligt bruger 85 × 4 × 365 ÷ 1.000 = 124 kWh/år, svarende
            til 310 kr.
          </p>
          <p>
            Brug vores{" "}
            <Link href="/beregner/">
              interaktive strømberegner
            </Link>{" "}
            til at beregne forbruget for alle dine apparater — eller klik ind på
            et specifikt apparat i oversigten ovenfor for en detaljeret guide.
          </p>

          <h2>Tips til at spare på strømmen</h2>
          <p>
            De tre mest effektive måder at reducere dit strømforbrug på er: 1)
            skift til energieffektive apparater (især{" "}
            <Link href="/toerretumbler/">tørretumbler</Link> og{" "}
            <Link href="/koeleskab/">køleskab</Link> giver stor besparelse), 2)
            reducer standby-forbrug ved at slukke helt, og 3) vælg et billigere
            elselskab med lavere kWh-pris.
          </p>
        </div>
      </section>
    </>
  );
}
