import React from "react";
import SectionContainer from "../SectionContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Unser Impressum",
};

const ContactPage = async () => {
  return (
    <SectionContainer className="pt-24 pb-48">
      <h1 className="pb-8 text-3xl font-semibold">{"Impressum"}</h1>
      <article className="prose">
        Dies ist ein tolles Impressum. Hier steht alles wichtige drin.
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus,
        expedita delectus. Impedit, maxime quam, aspernatur quidem ratione
        facere animi molestias, alias illo tempore reprehenderit dignissimos
        laudantium ea? Dolor iure architecto possimus error exercitationem
        perspiciatis enim, laudantium voluptatibus labore, animi accusantium,
        consectetur cupiditate. Quisquam non dolorum deserunt dolores
        reprehenderit illum eveniet quam distinctio perspiciatis inventore sed,
        iste aperiam alias neque magnam, laboriosam dolor ad soluta esse
        molestiae accusantium, est quia minus? Enim, ipsum reprehenderit quas,
        suscipit tempore distinctio magnam assumenda eos harum inventore fugit
        perspiciatis perferendis ea quibusdam delectus eum ullam praesentium
        tempora est optio doloribus nihil eveniet cum. Corporis, facilis.
      </article>
    </SectionContainer>
  );
};

export default ContactPage;
