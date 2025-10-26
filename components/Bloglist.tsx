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
      <div className="flex shrink-0 snap-x gap-8 overflow-x-auto py-4 px-4 -mx-4">
        {allPosts.map((p: any) => (
          <Link
            href={`/blog/${p.slug}`}
            key={p.slug}
            className="w-80 shrink-0 snap-center group relative"
          >
            <DatoImage
              data={p.coverImage.responsiveImage}
              className="aspect-golden max-h-96 w-full rounded-xl transition-all duration-150 ease-in-out group-hover:scale-103 group-hover:border-foreground group-hover:opacity-80"
              pictureClassName="object-cover"
            />
            <p className="line-clamp-1 pt-4">{p.excerpt}</p>
            <h4 className="text-xl font-semibold group-hover:underline group-hover:decoration-muted-foreground">{p.title}</h4>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}

