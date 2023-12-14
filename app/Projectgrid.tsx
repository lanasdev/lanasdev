import Link from "next/link";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Image as DatoImage } from "react-datocms";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import Image1 from "@/public/img/image1.jpg";
import Image2 from "@/public/img/image2.jpg";
import Image3 from "@/public/img/image3.jpg";
import SectionContainer from "./SectionContainer";

// @ts-ignore
export default function Projectgrid({ allProjects }) {
  return (
    <SectionContainer className="max-w-fit pt-32 flex flex-col gap-24">
      <div className="">
        <Image
          src={Image1}
          alt="Picture of the author"
          //blur image
          placeholder="blur"
          className="rounded-xl aspect-golden md:aspect-[3/1] object-cover object-center"
        />
        <h5 className="uppercase pt-6">Projekt Solar Sam</h5>
        <h4 className="text-xl font-semibold ">Projekt Solar Sam</h4>
      </div>
      <div className="">
        <Image
          src={Image2}
          alt="Picture of the author"
          placeholder="blur"
          className="rounded-xl aspect-golden md:aspect-[3/1] object-cover object-center"
        />
        <h5 className="uppercase pt-6">Projekt Solar Sam</h5>
        <h4 className="text-xl font-semibold ">Projekt Solar Sam</h4>
      </div>
      <div className="">
        <Image
          src={Image3}
          alt="Picture of the author"
          placeholder="blur"
          className="rounded-xl aspect-golden md:aspect-[3/1] object-cover object-center"
        />
        <h5 className="uppercase pt-6">Projekt Solar Sam</h5>
        <h4 className="text-xl font-semibold ">Projekt Solar Sam</h4>
      </div>
      {/* <pre>{JSON.stringify(allProjects, null, 2)}</pre> */}
    </SectionContainer>
  );
}
