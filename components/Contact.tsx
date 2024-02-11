"use client";

import SectionContainer from "../app/SectionContainer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContactButton from "./ContactButton";
import { z } from "zod";
import { sql } from "@vercel/postgres";

import { submitForm } from "@/app/actions";

export default function Contact() {
  return (
    <SectionContainer className=" flex flex-col pt-20">
      <div id="kontakt" className="">
        <h3 className="sr-only">Kontakt</h3>
      </div>
      <h3 className="pb-8 text-3xl font-semibold">Kontakt</h3>
      <form action={submitForm} className=" max-w-screen-md">
        <div className="flex flex-col gap-4 md:flex-row">
          <fieldset className=" flex flex-grow flex-col">
            <label htmlFor="name" className="pb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="rounded-md border border-foreground px-4 py-3"
              autoComplete="first_name"
              required
              placeholder="Matthias"
            />
          </fieldset>
          <fieldset className="flex flex-grow flex-col">
            <label htmlFor="email" className="pb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="rounded-md border border-foreground px-4 py-3"
              autoComplete="email"
              required
              placeholder="hey@lanas.dev"
            />
          </fieldset>
        </div>
        <fieldset className="flex flex-col pt-6">
          <label htmlFor="message">
            Nachricht:
            <textarea
              name="message"
              className="mt-1 rounded-md border border-foreground px-4 py-3"
              placeholder="Ihre Nachricht an mich"
            />
          </label>
        </fieldset>
        <br />
        <ContactButton />
      </form>
    </SectionContainer>
  );
}
