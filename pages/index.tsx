import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import cn from "classnames";
import Contactform from "../components/Contactform";

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

// import Features from "../components/test/Features";
// import Steps from "../components/test/Steps";
// import Testimonials from "../components/test/Testimonials";
// import CTA from "../components/test/CTA";
// import Hero from "../components/test/Hero";
import Layout from "../components/Layout";
import CallToAction from "../components/CallToAction";

const IndexPage = ({ posts }) => {
  const imgurl = "https://via.placeholder.com/600/771796";
  const gridclassnames =
    "h-[600px] rounded-lg flex flex-col p-8 justify-end items-start hover:scale-105 transform duration-300 ease-in-out backdrop-blur-2xl text-white dark:text-midnight ";

  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "lorem ipsum",
      classname: "bg-gradient-to-tr from-[#DB758F] to-[#39B0EF]",
      slug: "project-1",
    },
    {
      id: 2,
      name: "Project 2",
      description: "lorem ipsum scheiss",
      classname: "bg-gradient-to-tr from-[#F46634] to-[#FABFD5]",
      slug: "project-2",
    },
    {
      id: 3,
      name: "Project 3",
      description: "lorem ipsum",
      classname: "bg-gradient-to-tr from-[#8100ED] to-[#FF3903]",
      slug: "project-3",
    },
    {
      id: 4,
      name: "Project 4",
      description: "lorem ipsum",
      classname: "bg-gradient-to-tl from-[#B671FF] to-[#FFDC7C]",
      slug: "project-4",
    },
  ];

  return (
    <>
      <Layout title="Home">
        <div className="grid grid-cols-1 gap-4 pt-16 md:grid-cols-2 ">
          {posts.map((post) => (
            <Link
              as={`/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/[slug]`}
              key={post.filePath}
            >

              <a className={cn(gridclassnames, post.data.classnames)}>
                <h3 className="text-2xl font-semibold">{post.data.title}</h3>
                <p className="text-md">{post.data.description} </p></a>
            </Link>
          ))}
        </div>
        <CallToAction />
      </Layout>
    </>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const url = "https://jsonplaceholder.typicode.com/photos";
//   const res = await fetch(url);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// };
export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}

export default IndexPage;
