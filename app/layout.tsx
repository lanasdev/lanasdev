import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const generalsans = LocalFont({
  src: "../public/fonts/GeneralSans-Variable.ttf",
  display: "swap",
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Lanas Web design",
  description:
    "We built fast and high converting websites for small businesses. Lanas Web Design.",
  icons: "/icon",
  openGraph: {
    type: "website",
    url: "https://lanas.dev",
    title: "Lanas Web design",
    description:
      "We built fast and high converting websites for small businesses. Lanas Web Design.",
    siteName: "Lanas Web design",
    images: [
      {
        url: "/opengraph-image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, generalsans.className, "min-h-screen")}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
