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
    <form action={formAction} className="max-w-md">
      {state?.message && (
        <Alert variant="destructive" className="mb-4" aria-live="polite">
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
      <CheckoutSubmitButton />
    </form>
  );
}
