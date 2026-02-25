import { Suspense } from "react";
import SectionContainer from "@/app/(app)/SectionContainer";
import CheckoutForm from "@/components/subscription/CheckoutForm";
import SubscriptionFaq from "@/components/subscription/SubscriptionFaq";
import SubscriptionSummary from "@/components/subscription/SubscriptionSummary";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function LanasSubscriptionSection() {
  return (
    <SectionContainer className="mt-24 bg-secondary py-32">
      <div id="lanas-club" className="scroll-mt-24">
        <h2 className="text-3xl font-semibold">Lanas Club</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-card-foreground">
          Professionelles Shop Design für E-Commerce und Headless Shopify –
          monatlich kündbar, ohne Mindestlaufzeit.
        </p>
      </div>
      <div className="grid gap-12 pt-16 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Jetzt abonnieren</CardTitle>
            <CardDescription>
              Klicken Sie auf den Button – Sie werden zum sicheren
              Stripe-Checkout weitergeleitet.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CheckoutForm />
          </CardContent>
        </Card>
        <SubscriptionSummary />
      </div>
      <Separator className="my-16" />
      <div>
        <Suspense
          fallback={
            <div className="space-y-4">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          }
        >
          <SubscriptionFaq />
        </Suspense>
      </div>
    </SectionContainer>
  );
}
