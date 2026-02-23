import type { Metadata } from "next";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServiceSection from "@/components/home/ServiceSection";
import TechStack from "@/components/home/TechStack";
import { getHomepageData, getSiteSettings } from "@/lib/sanity";
import { generatePageMetadata } from "@/lib/sanity-metadata";
import Bloglist from "../../components/Bloglist";
import Projectgrid from "./Projectgrid";

export const revalidate = 300; // 5 minutes

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepageData({ stega: false });
  const settings = await getSiteSettings({ stega: false });

  const home = data.home;

  return generatePageMetadata({
    seo: home?.seo,
    title: settings?.title || home?.title || undefined,
    description: settings?.description || undefined,
    image: home?.seo?.image || settings?.defaultOgImage || undefined,
    path: "/",
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
