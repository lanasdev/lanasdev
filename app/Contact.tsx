"use client";

import SectionContainer from "./SectionContainer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContactButton from "./ContactButton";
import { z } from "zod";
import { sql } from "@vercel/postgres";

import { submitForm } from "@/app/actions";

export default function Contact() {
  return (
    <SectionContainer className=" pt-20 flex flex-col">
      <div id="kontakt" className=""></div>
      <h3 className="text-3xl font-semibold pb-8">Kontakt</h3>
      <form action={submitForm} className=" max-w-screen-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className=" flex flex-col flex-grow">
            <label htmlFor="name" className="pb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="border border-foreground rounded-md py-3 px-4"
              required
              placeholder="Matthias"
            />
          </div>
          <div className="flex flex-col flex-grow">
            <label htmlFor="email" className="pb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="border border-foreground rounded-md py-3 px-4"
              required
              placeholder="hey@lanas.dev"
            />
          </div>
        </div>
        <label htmlFor="message" className="flex flex-col pt-6">
          Nachricht:
          <textarea
            name="message"
            className="border border-foreground rounded-md py-3 px-4 mt-1"
            placeholder="Ihre Nachricht an mich"
          />
        </label>
        <br />
        <ContactButton />
      </form>
    </SectionContainer>
  );
}
