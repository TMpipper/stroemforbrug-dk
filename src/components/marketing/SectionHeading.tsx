import type { ReactNode } from "react";

/** Overskriften på et afsnit: valgfri eyebrow-pille, titel og en lede-linje. */
export default function SectionHeading({
  eyebrow, title, lede, align = "center", as: Tag = "h2", id,
}: { eyebrow?: string; title: ReactNode; lede?: ReactNode; align?: "center" | "left"; as?: "h1" | "h2"; id?: string }) {
  const a = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow && (
        <p className="mb-3 inline-flex rounded-pill bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>
      )}
      <Tag id={id} className={`font-heading font-semibold text-ink ${Tag === "h1" ? "text-4xl md:text-5xl" : "text-3xl md:text-[2.25rem] md:leading-[1.2]"}`}>
        {title}
      </Tag>
      {lede && <p className="mt-4 text-lg text-ink-body">{lede}</p>}
    </div>
  );
}
