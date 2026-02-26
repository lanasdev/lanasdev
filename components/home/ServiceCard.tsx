import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="flex flex-col align-top justify-start rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg hover:border-foreground/20">
    {icon && <div className="mb-4 text-foreground/80">{icon}</div>}
    <h3 className="text-xl font-semibold text-pretty">{title}</h3>
    <p className="pt-4 leading-6">{description}</p>
  </div>
);

export default ServiceCard;
