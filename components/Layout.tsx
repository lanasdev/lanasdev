import React, { ReactNode } from "react";
import Link from "next/link";

import Head from "next/head";
import Navi from "./Navi";
import Footer from "./Footer";
import Favicon from "./Favicon";
import TopBar from "./TopBar";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
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
  isBig = true,
  DataTopBar,
}: Props) => (
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
        content="webdesigner, Websites, design, build, startup, React, Nextjs"
      />
      <meta name="author" content="Lanas.dev" />
      <Favicon />
      <link
        rel="preload"
        href="/fonts/Inter/Inter-Medium.woff2?v=3.19"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Inter/Inter-Bold.woff2?v=3.19"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Head>
    <div className="max-w-screen mx-auto px-8 md:max-w-6xl">
      {/* <Navi /> */}
      {/* <TopBar isBig={isBig} DataTopBar={DataTopBar} /> */}
      <TopBar isBig={isBig} />
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;
