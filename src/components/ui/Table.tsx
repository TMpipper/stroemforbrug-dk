import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Én tabelstil for hele sitet.
 *
 * Kort med skygge, blåt hoved, tynde streger, første kolonne til venstre og hver
 * talkolonne til højre med tabulære cifre. Bare tabeller inde i .prose-content får det
 * samme udseende fra CSS'en; de her klasser er til tabeller, der selv sætter kolonner.
 */
export const TABLE = {
  figure: "not-prose my-8 min-w-0 max-w-full overflow-hidden rounded-card bg-surface shadow-card", /* min-w-0: i en flex/grid-forælder må figuren ikke vokse til tabellens min-bredde */
  scroll: "relative overflow-x-auto", /* relative: sr-only inde i en vandret scroller må ikke forlade klippet */
  table: "w-full border-collapse text-sm",
  thead: "bg-bg-blue",
  th: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink",
  tr: "border-t border-border",
  td: "px-4 py-3 align-top text-ink-body",
  key: "font-semibold text-ink",
  num: "text-right tabular",
  highlight: "bg-accent-soft/50",
  caption: "border-t border-border px-4 py-3 text-left text-xs leading-relaxed text-ink-muted",
} as const;

interface TableProps {
  children: ReactNode;
  caption?: ReactNode;
  /** Bredere end tekstspalten på store skærme (7 kolonner). */
  wide?: boolean;
  /** Mindste bredde, fx "min-w-[760px]" — så rulles der på små skærme i stedet for at knække. */
  minWidth?: string;
  className?: string;
}

export function Table({ children, caption, wide = false, minWidth, className }: TableProps) {
  return (
    <figure className={cn(TABLE.figure, wide && "breakout lg:max-w-none", className)}> {/* lg:max-w-none: ellers låser max-w-full bredden til spalten, og de negative margener skubber tabellen skævt til venstre */}
      <div className={TABLE.scroll}>
        <table className={cn(TABLE.table, minWidth)}>{children}</table>
      </div>
      {minWidth && <p className="px-4 pt-2 text-xs text-ink-muted sm:hidden">Tabellen kan rulles sideværts.</p>}
      {caption && <figcaption className={TABLE.caption}>{caption}</figcaption>}
    </figure>
  );
}

export function Th({ children, num = false, className }: { children?: ReactNode; num?: boolean; className?: string }) {
  return <th scope="col" className={cn(TABLE.th, num && "text-right", className)}>{children}</th>;
}

export function Td({ children, num = false, strong = false, className }: { children?: ReactNode; num?: boolean; strong?: boolean; className?: string }) {
  return <td className={cn(TABLE.td, num && TABLE.num, strong && TABLE.key, className)}>{children}</td>;
}
