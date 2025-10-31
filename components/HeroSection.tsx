import Image from "next/image";
import Link from "next/link";

import HammerEmoji from "@/public/hammer-emoji.png";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import SectionContainer from "@/app/(app)/SectionContainer";
import AvailableBanner from "./AvailableBanner";

export default function HeroSection({ heroData }: { heroData: any }) {
  return (
    <SectionContainer className="pt-20">
      <AvailableBanner heroInfo={heroData.heroinfo} />
      <h1 className="pt-4 text-2xl font-bold sm:max-w-2xl sm:text-4xl sm:font-semibold md:text-5xl xl:max-w-3xl xl:leading-tight">
        <Balancer>{heroData.title}</Balancer>
      </h1>
      <h2 className="text-md max-w-3xl pb-4 pt-6 font-medium leading-8 text-accent-foreground sm:text-xl">
        <Balancer>{heroData.subheading}</Balancer>
      </h2>
    </SectionContainer>
  );
}
