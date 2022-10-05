import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import cn from "classnames";

import Layout from "components/Layout";
import ProjectList from "components/Project/ProjectList";
// import Testimonials from "components/Testimonial";
const Testimonials = dynamic(() => import("components/Testimonial"));

// import BlogList from "components/Blog/BlogList";
const Blog = dynamic(() => import("components/Blog/BlogList"));

// import CallToAction from "components/CallToAction";
const CallToAction = dynamic(() => import("components/CallToAction"), {
  suspense: true,
});

// import request from "lib/datocms";
import { getHome } from "lib/api";

const IndexPage = ({ data }) => {
  return (
    // <Layout DataTopBar={data.home}>
    <Layout>
      <ProjectList data={data} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Testimonials testimonials={data.allTestimonials} />
      <Blog posts={data.allPosts} />
      <Suspense fallback={`Loading Contact...`}>
        <CallToAction />
      </Suspense>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getHome();

  return { props: { data } };
};

export default IndexPage;
