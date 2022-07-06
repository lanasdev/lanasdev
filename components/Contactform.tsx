import Head from "next/head";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import React from "react";
import cn from "classnames";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contactform = () => {
  const buttonClass =
    " border px-4 rounded-md py-2 border-midnight hover:bg-midnight hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-midnight transition-all duration-300";
  // default, sending, success, error,
  const [formState, setFormState] = useState("default");

  const contactme = async (data) => {
    setFormState("sending");
    const res = await fetch(process.env.NEXT_PUBLIC_PIPEDREAM_WS, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    // result.user => 'Ada Lovelace'
    // console.log(result.name, result.email, result.message);
    console.log("Result: ", result);

    if (result != null) {
      console.log("Sent!");
      setFormState("success");
      reset();
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data) => contactme(data);
  //   console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-72 flex-col dark:text-midnight "
    >
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: true, min: 2, maxLength: 80 })}
        className="form-input my-2 rounded-md px-4 py-3 focus:valid:ring-green-400 focus:invalid:ring-red-500"
      />
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className="form-input my-2 rounded-md px-4 py-3 focus:valid:ring-green-400 focus:invalid:ring-red-500"
      />
      <textarea
        {...register("message", { min: 5 })}
        placeholder="Message"
        className="form-textarea my-4 rounded-md py-3 focus:valid:ring-green-400 focus:invalid:ring-red-500"
      />

      <button type="submit" className={cn(buttonClass)}>
        {formState === "default" && "Submit"}
        {formState == "sending" && (
          <div className="flex cursor-progress flex-row items-center justify-center">
            <svg
              className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p>Submitting...</p>
          </div>
        )}
        {formState == "success" && "Sent!" && reset()}
      </button>
      <div className="py-2"></div>
      {errors.name && (
        <span className="dark:text-white">A name is required</span>
      )}
      {errors.email && (
        <span className="dark:text-white">The email is required</span>
      )}
      {errors.message && (
        <span className="dark:text-white">A message is required</span>
      )}
    </form>
  );
};

export default Contactform;
