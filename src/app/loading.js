"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Loading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
          <Image src="/gif/front.gif" alt="" width={150} height={150}   draggable="false" />
          <h1 className="text-xl">Please Wait...</h1>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Loading;
