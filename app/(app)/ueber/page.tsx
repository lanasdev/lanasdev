import Link from "next/link";
import { Metadata } from 'next';
import { getAboutPage } from "@/lib/sanity";
import { generatePageMetadata } from "@/lib/sanity-metadata";
import { PortableTextRenderer } from "@/components/PortableTextRenderer";
import { SanityImage } from "@/lib/sanity-image";

export const revalidate = 300; // 5 minutes

export default async function AboutPage() {
  const about = await getAboutPage();

  if (!about) {
    return <div>About page content not found</div>;
  }

  return (
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-amber-600">
                  Schnelle & optimierte Webseiten
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                  {about.title}
                </h1>
                <p className="mt-6 text-xl leading-8 text-stone-700">
                  {about.description}
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {about.image && (
              <SanityImage
                image={about.image}
                alt={about.title}
                width={912}
                height={1216}
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] object-cover"
              />
            )}
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <article className="prose prose-base prose-stone max-w-xl leading-7 lg:max-w-lg">
                <PortableTextRenderer value={about.content} />
              </article>
            </div>
          </div>
        </div>
      </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutPage();

  if (!about) {
    return {};
  }

  return generatePageMetadata({
    ...about,
    path: '/ueber',
  });
}
