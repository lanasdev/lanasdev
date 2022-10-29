import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white text-midnight selection:bg-amber-500 dark:bg-midnight dark:text-white ">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
