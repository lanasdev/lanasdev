import Link from "next/link";
import { notFound } from "next/navigation";

// import datoFetcher from "lib/apiV2";
// import { ProjectBySlug } from "lib/apiV2";

import ProjectList from "ui/Project/ProjectList";
import CoverImage from "components/CoverImage";
import CustomStructuredText from "components/CustomStructuredText";
import OtherProjects from "components/Project/OtherProjects";
import ProjectFacts from "components/Project/ProjectFacts";
import ProjectHeader from "components/Project/ProjectHeader";
import { Metadata } from "next";

//
import request from "lib/datocms";
import { DEFAULT_LANG, getProjectBySlug, getAllProjectSlugs } from "lib/apiV2";
import CallToActionSmall from "app/CallToActionSmall";
import CallToAction from "app/CallToAction";

export const revalidate = 60;

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  // const post = data.find((post) => post.slug === params.slug);
  const project = getProjectBySlug(params.slug, false, "en");
  if (!project || project === null || (project as any).length === 0) {
    return notFound();
  }

  const { title, description, slug, createdAt } = ((await project) as any)
    .subscription.initialData.project;

  const ogImage = `https://lanas.dev/project/${slug}/opengraph-image`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: createdAt,
      url: `https://lanas.dev/project/${slug}`,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage,
    },
  };
}

export async function generateStaticParams() {
  const projects = await getAllProjectSlugs();

  return projects;
}

const ProjectPage = async ({ params }) => {
  const locale = "en";
  // const subscription = await datoFetcher(`{query allProjects {slug}}`);
  const datoData = await getProjectBySlug(params.slug, false, "en");
  // const { data, error, status } = useQuerySubscription(subscription);
  // const statusMessage = {
  //   connecting: "Connecting to DatoCMS...",
  //   connected: "Connected to DatoCMS, receiving live updates!",
  //   closed: "Connection closed",
  // };
  if (!datoData) {
    notFound();
  }
  const project = (datoData.subscription.initialData as any).project;

  return (
    <div className="">
      {/* DatoCMS Live updates */}
      {/* {status != "closed" && (
          <div className="pb-8">
            <p>Connection status: {statusMessage[status]}</p>
            {error && (
              <div>
                <h1>Error: {error.code}</h1>
                <div>{error.message}</div>
                {error.response && (
                  <pre>{JSON.stringify(error.response, null, 2)}</pre>
                )}
              </div>
            )}
          </div>
        )} */}

      <ProjectHeader
        title={project.title}
        excerpt={project.description}
        date={project.createdAt}
        locale={locale}
      />

      <CoverImage
        title={project.title}
        responsiveImage={project.image.responsiveImage}
        path={project.liveurl}
      />
      <article className="dark:prose-white prose flex-row items-stretch py-8 dark:prose-invert prose-a:[word-break:break-word] hover:prose-a:text-amber-500 prose-img:rounded-md dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-blockquote:text-white">
        {/* prose-a:break-words */}
        {/*   word-break: break-word; */}
        <div className="post-sidebar flex flex-col items-stretch justify-between pb-16 ">
          <ProjectFacts project={project} locale={DEFAULT_LANG} />
        </div>
        <div className="">
          <CustomStructuredText data={project} />
        </div>
      </article>

      <OtherProjects project={project} />
      {/* <CallToActionSmall /> */}
      <CallToAction />
    </div>
  );
};

export default ProjectPage;
