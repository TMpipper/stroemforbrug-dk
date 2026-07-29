import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* About */}
          <div>
            <h3 className="font-heading font-medium text-white mb-3">
              Strømforbrug.dk
            </h3>
            <p className="text-sm leading-relaxed">
              Danmarks guide til strømforbrug. Vi hjælper dig med at forstå,
              beregne og reducere dit strømforbrug.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-medium text-white mb-3">
              Populære sider
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/beregner/" className="hover:text-white transition-colors">
                  Strømberegner
                </Link>
              </li>
              <li>
                <Link href="/varmepumpe/" className="hover:text-white transition-colors">
                  Varmepumpe forbrug
                </Link>
              </li>
              <li>
                <Link href="/gennemsnitligt/" className="hover:text-white transition-colors">
                  Gennemsnitligt forbrug
                </Link>
              </li>
              <li>
                <Link href="/husstand/" className="hover:text-white transition-colors">
                  Husstand forbrug
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-medium text-white mb-3">
              Om os
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/om-os/" className="hover:text-white transition-colors">
                  Om Strømforbrug.dk
                </Link>
              </li>
              <li>
                <Link href="/kontakt/" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/privatlivspolitik/" className="hover:text-white transition-colors">
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-700 pt-6 text-xs text-ink-400">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.company.legalName} &middot; CVR {SITE_CONFIG.company.cvr} &middot; {SITE_CONFIG.company.address}
          </p>
          <p className="mt-1">
            Denne side indeholder reklamelinks. Vi modtager kommission fra vores partnere, hvilket ikke påvirker vores anbefalinger.
          </p>
        </div>
      </div>
    </footer>
  );
}
