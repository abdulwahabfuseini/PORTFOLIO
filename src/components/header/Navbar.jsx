"use client";

import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { navigate } from "@/assets/navigation";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <div
      className={`${
        sticky ? "fixed lg:hidden top-0 left-0 h-16 shadow-lg z-50 p-4 bg-background sm:px-6 text-white" : " h-20 p-4  sm:p-6"
      } w-full`}
    >
      <nav
        aria-label="navbar"
        className="flex items-center justify-between mx-auto max-w-7xl"
      >
        <Link href="/">
          <h1 className="cursor-pointer sm:text-2xl text-xl">FUSEINI ABDUL WAHAB</h1>
        </Link>
        <ul className="items-center hidden lg:flex gap-x-10">
          {navigate.map((navLink) => (
            <li key={navLink.id} className="text-xl sm:text-2xl cursor-pointer">
              <Link href={navLink.path}>{navLink.display}</Link>
            </li>
          ))}
        </ul>
        <MobileNav />
      </nav>
    </div>
  );
};

export default Navbar;
