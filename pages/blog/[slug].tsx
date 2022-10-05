import Link from "next/link";
import Layout from "components/Layout";
import CoverImage from "components/CoverImage";
import { getPostBySlug, getAllPostsSlugs } from "lib/api";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

const BlogPost = ({ data }) => {
  const post = data.post;
  return (
    <Layout>
      <section className="pb-16">
        <CoverImage
          title={post.title}
          responsiveImage={post.coverImage.responsiveImage}
        />

        <h1 className="pb-2 text-2xl font-semibold md:text-3xl">
          {post.title}
        </h1>
        <p className="">{post.excerpt}</p>
        <Link href="/blog">
          <a>Back to blog</a>
        </Link>
      </section>
      <pre className="pt-16">{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
};

export default BlogPost;

export const getStaticProps = async ({ params }) => {
  const data = await getPostBySlug(params.slug);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPostsSlugs();

  return {
    paths,
    fallback: false,
  };
};
