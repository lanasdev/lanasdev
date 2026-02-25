import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Abonnement erfolgreich",
  description: "Ihr Lanas Club Abonnement wurde erfolgreich abgeschlossen.",
};

async function SuccessContent({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const hasSession = Boolean(params.session_id);

  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-3xl font-semibold text-stone-900">
        Vielen Dank für Ihr Abonnement
      </h1>
      <p className="mt-4 text-lg text-stone-600">
        Ihr Lanas Club Abonnement wurde erfolgreich abgeschlossen.
        {hasSession &&
          " Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details."}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-stone-950 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-stone-800"
      >
        Zur Startseite
      </Link>
    </div>
  );
}

function SuccessFallback() {
  return (
    <div className="mx-auto max-w-2xl animate-pulse space-y-4 text-center">
      <div className="h-10 w-64 rounded bg-stone-200" />
      <div className="h-4 w-full rounded bg-stone-200" />
      <div className="h-12 w-40 rounded bg-stone-200" />
    </div>
  );
}

export default async function ErfolgPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  return (
    <main id="main-content" tabIndex={-1}>
      <Suspense fallback={<SuccessFallback />}>
        <SuccessContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
