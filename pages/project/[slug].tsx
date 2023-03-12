import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import cn from "classnames";

import Layout from "components/Layout";
import i18n from "lib/i18n";

import CoverImage from "components/CoverImage";
import CustomStructuredText from "components/CustomStructuredText";
import ProjectFacts from "components/Project/ProjectFacts";
import OtherProjects from "components/Project/OtherProjects";

import ProjectHeader from "components/Project/ProjectHeader";

import { getAllProjectSlugs, getProjectBySlug, getTopBar } from "lib/api";
import { renderMetaTags, useQuerySubscription } from "react-datocms";

const ProjectPage = ({ subscription }) => {
  const router = useRouter();
  const { locale } = router;
  const fmLocale = locale.split("-")[0];

  const { data, error, status } = useQuerySubscription(subscription);
  const statusMessage = {
    connecting: "Connecting to DatoCMS...",
    connected: "Connected to DatoCMS, receiving live updates!",
    closed: "Connection closed",
  };
  const project = data.project;

  return (
    <>
      <Head>{renderMetaTags(data.project.seo.concat(data.site.favicon))}</Head>
      <Layout>
        {/* DatoCMS Live updates */}
        {status != "closed" && (
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
        )}
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
            <ProjectFacts project={project} locale={fmLocale} />
          </div>
          <main className="">
            <CustomStructuredText data={project} />
          </main>
        </article>

        <OtherProjects project={project} />
        {/* <pre className="pt-16">{JSON.stringify(data, null, 2)}</pre> */}
      </Layout>
    </>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  locale,
}) => {
  const formattedLocale = locale.split("-")[0];

  const project = await getProjectBySlug(params.slug, preview, formattedLocale);

  return {
    props: project,
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = await getAllProjectSlugs({ locales });

  return {
    paths,
    fallback: "blocking",
  };
};
