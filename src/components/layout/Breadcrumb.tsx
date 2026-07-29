import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-500 mb-6">
      <ol className="flex items-center gap-1 flex-wrap">
        <li>
          <Link href="/" className="hover:text-brand-700 transition-colors">
            Forside
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 text-ink-300" />
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-700 transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className="text-ink-700">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
