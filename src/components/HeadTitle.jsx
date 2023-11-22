import Image from "next/image";
import React from "react";

const HeadTitle = ({ title, text }) => {
  return (
    <div className="relative pb-10">
      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
        <Image src="/SVG/bullet.png" alt="" width={30} height={10} />
        <h2 className="text-2xl font-semibold uppercase sm:text-3xl">{title}</h2>
      </div>
      <h1 className="text-6xl font-extrabold uppercase text-slate-200">
        {text}
      </h1>
    </div>
  );
};

export default HeadTitle;
