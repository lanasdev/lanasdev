import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-2xl md:text-4xl lg:text-6xl lg:pb-4 font-semibold">
        404: Nicht gefunden
      </h2>
      <p>Die angeforderte Seite konnte nicht gefunden werden.</p>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "px-6 py-2 mt-4 lg:mt-8"
        )}
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
