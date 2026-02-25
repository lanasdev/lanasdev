/**
 * Lanas Subscription plan constants.
 * Price ID is configured via STRIPE_SHOP_DESIGN_PRICE_ID env var.
 */
export const SHOP_DESIGN_PLAN = {
  name: "Lanas Subscription",
  amountCents: 280_000,
  currency: "eur" as const,
  interval: "month" as const,
  displayPrice: "2.800 €",
  displayInterval: "Monat",
} as const;

export function getShopDesignPriceId(): string {
  const id = process.env.STRIPE_SHOP_DESIGN_PRICE_ID;
  if (!id) {
    throw new Error(
      "Missing environment variable: STRIPE_SHOP_DESIGN_PRICE_ID",
    );
  }
  return id;
}
