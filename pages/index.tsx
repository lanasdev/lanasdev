import Link from "next/link";
import Image from "next/future/image";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import cn from "classnames";

import Layout from "../components/Layout";
import CallToAction from "../components/CallToAction";

import request from "../lib/datocms";
import { getHome } from "../lib/api";

const ProjectItem = ({ project }) => {
  const gridclassnames =
    "h-[18em] hover:h-[20em] bg-midnight dark:bg-white border-2 transition-all group rounded-lg flex flex-row justify-between  hover:scale-105 transform duration-300 ease-in-out backdrop-blur-2xl text-white dark:text-midnight";

  return (
    <Link href={`/projects/${project.slug}`} key={project.slug}>
      <a
        className={cn(
          gridclassnames,
          `bg-gradient-to-${project.gradientdirection} from-[${project.color1.hex}] to-[${project.color2.hex}]`
        )}
      >
        <div className="flex flex-1 flex-col items-start justify-end p-8">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="text-md hidden group-hover:block ">
            {project.description}
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

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <div className="mb-32 grid grid-cols-1 gap-4 pt-16">
          <pre>{JSON.stringify(data, null, 2)}</pre>
          {data.allProjects.map((project) => (
            <ProjectItem project={project} key={project.slug} />
          ))}
        </div>
        <CallToAction />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {

  const data = await getHome();

  return { props: { data } };
};

export default IndexPage;
