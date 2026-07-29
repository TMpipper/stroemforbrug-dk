import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  description: "Privatlivspolitik for Strømforbrug.dk — sådan håndterer vi dine personoplysninger.",
  alternates: { canonical: `${SITE_CONFIG.url}/privatlivspolitik/` },
  robots: { index: false, follow: true },
};

export default function PrivatlivspolitikPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumb items={[{ name: "Privatlivspolitik" }]} />

      <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6">
        Privatlivspolitik
      </h1>

      <div className="prose-editorial">
        <p><em>Senest opdateret: 29. juli 2026</em></p>

        <h2>Dataansvarlig</h2>
        <p>
          {SITE_CONFIG.company.legalName}, CVR {SITE_CONFIG.company.cvr},{" "}
          {SITE_CONFIG.company.address}. Kontakt: {SITE_CONFIG.company.email}.
        </p>

        <h2>Hvilke data indsamler vi?</h2>
        <p>
          Strømforbrug.dk indsamler <strong>ikke</strong> personlige
          oplysninger direkte. Vi bruger:
        </p>
        <ul>
          <li><strong>Vercel Analytics</strong> — anonymiserede besøgsdata (sidevisninger, land, enhedstype). Ingen cookies, ingen personlig tracking.</li>
          <li><strong>Affiliate-links</strong> — når du klikker på et reklamelink, registrerer vores partnere klikket. Vi videregiver ikke dine personoplysninger.</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          Strømforbrug.dk bruger <strong>ingen cookies</strong>. Vercel
          Analytics er cookiefri og baseret på anonymiserede data.
        </p>

        <h2>Tredjeparter</h2>
        <p>
          Vores affiliate-partnere (elselskaber) kan placere cookies på
          deres egne domæner når du besøger deres sider via vores links.
          Vi har ingen kontrol over disse cookies — se den enkelte partners
          privatlivspolitik.
        </p>

        <h2>Dine rettigheder</h2>
        <p>
          Du har ret til indsigt, berigtigelse og sletning af dine
          personoplysninger (GDPR art. 15-17). Da vi ikke indsamler
          persondata direkte, vil henvendelser typisk omhandle data hos
          vores partnere. Kontakt os på {SITE_CONFIG.company.email}.
        </p>

        <h2>Klage</h2>
        <p>
          Du kan klage til Datatilsynet (datatilsynet.dk) hvis du mener,
          at vi behandler dine personoplysninger i strid med reglerne.
        </p>
      </div>
    </article>
  );
}
