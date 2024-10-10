

import SectionContainer from "../app/SectionContainer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContactButton from "./ContactButton";

import { submitForm } from "@/app/actions";
import Link from "next/link";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

import {
  TelegramLogo,
  EnvelopeSimple,
  PhoneCall,
  VideoConference,
} from "@/components/Icons";
import { Textarea } from "./ui/textarea";
// import CallToCal from "./CallToAction/CallToCal";
// import { getCalApi } from "@calcom/embed-react";



export default function Contact() {
  // useEffect(() => {
  //   (async function () {
  //     const cal = await getCalApi();
  //     cal("ui", {
  //       theme: "dark",
  //       styles: {
  //         branding: { brandColor: "#000000" },
  //       },
  //     });
  //   })();
  // }, []);
  return (
    <>
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
            <div className="*:flex *:items-center *:gap-4 *:py-2 hover:*:underline">
              <Link href={`mailto:hey@lanas.dev`}>
                <EnvelopeSimple className="h-7 w-6" aria-hidden="true" /> Email:
                hey@lanas.dev
              </Link>
              <Link href={process.env.NEXT_PUBLIC_TELEGRAM_URL || "#kontakt"}>
                <TelegramLogo className="h-7 w-6 " /> Telegram: lanasdev
              </Link>
              {/* <Link href={process.env.NEXT_PUBLIC_CALCOM} || "/kontakt" */}
              {/* <div className="">
                <VideoConference className="mr-4 h-7 w-6" aria-hidden="true" />
                Video Call:{" "}
                <button data-cal-link="lanas/hallo" className="pl-1">
                  Jetzt buchen
                </button>
              </div> */}
            </div>
          </aside>
        </div>
        <form
          // @ts-ignore
          action={submitForm}
          className="max-w-screen-md pt-16 sm:flex-[2] sm:pl-8 sm:pt-0 lg:px-16"
        >
          <div className="flex flex-col gap-4 md:flex-row">
            <fieldset className=" flex flex-grow flex-col">
              <Label htmlFor="name" className="pb-1">
                Name:
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                className="mt-2 rounded-md border border-foreground px-4 py-3 focus:bg-background"
                autoComplete="first_name"
                required
                placeholder="Matthias"
              />
            </fieldset>
            <fieldset className="flex flex-grow flex-col">
              <Label htmlFor="email" className="pb-1">
                Email:
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                className="mt-2 rounded-md border border-foreground px-4 py-3 focus:bg-background"
                autoComplete="email"
                required
                placeholder="hey@lanas.dev"
              />
            </fieldset>
          </div>
          <fieldset className="flex flex-col pt-6">
            <Label htmlFor="message">
              Gibt es noch etwas, was Sie mitteilen wollen?
            </Label>
            <Textarea
              name="message"
              id="message"
              className="mt-2 rounded-md border border-foreground px-4 py-3 focus:bg-background"
              placeholder="Ihre Nachricht an mich"
            />
          </fieldset>
          <ContactButton className="float-right sm:float-none" />
        </form>
      </SectionContainer>
    </>
  );
}
