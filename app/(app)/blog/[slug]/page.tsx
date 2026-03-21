import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import SectionContainer from "@/app/(app)/SectionContainer";
import Contact from "@/components/Contact";
import { PortableTextRenderer } from "@/components/PortableTextRenderer";
import ProgressBar from "@/components/ProgressBar";
import { getAllPostSlugs, getOtherPosts, getPostBySlug } from "@/lib/sanity";
import { SanityImage } from "@/lib/sanity-image";
import { generatePostMetadata } from "@/lib/sanity-metadata";
import BlogHeader from "./BlogHeader";
import OtherPosts from "./OtherPosts";

export const revalidate = 300; // 5 minutes

export async function generateStaticParams() {
  const posts = await getAllPostSlugs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const [post, otherPosts] = await Promise.all([
    getPostBySlug(params.slug),
    getOtherPosts(params.slug),
  ]);

  if (!post) {
    notFound();
  }

  const p = post;

  return (
    <main id="main-content" className="" tabIndex={-1}>
      <BlogHeader title={p.title} date={p.publishedAt} author={p.author} />
      {p.mainImage && (
        <SanityImage
          image={p.mainImage}
          alt={p.title}
          width={1920}
          height={1080}
          className="mt-8 max-h-screen w-full object-cover"
          priority
        />
      )}
      <SectionContainer className="prose prose-stone mx-auto pt-32 prose-img:rounded-xl lg:max-w-[90ch]">
        <PortableTextRenderer value={p.body} />
        <ProgressBar />
      </SectionContainer>

      {/* <SectionContainer className="">
        <CalContact />
      </SectionContainer> */}
      <OtherPosts allPosts={otherPosts} />
    </main>
  );
}

type MetadataProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  props: MetadataProps,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug, { stega: false });

  if (!post) {
    return {};
  }

  return generatePostMetadata({
    ...post,
    slug: { current: params.slug },
  });
}
