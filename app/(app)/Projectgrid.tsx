"use client";

import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import type { SanityImageObject } from "@/lib/sanity";
import { SanityImage } from "@/lib/sanity-image";
import { cn } from "@/lib/utils";

import Image1 from "@/public/img/image1-mini.webp";
import Image2 from "@/public/img/image2.jpg";
import Image3 from "@/public/img/image3.jpg";
import SectionContainer from "./SectionContainer";

type ProjectType = {
  _id: string;
  slug: { current: string };
  position?: number;
  description?: string;
  title: string;
  image?: SanityImageObject;
  video?: {
    asset?: {
      playbackId?: string;
      thumbTime?: number;
    };
  };
  _createdAt?: string;
};

function ProjectCard({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const hasVideo = project.video?.asset?.playbackId;

  return (
    <Link
      href={`/projekt/${project.slug.current}`}
      key={project.slug.current}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-golden-vertical sm:aspect-4/3 rounded-xl border-2 border-muted-foreground transition-all duration-150 ease-in-out group-hover:scale-103 group-hover:border-foreground overflow-hidden">
        {/* Thumbnail Image */}
        {project.image && (
          <SanityImage
            image={project.image}
            alt={project.title}
            width={640}
            height={480}
            priority={index === 0 ? true : false}
            className={cn(
              "absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300",
              isHovered && hasVideo ? "opacity-0" : "opacity-100",
            )}
          />
        )}

        {/* Video on Hover */}
        {hasVideo && project.video?.asset?.playbackId && (
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0",
              "[&_mux-player]:w-full [&_mux-player]:h-full [&_mux-player]:pointer-events-none [&_mux-player::part(bottom)]:hidden [&_mux-player::part(center)]:hidden [&_mux-player::part(top)]:hidden",
            )}
          >
            <MuxPlayer
              playbackId={project.video.asset.playbackId}
              streamType="on-demand"
              muted
              loop
              autoPlay={isHovered}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </div>

      <p className="line-clamp-2 pt-6 uppercase text-sm sm:text-md">
        {project.description}
      </p>
      <h4 className="text-xl font-semibold group-hover:underline group-hover:decoration-muted-foreground ">
        {project.title}
      </h4>
    </Link>
  );
}

export default function Projectgrid({
  allProjects,
}: {
  allProjects: ProjectType[];
}) {
  return (
    <SectionContainer className=" pt-32 md:gap-24">
      <div id="projekte" />
      <h3 className="hidden">Projekte</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project: ProjectType, index) => (
          <ProjectCard
            key={project.slug.current}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* <pre>{JSON.stringify(allProjects, null, 2)}</pre> */}
    </SectionContainer>
  );
}
