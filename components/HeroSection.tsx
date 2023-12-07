import Image from "next/image";
import Link from "next/link";

import HammerEmoji from "@/public/hammer-emoji.png";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-start pt-16 md:pt-24">
      {/* <h1 className="text-[3.75rem] leading-[80%] text font-extrabold pb-4"> */}
      <h2 className="text-xl uppercase text-accent-foreground font-semibold pb-4">
        <Balancer>Lanas Web design</Balancer>
      </h2>
      <h1 className="text-[max(8vw,_24px,_4em)] leading-[95%] font-semibold pb-16">
        <Balancer>Schnelle Websites für das Handwerk</Balancer>
      </h1>

      {/* <Button className="px-16 py-8 font-semibold">
        Get your fast website
      </Button> */}
    </div>
  );
}
