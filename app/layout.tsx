import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import cn from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import TopBar from "components/TopBar";
import CallToAction from "./CallToAction";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${inter.variable} font-sans`,
          "bg-white text-midnight subpixel-antialiased selection:bg-amber-500 dark:bg-midnight dark:text-white "
        )}
      >
        <main className="mx-auto px-8 md:max-w-6xl xl:max-w-7xl">
          {/* <Navi /> */}
          {/* <Alert preview={preview} locale={fmLocale} /> */}
          <TopBar />
          {children}
          {/* <CallToAction locale={"en"} /> */}
          {/* <Footer /> */}
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </main>
      </body>
    </html>
  );
}
