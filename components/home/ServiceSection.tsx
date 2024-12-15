import Image from "next/image";
import ServiceCard from "./ServiceCard";

// import Image1 from "@/public/img/image1-mini.webp";
import Image1 from "@/public/img/image1-mini.jpeg";
import Image2 from "@/public/img/image2.webp";
import Image3 from "@/public/img/image3.webp";
import SectionContainer from "@/app/SectionContainer";

export default function ServiceSection() {
  return (
    <SectionContainer
      className="pb-24 pt-24"
      id="dienstleistungen"
    >
      <h3 className="pb-16 text-3xl font-semibold sr-only">Dienstleistungen</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <ServiceCard
            title={"Webdesign"}
            description={
              "Sei es eine Landing Page oder ein ganzer Shopify Store. Wir entwerfen Websites für Ihr Unternehmen, die nicht nur ästhetisch ansprechend sind, sondern Ihnen auch tatsächlich mehr Leads bringen und  konvertieren."
            }
          />
          <ServiceCard
            title={"Google My Business"}
            description={
              'Wir helfen Ihnen bei Ihrem Google My Business und Apple Business Connect Profil und stellen sicher, dass Sie auf der Karte angezeigt werden.'
            }
          />
          <ServiceCard
            title={"Website Automatisierung"}
            description={
              "Wir automatisieren Ihre Leadgewinnung mit Tools wie Zapier und stellen sicher, dass Sie sich auf Ihr Geschäft konzentrieren können."
            }
          />
        </div>

    </SectionContainer>
  );
}
