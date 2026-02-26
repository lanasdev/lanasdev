import {
  PaintBrush,
  MapPin,
  Lightning,
} from "@phosphor-icons/react/dist/ssr";
import SectionContainer from "@/app/(app)/SectionContainer";

import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
  return (
    <SectionContainer className="pb-24 pt-24" id="dienstleistungen">
      <h2 className="pb-16 text-3xl font-semibold text-balance">Dienstleistungen</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <ServiceCard
          icon={<PaintBrush size={32} />}
          title={"Webdesign"}
          description={
            "Sei es eine Landing Page oder ein ganzer Shopify Store. Wir entwerfen Websites für Ihr Unternehmen, die nicht nur ästhetisch ansprechend sind, sondern Ihnen auch tatsächlich mehr Leads bringen und  konvertieren."
          }
        />
        <ServiceCard
          icon={<MapPin size={32} />}
          title={"Google My Business"}
          description={
            "Wir helfen Ihnen bei Ihrem Google My Business und Apple Business Connect Profil und stellen sicher, dass Sie auf der Karte angezeigt werden."
          }
        />
        <ServiceCard
          icon={<Lightning size={32} />}
          title={"Website Automatisierung"}
          description={
            "Wir automatisieren Ihre Leadgewinnung mit Tools wie Zapier und stellen sicher, dass Sie sich auf Ihr Geschäft konzentrieren können."
          }
        />
      </div>
    </SectionContainer>
  );
}
