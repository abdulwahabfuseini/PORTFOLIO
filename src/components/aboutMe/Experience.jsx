import { workingExperience } from "@/assets/Data";
import React from "react";

const Experience = () => {
  return (
    <div>
      <h1 className="text-2xl">Work Exprience</h1>
      <div className="py-6 space-y-8">
        {workingExperience.map((experience) => (
          <div key={experience.id}>
           <div>
           <h1 className="text-lg sm:text-xl">{experience?.name}</h1>
            <h3 className="py-1.5">{experience?.role}</h3>
            <h3 className="text-sm text-gray-400">{experience?.date}</h3>
           </div>
            <ul className=" list-disc py-3 leading-8 px-5 sm:px-10">
              {experience.duties.map((item) => (
                <li key={item.id} className="text-lg sm:text-xl  py-1">
                  {item?.dutie}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
