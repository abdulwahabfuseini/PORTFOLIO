import { connect } from "@/assets/Data";
import { Tooltip } from "antd";
import Image from "next/image";

const Social = () => {
  return (
    <div className="py-6 sm:py-0">
      <h1 className="pb-6 text-2xl">Connect With Me</h1>
      <div className="flex py-4 gap-x-3">
        {connect.map((socialMedia) => (
          <div key={socialMedia.id}>
            <Tooltip color={socialMedia?.color} title={socialMedia?.title}>
              <a href={socialMedia?.link} target="blank">
                <Image
                  width={36}
                  height={40}
                  className="lg:hover:scale-110"
                  src={`/SVG/${socialMedia.icon}`}
                  alt="social"
                  draggable="false"
                />
              </a>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
