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
        sticky ? "fixed lg:hidden top-0 left-0 shadow-lg shadow-indigo-500/20 z-50 p-4 bg-white sm:p-6 text-background" : " h-20 p-4 sm:p-6 lg:shadow-sm"
      } w-full`}
    >
      <nav
        aria-label="navbar"
        className="flex items-center justify-between mx-auto max-w-7xl"
      >
        <Link href="/">
          <h1 className="text-lg font-semibold cursor-pointer sm:text-xl">FUSEINI ABDUL WAHAB</h1>
        </Link>
        <ul className="items-center hidden lg:flex gap-x-8">
          {navigate.map((navLink) => (
            <li key={navLink.id} className="text-xl font-semibold cursor-pointer hover:text-blue-700">
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
