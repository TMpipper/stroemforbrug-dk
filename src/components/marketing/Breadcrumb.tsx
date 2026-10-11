import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export interface Crumb { name: string; href?: string }

/**
 * Brødkrummen. `schema` er slået FRA som standard: 33 sider udsender allerede
 * BreadcrumbList gennem @/lib/schema, og to blokke om det samme er en fejl, ikke en styrke.
 * <nav> er semantisk med vilje — audit-claims fjerner den, før den leder efter påstande.
 */
export default function Breadcrumb({ items, className = "", schema = false }: { items: Crumb[]; className?: string; schema?: boolean }) {
  const all = [{ name: "Forside", href: "/" }, ...items];
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, ...(it.href ? { item: `${SITE_CONFIG.url}${it.href}` } : {}) })),
  };
  return (
    <nav aria-label="Brødkrumme" className={`flex flex-wrap items-center gap-1 text-sm text-ink-muted ${className}`}>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />}
      {all.map((it, i) => (
        <span key={it.name} className="inline-flex items-center gap-1">
          {i > 0 && <span aria-hidden className="text-ink-muted/50">/</span>}
          {it.href && i < all.length - 1 ? <Link href={it.href} className="hover:text-ink">{it.name}</Link> : <span className="text-ink">{it.name}</span>}
        </span>
      ))}
    </nav>
  );
}
