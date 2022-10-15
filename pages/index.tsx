import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import cn from "classnames";

import Layout from "components/Layout";
import ProjectList from "components/Project/ProjectList";
// import Testimonials from "components/Testimonial";
const Testimonials = dynamic(() => import("components/Testimonial"), {
  suspense: true,
});

import BlogList from "components/Blog/BlogList";
const Blog = dynamic(() => import("components/Blog/BlogList"), {
  suspense: true,
});

// import CallToAction from "components/CallToAction";
const CallToAction = dynamic(() => import("components/CallToAction"), {
  suspense: true,
});

import { getHome } from "lib/api";

const IndexPage = ({ data }) => {
  return (
    // <Layout DataTopBar={data.home}>
    <Layout>
      <ProjectList data={data} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/*<Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonials testimonials={data.allTestimonials} />
      </Suspense>
      */}
      
      <Suspense fallback={<div>Loading Blog Posts...</div>}>
        <Blog posts={data.allPosts} />
      </Suspense>
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
