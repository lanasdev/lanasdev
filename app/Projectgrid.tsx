import Link from "next/link";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Image as DatoImage, ResponsiveImageType } from "react-datocms";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import Image1 from "@/public/img/image1.jpg";
import Image2 from "@/public/img/image2.jpg";
import Image3 from "@/public/img/image3.jpg";
import SectionContainer from "./SectionContainer";

type ProjectType = {
  slug: string;
  position: number;
  description: string;
  title: string;
  image: any;
  // image: {
  //   responsiveImage: ResponsiveImageType;
  // };
};

export default function Projectgrid({
  allProjects,
}: {
  allProjects: ProjectType[];
}) {
  const ImgArray = [Image1, Image2, Image3, Image1, Image2, Image3];

  return (
    <SectionContainer className="max-w-fit pt-32 flex flex-col gap-24">
      <div id="projekte" className=""></div>
      {allProjects.map((project: ProjectType, index) => (
        <Link
          href={`/projekt/${project.slug}`}
          key={project.position}
          className="relative"
        >
          {/* <DatoImage
            src={project?.image?.responsiveImage}
            alt="Picture of the author"
            placeholder="blur"
            property={index === 0 ? "true" : "false"}
            className="rounded-xl aspect-golden md:aspect-[3/1] object-cover object-center"
          /> */}
          {project.image.responsiveImage ? (
            <DatoImage
              data={project.image.responsiveImage}
              priority={index === 0 ? true : false}
              // layout="fill"
              objectFit="cover"
              objectPosition="50% 0%"
              className="rounded-xl aspect-golden md:aspect-[3/1]"
              // pictureClassName="object-cover object-top"
            />
          ) : (
            <Image
              src={ImgArray[index]}
              alt="Placeholder"
              priority={index === 0 ? true : false}
              className="object-cover object-center"
            />
          )}
          <h5 className="uppercase pt-6 line-clamp-2">{project.description}</h5>
          <h4 className="text-xl font-semibold ">{project.title}</h4>
        </Link>
      ))}
      {/* <pre>{JSON.stringify(allProjects, null, 2)}</pre> */}
    </SectionContainer>
  );
}
