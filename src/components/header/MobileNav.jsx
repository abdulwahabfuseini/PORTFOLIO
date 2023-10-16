"use client";
import { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { navigate } from "../../assets/navigation";
import { VscChevronRight } from "react-icons/vsc";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
       
      },
    },
  };

  return (
    <div className="relative z-20 flex lg:hidden">
      <button onClick={() => setOpenNav((prev) => !prev)}>
        {openNav ? (
          <AiOutlineClose className="w-8 h-8" />
        ) : (
          <HiMiniBars3BottomRight className="w-8 h-8 " />
        )}
      </button>
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={openNav ? "visible" : "hidden"}
        className={`${
          openNav ? "left-0" : "left-full"
        } fixed top-16 grid w-full text-background transition-all duration-500 bg-white `}
      >
        {navigate.map((navLink) => (
          <li key={navLink.id} className="font-semibold cursor-pointer">
            <Link
              href={navLink.path}
              onClick={() => setOpenNav(false)}
              className="flex items-center justify-between w-full px-4 py-3 text-base uppercase border-t border-b sm:text-lg"
            >
              <span className=" hover:underline text-xl">{navLink.display}</span>{" "}
              <span>
                <VscChevronRight />
              </span>
            </Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default MobileNav;
