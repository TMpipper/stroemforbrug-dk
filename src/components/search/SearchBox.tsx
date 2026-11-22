"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { track } from "@vercel/analytics";
import { search, type SearchEntry } from "@/lib/search";

/**
 * Søgefeltet: et almindeligt GET-formular til /soeg/ (virker uden JavaScript) med forslag, mens man skriver.
 * Indekset (/api/soeg/) hentes først ved fokus, så det koster intet på sider, hvor ingen søger.
 * Søgninger uden hit sendes til Vercel Analytics (`search_no_result`) — listen afgør, hvilke apparater der
 * skrives næste gang.
 */
let indexPromise: Promise<SearchEntry[]> | null = null;
function loadIndex(): Promise<SearchEntry[]> {
  indexPromise ??= fetch("/api/soeg/")
    .then((r) => (r.ok ? r.json() : []))
    .catch(() => {
      indexPromise = null;
      return [];
    });
  return indexPromise;
}

const KIND_LABEL: Record<SearchEntry["k"], string> = { apparat: "Apparat", kategori: "Kategori", guide: "Guide", værktøj: "Værktøj", husstand: "Husstand" };

type Variant = "hero" | "header" | "drawer" | "page";

export default function SearchBox({
  variant = "page",
  initialQuery = "",
  autoFocus = false,
  placeholder = "Søg efter et apparat, fx opvaskemaskine eller ps5",
}: {
  variant?: Variant;
  initialQuery?: string;
  autoFocus?: boolean;
  placeholder?: string;
}) {
  const router = useRouter();
  const id = useId();
  const listId = `${id}-forslag`;
  const inputRef = useRef<HTMLInputElement>(null);
  const [index, setIndex] = useState<SearchEntry[] | null>(null);
  const [q, setQ] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const results = index && q.trim() ? search(index, q) : [];

  const ensureIndex = useCallback(() => {
    if (!index) loadIndex().then(setIndex);
  }, [index]);

  // »/« og ⌘K/Ctrl+K fokuserer headerens felt.
  useEffect(() => {
    if (variant !== "header") return;
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && (e.target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName));
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [variant]);

  useEffect(() => {
    if (autoFocus) ensureIndex();
  }, [autoFocus, ensureIndex]);

  // Ingen hit efter en pause i skrivningen → én hændelse pr. søgning.
  useEffect(() => {
    if (!index || q.trim().length < 3 || results.length) return;
    const t = setTimeout(() => track("search_no_result", { q: q.trim().toLowerCase().slice(0, 60) }), 1500);
    return () => clearTimeout(t);
  }, [index, q, results.length]);

  const go = (e: SearchEntry) => {
    track("search_select", { q: q.trim().toLowerCase().slice(0, 60), u: e.u });
    setOpen(false);
    router.push(e.u);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((a) => Math.min(results.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(-1, a - 1));
    } else if (e.key === "Escape") {
      setOpen(false);
      setActive(-1);
    } else if (e.key === "Enter" && open && results.length) {
      e.preventDefault();
      go(results[active >= 0 ? active : 0]);
    }
  };

  const big = variant === "hero" || variant === "page";
  const showList = open && q.trim().length > 0 && index !== null;

  return (
    <form
      action="/soeg/"
      method="get"
      role="search"
      aria-label="Søg på Strømforbrug.dk"
      className={`relative ${variant === "header" ? "w-full max-w-[17rem] min-[1360px]:max-w-[12.5rem]" : "w-full"}`}
      onSubmit={(e) => {
        if (!q.trim()) e.preventDefault();
      }}
    >
      <div className={`flex items-center gap-2 rounded-pill border border-border bg-surface shadow-sm focus-within:border-accent ${big ? "px-5 py-3" : "px-3.5 py-2"}`}>
        <Search aria-hidden className={`${big ? "h-5 w-5" : "h-4 w-4"} shrink-0 text-ink-muted`} />
        <input
          ref={inputRef}
          name="q"
          type="search"
          inputMode="search"
          autoComplete="off"
          spellCheck={false}
          autoFocus={autoFocus}
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
          aria-label="Søg efter et apparat eller en guide"
          placeholder={placeholder}
          value={q}
          onFocus={() => {
            ensureIndex();
            setOpen(true);
          }}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onChange={(e) => {
            setQ(e.target.value);
            setActive(-1);
            setOpen(true);
          }}
          onKeyDown={onKeyDown}
          className={`min-w-0 flex-1 bg-transparent text-ink placeholder:text-ink-muted focus:outline-none ${big ? "text-base sm:text-lg" : "text-sm"}`}
        />
        {variant === "header" ? (
          <kbd className="hidden rounded border border-border px-1.5 text-[11px] text-ink-muted xl:inline min-[1360px]:hidden">⌘K</kbd>
        ) : big ? (
          <button type="submit" className="hidden rounded-pill bg-accent px-4 py-1.5 text-sm font-semibold text-on-accent hover:bg-accent-hover sm:inline-flex">
            Søg
          </button>
        ) : null}
      </div>

      {showList && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Forslag"
          className="absolute left-0 right-0 z-50 mt-2 max-h-[70vh] overflow-auto rounded-card border border-border bg-surface py-1 shadow-lg"
        >
          {results.length ? (
            results.map((r, i) => (
              <li key={r.u} id={`${listId}-${i}`} role="option" aria-selected={i === active}>
                <a
                  href={r.u}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => {
                    e.preventDefault();
                    go(r);
                  }}
                  onMouseEnter={() => setActive(i)}
                  className={`flex items-baseline justify-between gap-3 px-4 py-2.5 ${i === active ? "bg-bg-blue" : ""}`}
                >
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-ink">{r.t}</span>
                    <span className="block truncate text-xs text-ink-muted">
                      {r.k === "apparat" ? r.d : `${KIND_LABEL[r.k]} · ${r.d}`}
                    </span>
                  </span>
                  {r.kwh !== undefined && r.kwh > 0 ? (
                    <span className="shrink-0 text-xs text-ink-muted tabular">{r.kwh.toLocaleString("da-DK")} kWh/år</span>
                  ) : null}
                </a>
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-sm text-ink-body">
              Intet apparat matcher »{q.trim()}« endnu.{" "}
              <Link href="/apparater/" className="content-link">Se alle apparater</Link> eller{" "}
              <Link href="/beregner/" className="content-link">beregn ud fra watt</Link>.
            </li>
          )}
          {results.length > 0 && (
            <li className="border-t border-border">
              <a href={`/soeg/?q=${encodeURIComponent(q.trim())}`} className="block px-4 py-2 text-xs font-semibold text-accent hover:underline">
                Se alle resultater for »{q.trim()}«
              </a>
            </li>
          )}
        </ul>
      )}
    </form>
  );
}
