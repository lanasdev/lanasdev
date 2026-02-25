export type FaqItem = { question: string; answer: string };

const FAQ_DATA: FaqItem[] = [
  {
    question: "Was ist im Abonnement enthalten?",
    answer:
      "Professionelles Shop Design, laufende Betreuung, Anpassungen und Support für Ihr E-Commerce-Projekt – ideal für Headless Shopify und moderne Shop-Systeme.",
  },
  {
    question: "Kann ich jederzeit kündigen?",
    answer:
      "Ja, das Abonnement ist monatlich kündbar. Sie können jederzeit ohne Mindestlaufzeit kündigen.",
  },
  {
    question: "Wie läuft die Zahlung ab?",
    answer:
      "Die Zahlung erfolgt sicher über Stripe. Sie werden nach dem Klick auf „Zum Checkout“ zu Stripe weitergeleitet und können dort Ihre Zahlungsmethode hinterlegen.",
  },
];

/**
 * Simulates async FAQ loading for Suspense/use() demo.
 * In production, this could fetch from Sanity or another CMS.
 */
export async function getFaqData(): Promise<FaqItem[]> {
  await new Promise((r) => setTimeout(r, 200));
  return FAQ_DATA;
}
