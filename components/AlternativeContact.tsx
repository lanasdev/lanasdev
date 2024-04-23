"use client";

import SectionContainer from "../app/SectionContainer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContactButton from "./ContactButton";
import { z } from "zod";
// import { sql } from "@vercel/postgres";

import { submitForm } from "@/app/actions";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { TelegramLogo, EnvelopeSimple, PhoneCall } from "@/components/Icons";
import { Textarea } from "./ui/textarea";

export default function AlternativeContact() {
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
            <div className="*:flex *:items-center *:gap-4 *:py-2">
              <Link href={`mailto:hey@lanas.dev`} className="">
                <EnvelopeSimple className="h-7 w-6" aria-hidden="true" /> Email:
                hey@lanas.dev
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_TELEGRAM_URL || "#kontakt"}
                className=""
              >
                <TelegramLogo className="h-7 w-6 " /> Telegram: lanasdev
              </Link>
            </div>
          </aside>
        </div>
        <form
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
                className="mt-2 rounded-md border border-foreground px-4 py-3"
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
                className="mt-2 rounded-md border border-foreground px-4 py-3"
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
              className="mt-2 rounded-md border border-foreground px-4 py-3"
              placeholder="Ihre Nachricht an mich"
            />
          </fieldset>
          <ContactButton className="float-right sm:float-none" />
        </form>
      </SectionContainer>
    </>
  );
}
