import { Plus } from "lucide-react";

export interface FaqItem { q: string; a: string }

/**
 * Selve listen: kantløse kort med plus-ikonet, der drejer 45° når kortet åbner.
 * Native <details>, så der ikke er JavaScript i det, og alle svar står i HTML'en.
 */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="mt-6 space-y-3">
      {items.map((i) => (
        <details key={i.q} className="group rounded-card bg-surface shadow-card open:shadow-card-hover">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[17px] font-medium text-ink [&::-webkit-details-marker]:hidden">
            {i.q}
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-brand-50 text-brand-600 transition-transform group-open:rotate-45">
              <Plus className="h-4 w-4" aria-hidden />
            </span>
          </summary>
          <div className="prose-content px-5 pb-5 leading-relaxed text-ink-body" dangerouslySetInnerHTML={{ __html: i.a }} />
        </details>
      ))}
    </div>
  );
}

/**
 * FAQ-afsnit. `schema` er FRA som standard: siderne udsender selv FAQPage gennem
 * @/lib/schema, og to blokke om det samme er en fejl.
 */
export default function Faq({ items, title = "Ofte stillede spørgsmål", className = "", schema = false }: { items: FaqItem[]; title?: string; className?: string; schema?: boolean }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
  return (
    <section className={`container-text py-14 md:py-20 ${className}`}>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />}
      <h2 className="font-heading text-3xl font-semibold text-ink">{title}</h2>
      <FaqList items={items} />
    </section>
  );
}
