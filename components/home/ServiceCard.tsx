type ServiceCardProps = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: ServiceCardProps) => (
  <div className="flex flex-col">
    <h4 className="text-xl pb-2">{title}</h4>
    <hr />
    <p className="pt-4">{description}</p>
  </div>
);

export default ServiceCard;
