import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { getPublishedAppliances } from "@/lib/appliances";
import { breadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ForbrugBeregner from "@/components/calculator/ForbrugBeregner";

export const metadata: Metadata = {
  title: "Strømberegner 2026 → Beregn dit strømforbrug og pris",
  description:
    "Beregn dit strømforbrug og se hvad det koster i kr. Vælg apparat, indstil forbrug og få præcist resultat pr. dag, måned og år.",
  alternates: { canonical: `${SITE_CONFIG.url}/beregner/` },
};

export default function BeregnerPage() {
  // Use the first appliance's calculator as default
  const defaultAppliance = getPublishedAppliances()[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Strømberegner", url: `${SITE_CONFIG.url}/beregner/` },
            ])
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Strømberegner" }]} />

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-4 leading-tight">
          Strømberegner — beregn dit forbrug og pris
        </h1>

        <div className="quick-answer mb-8">
          <p>
            Brug vores strømberegner til at beregne præcist hvad dit
            strømforbrug koster. Vælg et apparat nedenfor, eller brug de
            individuelle beregnere på hvert apparats side for mere detaljerede
            resultater.
          </p>
        </div>

        {/* General calculator */}
        <ForbrugBeregner
          title="Generel strømberegner"
          options={[
            { label: "100 watt apparat", kwhPerUse: 0.1 },
            { label: "500 watt apparat", kwhPerUse: 0.5 },
            { label: "1.000 watt apparat", kwhPerUse: 1.0 },
            { label: "1.500 watt apparat", kwhPerUse: 1.5 },
            { label: "2.000 watt apparat", kwhPerUse: 2.0 },
            { label: "3.000 watt apparat", kwhPerUse: 3.0 },
          ]}
          usageLabel="Timer i brug pr. dag"
          usageUnit="timer/dag"
          usageMin={1}
          usageMax={24}
          usageDefault={4}
          usageStep={1}
        />

        {/* How to calculate */}
        <div className="prose-editorial mt-10">
          <h2>Sådan beregner du strømforbrug</h2>
          <p>
            Formlen til at beregne strømforbrug er enkel:
          </p>
          <div className="bg-surface-muted rounded-card p-6 my-6 text-center">
            <p className="font-heading text-lg font-medium text-ink-900">
              Watt &times; timer &times; dage &divide; 1.000 = kWh
            </p>
          </div>
          <p>
            <strong>Eksempel:</strong> Et tv på 85 watt der kører 4 timer om
            dagen: 85 &times; 4 &times; 365 &divide; 1.000 = 124 kWh/år. Med en
            elpris på 2,50 kr./kWh koster det 310 kr. om året.
          </p>

          <h2>Beregn forbrug for specifikke apparater</h2>
          <p>
            Hvert apparat har sin egen beregner med præcise data for forskellige
            modeller og brugsscenarier. Klik på et apparat for at se den
            detaljerede beregner:
          </p>
        </div>

        {/* Links to all appliance calculators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
          {getPublishedAppliances().map((a) => (
            <Link
              key={a.slug}
              href={`/${a.slug}/`}
              className="flex items-center gap-2 p-3 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-sm"
            >
              <span className="font-medium text-ink-800">{a.name}</span>
              <span className="text-xs text-ink-400 ml-auto">
                {a.typicalKwh} kWh
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
