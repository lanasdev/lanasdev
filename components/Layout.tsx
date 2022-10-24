import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Head from "next/head";
import Alert from "./Alert";
import Navi from "./Navi";
import Footer from "./Footer";
import Favicon from "./Favicon";
import TopBar from "./TopBar";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const CallToAction = dynamic(() => import("components/CallToAction"), {
  suspense: true,
});

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  preview?: boolean;
  isBig?: boolean;
  DataTopBar?: {
    title: string;
    subtitle: string;
  };
};

const Layout = ({
  children,
  title,
  description,
  preview = false,
  isBig = true,
  DataTopBar,
}: Props) => {
  const router = useRouter();
  const { locale } = router;
  const fmLocale = locale.split("-")[0];
  return (
    <div>
      <Head>
        <title>{title ? title + " | Lanas" : "Lanas Web design"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={
            description
              ? description
              : "Lanas designs & builds fast and responsible Websites for startups and businesses alike. "
          }
        />
        <meta
          name="keywords"
          content="webdesigner, webdesigner stuttgart, website für elektriker, website für photovoltaik, Websites, design, build, startup, React, Nextjs"
        />
        <meta name="author" content="Lanas.dev" />
        <Favicon />
      </Head>
      <main className="max-w-screen mx-auto px-8 md:max-w-6xl">
        {/* <Navi /> */}
        <Alert preview={preview} locale={fmLocale} />
        <TopBar locale={fmLocale} />
        {children}
        <Suspense fallback={`Loading Contact...`}>
          <CallToAction locale={fmLocale} />
        </Suspense>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
