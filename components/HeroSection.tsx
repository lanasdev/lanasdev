import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import SectionContainer from "@/app/SectionContainer";
import AvailableBanner from "./AvailableBanner";

export default function HeroSection() {
  return (
    <SectionContainer className="flex flex-col items-center justify-center gap-8 pt-20">
      <h1 className="text-4xl font-bold">
        Fetzige Onlineshops als Abo, die begeistern
      </h1>
      <h2 className="text-xl">Shopify ist unsere Spielwiese</h2>
    </SectionContainer>
  );
}
