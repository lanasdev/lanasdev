import { Check } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { SHOP_DESIGN_PLAN } from "@/lib/stripe/pricing";

const features = [
  "Professionelles Shop Design",
  "Headless Shopify Entwicklung",
  "Laufende Betreuung & Support",
  "Unbegrenzte Änderungswünsche",
  "Schnelle Umsetzung",
  "Monatlich kündbar",
];

export default function SubscriptionSummary() {
  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-card p-8 shadow-lg lg:p-10">
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-semibold">{SHOP_DESIGN_PLAN.name}</h3>
        <Badge>Beliebt</Badge>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Alles, was Sie für einen erstklassigen Online-Shop brauchen.
      </p>

      <div className="mt-8 flex items-baseline gap-1">
        <span className="text-5xl font-bold tracking-tight text-foreground">
          {SHOP_DESIGN_PLAN.displayPrice}
        </span>
        <span className="ml-1 text-base text-muted-foreground">
          / {SHOP_DESIGN_PLAN.displayInterval}
        </span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        zzgl. MwSt. &middot; monatlich kündbar
      </p>

      <ul className="mt-8 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              weight="bold"
              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
              aria-hidden
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
