"use client";

import { useActionState, useEffect, useRef } from "react";
import { createShopDesignCheckoutSession } from "@/app/(app)/actions";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import CheckoutSubmitButton from "./CheckoutSubmitButton";

export default function CheckoutForm() {
  const [state, formAction] = useActionState(
    createShopDesignCheckoutSession,
    null,
  );
  const emailRef = useRef<HTMLInputElement>(null);
  const hasErrors = state?.errors && Object.keys(state.errors).length > 0;

  useEffect(() => {
    if (!hasErrors) return;
    if (state?.errors?.email) {
      emailRef.current?.focus();
    }
  }, [state, hasErrors]);

  return (
    <form action={formAction} className="max-w-md">
      {state?.message && (
        <Alert variant="destructive" className="mb-4" aria-live="polite">
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
      <fieldset className="flex flex-col">
        <Label htmlFor="shop-design-email" className="pb-1">
          E-Mail:
        </Label>
        <Input
          ref={emailRef}
          type="email"
          name="email"
          id="shop-design-email"
          className={cn(
            "mt-2 rounded-md border border-foreground px-4 py-3 focus:bg-background",
            state?.errors?.email && "border-destructive",
          )}
          autoComplete="email"
          required
          spellCheck={false}
          placeholder="ihre@email.de"
          aria-invalid={!!state?.errors?.email}
          aria-describedby={
            state?.errors?.email ? "shop-design-email-error" : undefined
          }
        />
        {state?.errors?.email && (
          <p
            id="shop-design-email-error"
            className="mt-1 text-sm text-destructive"
          >
            {state.errors.email}
          </p>
        )}
      </fieldset>
      <CheckoutSubmitButton />
    </form>
  );
}
