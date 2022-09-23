import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";

const BlogIndex = () => {
  return (
    <Layout title="Home">
      <main className="flex flex-col items-center justify-center p-16">
        <h1 className="py-10 text-2xl md:text-4xl lg:text-6xl">Blog</h1>
        <p>This is the Blog page</p>
      </main>
    </Layout>
  );
};

export default BlogIndex;
