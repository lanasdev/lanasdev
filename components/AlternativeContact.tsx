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
      <SectionContainer className="mt-24 flex flex-col divide-y bg-secondary py-16 sm:flex-row sm:gap-8 sm:divide-x sm:divide-y-0">
        <div className="sm:flex-1 ">
          <div id="kontakt" className="">
            <h3 className="sr-only">Kontakt</h3>
          </div>
          <h3 className="text-3xl font-semibold">Kontakt</h3>
          <p className="mt-6 max-w-xl text-lg leading-8 text-card-foreground">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci
            molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
            sed malesuada et magna.
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
          className="max-w-screen-md pt-16 sm:flex-[2] sm:pl-8 sm:pt-0"
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
              Gibt es noch etwas, was Sie mitteilen können?
            </Label>
            <Textarea
              name="message"
              className="mt-2 rounded-md border border-foreground px-4 py-3"
              placeholder="Ihre Nachricht an mich"
            />
          </fieldset>
          <ContactButton />
        </form>
      </SectionContainer>

      {/* <Example /> */}
    </>
  );
}

//
//
// import {
//   BuildingOffice2Icon,
//   EnvelopeIcon,
//   PhoneIcon,
// } from "@heroicons/react/24/outline";
// import { Textarea } from "./ui/textarea";
// import { Separator } from "./ui/separator";

// export function Example() {
//   return (
//     <div className="relative isolate mt-24 bg-secondary-foreground text-secondary-foreground">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
//         <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
//           <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
//             <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2"></div>
//             <h2 className="text-3xl font-bold tracking-tight text-secondary">
//               Kontakt
//             </h2>
//             <p className="mt-6 text-lg leading-8 text-card">
//               Proin volutpat consequat porttitor cras nullam gravida at. Orci
//               molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
//               Arcu sed malesuada et magna.
//             </p>
//             <dl className="mt-10 space-y-4 text-base leading-7 text-secondary">
//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Email</span>
//                   <EnvelopeIcon
//                     className="h-7 w-6 text-gray-400"
//                     aria-hidden="true"
//                   />
//                 </dt>
//                 <dd>
//                   <a className="hover:text-white" href="mailto:hey@lanas.dev">
//                     hey@lanas.dev
//                   </a>
//                 </dd>
//               </div>
//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Address</span>
//                   <TelegramLogo
//                     className="h-7 w-6 text-gray-400"
//                     aria-hidden="true"
//                   />
//                 </dt>
//                 <dd>lanasdev</dd>
//               </div>
//             </dl>
//           </div>
//         </div>
//         <form
//           action="#"
//           method="POST"
//           className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
//         >
//           <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
//             <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="first-name"
//                   className="block text-sm font-semibold leading-6 text-white"
//                 >
//                   Vorname
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="text"
//                     name="first-name"
//                     id="first-name"
//                     autoComplete="given-name"
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="last-name"
//                   className="block text-sm font-semibold leading-6 text-white"
//                 >
//                   Nachname
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="text"
//                     name="last-name"
//                     id="last-name"
//                     autoComplete="family-name"
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-semibold leading-6 text-white"
//                 >
//                   Email
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     autoComplete="email"
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="phone-number"
//                   className="block text-sm font-semibold leading-6 text-white"
//                 >
//                   Telefon
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="tel"
//                     name="phone-number"
//                     id="phone-number"
//                     autoComplete="tel"
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-semibold leading-6 text-white"
//                 >
//                   Können Sie sonst noch etwas über das Projekt erzählen?
//                 </label>
//                 <div className="mt-2.5">
//                   <textarea
//                     name="message"
//                     id="message"
//                     rows={4}
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                     defaultValue={""}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8 flex justify-end">
//               <button
//                 type="submit"
//                 className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//               >
//                 Nachricht senden
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
