import React, { ReactNode } from "react";
import Link from "next/link";
import Navi from "./test/Navi";
import Footer from "./test/Footer";
import Head from "./test/Head";
import { MetaProps } from "../types/layout";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = "https://lanasdev.vercel.app";

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => (
  // <div className="text-black bg-gray-50 dark:text-white dark:bg-slate-700">
  <div>
    <Head customMeta={customMeta} />

    {/* <Head>
      <title>{title ? title + " | Lanas" : "Lanas" }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head> */}
    <Navi />
    {children}
    <Footer />
  </div>
);

export default Layout;
