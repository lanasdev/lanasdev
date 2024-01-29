import React from "react";
import SectionContainer from "../SectionContainer";
import type { Metadata } from "next";
import { gql } from "graphql-request";
import {
  StructuredText,
} from "react-datocms";
import { performRequest } from "@/lib/datocms";

export const revalidate = 604800; // once a week

const IMPRESSUM_QUERY = gql`
  query ImpressumQuery {
    impressum {
      title
      content {
        blocks
        links
        value
      }
    }
  }
`;

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Unser Impressum",
};

const ContactPage = async () => {
  let { data } = await performRequest({
    query: IMPRESSUM_QUERY,
    variables: {},
    includeDrafts: false,
  });

  const impressum = data?.impressum

  return (
    <SectionContainer className="pt-24 pb-48">
      <h1 className="pb-8 text-3xl font-semibold">
        {impressum.title ?? "Impressum"}
      </h1>
      <article className="prose"><StructuredText data={impressum.content} /></article>
    </SectionContainer>

  );
};

export default ContactPage;
