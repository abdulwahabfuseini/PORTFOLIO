"use client";

import { Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ item }) => {
  return (
    <div className="border rounded shadow-lg shadow-indigo-500/20">
      <Link href={`/services/${item.title}`}>
        <div>
          <div className="relative w-full h-48 bg-gray-50 sm:h-52 lg:h-60">
            <Image
              src={`/gif/${item.icon}`}
              alt="service"
              fill
              draggable="false"
            />
          </div>
          <div className="px-3">
            <h1 className="py-2 text-2xl font-semibold text-center">{item.title}</h1>
            <Typography.Paragraph
              className="text-lg break-word"
              ellipsis={{
                rows: 3,
                expandable: true,
                symbol: "Read More",
              }}
            >
              {item.desc}
            </Typography.Paragraph>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
