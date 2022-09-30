/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import Layout from "../../components/Layout";
import CustomLink from "../../components/CustomLink";
import CustomImage from "../../components/CustomImage";
import CallToAction from "../../components/CallToAction";
import CoverImage from "../../components/CoverImage";
import CustomStructuredText from "../../components/CustomStructuredText";
import { Image } from "react-datocms";

import cn from "classnames";

import {
  getAllProjectSlugs,
  getProjectBySlug,
  AllProjectSlug,
} from "../../lib/api";
import request from "../../lib/datocms";

const ProjectFacts = ({ project }) => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-stretch md:space-y-0 md:space-x-16 md:first:ml-0 md:last:mr-0">
      {project.clientname != "" && (
        <div className="flex flex-col justify-between">
          <span className="pb-2 text-sm font-bold">Client</span>
          <span className="text-sm">{project.clientname}</span>
        </div>
      )}
      {project.projecttype != "" && (
        <div className="flex flex-col justify-between">
          <span className="pb-2 text-sm font-bold">Type of Project</span>
          <span className="text-sm">{project.projecttype}</span>
        </div>
      )}
      {project.year != "" && (
        <div className="flex flex-col justify-between">
          <span className="pb-2 text-sm font-bold">Finished in Year</span>
          <span className="text-sm">{project.year}</span>
        </div>
      )}
    </div>
  );
};

const ProjectPage = ({ project }) => {
  // dark:prose-dark dark:prose-white prose flex-row items-stretch py-8 dark:text-white dark:prose-headings:text-white dark:prose-a:text-white
  return (
    <Layout title={project.title}>
      <div className="">
        <CoverImage
          title={project.title}
          responsiveImage={project.image.responsiveImage}
          path={`project/${project.slug}`}
        />
        <article className="dark:prose-dark dark:prose-white prose flex-row items-stretch py-8 dark:text-white dark:prose-headings:text-white dark:prose-a:text-white">
          <div className="post-sidebar flex flex-col items-stretch justify-between pb-8 ">
            <h2 className="mt-0">{project.title}</h2>
            {project.description && (
              <p className="description">{project.description}</p>
            )}
            <ProjectFacts project={project} />
          </div>
          <main className="flex flex-col items-stretch justify-between md:flex-row">
            {/* <CustomStructuredText data={project} /> */}
          </main>
        </article>
      </div>
      {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}

      <CallToAction />
    </Layout>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const project = await getProjectBySlug(context.params.slug);

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({
    query: AllProjectSlug,
    variables: {},
    excludeInvalid: true,
    includeDrafts: true,
  });
  const projects = data.allProjects;
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
