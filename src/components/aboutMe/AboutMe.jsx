"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Background from "./Background";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

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
    if (filter === "Experience") {
      setContent(Experience);
    }
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [filter]);
  return (
    <div>
      <h1 className="text-3xl text-center sm:text-5xl">About Me</h1>
      <div className="flex flex-col-reverse items-center py-10 sm:grid sm:grid-cols-3 sm:gap-x-8 lg:gap-x-20 ">
        <div className="col-span-1 py-4">
          {filter === "Background" && (
            <div className="">
              {loading ? (
                "Loading.."
              ) : (
                <Image
                  src="/SVG/profilePic.png"
                  alt=""
                  width={240}
                  height={20}
                  objectFit="contain"
                  style={{ borderRadius: "48%" }}
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
          {filter === "Experience" && (
            <div>
              {loading ? (
                "Loading.."
              ) : (
                <Image
                  src="/SVG/briefcase.png"
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
        <div className="w-full sm:col-span-2">
          <div className="grid max-w-xl grid-cols-2 gap-3 px-6 mx-auto rounded-lg sm:grid-cols-4 sm:bg-gray-300 place-content-center sm:p-1">
            <button
              onClick={() => setFilter("Background")}
              className={
                filter === "Background"
                  ? "bg-blue-700 ring-white text-white rounded-lg text-xl shadow-lg ring-2 sm:ring-0 p-1.5"
                  : "bg-white sm:bg-transparent text-black rounded-lg p-1.5 text-lg"
              }
            >
              Profile
            </button>
            <button
              onClick={() => setFilter("Skills")}
              className={
                filter === "Skills"
                  ? "bg-blue-700 ring-white text-white rounded-lg text-xl shadow-lg ring-2 sm:ring-0 p-1.5"
                  : "bg-white sm:bg-transparent text-black rounded-lg p-1.5 text-lg"
              }
            >
              Skills
            </button>
            <button
              onClick={() => setFilter("Education")}
              className={
                filter === "Education"
                  ? "bg-blue-700 ring-white text-white rounded-lg text-xl shadow-lg ring-2 sm:ring-0 p-1.5"
                  : "bg-white sm:bg-transparent text-black rounded-lg p-1.5 text-lg"
              }
            >
              Education
            </button>
            <button
              onClick={() => setFilter("Experience")}
              className={
                filter === "Experience"
                  ? "bg-blue-700 ring-white text-white rounded-lg text-xl shadow-lg ring-2 sm:ring-0 p-1.5"
                  : "bg-white sm:bg-transparent text-black rounded-lg p-1.5 text-lg"
              }
            >
              Experience
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
