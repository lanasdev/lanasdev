import React from "react";
import Image from "next/image";
import Contact from "@/components/Contact";
import SectionContainer from "../SectionContainer";
import type { Metadata } from "next";

import Image2 from "@/public/img/image2.webp";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie uns einfach und unverbindlich über unser Kontaktformular oder rufen Sie uns an.",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col xl:flex-row [&>*]:flex-1 pt-4 pb-16 xl:pb-0">
      <Image
        src={Image2}
        alt={""}
        className="object-cover object-center xl:w-1/2"
      />
      <Contact />
    </div>
  );
};

export default ContactPage;
