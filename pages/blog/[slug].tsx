import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "components/Layout";
import CoverImage from "components/CoverImage";
import { getPostBySlug, getAllPostsSlugs } from "lib/api";
import { GetStaticProps, GetStaticPaths } from "next";
import BlogStructuredText from "components/Blog/BlogStructuredText";
import BlogHeader from "components/Blog/BlogHeader";

import { renderMetaTags, useQuerySubscription } from "react-datocms";

const BlogPost = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription(subscription);
  const statusMessage = {
    connecting: "Connecting to DatoCMS...",
    connected: "Connected to DatoCMS, receiving live updates!",
    closed: "Connection closed",
  };
  const post = data.post;

  const router = useRouter();
  const { locale } = router;
  const fmLocale = locale.split("-")[0];

  return (
    <>
      <Head>{renderMetaTags(data.post.seo.concat(data.site.favicon))}</Head>
      <Layout>
        {status != "closed" && (
          <div className="pb-8">
            <p>Connection status: {statusMessage[status]}</p>
            {error && (
              <div>
                <h1>Error: {error.code}</h1>
                <div>{error.message}</div>
                {error.response && (
                  <pre>{JSON.stringify(error.response, null, 2)}</pre>
                )}
              </div>
            )}
          </div>
        )}
        <section className="pb-16 pt-16">
          <BlogHeader
            title={post.title}
            date={post.date}
            author={post.author}
            locale={fmLocale}
          />

          <CoverImage
            title={post.title}
            responsiveImage={post.coverImage.responsiveImage}
          />
          <main className="flex flex-row items-stretch justify-between py-16">
            <BlogStructuredText post={post} />
          </main>
        </section>
      </Layout>
    </>
  );
};

export default BlogPost;

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
  locale,
}) => {
  const formattedLocale = locale.split("-")[0];
  const data = await getPostBySlug(params.slug, preview, formattedLocale);

  return {
    props: data,
    revalidate: 30,
  };
};

export const getStaticPaths = async ({ locales }) => {
  const paths = await getAllPostsSlugs(locales);

  return {
    paths,
    fallback: "blocking",
  };
};
