import Layout from "../components/Layout";
import Link from "next/link";

const Custom404 = () => {
  return (
    <Layout title="Error! 404">
      <main className="flex h-[90vh] flex-col content-center items-center justify-center px-6 md:px-12">
        <h1 className="py-10 text-2xl md:text-3xl xl:text-6xl">404: Page Not Found</h1>
        <p>
          That&apos;s unfortunate! The site was not found. Maybe you want to go{" "}
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </p>
      </main>
    </Layout>
  );
};

export default Custom404;
