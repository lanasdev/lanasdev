import SectionContainer from "@/app/(app)/SectionContainer";
import React from "react";
import Balancer from "react-wrap-balancer";

interface TestimonialProps {
  // Add any props you need for your component here
}

const Testimonial: React.FC<TestimonialProps> = () => {
  return (
    <SectionContainer className=" max-w-sm md:mx-auto md:max-w-2xl md:py-24">
      <h3 className="sr-only">Unsere Bewertungen</h3>

      <p className="mx-auto text-center text-xl font-semibold">
        <Balancer>
          Alles lief super und wurde in Windeseile erledigt! 5 von 5 Sternen
        </Balancer>
      </p>
      <p className="text-md text-center">
        <Balancer>_ Firma Solar Sam </Balancer>
      </p>
    </SectionContainer>
  );
};

export default Testimonial;
