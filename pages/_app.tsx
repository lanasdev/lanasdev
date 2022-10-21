import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Fragment } from "react";

import { NextWebVitalsMetric } from "next/app";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const url = process.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT;

  if (!url) {
    return;
  }

  const body = JSON.stringify({
    route: window.__NEXT_DATA__.page,
    ...metric,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: "POST", keepalive: true });
  }
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <div className="selection:bg-amber-500 dark:selection:bg-amber-600">
        <Component {...pageProps} />
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
