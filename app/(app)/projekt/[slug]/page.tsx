import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stegaClean } from "next-sanity";
import Balancer from "react-wrap-balancer";
import SectionContainer from "@/app/(app)/SectionContainer";
import Contact from "@/components/Contact";
import { PortableTextRenderer } from "@/components/PortableTextRenderer";
import ProgressBar from "@/components/ProgressBar";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/sanity";
import { SanityImage } from "@/lib/sanity-image";
import { generateProjectMetadata } from "@/lib/sanity-metadata";
import ProjectCards from "./ProjectCards";

export const revalidate = 300; // 5 minutes

export async function generateStaticParams() {
  const projects = await getAllProjectSlugs();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const p = project;

  const formatDate = (dateStr: string) =>
    new Intl.DateTimeFormat("de-DE", {
      month: "short",
      year: "numeric",
    }).format(new Date(dateStr));

  return (
    <main id="main-content" className="" tabIndex={-1}>
      <SectionContainer className="pt-20 ">
        <h1 className="text-3xl font-semibold">
          <Balancer>Projekt: {p.title}</Balancer>
        </h1>
        <p className=" pt-4 leading-7">
          <Balancer>{p.description}</Balancer>
        </p>
      </SectionContainer>
      {p.image && (
        <SanityImage
          image={p.image}
          alt={p.title}
          width={1920}
          aspectRatio="3:1"
          className="mt-16 min-w-screen object-cover"
          priority
        />
      )}
      <SectionContainer className="pt-8">
        <div className="flex justify-around gap-4">
          {p.clientname && (
            <div className="">
              <p className="font-medium ">
                Kunde:{" "}
                <span className="inline-block font-normal">
                  {p.clientname || "Solar Sam"}
                </span>
              </p>
            </div>
          )}

          {p._createdAt && (
            <div className="">
              <p className="font-medium ">
                Erstellt: {/* format date like this: "Sept 21" */}
                <span className="inline-block font-normal">
                  {p._createdAt ? formatDate(p._createdAt) : ""}
                </span>
              </p>
            </div>
          )}

          {p.liveurl && (
            <div className="">
              <p className="font-medium">
                Live URL:{" "}
                <Link
                  href={stegaClean(p.liveurl) || "/"}
                  className="font-normal hover:underline"
                >
                  {p.liveurl}
                </Link>
              </p>
            </div>
          )}
        </div>
      </SectionContainer>
      <SectionContainer className="prose prose-stone mx-auto pt-32 prose-img:rounded-xl max-w-full break-words">
        <PortableTextRenderer value={p.content} />
        <ProgressBar />
      </SectionContainer>
      {/* <CalContact /> */}

      <SectionContainer className="pt-8">
        <ProjectCards
          projects={p.otherprojects || []}
          currentProjectSlug={p.slug.current}
        />
        {/* <Projectgrid allProjects={p.otherprojects} /> */}
      </SectionContainer>
      {/* <SectionContainer className="">
        <pre className="max-w-xl pt-24">{JSON.stringify(project, null, 2)}</pre>
      </SectionContainer> */}
      <Contact />
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
  const project = await getProjectBySlug(params.slug, { stega: false });

  if (!project) {
    return {};
  }

  return generateProjectMetadata({
    ...project,
    slug: { current: params.slug },
  });
}
