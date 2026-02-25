"use client";

import { useActionState } from "react";
import { createShopDesignCheckoutSession } from "@/app/(app)/actions";
import { Alert, AlertDescription } from "@/components/ui/alert";
import CheckoutSubmitButton from "./CheckoutSubmitButton";

export default function CheckoutForm() {
  const [state, formAction] = useActionState(
    createShopDesignCheckoutSession,
    null,
  );

  return (
    <form action={formAction}>
      {state?.message && (
        <Alert variant="destructive" className="mb-4" aria-live="polite">
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
      <CheckoutSubmitButton />
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Sie werden zum sicheren Stripe-Checkout weitergeleitet.
      </p>
    </form>
  );
}
