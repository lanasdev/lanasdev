import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Fragment } from "react";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <div className="bg-white text-midnight selection:bg-amber-500 dark:bg-midnight dark:text-white ">
        <Component {...pageProps} />
        <Analytics />
      </div>
      <Script src="https://sa.lanas.dev/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://sa.lanas.dev/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </Fragment>
  );
}

export default MyApp;
