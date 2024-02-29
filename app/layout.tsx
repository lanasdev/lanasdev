import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavbarNew from "./NavbarNew";

const generalsans = LocalFont({
  src: "../public/fonts/GeneralSans-Variable.ttf",
  display: "swap",
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lan.as"),
  title: "Lanas - Webdesign & Entwicklung für die Solarbranche",
  description:
    "Wir bauen blitzschnelle und hoch konvertierende Landing Pages und E-Commerce Shops für Ihr Photovoltaikunternehmen.",
  openGraph: {
    type: "website",
    url: "https://lan.as",
    title: "Lanas Webdesign für die Solarbranche",
    description:
      "Wir bauen blitzschnelle und hoch konvertierende Landing Pages und E-Commerce Shops für Ihr Photovoltaikunternehmen.",
    siteName: "Lanas - Webdesign & Entwicklung für die Solarbranche",
    images: [
      {
        url: "/opengraph-image.png",
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
