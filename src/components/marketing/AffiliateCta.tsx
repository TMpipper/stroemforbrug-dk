import { CHEAP_PROVIDER_NAME, CHEAP_PROVIDER_PRICE } from "@/lib/config";

export default function AffiliateCta() {
  return (
    <div className="border-2 border-brand-500 rounded-card p-6 my-8 bg-brand-50/50">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1">
          <p className="font-heading font-medium text-ink-900 mb-1">
            Spar penge med billigere strøm
          </p>
          <ul className="text-sm text-ink-600 space-y-1">
            <li>&#10003; {CHEAP_PROVIDER_NAME} — {CHEAP_PROVIDER_PRICE.toFixed(2).replace(".", ",")} kr./kWh</li>
            <li>&#10003; 0 kr. i abonnement, ingen binding</li>
            <li>&#10003; 4,5 på Trustpilot</li>
          </ul>
        </div>
        <a
          href="/go/altid-energi"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-cta whitespace-nowrap"
        >
          Gå til {CHEAP_PROVIDER_NAME}
        </a>
      </div>
    </div>
  );
}
