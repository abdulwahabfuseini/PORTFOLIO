import HeadTitle from "@/components/HeadTitle";
import { service } from "@/components/service/Data";
import ServiceCard from "@/components/service/ServiceCard";

export const metadata = {
  title: "PortFolio | Services",
  description: "WHAT I CAN DO",
};

const Services = () => {
  return (
    <div className="grid w-full h-full px-3 py-12 mx-auto sm:py-20 max-w-7xl">
      <HeadTitle title="What I do" text="Services"/>
      <div className="grid w-full gap-3 py-8 sm:grid-auto-fit-xl">
        {service.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
