import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Switch } from "@headlessui/react";
import cn from "classnames";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CircleNotch } from "phosphor-react";

import i18n from "lib/i18n";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contactform = ({ locale }) => {
  const [state, handleSubmit] = useForm("mgedprdn");
  const [agreed, setAgreed] = useState(false);

  if (state.succeeded) {
    return (
      <div className=" isolate">
        <Blur />
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
    <div className=" isolate md:px-6 lg:px-8">
      <Blur />
      <form onSubmit={handleSubmit} className="mx-auto max-w-xl ">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
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
                className="block w-full rounded-md border-0 py-2 px-3.5 text-midnight  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 py-2 px-3.5 text-midnight  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 py-2 px-3.5 text-midnight  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 py-2 px-3.5 text-midnight  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          <button
            type="submit"
            disabled={state.submitting}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {state.submitting ? (
              <span className="flex transform-gpu items-center justify-center">
                <CircleNotch size={24} weight="bold" className="animate-spin" />
              </span>
            ) : (
              i18n.contact.submit[locale]
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactform;

export const Blur = () => {
  return (
    <div className="absolute inset-x-0 top-[10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[20rem]">
      <svg
        className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] animate-slowpulse sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
        viewBox="0 0 1155 678"
      >
        <path
          fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
