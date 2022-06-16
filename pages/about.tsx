import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About">
    <main className="flex flex-col items-center justify-center p-16">
      <h1 className="py-10 text-2xl md:text-4xl lg:text-6xl">About</h1>
      <p className="my-8 mx-12 w-1/3 border-2  border-amber-400 p-4 text-slate-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla natus
        quae cumque sunt sit, animi perspiciatis alias eius harum! Soluta
        officiis omnis commodi aut accusamus quaerat itaque natus animi harum.
      </p>
    </main>
  </Layout>
);

export default AboutPage;
