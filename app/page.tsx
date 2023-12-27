import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { performRequest } from "@/lib/datocms";
import { gql } from "graphql-request";
import { Image as DatoImage } from "react-datocms";
import { toNextMetadata } from "react-datocms";
import Projectgrid from "./Projectgrid";
import Bloglist from "../components/Bloglist";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonial from "@/components/home/Testimonial";
import Contact from "@/components/Contact";

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

  const { data } = await performRequest({ query });
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
      <Contact />
      {/* <div className="pb-24"></div>
      <CallToAction locale={"en"} /> */}
      {/* <pre className="max-w-xl">{JSON.stringify(data, null, 2)}</pre> */}
    </main>
  );
}
