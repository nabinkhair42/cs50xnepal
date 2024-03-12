"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/logo/logo.svg";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// Navigation Items
const Navlinks = [
  { item: "Home", link: "/" },
  { item: "Instructor", link: "/#OurInstructor" },
  { item: "Our Team", link: "/#OurTeam" },
  { item: "FAQs", link: "/#FAQs" },
  { item: "Code of Conduct", link: "./code-of-conduct" },
  { item: "About Us", link: "/#About" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 0;
      if (!isTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        isScrolled ? "fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-5" : ""
      } p-5 flex items-center justify-between text-xs text-white`}
    >
      <div className="w-16 ml-6 mr-4">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="hidden md:flex gap-5 items-center">
        <ul className="flex list-item-none gap-4 ">
          {Navlinks.map((link, index) => (
            <li key={index} className="hover:text-red-700">
              <a href={link.link}>{link.item}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-5">
        <button className="px-8 py-2 rounded-md bg-red-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:red-teal-800">
          <a href="https://www.youtube.com/@CS50xNepal">Youtube</a></button>
        </div>
      </div>
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <IoClose /> : <FaBars />}
      </button>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background backdrop-blur-5 p-4 flex justify-center">
          <ul className="flex flex-col gap-4 justify-end">
            {Navlinks.map((link, index) => (
              <li key={index} className="hover:text-red-700 flex justify-center">
                <a href={link.link}>{link.item}</a>
              </li>
            ))}
            <li>
          <button className="flex justify-center px-8 py-2 rounded-md bg-red-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-red-800">
          <a href="https://www.youtube.com/@CS50xNepal">Youtube</a></button>
            </li>
          </ul>
          <div className="flex gap-5">
          
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
