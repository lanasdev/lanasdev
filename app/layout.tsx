import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavbarNew from "./NavbarNew";

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
  metadataBase: new URL("https://lan.as"),
  title: "Lanas - Webdesign & Entwicklung für die Solarbranche",
  description:
    "Wir bauen schnelle und hoch konvertierende Websites für Ihr Photovoltaikunternehmen. Wir sind spezialisiert auf die Solarbranche und bauen die beste Website für Ihr Unternehmen.",
  icons: "/icon",
  openGraph: {
    type: "website",
    url: "https://lan.as",
    title: "Lanas Webdesign für die Solarbranche",
    description:
      "Wir bauen schnelle und hoch konvertierende Websites für Ihr Photovoltaikunternehmen. Wir sind spezialisiert auf die Solarbranche und bauen die beste Website für Ihr Unternehmen.",
    siteName: "Lanas Webdesign für die Solarbranche",
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
    <html lang="de">
      <body
        className={cn(
          generalsans.className,
          inter.className,
          "min-h-screen antialiased selection:bg-cyan-300",
        )}
      >
        {/* <NavbarNew /> */}
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
