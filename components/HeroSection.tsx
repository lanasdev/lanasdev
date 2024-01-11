import Image from "next/image";
import Link from "next/link";

import HammerEmoji from "@/public/hammer-emoji.png";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import SectionContainer from "@/app/SectionContainer";

export default function HeroSection() {
  return (
    <SectionContainer className="pt-20">
      <h2 className="pb-4 text-xl font-semibold uppercase text-accent-foreground">
        <Balancer>
          Lanas - Webdesign & Entwicklung für die Solarbranche
        </Balancer>
      </h2>
      <h1 className="text-4xl font-semibold md:text-5xl">
        <Balancer>Schnelle Websites für Ihr Photovoltaikunternehmen</Balancer>
      </h1>
    </SectionContainer>
  );
}
