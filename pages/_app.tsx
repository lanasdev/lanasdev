import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <div className="bg-slate-50 text-black dark:bg-slate-900 dark:text-slate-50">
      <Component {...pageProps} />
    // </div>
  );
}

export default MyApp;
