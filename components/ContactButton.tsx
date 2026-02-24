"use client";

import { ArrowRight, CircleNotch } from "@phosphor-icons/react";
import { useFormStatus } from "react-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactButton({
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
        buttonVariants({ variant: "default" }),
        "group mt-8",
        className,
      )}
      aria-busy={pending}
    >
      {pending ? (
        <>
          Wird gesendet…
          <CircleNotch className="ml-2 h-4 w-4 animate-spin" aria-hidden />
        </>
      ) : (
        <>
          Jetzt durchstarten
          <span className="ml-2 transition-transform group-hover:translate-x-1 motion-reduce:transition-none">
            <ArrowRight aria-hidden />
          </span>
        </>
      )}
    </button>
  );
}
