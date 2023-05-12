import "styles/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import TopBar from "components/TopBar";
import Footer from "./Footer";
import CallToAction from "./CallToAction";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Lanas - Web Design for the solar industry",
    template: "%s | Lanas.dev",
  },
  description: "Digital craftsmanship for the solar industry.",
  openGraph: {
    title: "Lanas - Web Design for the solar industry",
    description: "Digital craftsmanship for the solar industry.",
    url: "https://lanas.dev",
    siteName: "Lanas - Web Design for the solar industry",
    locale: "en-DE",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#060B12" },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Lanas - Web Design for the solar industry",
    description: "Digital craftsmanship for the solar industry.",
    card: "summary_large_image",
    images: [
      {
        url: "/twitter-image",
        width: 1200,
        height: 630,
      },
    ],
    creatorId: "@lanasdev",
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body
        className={
          "bg-white text-midnight subpixel-antialiased selection:bg-amber-500 dark:bg-midnight dark:text-white "
        }
      >
        <main className="mx-auto px-8 md:max-w-6xl xl:max-w-7xl">
          <TopBar />
          {children}
          {/* <CallToAction locale={"en"} /> */}

          {/* @ts-expect-error Server Component */}
          <Footer />

          <Analytics />
        </main>
      </body>
    </html>
  );
}
