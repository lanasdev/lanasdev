import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SHOP_DESIGN_PLAN } from "@/lib/stripe/pricing";

export default function SubscriptionSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{SHOP_DESIGN_PLAN.name}</CardTitle>
        <CardDescription>
          Professionelles Shop Design für E-Commerce und Headless Shopify –
          monatlich kündbar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-foreground">
            {SHOP_DESIGN_PLAN.displayPrice}
          </span>
          <span className="text-muted-foreground">
            / {SHOP_DESIGN_PLAN.displayInterval}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
