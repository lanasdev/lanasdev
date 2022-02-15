import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Navi from "./test/Navi";
import Footer from "./test/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title ? title + " | Lanas" : "Lanas" }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navi />
    {children}
    <Footer />
  </div>
);

export default Layout;
