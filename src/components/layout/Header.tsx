import Link from "next/link";
import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-ink-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Zap className="w-6 h-6 text-accent-500 group-hover:text-accent-600 transition-colors" />
          <span className="font-heading font-medium text-lg text-ink-900">
            Strømforbrug<span className="text-brand-700">.dk</span>
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-ink-600">
          <Link href="/beregner/" className="hover:text-brand-700 transition-colors">
            Beregner
          </Link>
          <Link href="/gennemsnitligt/" className="hover:text-brand-700 transition-colors">
            Gennemsnit
          </Link>
          <Link href="/varmepumpe/" className="hover:text-brand-700 transition-colors">
            Varmepumpe
          </Link>
          <Link href="/husstand/" className="hover:text-brand-700 transition-colors">
            Husstand
          </Link>
        </nav>
      </div>
    </header>
  );
}
