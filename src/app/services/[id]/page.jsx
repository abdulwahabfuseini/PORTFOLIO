import { service } from "@/components/service/Data";
import Image from "next/image";
import { notFound } from "next/navigation";

const getData = (serviceId) => {
  const data = service[serviceId];

  if (data) {
    return data;
  }
  return notFound();
};

const SinglePost = ({ params }) => {
  const data = getData(params.id);
  return (
    <div className="grid max-w-6xl px-4 py-20 mx-auto place-items-center gap-y-5">
      <h1 className="text-3xl sm:text-4xl">{data.title}</h1>
      <div className="grid py-6 sm:grid-cols-3 gap-y-16 gap-x-10 place-items-center">
        <Image
          src={`/SVG/${data.icon}`}
          alt="service"
          width={300}
          height={30}
          className="order-2 object-contain col-span-1 h-60 sm:h-80 bounce"
        />
        <div className="text-lg sm:text-xl sm:col-span-2 sm:order-2 break-all">
          <p>{data.desc1}</p>
          <p className="py-5">{data.desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
