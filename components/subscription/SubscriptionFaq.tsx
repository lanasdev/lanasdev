import { Suspense, use } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { getFaqData } from "@/lib/subscription-faq";

function FaqContent({
  promise,
}: {
  promise: Promise<{ question: string; answer: string }[]>;
}) {
  const items = use(promise);

  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`faq-${i}`}>
          <AccordionTrigger className="text-left text-base">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function FaqSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
}

export default function SubscriptionFaq() {
  const faqPromise = getFaqData();

  return (
    <section className="mx-auto max-w-2xl">
      <h3 className="text-2xl font-semibold">Häufige Fragen</h3>
      <div className="mt-6">
        <Suspense fallback={<FaqSkeleton />}>
          <FaqContent promise={faqPromise} />
        </Suspense>
      </div>
    </section>
  );
}
