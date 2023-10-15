import { service } from "@/components/service/Data";
import ServiceCard from "@/components/service/ServiceCard";

export const metadata = {
    title: "PortFolio | Services",
    description: "WHAT I CAN DO",
  };


const Services = () => {
  return (
    <div className='grid w-full h-full px-3 py-20 mx-auto max-w-7xl  place-items-center'>
     <h1 className='text-2xl sm:text-4xl'>Service</h1>
      <h3 className='py-2 text-xl capitalize sm:text-4xl'>WHAT I DO</h3>
      <div className="py-8 grid sm:grid-auto-fit-xl gap-4 w-full">
        {
          service.map(item => (
            <ServiceCard key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Services