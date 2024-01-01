import SectionContainer from "@/app/SectionContainer";
import { Image as DatoImage, ResponsiveImageType } from "react-datocms";

type TechStackProps = {
  techData: {
    titleTechstack: string;
    logosTechstack: {
      responsiveImage: ResponsiveImageType;
    }[];
  };
};

const TechStack = ({
  techData: { titleTechstack, logosTechstack },
}: TechStackProps) => {
  return (
    <SectionContainer className="pt-24 md:flex md:justify-between md:gap-32">
      <h2 className="text-3xl font-semibold pb-8">
        {titleTechstack ?? "Tech Stack"}
      </h2>
      <div className="grid auto-cols-auto grid-cols-4  md:max-w-screen-sm lg:max-w-screen-md gap-8">
        {logosTechstack.map((logo, index) => (
          <TechIcon key={index} responsiveImage={logo.responsiveImage} />
        ))}
      </div>
      {/* <pre className="pt-12">{JSON.stringify(logosTechstack, null, 2)}</pre> */}
    </SectionContainer>
  );
};

export default TechStack;

const TechIcon = ({
  responsiveImage,
}: {
  responsiveImage: ResponsiveImageType;
}) => {
  return (
    <DatoImage
      className="aspect-square hover:ease-in-out hover:duration-300 object-contain filter grayscale transition-transform transform-gpu hover:grayscale-0 "
      data={responsiveImage}
    />
  );
};
