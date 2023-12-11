import SectionContainer from "@/app/SectionContainer";
import React from "react";
import Balancer from "react-wrap-balancer";

interface TestimonialProps {
  // Add any props you need for your component here
}

const Testimonial: React.FC<TestimonialProps> = () => {
  return (
    <SectionContainer className=" max-w-sm">
      <p className="text-xl font-semibold mx-auto text-center">
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
