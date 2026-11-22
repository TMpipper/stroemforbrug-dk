"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { queryTokens } from "@/lib/search";

/**
 * Filteret på /apparater/: listen er serverrenderet (virker uden JavaScript); feltet skjuler bare de rækker,
 * der ikke matcher. Hver række bærer sine normaliserede søgeord i `data-terms` (samme termsFor som søgningen).
 */
export default function FinderFilter({ targetId, total }: { targetId: string; total: number }) {
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(total);

  // Filtreringen sker i hændelsen (ikke i en effekt): rækkerne skjules direkte i den serverrenderede liste.
  const apply = (value: string) => {
    setQ(value);
    const root = document.getElementById(targetId);
    if (!root) return;
    const toks = queryTokens(value);
    let n = 0;
    root.querySelectorAll<HTMLElement>("[data-finder-item]").forEach((el) => {
      const terms = (el.dataset.terms ?? "").split(" ");
      const ok = !toks.length || toks.every((t) => terms.some((w) => w.startsWith(t) || (t.length >= 4 && w.includes(t))));
      el.hidden = !ok;
      if (ok) n++;
    });
    root.querySelectorAll<HTMLElement>("[data-finder-group]").forEach((g) => {
      g.hidden = !g.querySelector("[data-finder-item]:not([hidden])");
    });
    setShown(n);
  };

  return (
    <div className="sticky top-20 z-30 -mx-4 bg-bg/95 px-4 py-3 backdrop-blur-sm sm:mx-0 sm:px-0">
      <label className="flex items-center gap-2 rounded-pill border border-border bg-surface px-5 py-3 shadow-sm focus-within:border-accent">
        <Search aria-hidden className="h-5 w-5 shrink-0 text-ink-muted" />
        <span className="sr-only">Filtrér apparaterne</span>
        <input
          type="search"
          value={q}
          onChange={(e) => apply(e.target.value)}
          placeholder={`Filtrér ${total} apparater — skriv fx »fryser« eller »konsol«`}
          className="min-w-0 flex-1 bg-transparent text-base text-ink placeholder:text-ink-muted focus:outline-none"
        />
      </label>
      <p className="mt-2 text-xs text-ink-muted" aria-live="polite">
        {q ? (shown ? `${shown} af ${total} apparater matcher` : "Intet apparat matcher — prøv et andet ord eller beregneren") : `${total} apparater i alle kategorier`}
      </p>
    </div>
  );
}
