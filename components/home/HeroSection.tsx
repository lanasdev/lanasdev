import Image from "next/image";
import Link from "next/link";

import HammerEmoji from "@/public/hammer-emoji.png";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import SectionContainer from "@/app/SectionContainer";
import AvailableBanner from "@/components/AvailableBanner";
import AnimatedMotionText from "../AnimatedMotionText";

// export default function HeroSection() {
//   return (
//     <SectionContainer className="pt-20">
//       <AvailableBanner />

//       <h1 className="pt-4 text-2xl font-bold sm:max-w-2xl sm:text-4xl sm:font-semibold md:text-5xl xl:max-w-3xl xl:leading-tight">
//         <Balancer>Schnelle Websites für Ihr Photovoltaikunternehmen</Balancer>
//       </h1>
//       <h2 className="text-md max-w-2xl pb-4 pt-6 font-medium leading-8 text-accent-foreground sm:text-xl">
//         <Balancer>
//           Lanas ist eine Webagentur, die sich auf die Erstellung von
//           Landing&nbsp;Pages und kleinen Shops in der Solarbranche spezialisiert
//           hat.
//         </Balancer>
//       </h2>
//     </SectionContainer>
//   );
// }

export default function HeroSection() {
  return (
    <SectionContainer className="pb-48 pt-48">
      <AnimatedMotionText
        className="text-6xl"
        text="Schnelle Websites für Ihr Photovoltaikunternehmen. Lanas ist eine Webagentur, die sich auf die Erstellung von Landing Pages und kleinen Shops in der Solarbranche spezialisiert hat."
      />
    </SectionContainer>
  );
}
