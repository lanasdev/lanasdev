import SectionContainer from "@/app/(app)/SectionContainer";
import { SanityImage } from "@/lib/sanity-image";
import type { SanityImageObject } from "@/lib/sanity";

type TechStackProps = {
  techData: {
    titleTechstack: string;
    logosTechstack: SanityImageObject[];
  };
};

const TechStack = ({
  techData: { titleTechstack, logosTechstack },
}: TechStackProps) => {
  return (
    <SectionContainer className="pt-24 md:flex md:justify-between md:gap-32">
      <h3 className="pb-8 text-3xl font-semibold">
        {titleTechstack ?? "Tech Stack"}
      </h3>
      <div className="grid auto-cols-auto grid-cols-4  gap-8 md:max-w-(--breakpoint-sm) lg:max-w-(--breakpoint-md)">
        {logosTechstack.map((logo, index) => (
          <TechIcon key={index} image={logo} />
        ))}
      </div>
      {/* <pre className="pt-12">{JSON.stringify(logosTechstack, null, 2)}</pre> */}
    </SectionContainer>
  );
};

export default TechStack;

const TechIcon = ({
  image,
}: {
  image: SanityImageObject;
}) => {
  return (
    <div className="flex items-center justify-center">
      <SanityImage
        image={image}
        alt="Technology logo"
        height={128}
        className="h-auto w-auto transform-gpu object-contain grayscale filter transition-transform hover:grayscale-0 hover:duration-300 hover:ease-in-out "
      />
    </div>
  );
};
