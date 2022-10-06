import Link from "next/link";
import Layout from "components/Layout";
import CoverImage from "components/CoverImage";
import { getPostBySlug, getAllPostsSlugs } from "lib/api";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import BlogStructuredText from "components/Blog/BlogStructuredText";
import { StructuredText, Image } from "react-datocms";

const BlogPost = ({ data }) => {
  const post = data.post;
  return (
    <Layout>
      <section className="pb-16">
        <Link href="/blog">
          <a className="pb-8">Back to blog</a>
        </Link>
        <CoverImage
          title={post.title}
          responsiveImage={post.coverImage.responsiveImage}
        />

        <h1 className="pb-2 text-2xl font-semibold md:text-3xl">
          {post.title}
        </h1>
        <p className="">{post.excerpt}</p>

        <main className="flex flex-row items-stretch justify-between py-16">
          <BlogStructuredText post={post} />
        </main>
      </section>
      {/* <pre className="pt-16">{JSON.stringify(data, null, 2)}</pre> */}
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
