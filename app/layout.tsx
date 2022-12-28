import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import cn from "classnames";
import { Inter } from "@next/font/google";
import Navigation from "./Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={
          "bg-white text-midnight subpixel-antialiased selection:bg-amber-500 dark:bg-midnight dark:text-white "
        }
      >
        <Navigation />
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
