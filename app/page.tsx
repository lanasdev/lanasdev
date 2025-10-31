import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

import { getHomepageData } from "@/lib/sanity";

import Projectgrid from "./Projectgrid";
import Bloglist from "../components/Bloglist";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonial from "@/components/home/Testimonial";
import AboutSection from "@/components/home/AboutSection";
import TechStack from "@/components/home/TechStack";
import SectionContainer from "./SectionContainer";
import Contact from "@/components/Contact";
import StepsSection from "@/components/home/StepsSection";

export const revalidate = 300; // 5 minutes

export const metadata: Metadata = {
  alternates: {
    canonical: "https://lan.as",
  },
};

export default async function Home() {
  const data = await getHomepageData();

  const { projects: allProjects, posts: allPosts, home } = data;

  return (
    <main className="min-h-screen">
      <HeroSection heroData={home} />
      <Projectgrid allProjects={allProjects} />
      <ServiceSection />
      {/* <Testimonial /> */}
      {/* <StepsSection /> */}
      <Bloglist allPosts={allPosts} />
      <AboutSection aboutData={home} />
      <TechStack techData={home} />
      <Contact />
      {/* <pre className="max-w-xl">{JSON.stringify(data, null, 2)}</pre> */}
    </main>
  );
}
