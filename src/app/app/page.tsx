import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { withCurrentYear } from "@/lib/format";
import { pageMeta } from "@/lib/pages";
import PageHero from "@/components/marketing/PageHero";
import FaqBand from "@/components/marketing/FaqBand";
import AuthorBox from "@/components/marketing/AuthorBox";
import AppPromo, { AppPageLink, PromoCta, Screens } from "@/components/app-promo/AppPromo";
import AppSmartBanner from "@/components/app-promo/AppSmartBanner";
import AppStoreBadges from "@/components/app-promo/AppStoreBadges";
import { PROMO_VARS } from "@/components/app-promo/style";
import { ANDROID_LIVE, ANDROID_NOTE, APP_STORE_URL, PROMO_TRUST } from "@/lib/feed/app-promo";

/**
 * Strømforbrug.dk's app-side (ejerens app-undtagelse 19. okt. 2026). Vinklen: »app til strømforbrug og
 * billigste tidspunkt« — hvornår vasken, opvasken og elbilen skal køre. Sitet siger, hvad apparatet bruger;
 * appen siger, hvornår strømmen er billig. Hele siden er et app-træ (`data-family-app`), så audit-app-promo
 * tillader linket til https://elpriser.dk/app/ her. Ingen tal i teksten, ingen påstand om, at appen måler
 * læserens eget forbrug, og aldrig appens forbrugsskærm (kittet udelader den).
 */
const PATH = "/app/";
const TITLE = withCurrentYear("App til strømforbrug (2026) → Hvornår er strømmen billigst?");
const DESCRIPTION =
  "Hvornår skal vaskemaskinen, opvaskeren og elbilen køre? Elpriser.dk-appen viser døgnets billige timer for dit postnummer og minder dig om dem. Gratis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_CONFIG.url}${PATH}` },
  openGraph: { type: "article", locale: SITE_CONFIG.locale, url: `${SITE_CONFIG.url}${PATH}`, siteName: SITE_CONFIG.name, title: TITLE, description: DESCRIPTION },
};

const faqs = [
  {
    question: "Kan en app fortælle mig, hvornår jeg skal starte vaskemaskinen?",
    answer:
      "Ja. Elpriser.dk-appen viser døgnets billigste og dyreste timer for dit postnummer og kan give dig en påmindelse, før de billige timer begynder. Har maskinen udskudt start, sætter du den til at køre i de timer — så behøver du ikke selv at være vågen.",
  },
  {
    question: "Hvorfor er strømmen ikke lige dyr hele døgnet?",
    answer:
      "Spotprisen fastsættes for hver time og hvert kvarter på elbørsen, og den stiger, når mange bruger strøm på samme tid. Oven i kommer nettariffen, som netselskaberne gør dyrest i spidslasten om aftenen. De to trækker typisk i samme retning: aftenen er dyr, natten og ofte midt på dagen billigere.",
  },
  {
    question: "Kan det betale sig at flytte forbruget, hvis jeg har fastpris?",
    answer:
      "Lidt. Med en fastprisaftale er selve strømmen lige dyr hele døgnet, men nettariffen følger stadig tidspunktet. Flytter du vask og opladning væk fra aftenens spidslast, sparer du altså stadig på tariffen — bare mindre end med en spotaftale, hvor også strømprisen følger timen.",
  },
  {
    question: "Hvilke apparater giver mest ved at blive flyttet?",
    answer:
      "Dem, der bruger meget strøm ad gangen og kan vente: elbilen, tørretumbleren, vaskemaskinen og opvaskemaskinen. Køleskab, fryser og router kører hele døgnet, så for dem er det døgnets gennemsnit, der tæller — dem kan en app ikke flytte.",
  },
  {
    question: "Hvorfor skal appen kende mit postnummer?",
    answer:
      "Danmark har to prisområder, og nettariffen afhænger af, hvilket netselskab der ejer ledningerne til din adresse. Med postnummeret regner appen med dit eget område i stedet for et landsgennemsnit, så de billige timer passer til netop dit hjem.",
  },
  {
    question: "Hvad koster Elpriser.dk-appen, og findes den til Android?",
    answer: `Appen er gratis, uden reklamer og uden konto. Den ligger i App Store til iPhone${ANDROID_NOTE ? ", og Android-udgaven er på vej" : " og i Google Play"}.`,
  },
];

const HELPS = [
  "døgnets billigste og dyreste timer for dit eget postnummer",
  "en påmindelse, før de billige timer begynder",
  "morgendagens priser, så snart de er offentliggjort",
  "en prisalarm ved den grænse, du selv vælger",
  "prisen time for time og kvarter for kvarter, alt inklusive",
];

export default function AppPage() {
  const url = `${SITE_CONFIG.url}${PATH}`;
  const meta = pageMeta(PATH);
  const trust = `${PROMO_TRUST}${ANDROID_NOTE ? ` ${ANDROID_NOTE}` : ""}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([{ name: "Forside", url: SITE_CONFIG.url }, { name: "App til strømforbrug", url }]),
            articleSchema({ title: "App til strømforbrug", description: DESCRIPTION, url, datePublished: meta.published, dateModified: meta.updated }),
            {
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "@id": `${url}#app`,
              name: "Elpriser.dk",
              operatingSystem: ANDROID_LIVE ? "iOS, Android" : "iOS",
              applicationCategory: "UtilitiesApplication",
              inLanguage: "da",
              downloadUrl: APP_STORE_URL,
              installUrl: APP_STORE_URL,
              offers: { "@type": "Offer", price: "0", priceCurrency: "DKK" },
            },
            faqSchema(faqs),
          ]),
        }}
      />
      <AppSmartBanner />

      <div data-family-app data-app-page style={PROMO_VARS}>
        <PageHero
          crumbs={[{ name: "App til strømforbrug" }]}
          eyebrow="Elpriser.dk-appen"
          title="App til strømforbrug"
          lede="Her på Strømforbrug.dk kan du se, hvad vasken, opvasken og opladningen bruger. Elpriser.dk-appen svarer på det næste spørgsmål: hvornår på døgnet strømmen til dem er billigst — for dit postnummer og med en påmindelse, før de billige timer begynder."
          lastUpdated={meta.updated}
          art={<Screens keys={["pris-nu", "alarmer"]} big />}
        >
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <PromoCta placement="app-page-hero" />
            <AppStoreBadges placement="app-page-hero" className="hidden md:flex" />
            <AppPageLink placement="app-page-hero" />
          </div>
          <p className="mt-3 text-sm text-ink-muted">{trust}</p>
        </PageHero>

        <div className="container-text py-10 md:py-14">
          <div className="prose-content">
            <h2 id="samme-kwh">Samme vask, forskellig pris</h2>
            <p>
              En vaskemaskine bruger den samme mængde strøm, uanset om den kører klokken syv om aftenen eller midt om natten. Det, der skifter, er
              prisen på hver kWh. Med en spotaftale følger din pris elbørsen time for time, og nettariffen lægger sig ovenpå med sin egen dyre
              periode om aftenen. Derfor kan den præcis samme vask koste mærkbart mere i spidslasten end et par timer senere.
            </p>
            <p>
              Strømforbrug.dk handler om den første halvdel af regnestykket: hvor mange kWh apparatet bruger pr. gang og om året. Den anden
              halvdel — hvornår strømmen er billig — skifter hver dag, og den er lettest at følge på telefonen. Det er dén opgave, Elpriser.dk-appen
              løser.
            </p>

            <h2 id="hvilke-apparater">Hvilke apparater kan vente på de billige timer?</h2>
            <p>
              Ikke alt kan flyttes, og det er heller ikke nødvendigt. Det, der betyder noget, er de apparater, der bruger meget strøm på én gang og
              er ligeglade med, hvornår de bliver færdige:
            </p>
            <ul>
              <li>
                <strong>Vaskemaskinen og tørretumbleren</strong> — start dem med udskudt start, så tøjet er klar om morgenen. Se, hvad en vask
                bruger, på siden om <Link href="/vaskemaskine/">vaskemaskinens strømforbrug</Link>.
              </li>
              <li>
                <strong>Opvaskemaskinen</strong> — de fleste har en timer, og opvasken fra aftensmaden kan sagtens vente til natten. Se{" "}
                <Link href="/opvaskemaskine/">opvaskemaskinens strømforbrug</Link>.
              </li>
              <li>
                <strong>Elbilen</strong> — den største enkeltpost i mange hjem, og den holder alligevel stille hele natten. Sæt en ladeplan i bilen
                eller ladeboksen efter de billige timer; forbruget pr. opladning står på siden om <Link href="/elbil/">elbilens strømforbrug</Link>.
              </li>
            </ul>
            <p>
              Køleskab, fryser, router og varmtvandsbeholder kører hele døgnet. For dem er det døgnets gennemsnitspris, der tæller, og der er ingen
              time at flytte til — her hjælper det mere at se på energimærket end på uret.
            </p>
          </div>

          <div className="mt-10 rounded-card bg-bg-blue p-6 md:p-8">
            <h2 id="det-viser-appen" className="m-0 font-heading text-2xl font-semibold text-ink">
              Det viser Elpriser.dk-appen
            </h2>
            <p className="mb-0 mt-3 leading-relaxed text-ink-body">Appen tager udgangspunkt i dit postnummer, og med den får du</p>
            <ul className="mt-3 list-none space-y-2 p-0">
              {HELPS.map((h) => (
                <li key={h} className="m-0 flex gap-2 text-ink-body">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <p className="mb-0 mt-4 leading-relaxed text-ink-body">
              Prisen i appen er hele prisen: spotpris, nettarif, Energinets tariffer, elafgift og moms — ikke kun børsprisen. {trust}
            </p>
          </div>

          <div className="prose-content mt-10">
            <h2 id="saadan">Sådan planlægger du vask og opladning med appen</h2>
            <ol>
              <li>
                <strong>Hent appen</strong> i App Store eller Google Play — på telefonen med knappen øverst på siden, på computeren med QR-koden.
              </li>
              <li>
                <strong>Skriv dit postnummer.</strong> Så regner appen med dit eget prisområde og dit netselskabs tarif.
              </li>
              <li>
                <strong>Slå påmindelsen om de billigste timer til.</strong> Du får besked, før de begynder — i god tid til at trykke på
                opvaskeren eller sætte bilen til.
              </li>
              <li>
                <strong>Se på morgendagen om eftermiddagen.</strong> Når morgendagens priser er ude, kan du lægge nattens vask og opladning,
                før du går i seng.
              </li>
            </ol>
            <p>
              Vil du se døgnets priser her og nu uden app, viser <Link href="/elpriser/">elpriser time for time</Link> dagens timepriser og hvad én
              gang koster i den billige og den dyre ende af døgnet.
            </p>
          </div>

          <AppPromo variant="card" placement="app-page-tail" context="cheapest-hours" className="mt-10" />
        </div>

        <FaqBand faqs={faqs} title="Ofte stillede spørgsmål om appen" />
      </div>
      <AuthorBox />
    </>
  );
}
