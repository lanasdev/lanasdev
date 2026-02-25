import Stripe from "stripe";

function assertEnv(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return v;
}

let stripeInstance: Stripe | null = null;

/**
 * Server-side Stripe client. Throws if STRIPE_SECRET_KEY is not set.
 */
export function getStripe(): Stripe {
  if (!stripeInstance) {
    const secretKey = assertEnv("STRIPE_SECRET_KEY");
    stripeInstance = new Stripe(secretKey, { typescript: true });
  }
  return stripeInstance;
}

/**
 * Base URL for Stripe callback redirects.
 */
export function getBaseUrl(): string {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return process.env.NEXT_PUBLIC_SITE_URL || "https://lan.as";
}
