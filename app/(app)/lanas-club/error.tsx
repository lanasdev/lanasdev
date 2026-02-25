"use client";

import Link from "next/link";

export default function LanasClubError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-xl font-semibold text-stone-900">
        Etwas ist schiefgelaufen
      </h2>
      <p className="mt-2 text-stone-600">
        Beim Laden der Seite ist ein Fehler aufgetreten. Bitte versuchen Sie es
        erneut.
      </p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-stone-950 px-6 py-3 text-base font-medium text-white hover:bg-stone-800"
        >
          Erneut versuchen
        </button>
        <Link
          href="/"
          className="rounded-lg border border-stone-300 px-6 py-3 text-base font-medium text-stone-700 hover:bg-stone-50"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
