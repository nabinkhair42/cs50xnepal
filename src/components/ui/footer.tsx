"use client";
import type { StaticImageData } from "next/image";
import FooterLogo from "@/assets/logo/footer-logo.png";
import React from "react";
import DeveloperImage from "@/assets/teams/Developer-Nabin-Khair.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
  FaCode,
} from "react-icons/fa";
import Image from "next/image";

import { AnimatedTooltip } from "../ui/animated-tooltip";
const Developer = [
  {
    id: 1,
    name: "Nabin Khair",
    designation: "Web Developer",
    image: DeveloperImage.src,
  },
];

const SiteMenu = [
  { item: "Home", link: "/" },
  { item: "Code of Conduct", link: "/code-of-conduct" },
];
const UsefulLinks = [
  { item: "Harvard CS50", link: "https://cs50.harvard.edu/" },
  { item: "EXCESS Nepal", link: "https://www.excessnepal.com/" },
  { item: "IOEPC", link: "https://ioepc.edu.np/" },
];
const RefrenceSite = [
  { item: "CS50x Course", link: "https://cs50.harvard.edu/x/" },
  { item: "CS50x Lectures", link: "https://cs50.harvard.edu/lectures/" },
  { item: "CS50x Syllabus", link: "https://cs50.harvard.edu/syllabus/" },
  { item: "CS50x License", link: "https://cs50.harvard.edu/license/" },
];

const Tools = [
  { item: "Visual Studio Code", link: "https://code.visualstudio.com/" },
  { item: "CS50.Ai", link: "https://cs50.harvard.edu/ai/" },
  { item: "Gradebook", link: "https://cs50.me/cs50x" },
  { item: "Certificates", link: "https://cs50.harvard.edu/certificates" },
];

const SocialMedia = [
  {
    item: <FaFacebook />,
    link: "https://www.facebook.com/profile.php?id=61554706883546",
  },
  { item: <FaTwitter />, link: "https://twitter.com/cs50xnepal" },
  {
    item: <FaLinkedin />,
    link: "https://www.linkedin.com/company/cs50x-nepal/",
  },
  { item: <FaYoutube />, link: "https://www.youtube.com/@CS50xNepal" },
  { item: <FaDiscord />, link: "./" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-[#151618] to-black">
      <div className="max-w-screen-xl px-4 pt-10 mx-auto sm:px-6 lg:px-8 h-full">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 place-items-center">

          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src={FooterLogo}
              className="w-75 rounded"
              alt="logo"
              width={150}
              height={50}
            />
            <p className="max-w-xs mt-4 text-sm text-gray-600 text-justify">
              CS50x Nepal; like: CS50x Iran, CS50x Iraq, CS50x Tehran, etc., is
              the first Nepal adaptation of the lecture and a engaging way for
              students to learn computer science.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              {SocialMedia.map((link, index) => (
                <a key={index} href={link.link} className="hover:text-red-700">
                  {link.item}
                </a>
              ))}
            </div>
          </div>
          <div className="sm:grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 flex flex-col">
            <div>
              <p className="font-medium">Sitemap</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {SiteMenu.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="hover:text-red-700"
                  >
                    {link.item}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="font-medium">Useful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {UsefulLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="hover:text-red-700"
                  >
                    {link.item}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="font-medium">Refrence Sites</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {RefrenceSite.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="hover:text-red-700"
                  >
                    {link.item}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="font-medium">Tools</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {Tools.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="hover:text-red-700"
                  >
                    {link.item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-8 items-center justify-center mt-10 w-full">
          <AnimatedTooltip items={Developer} />
          <p className="text-white ">
            Developed and designed under{" "}
            <a href="https://github.com/nabinkhair42"
              className="text-blue-400" title="Web Developer">
              Nabin Khair
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
