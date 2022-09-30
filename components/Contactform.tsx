// import Head from "next/head";
// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import cn from "classnames";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contactform = () => {
  const [state, handleSubmit] = useForm("mgedprdn");
  if (state.succeeded) {
    return (
      <p>
        <span className="underline decoration-amber-500 underline-offset-1">
          Thank you
        </span>{" "}
        for reaching out! We will contact you shortly.
      </p>
    );
  }
  const buttonClass =
    " border px-4 rounded-md py-2 border-midnight hover:bg-midnight hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-midnight transition-all duration-300";
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-72 flex-col dark:text-midnight"
    >
      <fieldset className="flex flex-col items-center">
        {/* <label htmlFor="name">Your Name</label> */}
        <input
          id="name"
          type="name"
          name="name"
          placeholder="Your Name"
          minLength={2}
          autoComplete="name"
          className="form-input my-2 rounded-md px-4 py-3 placeholder:focus:italic focus:valid:ring-green-400 invalid:ring-red-500"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </fieldset>
      <fieldset className="flex flex-col items-center">
        {/* <label htmlFor="email">Email Address</label> */}
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Adress"
          minLength={3}
          autoComplete="email"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          className="form-input my-2 rounded-md px-4 py-3 placeholder:focus:italic focus:valid:ring-green-400 invalid:ring-red-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </fieldset>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        minLength={4}
        className="form-textarea mt-2 mb-4 rounded-md pt-3 pb-12 placeholder:focus:italic focus:valid:ring-green-400 focus:invalid:ring-red-500"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className={cn(buttonClass)}
      >
        Submit
      </button>
    </form>
  );
};

export default Contactform;
