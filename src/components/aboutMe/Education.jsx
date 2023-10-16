"use client";

import { qualification } from "@/assets/Data";
import Image from "next/image";
import { FaClock, FaAward, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <div>
      <h1 className="text-lg">EDUCATION & QUALIFICATION</h1>
      <div className="py-6 grid gap-y-4">
        {qualification.map((education) => (
          <div
            key={education.id}
            className="grid gap-y-2  border-2 p-1 sm:p-2 rounded-xl"
          >
            <div className="flex items-center  gap-x-4 sm:gap-x-6">
              <Image
                src="/SVG/calendar.png"
                alt=""
                width={40}
                height={30}
                draggable="false"
              />
              <p className="text-lg">{education.year}</p>
            </div>
            <div className="flex items-center  gap-x-3 sm:gap-x-6">
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
