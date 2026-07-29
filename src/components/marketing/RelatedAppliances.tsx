import Link from "next/link";
import { Zap } from "lucide-react";
import { getAppliance } from "@/lib/appliances";

export default function RelatedAppliances({ slugs }: { slugs: string[] }) {
  const appliances = slugs
    .map((slug) => getAppliance(slug))
    .filter((a) => a !== undefined);

  if (appliances.length === 0) return null;

  return (
    <div className="my-10">
      <h3 className="font-heading font-medium text-lg text-ink-900 mb-4">
        Relateret strømforbrug
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {appliances.map((appliance) => (
          <Link
            key={appliance.slug}
            href={`/${appliance.slug}/`}
            className="group flex items-start gap-3 p-4 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all"
          >
            <Zap className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm text-ink-900 group-hover:text-brand-700 transition-colors">
                {appliance.name}
              </p>
              <p className="text-xs text-ink-500 mt-0.5">
                {appliance.typicalKwh} kWh/år
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
