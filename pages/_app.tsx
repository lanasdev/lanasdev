import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Fragment } from "react";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white text-midnight selection:bg-amber-500 dark:bg-midnight dark:text-white ">
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default MyApp;
