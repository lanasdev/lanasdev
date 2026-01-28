import SectionContainer from "@/app/(app)/SectionContainer";

import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
  return (
    <SectionContainer className="pb-24 pt-24" id="dienstleistungen">
      <h3 className="pb-16 text-3xl font-semibold">Dienstleistungen</h3>
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
            "Wir helfen Ihnen bei Ihrem Google My Business und Apple Business Connect Profil und stellen sicher, dass Sie auf der Karte angezeigt werden."
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
