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
      <h1 className="text-[max(9.5vw,_24px,_4em)] leading-[95%] font-semibold pb-16">
        {/* Lanas */}
        <Balancer>
          {/* We&apos;re{" "} */}
          <span className="inline-block hover:underline decoration-green-500 hover:-translate-y-2 transition-all duration-200">
            Building
          </span>{" "}
          <span className="">🔨</span> fast <span>⚡</span> and high converting
          websites{" 🎯"}
        </Balancer>
      </h1>

      {/* <Button className="px-16 py-8 font-semibold">
        Get your fast website
      </Button> */}
    </div>
  );
}
