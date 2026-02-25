import type { Metadata } from "next";
import SectionContainer from "../SectionContainer";

export const metadata: Metadata = {
  title: "Lanas Club",
  description:
    "Monatliches Lanas Abonnement für E-Commerce und Headless Shopify – professionelles Design, laufende Betreuung.",
};

export default function LanasClubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SectionContainer className="min-h-[90vh] py-16">
      {children}
    </SectionContainer>
  );
}
