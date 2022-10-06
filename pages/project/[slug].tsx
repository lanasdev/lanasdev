import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import Layout from "components/Layout";
import CustomLink from "components/CustomLink";
import CustomImage from "components/CustomImage";
// import CallToAction from "components/CallToAction";
const CallToAction = dynamic(() => import("components/CallToAction"), {
  suspense: true,
});
import CoverImage from "components/CoverImage";
import CustomStructuredText from "components/CustomStructuredText";
import { Image, StructuredText } from "react-datocms";
import ProjectFacts from "components/Project/ProjectFacts";
import OtherProjects from "components/Project/OtherProjects";
import cn from "classnames";

import { getAllProjectSlugs, getProjectBySlug, getTopBar } from "lib/api";

const ProjectPage = ({ project, DataTopBar }) => {
  return (
    <Layout title={project.title}>
      <CoverImage
        title={project.title}
        responsiveImage={project.image.responsiveImage}
        path={project.liveurl}
      />
      <article className="dark:prose-white prose flex-row items-stretch py-8 hover:prose-a:text-amber-500 prose-img:rounded-md dark:prose-invert dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-blockquote:text-white">
        <div className="post-sidebar flex flex-col items-stretch justify-between pb-8 ">
          <h2 className="mt-0">{project.title}</h2>
          {project.description && (
            <p className="description">{project.description}</p>
          )}
          <ProjectFacts project={project} />
        </div>
        <main className="flex flex-col items-stretch justify-between md:flex-row">
          <CustomStructuredText data={project} />
        </main>
      </article>

      <OtherProjects project={project} />
      {/* <pre className="pt-16">{JSON.stringify(project, null, 2)}</pre> */}
      <Suspense fallback={`Loading Contact...`}>
        <CallToAction />
      </Suspense>
    </Layout>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const project = await getProjectBySlug(context.params.slug);
  const TopBar = await getTopBar();
  const DataTopBar = TopBar.home;

  return {
    props: {
      project,
      DataTopBar,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProjectSlugs();

  return {
    paths,
    fallback: false,
  };
};
