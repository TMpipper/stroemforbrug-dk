import Faq, { FaqList } from "./FaqList";
import Wave from "./Wave";
import { collapseAbbreviationPeriods } from "@/lib/tokens";

type Item = { question: string; answer: string };
type Group = { name: string; items: Item[] };

/**
 * FAQ'en som et varmt bånd med bølger ind og ud. Det eneste varme bånd på en side.
 *
 * `groups` giver grupperede overskrifter frem for faner: ingen klient-JavaScript
 * (details/summary er native), og alle spørgsmål står i HTML'en — det er dem, der bærer
 * søgetrafikken. Skemaet er slået fra: siderne udsender selv FAQPage gennem @/lib/schema.
 */
export default function FaqBand({ faqs, groups, title = "Ofte stillede spørgsmål" }: { faqs?: Item[]; groups?: Group[]; title?: string }) {
  // Dansk typografi: et beløb, der slutter en sætning, får ikke to punktummer ("104 kr.").
  const map = (xs: Item[]) => xs.map((f) => ({ q: collapseAbbreviationPeriods(f.question), a: collapseAbbreviationPeriods(f.answer) }));
  if (!faqs?.length && !groups?.length) return null;
  return (
    <>
      {/* Bølgen ind: ligger oven på det foregående afsnits bundluft, så den gennemsigtige top viser DETS farve
          (mint under appbåndet, side-farven ellers) og den creme form smelter sammen med båndet. Den flippede
          udgave tegnede en creme stribe og en grå kile under den — på hver eneste side. */}
      <Wave fill="var(--color-bg-warm)" className="-mt-10 md:-mt-16" />
      <div className="bg-bg-warm">
        {groups ? (
          <section className="container-text py-14 md:py-20">
            <h2 className="font-heading text-3xl font-semibold text-ink">{title}</h2>
            {groups.map((g, i) => (
              <div key={g.name} className={i === 0 ? "mt-6" : "mt-10"}>
                <h3 className="font-heading text-xl font-semibold text-ink">{g.name}</h3>
                <FaqList items={map(g.items)} />
              </div>
            ))}
          </section>
        ) : (
          <Faq items={map(faqs!)} title={title} />
        )}
        <Wave fill="var(--color-bg)" />
      </div>
    </>
  );
}
