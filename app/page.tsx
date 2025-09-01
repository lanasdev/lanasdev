import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import HeroSection from "@/components/HeroSection";
import Contact from "@/components/Contact";
import StepsSection from "@/components/home/StepsSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://lan.as",
  },
};

export default async function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <StepsSection />
      <Contact /> */}
      {/* <pre className="max-w-xl">{JSON.stringify(data, null, 2)}</pre> */}
    </main>
  );
}
