/* eslint-disable react/no-unescaped-entities */

"use client";

import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "../Button";
import Social from "./Social";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Frontend Web Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  return (
    <div className="grid w-full h-full px-3 py-10 mx-auto sm:pt-20 max-w-7xl">
      <div className="grid sm:grid-cols-2 gap-y-12 sm:place-content-center place-items-center">
        <div className="w-full space-y-4 ">
          <div className="flex items-center gap-3 pb-3">
            <h1 className="text-4xl lg:text-5xl">Hello</h1>
            <Image
              src="/SVG/wave.png"
              alt="hand"
              width={40}
              quality={100}
              objectFit="contain"
              height={20}
              draggable="false"
            />
          </div>
          <span className="text-2xl lg:text-3xl">I'm Fuseini Abdul Wahab,</span>
          <h4 className="text-2xl lg:text-3xl">
            A <span>{text}</span> <Cursor />
          </h4>
          <p className="w-full text-lg sm:text-xl sm:w-5/6 break-word">
            I've designed web applications with user experience at the
            forefront, ensuring seamless navigation and intuitive interactions
          </p>
          <div className="flex items-center gap-4">
            <Button url="/contact" text="Hire Me" />
            <Button url="/about" text="About Me" />
          </div>
        </div>
        <div>
          <Image
            src="/gif/front.gif"
            alt=""
            width={600}
            height={100}
            draggable="false"
            className="mb-10 bounce"
          />
        </div>
      </div>
      <Social />
    </div>
  );
};

export default Hero;
