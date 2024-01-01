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
      <SectionContainer className="flex flex-col md:flex-row gap-8 pt-24">
        <div className="w-full md:w-2/5 xl:flex-1">
          <h2 className="text-3xl font-semibold pb-8">
            {titleAbout ?? "Über mich"}
          </h2>
          <DatoImage
            data={imageAbout.responsiveImage}
            className="md:hidden aspect-square sm:max-w-12 mb-6 rounded-xl "
            pictureClassName="object-cover"
          />
          <article className="leading-6">
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
                        className="text-cyan-500 hover:text-accent-foreground hover:underline transition-colors"
                      >
                        {children}
                      </Link>
                    );
                  }),
                ]}
              />
              <br />
              <Link
                href="/about"
                className="group block text-cyan-500 hover:text-accent-foreground hover:underline pt-4 transition-colors"
              >
                Mehr über mich{" "}
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  {"->"}
                </span>
              </Link>
            </>
          </article>
        </div>
        <div className="w-0 md:w-3/5 xl:flex-1">
          <DatoImage
            data={imageAbout.responsiveImage}
            className="hidden md:block rounded-xl lg:max-h-[50ch]"
            pictureClassName="object-cover"
          />
        </div>
      </SectionContainer>
    </>
  );
};

export default AboutSection;
