import React from "react";
import Social from "../home/Social";
import Image from "next/image";

const Address = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl">Contact Information</h1>
      <div className="grid w-full gap-4 py-4 lg:py-6 grid-auto-fit-xl">
        <div className="w-full px-3 pb-2 border-2 rounded-lg">
          <div className="flex items-center gap-1">
            <Image
              width={50}
              height={50}
              objectFit="contain"
              src="/gif/address.gif"
              alt="address"
              quality={100}
              className="object-contain h-16 sm:h-20"
              draggable="false"
            />
            <h1 className="text-2xl">Address</h1>
          </div>
          <div className="flex flex-wrap text-lg py- gap-x-4 md:gap-x-6 gap-y-2 md:text-xl">
            <span>Asokore Mampong</span>
            <span>Kumasi - Ghana</span>
            <span>GPS: AD-206-6325</span>
            <span>P.O.BOX ST 409</span>
          </div>
        </div>
        <div className="px-3 pb-2 border-2 rounded-lg">
          <div className="flex items-center gap-1">
            <Image
              width={50}
              height={50}
              objectFit="contain"
              src="/gif/phone.gif"
              alt="phone"
              quality={100}
              className="object-contain h-16 sm:h-20"
              draggable="false"
            />
            <h1 className="text-2xl">Phone Number</h1>
          </div>
          <div className="flex flex-wrap items-center text-lg item gap-x-4 gap-y-2 md:text-xl">
            <a href="tel:+233 24 526 4999"> +233 24 526 4999</a>
            <a href="tel:+233 27 798 4606">+233 27 798 4606</a>
          </div>
        </div>
        <div className="px-3 pb-2 border-2 rounded-lg">
          <div className="flex items-center gap-1">
            <Image
              width={50}
              height={50}
              objectFit="contain"
              src="/gif/email.gif"
              alt="email"
              quality={100}
              className="object-contain h-16 sm:h-20"
              draggable="false"
            />
            <h1 className="text-2xl">E-Mail Address</h1>
          </div>

          <div className="grid gap-1 text-lg leading-10 sm:text-xl">
            <a href="mailto:abdulwahabfuseini78@gmail.com">
              abdulwahabfuseini78@gmail.com
            </a>
            <a href="mailto:fuseiniabdulwahab4606@gmail.com">
              fuseiniabdulwahab4606@gmail.com
            </a>
          </div>
        </div>
        <Social />
      </div>
    </div>
  );
};

export default Address;
