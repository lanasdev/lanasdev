import { Suspense } from "react";
import SectionContainer from "@/app/(app)/SectionContainer";
import CheckoutForm from "@/components/subscription/CheckoutForm";
import SubscriptionFaq from "@/components/subscription/SubscriptionFaq";
import SubscriptionSummary from "@/components/subscription/SubscriptionSummary";
import { Skeleton } from "@/components/ui/skeleton";

export default function LanasSubscriptionSection() {
  return (
    <SectionContainer className="mt-24 bg-secondary py-24 lg:py-32">
      <div id="lanas-club" className="scroll-mt-24 text-center">
        <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Shop Design als Abo
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight lg:text-5xl">
          Lanas Club
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Professionelles Shop Design für E-Commerce und Headless Shopify –
          monatlich kündbar, ohne Mindestlaufzeit.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl items-start gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <SubscriptionSummary />
        </div>
        <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:col-span-2">
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <h3 className="text-lg font-semibold">Jetzt abonnieren</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Starten Sie jetzt – pausieren oder kündigen Sie jederzeit.
            </p>
            <div className="mt-6">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <Suspense
          fallback={
            <div className="mx-auto max-w-2xl space-y-4">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          }
        >
          <SubscriptionFaq />
        </Suspense>
      </div>
    </SectionContainer>
  );
}
