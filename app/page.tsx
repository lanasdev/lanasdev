import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { performRequest } from "@/lib/datocms";
import { gql } from "graphql-request";
import { Image as DatoImage, ResponsiveImageType } from "react-datocms";
import { toNextMetadata } from "react-datocms";
import Projectgrid from "./Projectgrid";
import Bloglist from "../components/Bloglist";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonial from "@/components/home/Testimonial";
import Contact from "@/components/Contact";
import SectionContainer from "./SectionContainer";

const PAGE_CONTENT_QUERY = gql`
  query getHome {
    allProjects(first: 6) {
      title
      description
      slug
      classname
      position
      image {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
      clientname
    }
    allPosts(first: 6) {
      title
      slug
      excerpt
      createdAt
      coverImage {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          responsiveImage {
            ...responsiveImageFragment
          }
        }
      }
    }
    home {
      titleAbout
      textAbout {
        blocks
        links
        value
      }
      imageAbout {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
      titleTechstack
      logosTechstack {
        responsiveImage(
          imgixParams: { auto: format, width: 300, height: 300 }
        ) {
          ...responsiveImageFragment
        }
      }
    }
  }

  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;

export default async function Home() {
  const query = PAGE_CONTENT_QUERY;

  let { data } = await performRequest({ query });
  // console.log(data);

  const allProjects = data?.allProjects;
  const allPosts = data?.allPosts;

  return (
    <main className=" min-h-screen pb-32">
      <HeroSection />
      <Projectgrid allProjects={allProjects} />
      <ServiceSection />
      <Testimonial />
      <Bloglist allPosts={allPosts} />
      <AboutSection aboutData={data?.home} />
      <TechStack techData={data?.home} />
      <Contact />
      {/* <div className="pb-24"></div>
      <CallToAction locale={"en"} /> */}
      {/* <pre className="max-w-xl">{JSON.stringify(data, null, 2)}</pre> */}
    </main>
  );
}

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
            // src={about}
            data={imageAbout.responsiveImage}
            className="md:hidden aspect-square mb-6 rounded-xl object-cover"
          />
          <p className="leading-6 text-balance">
            Seit mehr als 10 Jahren beschäftige ich mich nun mit der Entwicklung
            von Webseiten und Webanwendungen. Dabei habe ich mich auf React bzw.{" "}
            <Link
              href="https://nextjs.org"
              className="hover:underline text-cyan-400 hover:text-cyan-500"
            >
              Next.js
            </Link>{" "}
            in Zusammenspiel mit einem Headless CMS wie{" "}
            <Link
              href="https://www.datocms.com"
              className="hover:underline text-cyan-400 hover:text-cyan-500"
            >
              DatoCMS
            </Link>{" "}
            spezialisiert.
            <br />
            Wenn Sie ein Projekt haben, mit dem Sie beginnen möchten, denken
            Sie, dass Sie meine Hilfe bei etwas benötigen oder einfach nur Hallo
            sagen möchten, dann nehmen Sie Kontakt auf.
            <Link
              href="/about"
              className="group text-cyan-500 hover:text-accent-foreground hover:underline pl-2"
            >
              Mehr über mich{" "}
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                {"->"}
              </span>
            </Link>
          </p>
        </div>
        <div className="w-0 md:w-3/5 xl:flex-1">
          <DatoImage
            data={imageAbout.responsiveImage}
            className="hidden md:block rounded-xl "
            pictureClassName="object-contain"
          />
        </div>
      </SectionContainer>
    </>
  );
};

type TechStackProps = {
  techData: {
    titleTechstack: string;
    logosTechstack: {
      responsiveImage: ResponsiveImageType;
    }[];
  };
};
const TechIcon = ({
  responsiveImage,
}: {
  responsiveImage: ResponsiveImageType;
}) => {
  return (
    <DatoImage
      className="w-full h-auto hover:ease-in-out hover:duration-300 object-contain filter grayscale transition-transform transform-gpu hover:grayscale-0 "
      data={responsiveImage}
    />
  );
};

const TechStack = ({
  techData: { titleTechstack, logosTechstack },
}: TechStackProps) => {
  return (
    <SectionContainer className="pt-24 md:flex md:justify-between w-full md:gap-32">
      <h2 className="text-3xl font-semibold pb-8">
        {titleTechstack ?? "Tech Stack"}
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
        {/* <TechIcon src="/img/tech/react.svg" alt="React" />
        <TechIcon src="/img/tech/nextjs.svg" alt="Next.js" />
        <TechIcon src="/img/tech/tailwindcss.svg" alt="Tailwind CSS" />
        <TechIcon src="/img/tech/graphql.svg" alt="GraphQL" />
        <TechIcon src="/img/tech/datocms.svg" alt="DatoCMS" />
        <TechIcon src="/img/tech/vercel.svg" alt="Vercel" />
        <TechIcon src="/img/tech/wordpress.svg" alt="WordPress" />
        <TechIcon src="/img/tech/shopify.svg" alt="Shopify" /> */}

        {/* <img src={logosTechstack[0].responsiveImage.src} /> */}
        {logosTechstack.map((logo, index) => (
          <TechIcon key={index} responsiveImage={logo.responsiveImage} />
        ))}
        {/* <TechIcon responsiveImage={logosTechstack[0].responsiveImage} /> */}

        {/* {logosTechstack.map((logo, index) => (
          <div className="relative inline-block" key={index}>
            <DatoImage
              className="w-full h-auto hover:ease-in-out hover:duration-300 object-contain filter grayscale transition-transform transform-gpu hover:grayscale-0 "
              data={logo.responsiveImage}
            />
          </div>
        ))} */}
      </div>
      {/* <pre className="pt-12">{JSON.stringify(logosTechstack, null, 2)}</pre> */}
    </SectionContainer>
  );
};
