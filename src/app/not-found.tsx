import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
      <h1 className="font-heading text-4xl font-medium text-ink-900 mb-4">
        404 — Siden blev ikke fundet
      </h1>
      <p className="text-ink-600 mb-8">
        Den side du leder efter eksisterer ikke eller er blevet flyttet.
      </p>
      <Link href="/" className="btn-cta">
        Gå til forsiden
      </Link>
    </div>
  );
}
