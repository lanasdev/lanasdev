import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";
import { Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Component {...pageProps} />
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

export default MyApp
