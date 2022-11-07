import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import { GetStaticProps } from "next";

import { ErrorQuery } from "lib/api";

import i18n from "lib/i18n";
import { useRouter } from "next/router";

const Custom404 = ({ data }) => {
  let { locale } = useRouter();
  const fmLocale = locale.split("-")[0];

  return (
    <>
      <Head>{renderMetaTags(data.home.seo.concat(data.site.favicon))}</Head>
      <Layout>
        <main className="flex h-[90vh] flex-col content-center items-center justify-center px-6 md:px-12">
          <h1 className="py-10 text-2xl md:text-3xl xl:text-6xl">
            {i18n.error.title[fmLocale]}
          </h1>
          <p>{i18n.error.subtitle[fmLocale]}</p>
          <Link
            href="/"
            className="underline-2 mt-12 rounded-lg border-2 border-amber-500 px-8 py-4 decoration-amber-500 underline-offset-2 transition-colors delay-75 duration-300 ease-in-out hover:bg-amber-500 hover:text-midnight"
          >
            {i18n.error.back[fmLocale]}
          </Link>
        </main>
      </Layout>
    </>
  );
};

export default Custom404;

export const getStaticProps: GetStaticProps = async () => {
  const data = await ErrorQuery();

  return { props: { data } };
};
