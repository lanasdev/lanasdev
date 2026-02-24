import Link from "next/link";
import { EnvelopeSimple, TelegramLogo } from "@/components/Icons";
import SectionContainer from "../app/(app)/SectionContainer";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <SectionContainer className="mt-24 flex flex-col divide-y bg-secondary py-32 sm:flex-row sm:gap-8 sm:divide-x sm:divide-y-0">
      <div className="sm:flex-1 ">
        <div id="kontakt" className="">
          <h3 className="sr-only">Kontakt</h3>
        </div>
        <h3 className="text-3xl font-semibold">Kontakt</h3>
        <p className="mt-6 max-w-xl text-lg leading-8 text-card-foreground">
          Sie fragen sich, ob ich der richtige für Ihr Projekt bin? Einfach
          anfragen und wir können gemeinsam schauen, wie Ihnen am schnellsten
          weitergeholfen werden kann.
        </p>
        <aside className="mt-10 pb-16 ">
          <div className="*:flex *:items-center *:gap-4 *:py-2 *:hover:underline">
            <Link href={`mailto:hey@lanas.dev`}>
              <EnvelopeSimple className="h-7 w-6" aria-hidden="true" /> Email:
              hey@lanas.dev
            </Link>
            <Link href={process.env.NEXT_PUBLIC_TELEGRAM_URL || "#kontakt"}>
              <TelegramLogo className="h-7 w-6" aria-hidden="true" /> Telegram:
              lanasdev
            </Link>
          </div>
        </aside>
      </div>
      <ContactForm />
    </SectionContainer>
  );
}
