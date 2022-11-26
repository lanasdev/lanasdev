import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import cn from "classnames";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={cn(
        `${inter.variable} font-sans`,
        "bg-white text-midnight subpixel-antialiased selection:bg-amber-500 dark:bg-midnight dark:text-white "
      )}
    >
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default MyApp;
