import Link from "next/link";
import Image from "next/future/image";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import cn from "classnames";

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

import Layout from "../components/Layout";
import CallToAction from "../components/CallToAction";

const ProjectItem = ({ project }) => {
  const gridclassnames =
    "h-[18em] hover:h-[20em] transition-all group rounded-lg flex flex-row justify-between  hover:scale-105 transform duration-300 ease-in-out backdrop-blur-2xl text-white dark:text-midnight";

  return (
    <Link
      as={`/${project.filePath.replace(/\.mdx?$/, "")}`}
      href={`/[slug]`}
      key={project.filePath}
    >
      <a
        className={cn(
          gridclassnames,
          project.data.classnames,
          " shadow-2xl backdrop-blur-3xl backdrop-hue-rotate-180"
        )}
      >
        <div className="flex flex-1 flex-col items-start justify-end p-8">
          <h3 className="text-2xl font-semibold">{project.data.title}</h3>
          <p className="text-md hidden group-hover:block ">
            {project.data.description}
          </p>
        </div>
        {/* {project.data.image && (
          <Image
            src={project.data.image}
            alt={project.data.title}
            width={500}
            height={500}
            className="flex-1 rounded-lg object-cover hidden group-hover:block"
          />
        )} */}
      </a>
    </Link>
  );
};

const IndexPage = ({ projects }) => {
  return (
    <>
      <Layout title="Home">
        <div className="mb-32 grid grid-cols-1 gap-4 pt-16">
          {projects.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
        </div>
        <CallToAction />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { projects } };
};

export default IndexPage;
