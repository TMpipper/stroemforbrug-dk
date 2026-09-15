import Link from "next/link";
import {
  allHouseholds,
  topAppliances,
  AVERAGE_PER_PERSON_KWH,
  REFERENCE_HOUSEHOLD_KWH,
} from "@/lib/home-insights";
import {
  EL_PRICE_KR_PER_KWH,
  PRICE_DK1,
  PRICE_DK2,
  MARKET,
  formatKr,
  formatPrice,
} from "@/lib/pricing";
import { SOURCES, SOURCES_VERIFIED_AT } from "@/lib/sources";

/**
 * The pillar sections. The homepage used to be the thinnest content page on the
 * site — 663 words linking out to 43 far deeper pages — which is backwards for
 * the page that should own "strømforbrug". These sections give it something the
 * appliance pages cannot: the whole dataset seen at once.
 */

/** Answer-first block: the core question resolved inside the first 100 words. */
export function DirectAnswer() {
  const households = allHouseholds();
  const flat = households[0];
  const family = households[2];
  return (
    <section className="py-12 border-b border-ink-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-2xl sm:text-3xl font-medium text-ink-900 mb-4">
          Hvor meget strøm bruger en dansk husstand?
        </h2>
        <p className="text-lg text-ink-800 leading-relaxed">
          En gennemsnitlig dansker bruger omkring{" "}
          <strong>{formatKr(AVERAGE_PER_PERSON_KWH)} kWh strøm om året</strong>. En
          person i lejlighed lander typisk på {formatKr(flat.totalKwh)} kWh —{" "}
          <strong>{formatKr(flat.totalCost)} kr.</strong> — mens en familie på fire i
          hus bruger omkring {formatKr(family.totalKwh)} kWh, altså{" "}
          <strong>{formatKr(family.totalCost)} kr. om året</strong>. Har I varmepumpe
          eller elbil, fordobles det let.
        </p>
        <p className="text-ink-600 mt-4">
          Beregnet med en elpris på {formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh inkl.
          moms, afgifter og transport for {MARKET.period}. Nedenfor kan du se, hvad
          hvert enkelt apparat koster, og hvilke poster der reelt fylder på regningen.
        </p>
      </div>
    </section>
  );
}

/** What a household of a given size actually uses, and what makes it up. */
export function HouseholdProfiles() {
  const households = allHouseholds();
  return (
    <section className="py-16 border-b border-ink-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-2xl sm:text-3xl font-medium text-ink-900 mb-3">
          Hvad bruger en husstand som din?
        </h2>
        <p className="text-ink-600 mb-8 max-w-2xl">
          Forbruget afhænger langt mere af, hvordan boligen varmes op, og om der er
          elbil, end af hvor mange I er. Tallene her er samlet årsforbrug — ikke kun
          apparaterne vi har en side om.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">Husstand</th>
                <th className="text-right py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">kWh/år</th>
                <th className="text-right py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">Pris/år</th>
                <th className="text-right py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium hidden sm:table-cell">Pr. måned</th>
                <th className="text-left py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium hidden md:table-cell">Største poster</th>
              </tr>
            </thead>
            <tbody>
              {households.map((h) => (
                <tr key={h.slug} className="hover:bg-surface-alt">
                  <td className="py-3 px-4 border-b border-ink-200 font-medium text-ink-900">{h.label}</td>
                  <td className="py-3 px-4 border-b border-ink-200 text-right tabular-nums">{formatKr(h.totalKwh)}</td>
                  <td className="py-3 px-4 border-b border-ink-200 text-right tabular-nums font-semibold">{formatKr(h.totalCost)} kr.</td>
                  <td className="py-3 px-4 border-b border-ink-200 text-right tabular-nums hidden sm:table-cell">{formatKr(h.totalCost / 12)} kr.</td>
                  <td className="py-3 px-4 border-b border-ink-200 text-ink-600 hidden md:table-cell">
                    {h.top.map((t, i) => (
                      <span key={t.slug}>
                        {i > 0 && ", "}
                        <Link href={`/${t.slug}/`} className="text-brand-700 hover:underline">{t.name}</Link>
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink-400 mt-3">
          Samlet forbrug er forankret i Energistyrelsens tal, ikke lagt sammen af
          vores apparatliste — belysning, opladere, småt køkkenudstyr og standby i
          hele boligen får aldrig deres egen side. Se{" "}
          <a href="#metode" className="underline hover:text-brand-700">metoden</a>.
        </p>
      </div>
    </section>
  );
}

/** The honest answer to "what uses most" — and it is not the television. */
export function WhatDominates() {
  const top = topAppliances(8);
  const heaviest = top[0];
  return (
    <section className="py-16 bg-surface-alt border-b border-ink-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-2xl sm:text-3xl font-medium text-ink-900 mb-3">
          Hvad fylder mest på elregningen?
        </h2>
        <p className="text-ink-700 mb-6 max-w-2xl">
          Opvarmning, varmt vand og transport. Listen herunder er sorteret efter
          typisk årsforbrug, og den er værd at læse, før du skifter pærer: en{" "}
          <Link href={`/${heaviest.appliance.slug}/`} className="text-brand-700 underline underline-offset-2">
            {heaviest.appliance.name.toLowerCase()}
          </Link>{" "}
          bruger alene lige så meget som en hel husstand uden elvarme.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-white border-b-2 border-ink-200 font-heading font-medium">#</th>
                <th className="text-left py-3 px-4 bg-white border-b-2 border-ink-200 font-heading font-medium">Apparat</th>
                <th className="text-right py-3 px-4 bg-white border-b-2 border-ink-200 font-heading font-medium">kWh/år</th>
                <th className="text-right py-3 px-4 bg-white border-b-2 border-ink-200 font-heading font-medium">Pris/år</th>
                <th className="text-right py-3 px-4 bg-white border-b-2 border-ink-200 font-heading font-medium hidden sm:table-cell">Af en husstand</th>
              </tr>
            </thead>
            <tbody>
              {top.map((t, i) => (
                <tr key={t.appliance.slug} className="hover:bg-white">
                  <td className="py-3 px-4 border-b border-ink-200 text-ink-500">{i + 1}</td>
                  <td className="py-3 px-4 border-b border-ink-200">
                    <Link href={`/${t.appliance.slug}/`} className="font-medium text-brand-700 hover:underline">
                      {t.appliance.name}
                    </Link>
                  </td>
                  <td className="py-3 px-4 border-b border-ink-200 text-right tabular-nums">{formatKr(t.kwh)}</td>
                  <td className="py-3 px-4 border-b border-ink-200 text-right tabular-nums font-semibold">{formatKr(t.cost)} kr.</td>
                  <td className="py-3 px-4 border-b border-ink-200 text-right tabular-nums text-ink-600 hidden sm:table-cell">
                    {(t.share * 100).toFixed(0)} %
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink-400 mt-3">
          Andel er regnet af en referencehusstand på {formatKr(REFERENCE_HOUSEHOLD_KWH)} kWh/år.
          Poster som pool, sauna og jordvarme er udeladt her, fordi de færreste har dem —
          de står i den fulde oversigt nedenfor.
        </p>
      </div>
    </section>
  );
}

/** How every figure on the site is produced. */
export function Methodology() {
  return (
    <section id="metode" className="py-16 border-b border-ink-200 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 prose-editorial">
        <h2>Sådan regner vi</h2>
        <p>
          Alle priser på siden er beregnet, ikke skrevet ind i hånden. Det betyder,
          at hver eneste kronebeløb på tværs af {formatKr(43)} apparatsider stammer
          fra de samme markedstal og opdateres samlet, når markedet ændrer sig.
        </p>
        <h3>Elprisen</h3>
        <p>
          Vi regner med en marginal elpris på{" "}
          <strong>{formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh</strong> inkl. moms —{" "}
          {formatPrice(PRICE_DK1)} kr. vest for Storebælt og {formatPrice(PRICE_DK2)} kr.
          øst for. Prisen dækker spotpris, nettarif, Energinet-tarif og elafgift for{" "}
          {MARKET.period}.
        </p>
        <p>
          Abonnement indgår <em>ikke</em> i kWh-prisen. Det er en fast månedlig udgift,
          der ikke ændrer sig, når et apparat kører en time længere, og alle tal på
          apparatsiderne svarer på spørgsmålet &quot;hvad koster det at bruge det her&quot;.
          Når vi sammenligner elaftaler, regner vi derimod alt med, inklusive abonnement —
          ellers ville besparelsen se større ud, end den er.
        </p>
        <h3>Hvorfor ikke vores egne partneres priser</h3>
        <p>
          Gennemsnitsprisen er afledt af Forsyningstilsynets opgørelse for de 30 mest
          solgte elaftaler og ikke af de selskaber, vi linker til. De ligger blandt
          markedets billigste, så deres gennemsnit ville undervurdere, hvad en almindelig
          husstand betaler — og dermed få besparelserne på siden til at se større ud.
        </p>
        <h3>Forbrugstallene</h3>
        <p>
          Hvert apparat har et typisk årsforbrug og et spænd, der dækker forskelle i
          model, alder og brug. Tallene bygger på energimærkning, producenternes egne
          specifikationer og Energistyrelsens vejledning. Husstandstallene er forankret
          i Energistyrelsens opgørelser frem for lagt sammen af vores apparatliste —
          en husstand bruger også strøm på belysning, opladere og hundrede små ting,
          der aldrig får deres egen side.
        </p>
        <h3>Hvad vi ikke gør</h3>
        <ul>
          <li>Vi sætter ikke automatisk dagens dato på sider, der ikke er ændret.</li>
          <li>Vi sammenligner ikke en marginalpris med en alt-i-alt-pris — det ville overdrive besparelsen.</li>
          <li>Vi omregner ikke priser på benzin, diesel, gas eller fjernvarme efter elprisen. De følger deres egne markeder.</li>
        </ul>
        <p className="text-sm text-ink-500">
          Kilder:{" "}
          <a href={SOURCES.energimaerke.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">{SOURCES.energimaerke.name}</a>,{" "}
          <a href={SOURCES.indkoeb.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">{SOURCES.indkoeb.name}</a>,{" "}
          <a href={MARKET.sources.spot} target="_blank" rel="noopener noreferrer nofollow" className="underline">Energi Data Service</a> og{" "}
          <a href={MARKET.sources.transport} target="_blank" rel="noopener noreferrer nofollow" className="underline">Forsyningstilsynet</a>.
          Links kontrolleret {new Date(SOURCES_VERIFIED_AT).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}.
        </p>
      </div>
    </section>
  );
}
