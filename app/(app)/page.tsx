import type { Metadata } from "next";

import { getHomepageData, getSiteSettings } from "@/lib/sanity";
import { generatePageMetadata } from "@/lib/sanity-metadata";

import Projectgrid from "./Projectgrid";
import Bloglist from "../../components/Bloglist";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import AboutSection from "@/components/home/AboutSection";
import TechStack from "@/components/home/TechStack";
import SectionContainer from "@/app/(app)/SectionContainer";
import Contact from "@/components/Contact";

export const revalidate = 300; // 5 minutes

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepageData();
  const settings = await getSiteSettings();

  const home = data.home;

  return generatePageMetadata({
    seo: home?.seo,
    title: settings?.title || home?.title || undefined,
    description: settings?.description || undefined,
    image: home?.seo?.image || settings?.defaultOgImage || undefined,
    path: '/',
  });
}

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
