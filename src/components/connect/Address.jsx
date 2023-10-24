import React from "react";
import Social from "../home/Social";

const Address = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl">Contact Information</h1>
      <div className="grid w-full gap-4 py-4 lg:py-12 grid-auto-fit-xl">
        <div className="w-full p-3 border-2 rounded-lg">
          <h1 className="text-2xl">Address</h1>
          <div className="flex flex-wrap py-3 text-lg gap-x-4 md:gap-x-6 gap-y-4 md:text-xl">
            <span>Asokore Mampong</span>
            <span>Kumasi - Ghana</span>
            <span>GPS: AD-206-6325</span>
            <span>P.O.BOX ST 409</span>
          </div>
        </div>
        <div className="p-3 border-2 rounded-lg">
          <h1 className="text-2xl">Phone Number</h1>
          <div className="flex flex-wrap py-3 text-lg gap-x-4 md:gap-x-6 gap-y-4 md:text-xl">
            <a href="tel:+233 24 526 4999"> +233 24 526 4999</a>
            <a href="tel:+233 27 798 4606">+233 27 798 4606</a>
          </div>
        </div>
        <div className="p-3 border-2 rounded-lg">
          <h1 className="text-2xl">E-Mail Address</h1>
          <div className="grid py-3 text-lg leading-10 sm:text-xl">
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
