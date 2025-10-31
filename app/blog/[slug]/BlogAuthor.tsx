import { SanityImage } from "@/lib/sanity-image";
import type { SanityImageObject } from "@/lib/sanity";
import Image from "next/image";

export interface Author {
  name: string;
  role: string;
  image: SanityImageObject;
}

const BlogAuthor = ({ author }: { author: Author }) => {
  // Explicitly define the type of the 'author' parameter
  return (
    <div className="flex flex-row items-center gap-3 pt-6 md:gap-0 lg:gap-3">
      <SanityImage
        image={author.image}
        alt={author.name}
        width={64}
        height={64}
        className="dark:boder-white mr-2 aspect-square w-16! max-w-16! rounded-full border-2 border-midnight object-cover"
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold">{author.name}</span>
        <span className="text-xs text-slate-500">{author.role}</span>
      </div>
    </div>
  );
};

export default BlogAuthor;
