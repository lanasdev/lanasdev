"use client";

import { useFormStatus } from "react-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={cn(buttonVariants({ variant: "default" }), "group mt-8")}
      aria-disabled={pending}
    >
      Jetzt durchstarten{" "}
      <span className=" ml-2 transition-transform group-hover:translate-x-1">
        {"->"}
      </span>
    </button>
  );
}
