"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

// import { Blur } from "./Blur";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import i18n, { Locale } from "@/lib/i18n";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contactform = ({ locale }: { locale: Locale }) => {
  const [state, handleSubmit] = useForm("mgedprdn");
  const [agreed, setAgreed] = useState(false);

  if (state.succeeded) {
    return (
      <div className=" isolate">
        {/* <Blur /> */}
        <p className="md:max-w-md">
          <span className="underline decoration-amber-500 decoration-2">
            {i18n.contact.success[locale]}
          </span>{" "}
          {i18n.contact.success2[locale]}
        </p>
      </div>
    );
  }
  const buttonClass =
    " border px-4 rounded-md py-2 border-midnight hover:bg-midnight hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-midnight transition-all duration-300 hover:font-semibold";
  return (
    <div className="flex-1 isolate md:px-6 lg:px-8">
      {/* <Blur /> */}
      <form onSubmit={handleSubmit} className="mx-auto max-w-xl ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <fieldset>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 "
            >
              {i18n.contact.firstname[locale]}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                minLength={2}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-midnight  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="Name"
                field="first-name"
                errors={state.errors}
              />
            </div>
          </fieldset>
          <fieldset>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 "
            >
              {i18n.contact.lastname[locale]}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                minLength={2}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-midnight  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="last name"
                field="last-name"
                errors={state.errors}
              />
            </div>
          </fieldset>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 "
            >
              {i18n.contact.email[locale]}
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                minLength={3}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-midnight  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 "
            >
              {i18n.contact.company[locale]}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-midnight  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="Company"
                field="company"
                errors={state.errors}
              />
            </div>
          </div>
          <fieldset className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 "
            >
              {i18n.contact.message[locale]}
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                minLength={4}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 dark:text-midnight sm:text-sm sm:leading-6"
                defaultValue={""}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </fieldset>
        </div>
        <div className="mt-10">
          <Button
            variant={"ghost"}
            type="submit"
            disabled={state.submitting}
            className="group block w-full cursor-pointer rounded-md border-2 border-midnight bg-midnight px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-white hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-midnight"
          >
            {state.submitting ? (
              <span className="flex transform-gpu items-center justify-center">
                {/* <CircleNotch
                  size={24}
                  weight="bold"
                  className="animate-spin text-white group-hover:text-midnight "
                /> */}
                Loading...
              </span>
            ) : (
              i18n.contact.submit[locale]
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contactform;
