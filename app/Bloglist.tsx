import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

import { Image as DatoImage } from "react-datocms";

// @ts-ignore
export default function Bloglist({ allPosts }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl font-semibold pb-8">Blog</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {allPosts.map((p: any) => (
          <Link
            href={`/projects/${p.slug}`}
            key={p.slug}
            className="border-2 p-4 rounded-md"
          >
            <DatoImage data={p.coverImage.responsiveImage} />
            <h4 className="text-md font-semibold pt-8">{p.title}</h4>
            <Separator />
            <p className="text-sm max-w-xs pt-4">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
