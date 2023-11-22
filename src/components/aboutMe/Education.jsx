"use client";

import { qualification } from "@/assets/Data";
import Image from "next/image";
import { FaClock, FaAward, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">EDUCATION & QUALIFICATION</h1>
      <div className="grid py-6 gap-y-4">
        {qualification.map((education) => (
          <div
            key={education.id}
            className="grid py-1.5 px-2 sm:px-4 shadow-md shadow-indigo-500/20 border-gray-50 gap-y-2 sm:py-2 rounded-xl"
          >
            <div className="flex items-center gap-x-4 sm:gap-x-6 ">
              <Image
                src="/SVG/calendar.png"
                alt=""
                width={40}
                height={30}
                draggable="false"
              />
              <p className="text-lg">{education.year}</p>
            </div>
            <div className="flex items-center gap-x-3 sm:gap-x-6">
              <Image
                src="/SVG/school.png"
                alt=""
                width={40}
                height={30}
                draggable="false"
              />
              <p className="text-lg">{education.institution}</p>
            </div>
            <div className="flex items-center gap-x-3 sm:gap-x-6">
              <Image
                src="/SVG/certificate.png"
                alt=""
                width={40}
                height={30}
                draggable="false"
              />
              <p className="text-lg">{education.certicate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
