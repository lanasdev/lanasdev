import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { performRequest } from "@/lib/datocms";
import { gql } from "graphql-request";
import {
  Image as DatoImage,
  toNextMetadata,
  ResponsiveImageType,
} from "react-datocms";
import Projectgrid from "./Projectgrid";
import Bloglist from "../components/Bloglist";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonial from "@/components/home/Testimonial";
import AboutSection from "@/components/home/AboutSection";
import TechStack from "@/components/home/TechStack";
import Contact from "@/components/Contact";
import SectionContainer from "./SectionContainer";

export const revalidate = 300; // 5 minutes

export const metadata: Metadata = {
  alternates: {
    canonical: "https://lan.as",
  },
};

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
        responsiveImage(imgixParams: { auto: format, ar: "1:1" }) {
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
  let { data } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    variables: {},
    includeDrafts: false,
  });

  const { allProjects, allPosts, home } = data;

  return (
    <main className=" min-h-screen pb-32">
      <HeroSection />
      <Projectgrid allProjects={allProjects} />
      <ServiceSection />
      <Testimonial />
      <Bloglist allPosts={allPosts} />
      <AboutSection aboutData={home} />
      <TechStack techData={home} />
      <Contact />
      {/* <pre className="max-w-xl">{JSON.stringify(data, null, 2)}</pre> */}
    </main>
  );
}
