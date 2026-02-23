import SectionContainer from "@/app/(app)/SectionContainer";
import type { SanityImageObject } from "@/lib/sanity";
import { SanityImage } from "@/lib/sanity-image";

type TechStackProps = {
  techData: {
    titleTechstack?: string;
    skills?: Array<{
      _id: string;
      name?: string;
      category?: string;
      proficiency?: string;
      logo?: SanityImageObject;
    }>;
    logosTechstack?: SanityImageObject[];
  } | null;
};

const TechStack = ({ techData }: TechStackProps) => {
  if (!techData) return null;

  const { titleTechstack, skills, logosTechstack } = techData;
  const hasSkills = Boolean(skills && skills.length > 0);

  return (
    <SectionContainer className="pt-24 md:flex md:justify-between md:gap-32">
      <h3 className="pb-8 text-3xl font-semibold">
        {titleTechstack ?? "Tech Stack"}
      </h3>
      <div className="grid auto-cols-auto grid-cols-4  gap-8 md:max-w-(--breakpoint-sm) lg:max-w-(--breakpoint-md)">
        {hasSkills
          ? skills?.map((skill) => (
              <TechIcon
                key={skill._id}
                image={skill.logo}
                fallbackLabel={skill.name ?? "Skill"}
              />
            ))
          : logosTechstack?.map((logo) => (
              <TechIcon key={logo.asset._id} image={logo} />
            ))}
      </div>
      {/* <pre className="pt-12">{JSON.stringify(logosTechstack, null, 2)}</pre> */}
    </SectionContainer>
  );
};

export default TechStack;

const TechIcon = ({
  image,
  fallbackLabel,
}: {
  image?: SanityImageObject;
  fallbackLabel?: string;
}) => {
  if (!image) {
    return (
      <div className="flex min-h-10 items-center justify-center rounded-md border px-3 text-center text-xs text-muted-foreground">
        {fallbackLabel ?? "Skill"}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <SanityImage
        image={image}
        alt={fallbackLabel ?? image.alt ?? "Technology logo"}
        height={128}
        className="h-auto w-auto transform-gpu object-contain grayscale filter transition-transform hover:grayscale-0 hover:duration-300 hover:ease-in-out "
      />
    </div>
  );
};
