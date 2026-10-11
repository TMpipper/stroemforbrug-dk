import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

/** Forfatterkortet nederst på siden. Mail og LinkedIn bliver stående — det er E-E-A-T-signalerne. */
export default function AuthorBox() {
  const href = `${SITE_CONFIG.editorSlug}/`.replace(/\/\/$/, "/");
  return (
    <div className="container-text my-12">
      <div className="flex gap-4 rounded-card bg-surface p-5 shadow-card sm:p-6">
        <Link
          href={href}
          className="h-14 w-14 shrink-0 overflow-hidden rounded-pill ring-2 ring-brand-50 focus-visible:outline-none focus-visible:ring-brand-500"
          aria-label={`Om ${SITE_CONFIG.editorName}`}
        >
          <Image src={SITE_CONFIG.editorImage} alt="" width={56} height={56} className="h-full w-full object-cover" />
        </Link>
        <div className="min-w-0 text-sm">
          <p className="font-semibold text-ink">
            <Link href={href} className="underline decoration-brand-100 underline-offset-4 hover:decoration-brand-500">
              {SITE_CONFIG.editorName}
            </Link>{" "}
            <span className="font-normal text-ink-muted">· {SITE_CONFIG.editorRole}</span>
          </p>
          <p className="mt-1 leading-relaxed text-ink-muted">{SITE_CONFIG.editorCredential}</p>
          <p className="mt-2 flex flex-wrap gap-4 text-ink-muted">
            <a href={`mailto:${SITE_CONFIG.company.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-600">
              <Mail className="h-4 w-4" aria-hidden />
              {SITE_CONFIG.company.email}
            </a>
            <a
              href="https://www.linkedin.com/in/mathias-c-ba041b125/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-600"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
