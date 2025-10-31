import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

import { SanityImage } from "@/lib/sanity-image";
import SectionContainer from "@/app/(app)/SectionContainer";

// List of all other posts with cover image, title, excerpt, author, date
// @ts-ignore
export default function OtherPosts({ allPosts }) {
  // TODO: Hide Component if empty
  // if (allPosts.length() > 0) return <div></div>;
  return (
    <SectionContainer className="flex flex-col pt-24 md:mr-8">
      <h3 className="pb-8 text-2xl font-semibold">Andere Beiträge</h3>
      <div className="flex shrink-0 snap-x space-x-4 overflow-x-auto py-4">
        {allPosts.map((p: any) => (
          <MiniBlogCard post={p} key={p.slug} />
        ))}
      </div>
    </SectionContainer>
  );
}

export function MiniBlogCard({ post }: { post: any }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      key={post.slug.current}
      className="group max-w-xs shrink-0 snap-center"
    >
      <SanityImage
        image={post.mainImage}
        alt={post.title}
        width={384}
        height={288}
        className="aspect-golden max-h-96 w-full rounded-xl transition-all duration-300 ease-in-out group-hover:scale-103 group-hover:opacity-80 object-cover"
      />
      <p className="line-clamp-1 max-w-xs pt-4">{post.excerpt}</p>
      <h4 className="text-xl font-semibold">{post.title}</h4>
    </Link>
  );
}
