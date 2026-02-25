"use client";

import { CircleNotch } from "@phosphor-icons/react";
import { useFormStatus } from "react-dom";
import { buttonVariants } from "@/components/ui/button";
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
      className={cn(buttonVariants({ variant: "default" }), "mt-6", className)}
      aria-busy={pending}
    >
      {pending ? (
        <>
          Wird weitergeleitet…
          <CircleNotch className="ml-2 h-4 w-4 animate-spin" aria-hidden />
        </>
      ) : (
        <>Lanas Subscription – 2.800 €/Monat</>
      )}
    </button>
  );
}
