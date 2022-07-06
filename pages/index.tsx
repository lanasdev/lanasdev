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

const IndexPage = ({ products }) => {
  const gridclassnames =
    "h-[600px] rounded-lg flex flex-col p-8 justify-end items-start hover:scale-105 transform duration-300 ease-in-out backdrop-blur-2xl text-white dark:text-midnight ";

  return (
    <>
      <Layout title="Home">
        <div className="grid grid-cols-1 gap-4 pt-16 md:grid-cols-2 ">
          {products.map((product) => (
            <Link
              as={`/${product.filePath.replace(/\.mdx?$/, '')}`}
              href={`/[slug]`}
              key={product.filePath}
            >

              <a className={cn(gridclassnames, product.data.classnames)}>
                <h3 className="text-2xl font-semibold">{product.data.title}</h3>
                <p className="text-md">{product.data.description} </p></a>
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
  const products = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { products } }
}

export default IndexPage;
