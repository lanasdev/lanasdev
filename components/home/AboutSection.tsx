import SectionContainer from "@/app/SectionContainer";
import Link from "next/link";
import {
  Image as DatoImage,
  ResponsiveImageType,
  StructuredText,
  renderNodeRule,
} from "react-datocms";

import { isLink } from "datocms-structured-text-utils";

type AboutSectionProps = {
  aboutData: {
    titleAbout: string;
    textAbout: any;
    imageAbout: {
      responsiveImage: ResponsiveImageType;
    };
  };
};

const AboutSection = ({
  aboutData: { titleAbout, textAbout, imageAbout },
}: AboutSectionProps) => {
  return (
    <>
      <SectionContainer className="flex flex-col gap-8 pt-24 md:flex-row">
        <div className="w-full md:w-2/5 xl:flex-1">
          <h3 className="pb-8 text-3xl font-semibold">
            {titleAbout ?? "Über mich"}
          </h3>
          <DatoImage
            data={imageAbout.responsiveImage}
            className="mb-6 aspect-square rounded-xl sm:max-w-12 md:hidden "
            pictureClassName="object-cover"
          />
          <article className="leading-8">
            <>
              {/* Render Links as <Link> Tags */}
              <StructuredText
                data={textAbout}
                customNodeRules={[
                  renderNodeRule(isLink, ({ node, children, key }) => {
                    return (
                      <Link
                        key={key}
                        href={node.url}
                        className="text-cyan-700 transition-colors hover:text-accent-foreground hover:underline"
                      >
                        {children}
                      </Link>
                    );
                  }),
                ]}
              />
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
            </>
          </article>
        </div>
        <div className="w-0 md:w-3/5 xl:flex-1">
          <DatoImage
            data={imageAbout.responsiveImage}
            className="hidden rounded-xl md:block lg:max-h-[50ch]"
            pictureClassName="object-cover"
          />
        </div>
      </SectionContainer>
    </>
  );
};

export default AboutSection;
