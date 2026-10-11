import type { ReactNode } from "react";
import HeroArt from "@/components/visuals/HeroArt";
import type { MotifKey } from "@/lib/visuals/motifs";
import Breadcrumb, { type Crumb } from "./Breadcrumb";
import EditorByline from "./EditorByline";
import Wave from "./Wave";

interface Props {
  /** Stien EFTER "Forside". Sidste led er den aktuelle side og får intet link. */
  crumbs: Crumb[];
  /** Sidens slags: Elselskaber, Anmeldelse, Elselskab i din by, Blog, Strømforbrug, Beregner, Guide, Om os. */
  eyebrow?: ReactNode;
  title: ReactNode;
  /** Én til to sætninger. En underrubrik med et faktum bliver ledens fede første sætning. */
  lede?: ReactNode;
  /** YYYY-MM-DD. Viser forfatter og dato under leden. */
  lastUpdated?: string;
  /** Højre spalte på store skærme: logo, illustration eller pille. */
  art?: ReactNode;
  /** Sidens motiv (src/lib/visuals/defaults.ts) — tegnes i højre spalte, når `art` ikke er givet. */
  motif?: MotifKey;
  children?: ReactNode;
}

/**
 * Sidehovedet på alle undersider: brødkrumme, eyebrow, H1, lede og byline på det blå bånd,
 * venstrestillet. Erstatter "H1 + grøn tankestregs-H2" — en overskrift uden et svar under.
 * Brødkrummen er en <nav>, som audit-claims fjerner, før den leder efter påstande.
 */
export default function PageHero({ crumbs, eyebrow, title, lede, lastUpdated, art: artProp, motif, children }: Props) {
  const art = artProp ?? (motif ? <HeroArt motif={motif} /> : undefined);
  return (
    <section className="relative bg-bg-blue">
      <div className="container-site pb-6 pt-6 md:pb-8 md:pt-8">
        <Breadcrumb items={crumbs} />
        <div className={`mt-6 grid gap-8 ${art ? "md:grid-cols-[minmax(0,1fr)_auto] md:items-center" : ""}`}>
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="mb-4 inline-flex rounded-pill bg-surface px-3.5 py-1.5 text-sm font-medium text-brand-600 shadow-sm">{eyebrow}</p>
            )}
            <h1 className="font-heading text-4xl font-semibold leading-[1.1] text-ink md:text-[3rem]">{title}</h1>
            {lede && <p className="mt-4 text-lg leading-relaxed text-ink-body">{lede}</p>}
            {children}
            {lastUpdated && <EditorByline variant="hero" lastUpdated={lastUpdated} />}
          </div>
          {art && <div className="hidden md:block">{art}</div>}
        </div>
      </div>
      <Wave fill="var(--color-bg)" />
    </section>
  );
}
