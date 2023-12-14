import Image from "next/image";
import Link from "next/link";

import { performRequest } from "@/lib/datocms";
import { RESPONSIVE_IMAGE_FRAGMENT } from "@/lib/fragments";
import { gql } from "graphql-request";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Image as DatoImage } from "react-datocms";
import Projectlist from "./Projectlist";
import Projectgrid from "./Projectgrid";
import Bloglist from "./Bloglist";
// import Contactform from "./Contactform";
import CallToAction from "./CallToAction";

import HammerEmoji from "@/public/hammer-emoji.png";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/home/ServiceCard";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonial from "@/components/home/Testimonial";
import Contact from "./Contact";

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
      {/* <div className="py-12"></div>*/}
      <ServiceSection />
      <Testimonial />

      <Bloglist allPosts /*  */={allPosts} />
      <Contact />
      {/* <div className="pb-24"></div>
      <CallToAction locale={"en"} /> */}
      {/* <pre className="max-w-xl">{JSON.stringify(data, null, 2)}</pre> */}
    </main>
  );
}
