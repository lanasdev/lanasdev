import Link from "next/link";
import Layout from "components/Layout";
import CoverImage from "components/CoverImage";
import { getPostBySlug, getAllPostsSlugs } from "lib/api";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import BlogStructuredText from "components/Blog/BlogStructuredText";
import BlogHeader from "components/Blog/BlogHeader";
import { useQuerySubscription } from "react-datocms";
import { useRouter } from "next/router";

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
  );
};

export default BlogPost;

export const getStaticProps = async ({ params, preview, locale }) => {
  const formattedLocale = locale.split("-")[0];
  const data = await getPostBySlug(params.slug, preview, formattedLocale);

  return {
    props: data,
    revalidate: 10,
  };
};

export const getStaticPaths = async ({ locales }) => {
  const paths = await getAllPostsSlugs(locales);

  return {
    paths,
    fallback: "blocking",
  };
};
