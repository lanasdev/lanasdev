import Link from "next/link";
import SectionContainer from "@/app/(app)/SectionContainer";
import { SimplePortableText } from "@/components/PortableTextRenderer";
import type { SanityImageObject } from "@/lib/sanity";
import { SanityImage } from "@/lib/sanity-image";

type AboutSectionProps = {
  aboutData: {
    titleAbout?: string;
    textAbout?: any;
    imageAbout?: SanityImageObject;
  } | null;
};

const AboutSection = ({ aboutData }: AboutSectionProps) => {
  if (!aboutData) return null;

  const { titleAbout, textAbout, imageAbout } = aboutData;

  return (
    <SectionContainer className="flex flex-col gap-8 pt-24 md:flex-row">
      <div className="w-full md:w-2/5 xl:flex-1">
        <h3 className="pb-8 text-3xl font-semibold">
          {titleAbout ?? "Über mich"}
        </h3>
        {imageAbout && (
          <SanityImage
            image={imageAbout}
            alt={titleAbout ?? "Über mich"}
            width={384}
            height={384}
            className="mb-6 aspect-square rounded-xl sm:max-w-12 md:hidden object-cover"
          />
        )}
        <article className="leading-8 text-balance">
          {textAbout && <SimplePortableText value={textAbout} />}
          <br />
          <Link
            href="/ueber"
            className="group block pt-4 text-cyan-700 transition-colors hover:text-accent-foreground hover:underline"
          >
            Mehr über mich{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              {"->"}
            </span>
          </Link>
        </article>
      </div>
      <div className="w-0 md:w-3/5 xl:flex-1">
        {/* <DatoImage
            data={imageAbout.responsiveImage}
            className="hidden rounded-xl md:block object-cover"
            pictureClassName="object-cover "
          /> */}
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
