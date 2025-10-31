import SectionContainer from "@/app/(app)/SectionContainer";
import CalContact from "@/components/CallToAction/CalContact";
import { getPostBySlug, getAllPostSlugs, getOtherPosts } from "@/lib/sanity";
import { generatePostMetadata } from "@/lib/sanity-metadata";
import Link from "next/link";
import BlogAuthor from "./BlogAuthor";
import BlogHeader from "./BlogHeader";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Bloglist from "@/components/Bloglist";
import OtherPosts from "./OtherPosts";
import ProgressBar from "@/components/ProgressBar";
import Contact from "@/components/Contact";
import { PortableTextRenderer } from "@/components/PortableTextRenderer";
import { SanityImage } from "@/lib/sanity-image";

export const revalidate = 300; // 5 minutes

export async function generateStaticParams() {
  const posts = await getAllPostSlugs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const otherPosts = await getOtherPosts(params.slug);

  const p = post;

  return (
    <>
      <div className="">
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
        {/* <SectionContainer className="">
        <pre className="max-w-xl pt-24">{JSON.stringify(post, null, 2)}</pre>
      </SectionContainer> */}
        <Contact />
      </div>
    </>
  );
}

type MetadataProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: MetadataProps, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return generatePostMetadata({
    ...post,
    slug: { current: params.slug },
  });
}
