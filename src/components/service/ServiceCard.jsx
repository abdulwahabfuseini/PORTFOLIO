"use client";

import { Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ item }) => {
  return (
    <div>
      <Link href={`/services/${item.title}`}>
        <div c className="flex flex-col items-center py-4 px-3 bg-background bg-opacity-70 rounded">
          <Image
            src={`/SVG/${item.icon}`}
            alt="service"
            width={80}
            height={80}
            className="object-contain h-20"
            draggable="false"
          />
          <h1 className="py-3 text-2xl">{item.title}</h1>
          <Typography.Paragraph
            className="text-lg text-white break-word"
            ellipsis={{
              rows: 3,
              expandable: true,
              symbol: "Read More",
            }}
          >
            {item.desc}
          </Typography.Paragraph>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
