import Head from "next/head";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import React from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contactform = () => {


  const contactme = async data => {

    const res = await fetch(process.env.NEXT_PUBLIC_PIPEDREAM_WS, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    const result = await res.json()
    // result.user => 'Ada Lovelace'
    // console.log(result.name, result.email, result.message);
    console.log("Result: ", result);

    if (result != null) {
      console.log("Sent!");
      reset()
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data) => contactme(data)
  //   console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-72">
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: true, min: 2, maxLength: 80 })}
        className="form-input my-2 rounded-md px-4 py-3"
      />
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className="form-input my-2 rounded-md px-4 py-3"
      />
      <textarea
        {...register("message", { min: 5 })}
        placeholder="Message"
        className="form-textarea my-4 rounded-md py-3"
      />
      {errors.name && <span>A name is required</span>}
      {errors.email && <span>This email is required</span>}

      <button type="submit" className="border px-4 rounded-md py-2 border-midnight hover:bg-midnight hover:text-white">Submit</button>
    </form>
  );
};

export default Contactform;
