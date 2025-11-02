"use client";

import { useRouter } from "next/navigation";
import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useTransition } from "react";

import { disableDraftModeAction } from "@/app/(app)/actions";

export function DisableDraftMode() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const environment = useDraftModeEnvironment();

  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  const handleDisable = () =>
    startTransition(async () => {
      await disableDraftModeAction();
      router.refresh();
    });

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full bg-stone-900/90 px-4 py-2 text-sm text-white shadow-lg backdrop-blur">
      <span>Vorschau aktiv</span>
      <button
        type="button"
        onClick={handleDisable}
        disabled={isPending}
        className="rounded-full bg-white/10 px-3 py-1 font-medium text-white transition hover:bg-white/20 disabled:opacity-60"
      >
        {isPending ? "Wird beendet…" : "Vorschau verlassen"}
      </button>
    </div>
  );
}
