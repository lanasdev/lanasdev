import Link from "next/link";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { SanityImage } from "@/lib/sanity-image";
import type { SanityImageObject } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import Image1 from "@/public/img/image1-mini.webp";
import Image2 from "@/public/img/image2.jpg";
import Image3 from "@/public/img/image3.jpg";
import SectionContainer from "./SectionContainer";

type ProjectType = {
  slug: string;
  position: number;
  description: string;
  title: string;
  image: SanityImageObject;
};

export default function Projectgrid({
  allProjects,
}: {
  allProjects: ProjectType[];
}) {
  const ImgArray = [Image1, Image2, Image3, Image1, Image2, Image3];

  return (
    <SectionContainer className=" pt-32 md:gap-24">
      <div id="projekte" />
      <h3 className="hidden">Projekte</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project: ProjectType, index) => (
          <Link
            href={`/projekt/${project.slug}`}
            key={project.position}
            className="group relative"
          >
            <SanityImage
              image={project.image}
              alt={project.title}
              width={640}
              height={480}
              priority={index === 0 ? true : false}
              className="aspect-golden-vertical sm:aspect-4/3 rounded-xl border-2 border-muted-foreground transition-all duration-150 ease-in-out group-hover:scale-103 group-hover:border-foreground group-hover:opacity-80 min-w-full object-cover object-top"
            />
            <p className="line-clamp-2 pt-6 uppercase text-sm sm:text-md">{project.description}</p>
            <h4 className="text-xl font-semibold group-hover:underline group-hover:decoration-muted-foreground ">
              {project.title}
            </h4>
          </Link>
        ))}
      </div>

      {/* <pre>{JSON.stringify(allProjects, null, 2)}</pre> */}
    </SectionContainer>
  );
}
