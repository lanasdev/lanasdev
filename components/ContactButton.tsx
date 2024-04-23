"use client";

import { useFormStatus } from "react-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@phosphor-icons/react";

export default function ContactButton({
  className,
}: {
  className: string | null;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={cn(
        buttonVariants({ variant: "default" }),
        "group mt-8",
        className,
      )}
      aria-disabled={pending}
    >
      Jetzt durchstarten{" "}
      <span className="ml-2 transition-transform group-hover:translate-x-1">
        <ArrowRight className="" />
      </span>
    </button>
  );
}
