"use client";

import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("/api/submitContactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful form submission
        console.log("Form submitted successfully");
      } else {
        // Handle form submission error
        console.error("Form submission failed");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error occurred");
    }
  };

  return (
    <SectionContainer className=" pt-20">
      <h3 className="text-3xl font-semibold pb-8">Kontakt</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex md:flex-col gap-4">
          <div className="">
            <label className="">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-foreground rounded-md py-3 px-4"
              placeholder="Name"
            />
          </div>
          <div className="">
            <label className="">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-foreground rounded-md py-3 px-4"
              placeholder="Email"
            />
          </div>
        </div>
        <label className="flex flex-col pt-6">
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-foreground rounded-md py-3 px-4"
            placeholder="Ihre Nachricht an mich"
          />
        </label>
        <br />
        <button
          type="submit"
          className={cn(buttonVariants({ variant: "default" }), "group mt-8")}
        >
          Jetzt durchstarten{" "}
          <span className=" ml-2 group-hover:translate-x-1 transition-transform">
            {"->"}
          </span>
        </button>
      </form>
    </SectionContainer>
  );
};

export default Contact;
