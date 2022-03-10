import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout
    customMeta={{
      title: "About - Lanas",
    }}
  >
    <div className="flex flex-col items-center justify-center bg-pattern-white p-16">
      <h1 className="py-10 text-2xl md:text-4xl lg:text-6xl">About</h1>
      <h3>All about us</h3>
    </div>
  </Layout>
);

export default AboutPage;
