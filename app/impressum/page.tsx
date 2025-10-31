import React from "react";
import SectionContainer from "../SectionContainer";
import type { Metadata } from "next";
import { getImpressumPage } from "@/lib/sanity";
import { PortableTextRenderer } from "@/components/PortableTextRenderer";

export const revalidate = 604800; // once a week

export const metadata: Metadata = {
  title: "Impressum",
  description: "Unser Impressum",
};

const ContactPage = async () => {
  const impressum = await getImpressumPage();

  if (!impressum) {
    return (
      <SectionContainer className="pb-48 pt-24">
        <h1 className="pb-8 text-3xl font-semibold">Impressum</h1>
        <p>Content not found</p>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer className="pb-48 pt-24">
      <h1 className="pb-8 text-3xl font-semibold">
        {impressum.title ?? "Impressum"}
      </h1>
      <article className="prose">
        <PortableTextRenderer value={impressum.content} />
      </article>
    </SectionContainer>
  );
};

export default ContactPage;
