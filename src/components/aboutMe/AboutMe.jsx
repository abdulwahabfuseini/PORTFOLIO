"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Background from "./Background";
import Skills from "./Skills";
import Education from "./Education";

const AboutMe = () => {
  const [filter, setFilter] = useState("Skills");
  const [content, setContent] = useState(Skills);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (filter === "Background") {
      setContent(Background);
    }
    if (filter === "Skills") {
      setContent(Skills);
    }
    if (filter === "Education") {
      setContent(Education);
    }
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [filter]);
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl text-center">About Me</h1>
      <div className="flex flex-col-reverse py-10 sm:grid sm:grid-cols-3 sm:items-center sm:gap-x-8 lg:gap-x-20">
        <div className="col-span-1">
          {filter === "Background" && (
            <div>
              {loading ? (
                "Loading.."
              ) : (
                <Image
                  src="/images/prof.JPG"
                  alt=""
                  width={300}
                  height={300}
                  className="object-contain bounce"
                  draggable="false"
                />
              )}
            </div>
          )}
          {filter === "Skills" && (
            <div>
              {loading ? (
                "Loading.."
              ) : (
                <Image
                  src="/images/front2.gif"
                  alt=""
                  width={300}
                  height={300}
                  className="object-contain w-full bounce"
                  draggable="false"
                />
              )}
            </div>
          )}
          {filter === "Education" && (
            <div>
              {loading ? (
                "Loading.."
              ) : (
                <Image
                  src="/SVG/education.png"
                  alt=""
                  width={300}
                  height={300}
                  className="object-contain bounce"
                  draggable="false"
                />
              )}
            </div>
          )}
        </div>
        <div className="col-span-2">
          <div className="grid max-w-sm grid-cols-3 p-1 mx-auto bg-gray-200 rounded-lg place-content-center">
            <button
              onClick={() => setFilter("Skills")}
              className={`${
                filter === "Skills"
                  ? "bg-white py-1 rounded-md text-xl sm:text-2xl"
                  : "text-lg sm:text-xl"
              } text-background`}
            >
              Skills
            </button>
            <button
              onClick={() => setFilter("Background")}
              className={`${
                filter === "Background"
                  ? "bg-white py-1 rounded-md text-xl sm:text-2xl"
                  : "text-lg sm:text-xl"
              } text-background`}
            >
              Background
            </button>
            <button
              onClick={() => setFilter("Education")}
              className={`${
                filter === "Education"
                  ? "bg-white py-1 rounded-md text-xl sm:text-2xl"
                  : "text-lg sm:text-xl"
              } text-background`}
            >
              Education
            </button>
          </div>
          <div className="w-full h-full py-6">
            {loading ? (
              <h1 className="text-xl h-96">Please Wait ...</h1>
            ) : (
              <div>{content}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;








