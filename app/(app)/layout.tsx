import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { cn } from "@/lib/utils";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "@/website/Footer";
import Navbar from "@/website/Navbar";

const generalsans = LocalFont({
  src: "../../public/fonts/GeneralSans-Variable.ttf",
  display: "swap",
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lan.as"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="de">
      <body
        className={cn(
          generalsans.className,
          "min-h-screen antialiased selection:bg-cyan-300",
        )}
      >
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
        <SanityLive />
        {isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
