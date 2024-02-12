import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

import { Image as DatoImage } from "react-datocms";
import SectionContainer from "../app/SectionContainer";

// @ts-ignore
export default function Bloglist({ allPosts }) {
  return (
    <SectionContainer className="mr-6 flex flex-col pt-12 md:mr-8">
      <div id="blog" className="">
        <h3 className="sr-only">Unser Blog</h3>
      </div>
      <h3 className="pb-8 text-3xl font-semibold">Blog</h3>
      <div className="flex flex-shrink-0 snap-x space-x-4 overflow-x-auto py-4">
        {allPosts.map((p: any) => (
          <Link
            href={`/blog/${p.slug}`}
            key={p.slug}
            className="max-w-xs shrink-0 snap-center"
          >
            <DatoImage
              data={p.coverImage.responsiveImage}
              className="aspect-golden max-h-96 w-full rounded-xl"
              pictureClassName="object-cover"
            />
            <p className="line-clamp-1 max-w-xs pt-4">{p.excerpt}</p>
            <h4 className="text-xl font-semibold">{p.title}</h4>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
