"use client";
import React, { useState, useEffect, useRef, MouseEvent } from "react";
import {
  AiOutlineYoutube,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/assets/logo/logo.svg";

interface NavLink {
  item: string;
  link: string;
}

const Navlinks: NavLink[] = [
  { item: "Home", link: "/" },
  { item: "Instructor", link: "/#OurInstructor" },
  { item: "Our Team", link: "/#OurTeam" },
  { item: "FAQs", link: "/#FAQs" },
  { item: "Code of Conduct", link: "./code-of-conduct" },
  { item: "About Us", link: "/#About" },
];

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: EventListenerOrEventListenerObject = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="top-0 left-0 z-50 w-screen px-10 fixed bg-black"
      style={{
        backdropFilter: "blur(1px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        opacity: 1,
      }}
    >
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image src={Logo} alt="CS50x Nepal" width={50} height={50} />
        </div>
        <div className="hidden md:flex items-center">
          {Navlinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="text-white hover:text-red-700 px-4 text-nowrap"
            >
              {link.item}
            </a>
          ))}
          <a href="https://www.youtube.com/channel/UCf9Zb1vVXe3wVZ9j6RZGvWQ">
            <Button className="rounded-md" size="default" variant="destructive">
              <AiOutlineYoutube className="text-white" />
              <span className="text-white ml-2">Subscribe</span>
            </Button>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-white" size={30} />
            ) : (
              <AiOutlineMenu className="text-white" size={30} />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden w-full h-full flex flex-col gap-2 items-center p-4"
          style={{
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: 0.9,
          }}
        >
          {Navlinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="text-white hover:text-red-700 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.item}
            </a>
          ))}
          <a
            href="https://www.youtube.com/channel/UCf9Zb1vVXe3wVZ9j6RZGvWQ"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Button
              className="rounded-md mt-1"
              size="default"
              variant="destructive"
            >
              <AiOutlineYoutube className="text-white" />
              <span className="text-white ml-2">Subscribe</span>
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
