type ServiceCardProps = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: ServiceCardProps) => (
  <div className="flex flex-col align-top justify-start">
    <h4 className="text-xl font-semibold">{title}</h4>
    <p className="pt-4 leading-6">{description}</p>
  </div>
);

export default ServiceCard;
