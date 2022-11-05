import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import cn from "classnames";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={cn(
        "bg-white text-midnight selection:bg-amber-500 dark:bg-midnight dark:text-white ",
        inter.className
      )}
    >
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default MyApp;
