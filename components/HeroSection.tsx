import Image from "next/image";
import Link from "next/link";

import HammerEmoji from "@/public/hammer-emoji.png";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import SectionContainer from "@/app/SectionContainer";

export default function HeroSection() {
  return (
    <SectionContainer className="pt-20">
      <h2 className="uppercase text-xl font-semibold text-accent-foreground pb-4">
        <Balancer>Lanas Web design</Balancer>
      </h2>
      <h1 className="text-4xl font-semibold">
        <Balancer>Schnelle Websites für das Handwerk</Balancer>
      </h1>
    </SectionContainer>
  );
}
