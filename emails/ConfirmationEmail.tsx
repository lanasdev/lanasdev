import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface ConfirmationEmailProps {
  clientName: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://lan.as";

export const ConfirmationEmail = ({ clientName }: ConfirmationEmailProps) => {
  const previewText = `Hallo, ${clientName}! Vielen dank fuer Ihre Anfrage auf lan.as`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded-xl border border-solid border-[#eaeaea] p-[20px] ">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/img/LanasLogoV4.png`}
                width="128"
                height="128"
                alt="Lanas"
                className="mx-auto my-0 rounded-md"
              />
            </Section>
            <Heading className="mx-0 my-[32px] p-0 text-center text-[24px] font-normal text-primary">
              Vielen Dank für Ihre Anfrage!
            </Heading>
            <Text className=" text-[14px] leading-[24px] text-primary">
              Hallo {clientName},
              <br />
              <br />
              Danke für Ihr Interesse an einer schnellen Website. Ich werde mich
              so schnell wie möglich bei Ihnen melden, sodass wir weiteres
              besprechen können.
              <br />
              <br />
              Viele Grüße,
              <br />
              Matthias
              <br />
            </Text>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-accent">
              Diese Email erhalten Sie, weil Sie sich auf unserer Website
              https://lan.as unser Kontaktformular ausgefüllt haben. Falls Sie
              dies nicht waren, ignorieren Sie diese Email bitte.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ConfirmationEmail.PreviewProps = {
  clientName: "Max",
} as ConfirmationEmailProps;

export default ConfirmationEmail;
