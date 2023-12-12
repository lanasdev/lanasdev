import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

import { Image as DatoImage } from "react-datocms";
import SectionContainer from "./SectionContainer";

// @ts-ignore
export default function Bloglist({ allPosts }) {
  return (
    <div className="flex flex-col pt-12 pl-6 md:pl-8  mr-6 md:mr-8">
      <h3 className="text-3xl font-semibold pb-8">Blog</h3>
      <div className="flex flex-shrink-0 space-x-4 py-4 snap-x overflow-x-auto">
        {allPosts.map((p: any) => (
          <Link
            href={`/projects/${p.slug}`}
            key={p.slug}
            className="max-w-xs shrink-0 snap-center"
          >
            <DatoImage
              data={p.coverImage.responsiveImage}
              className="rounded-xl aspect-[1/1.61803398875] max-h-[400px] w-full"
              pictureClassName="object-cover"
            />
            <p className="max-w-xs pt-4 line-clamp-1">{p.excerpt}</p>
            <h4 className="text-xl font-semibold">{p.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
