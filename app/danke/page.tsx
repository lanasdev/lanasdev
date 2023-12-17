import Link from "next/link";
import SectionContainer from "@/app/SectionContainer";
import Balancer from "react-wrap-balancer";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const ThankYouPage = () => {
  return (
    <SectionContainer className="flex flex-col items-center justify-center min-h-screen py-24">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="green"
        className="rounded-full h-6 w-6"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg> */}
      <CheckCircledIcon className="text-green-500 h-24 w-24" />
      <h1 className="text-3xl md:text-4xl font-semibold pt-8">
        <Balancer>Vielen Dank für Ihre Nachricht!</Balancer>
      </h1>
      <p className="text-md md:text-xl pt-4">
        <Balancer>
          Ich werde mich so schnell wie möglich bei Ihnen melden.
        </Balancer>
      </p>
    </SectionContainer>
  );
};

export default ThankYouPage;
