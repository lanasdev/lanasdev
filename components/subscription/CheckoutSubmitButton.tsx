"use client";

import { ArrowRight, CircleNotch } from "@phosphor-icons/react";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";

export default function CheckoutSubmitButton({
  className,
}: {
  className?: string | null;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      aria-busy={pending}
    >
      {pending ? (
        <>
          Wird weitergeleitet…
          <CircleNotch className="h-5 w-5 animate-spin" aria-hidden />
        </>
      ) : (
        <>
          Jetzt starten
          <ArrowRight className="h-5 w-5" aria-hidden />
        </>
      )}
    </button>
  );
}
