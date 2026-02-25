import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Abonnement abgebrochen",
  description: "Der Checkout wurde abgebrochen.",
};

export default function AbgebrochenPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-semibold text-stone-900">
          Checkout abgebrochen
        </h1>
        <p className="mt-4 text-lg text-stone-600">
          Sie haben den Checkout abgebrochen. Keine Sorge – es wurden keine
          Zahlungen vorgenommen.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/lanas-club"
            className="inline-flex items-center justify-center rounded-lg bg-stone-950 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-stone-800"
          >
            Erneut versuchen
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-6 py-3 text-base font-medium text-stone-700 transition-colors hover:bg-stone-50"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
