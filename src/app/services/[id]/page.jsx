import HeadTitle from "@/components/HeadTitle";
import { service } from "@/components/service/Data";
import Image from "next/image";



const SinglePost = ({ params }) => {
  const title = decodeURIComponent(params.id).replace(/-/g, ' ');
  const data = service.find((data) => data.title.toLowerCase() === title.toLowerCase());
  return (
    <div className="grid px-3 py-20 mx-auto sm:max-w-7xl sm:px-4">
      <HeadTitle title={data?.title} />
      <div className="grid sm:py-2 sm:grid-cols-5 gap-y-14 sm:gap-x-10 place-items-center">
        <Image
          src={`/gif/${data.icon}`}
          alt="service"
          width={900}
          height={30}
          className="order-2 object-contain col-span-2 rounded-lg h-60 sm:h-80 bounce"
        />
        <div className="w-full text-lg sm:text-xl sm:col-span-3 sm:order-2 break-word">
          <p>{data.desc1}</p>
          <p className="py-5">{data.desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
