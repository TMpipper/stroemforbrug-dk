import Link from "next/link";
import { annualKwh, keyFigure, modelPath, modelsFor, wattRange } from "@/lib/models";

/**
 * »Modeller med egen side« på apparatsiden: hver modelfamilie med producentens tomgangstal og vores årsforbrug
 * (samme profil for alle). Linket ned til /<apparat>/<model>/ er modelsidernes vigtigste indgang.
 */
export default function ModelLinks({ parent, name }: { parent: string; name: string }) {
  const models = modelsFor(parent);
  if (!models.length) return null;
  const da = (n: number) => n.toLocaleString("da-DK", { maximumFractionDigits: 1 });
  return (
    <section id="modelsider" aria-labelledby="modelsider-h" className="my-10 scroll-mt-28">
      <h2 id="modelsider-h" className="font-heading text-2xl font-semibold text-ink">
        {name}: modeller med producentens egne tal
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {models.map((m) => {
          const idle = m.variants.map((v) => v.watts.idle).filter((w): w is number => w !== undefined);
          const key = idle.length ? null : keyFigure(m.variants[0], m.parent);
          const years = m.variants.map((v) => annualKwh(v, m.parent));
          return (
            <li key={m.slug}>
              <Link href={modelPath(m)} className="group flex h-full flex-col rounded-card bg-surface p-4 shadow-sm transition-shadow hover:shadow-card">
                <span className="font-semibold text-ink group-hover:text-accent">{m.name}</span>
                <span className="mt-1 text-xs text-ink-muted tabular">
                  {idle.length ? `${wattRange(idle)} i tomgang · ` : key ? `${key.text} · ` : ""}
                  {da(Math.min(...years))}{Math.max(...years) !== Math.min(...years) ? `–${da(Math.max(...years))}` : ""} kWh om året
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
