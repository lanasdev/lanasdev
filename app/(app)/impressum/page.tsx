import type { Metadata } from "next";
import { PortableTextRenderer } from "@/components/PortableTextRenderer";
import { getImpressumPage } from "@/lib/sanity";
import SectionContainer from "../SectionContainer";

export const revalidate = 604800; // once a week

export const metadata: Metadata = {
  title: "Impressum",
  description: "Unser Impressum",
};

const ContactPage = async () => {
  const impressum = await getImpressumPage();

  if (!impressum) {
    return (
      <main id="main-content" tabIndex={-1}>
        <SectionContainer className="pb-48 pt-24">
          <h1 className="pb-8 text-3xl font-semibold">Impressum</h1>
          <p>Content not found</p>
        </SectionContainer>
      </main>
    );
  }

  return (
    <main id="main-content" tabIndex={-1}>
      <SectionContainer className="pb-48 pt-24">
        <h1 className="pb-8 text-3xl font-semibold">
          {impressum.title ?? "Impressum"}
        </h1>
        <article className="prose">
          <PortableTextRenderer value={impressum.content} />
        </article>
      </SectionContainer>
    </main>
  );
};

export default ContactPage;
