import { service } from "../../data/data";
import ServiceCard from "../../components/common/cards/ServiceCard";
const Services = () => {
  return (
    <div className="fluid-container space-between-sections">
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
        {service?.map((item, index) => (
          <ServiceCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
