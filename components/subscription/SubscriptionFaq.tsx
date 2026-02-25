import { Suspense, use } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getFaqData } from "@/lib/subscription-faq";

function FaqContent({
  promise,
}: {
  promise: Promise<{ question: string; answer: string }[]>;
}) {
  const items = use(promise);

  return (
    <dl className="space-y-4">
      {items.map((item, i) => (
        <div key={i}>
          <dt className="font-medium">{item.question}</dt>
          <dd className="mt-1 text-muted-foreground">{item.answer}</dd>
        </div>
      ))}
    </dl>
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
    <section>
      <h2 className="text-xl font-semibold">Häufige Fragen</h2>
      <div className="mt-4">
        <Suspense fallback={<FaqSkeleton />}>
          <FaqContent promise={faqPromise} />
        </Suspense>
      </div>
    </section>
  );
}
