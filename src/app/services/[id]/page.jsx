import HeadTitle from "@/components/HeadTitle";
import { service } from "@/components/service/Data";
import Image from "next/image";



const SinglePost = ({ params }) => {
  const title = decodeURIComponent(params.id).replace(/-/g, ' ');
  const data = service.find((data) => data.title.toLowerCase() === title.toLowerCase());
  
  return (
    <div className="grid px-3 py-10 mx-auto md:py-32 lg:py-20 sm:max-w-7xl sm:px-4 ">
      <HeadTitle title={data?.title} />
      <div className="grid sm:py-2 lg:grid-cols-5 gap-y-10 sm:gap-x-10 place-items-center">
        <Image
          src={`/gif/${data.icon}`}
          alt="service"
          width={900}
          height={30}
          className="order-2 object-contain w-full rounded-lg lg:col-span-2 h-60 sm:h-80 bounce"
        />
        <div className="w-full text-lg sm:text-xl lg:col-span-3 lg:order-2 break-word">
          <p>{data.desc1}</p>
          <p className="py-5">{data.desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
