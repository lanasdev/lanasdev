import Link from "next/link";
import Layout from "components/Layout";
import CoverImage from "components/CoverImage";
import { getPostBySlug, getAllPostsSlugs } from "lib/api";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import BlogStructuredText from "components/Blog/BlogStructuredText";
// import { StructuredText, Image } from "react-datocms";
import BlogHeader from "components/Blog/BlogHeader";

const BlogPost = ({ data }) => {
  const post = data.post;
  return (
    <Layout>
      <section className="pb-16 pt-16">
        <BlogHeader title={post.title} date={post.date} author={post.author} />

        <CoverImage
          title={post.title}
          responsiveImage={post.coverImage.responsiveImage}
        />
        <main className="flex flex-row items-stretch justify-between py-16">
          <BlogStructuredText post={post} />
        </main>
      </section>
      {/* <pre className="pt-16">{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  );
};

export default BlogPost;

export const getStaticProps = async ({ params, preview = false, locale }) => {
  const formattedLocale = locale.split("-")[0];
  // const formattedLocale = "de";
  console.log("locale:", formattedLocale);

  const data = await getPostBySlug(params.slug, formattedLocale);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async ({ locales }) => {
  console.log("locales from Blog:", locales);

  const paths = await getAllPostsSlugs(locales);

  return {
    paths,
    fallback: false,
  };
};
