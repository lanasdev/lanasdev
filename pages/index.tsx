import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import cn from "classnames";

import { renderMetaTags } from "react-datocms";

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
  let { locale } = useRouter();
  const fmLocale = locale.split("-")[0];

  return (
    <>
      <Head>{renderMetaTags(data.home.seo.concat(data.site.favicon))}</Head>
      <Layout>
        <ProjectList data={data} />
        {/*<Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonials testimonials={data.allTestimonials} />
      </Suspense>
      */}

        <Suspense fallback={<div>Loading Blog Posts...</div>}>
          <Blog posts={data.allPosts} locale={fmLocale} />
        </Suspense>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const data = await getHome(locale);

  return { props: { data }, revalidate: 10 };
};

export default IndexPage;
