"use client";

import { Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ item }) => {
  return (
    <div className="h-full p-4 bg-background ">
      <Link href={`/services/${item.id}`} className="grid place-items-center">
        <Image
          src={`/SVG/${item.icon}`}
          alt="service"
          width={80}
          height={80}
          className="object-contain h-20 bounce"
          draggable="false"
        />
        <h1 className="py-5 text-2xl">{item.title}</h1>
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
      </Link>
    </div>
  );
};

export default ServiceCard;
