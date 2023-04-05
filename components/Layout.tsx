import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Head from "next/head";
import Alert from "./Alert";
import Navi from "./Navi";
import Footer from "./Footer";
import Favicon from "./Favicon";
import TopBar from "./TopBar";

import i18n from "lib/i18n";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const CallToAction = dynamic(() => import("components/CallToAction"), {
  suspense: true,
});

type Props = {
  children?: ReactNode;
  preview?: boolean;
};

const Layout = ({ children, preview = false }: Props) => {
  const router = useRouter();
  const { locale } = router;
  const fmLocale = locale ? locale.split("-")[0] : "en";

  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="webdesigner, webdesigner stuttgart, website für elektriker, website für photovoltaik, Websites, design, build, startup, React, Nextjs"
        />
        <meta name="author" content="Lanas.dev" />
      </Head>
      <main className="mx-auto px-8 md:max-w-6xl xl:max-w-7xl">
        {/* <Navi /> */}
        {/* <Alert preview={preview} locale={fmLocale} /> */}
        <TopBar locale={fmLocale} />
        {children}
        <Suspense fallback={`Loading Contact...`}>
          <CallToAction locale={fmLocale} />
        </Suspense>
        <Footer />
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </main>
    </div>
  );
};

export default Layout;
