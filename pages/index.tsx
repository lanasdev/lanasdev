import Link from "next/link";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import cn from "classnames";

import Layout from "components/Layout";
import ProjectList from "components/Project/ProjectList";
import Testimonials from "components/Testimonial";
import CallToAction from "components/CallToAction";

// import request from "lib/datocms";
import { getHome } from "lib/api";
import BlogList from "components/Blog/BlogList";

const IndexPage = ({ data }) => {
  return (
    // <Layout DataTopBar={data.home}>
    <Layout>
      <ProjectList data={data} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Testimonials testimonials={data.allTestimonials} />
      <BlogList posts={data.allPosts} />
      <CallToAction />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getHome();

  return { props: { data } };
};

export default IndexPage;
