import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Suraj from "@/assets/teams/Suraj Bhattarai.png";
import Samin from "@/assets/teams/Samin Gaire.jpg";
import Sarthak from "@/assets/teams/Sarthak Chaudhary.jpg";
import Sunil from "@/assets/teams/Sunil Paudel.jpg";
import Sudip from "@/assets/teams/sudip-prajuli.png";
import Mahesh from "@/assets/teams/mahesh-chaudhary.png";
import Lokesh from "@/assets/teams/Lokesh Kumar Mandal.jpg";
import Dhiraj from "@/assets/teams/Dhiraj.jpeg";
import Nisha from "@/assets/teams/Nisha Karn.jpg";
import Kishor from "@/assets/teams/Kishor Thagunna.jpg";
import Safal from "@/assets/teams/Safal Raj Basnet.jpg";
import Yogesh from "@/assets/teams/Yogesh Giri.jpg";
import Aman from "@/assets/teams/Aman Kumar Sah.jpg";
const persons = [
  {
    name: "Suraj Bhattari",
    role: "CO-Ordinator",
    imageUrl: Suraj,
  },
  {
    name: "Samin Gaire",
    role: "PR & Outreach",
    imageUrl: Samin,
  },
  {
    name: "Sarthak Chaudhary",
    role: "Project Supervisor",
    imageUrl: Sarthak,
  },
  {
    name: "Sunil Poudel",
    role: "Venue Incharge",
    imageUrl: Sunil,
  },
  {
    name: "Sudip Prajuli",
    role: "Hackathon Incharge",
    imageUrl: Sudip,
  },
  {
    name: "Mahesh Chaudhary",
    role: "CS50 Fair Incharge",
    imageUrl: Mahesh,
  },
  {
    name: "Lokesh Mandal",
    role: "Graphics Head",
    imageUrl: Lokesh,
  },
  {
    name: "Dhiraj KC",
    role: "Production Head",
    imageUrl: Dhiraj,
  },
  {
    name: "Nisha Karn",
    role: "Planning Head",
    imageUrl: Nisha,
  },
  {
    name: "Kishor Thagunna",
    role: "Assessment Head",
    imageUrl: Kishor,
  },
  {
    name: "Safal Raj Basnet",
    role: "Resources Manager",
    imageUrl: Safal,
  },
  {
    name: "Yogesh Giri",
    role: "Social Media Head",
    imageUrl: Yogesh,
  },
  {
    name: "Aman Kumar Sah",
    role: "Production",
    imageUrl: Aman,
  },
];
export default function Example() {
  const renderCarouselItems = () => {
    const carouselItems = [];
    let startIndex = 0;
    while (startIndex < persons.length) {
      carouselItems.push(
        <CarouselItem key={startIndex}>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-4 sm:gap-y-16 xl:col-span-2 items-center justify-center mt-8"
          >
            {persons.slice(startIndex, startIndex + 4).map((person) => (
              <li key={person.name}>
                <div className="flex text-center gap-x-6 flex-col gap-4 items-center ">
                  <div className="h-20 w-20 rounded-full overflow-hidden">
                    <Image
                      src={person.imageUrl}
                      alt={person.name}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-red-700">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CarouselItem>
      );

      startIndex += 4;
    }

    return carouselItems;
  };

  return (
    <>
      <h1 className="flex text-4xl font-black items-center justify-center mt-14">
        Our Energetic Team
      </h1>
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-8 lg:px-8">
          <p className="mt-6 leading-8 text-white text-center">
            We are the 10th executive committee of EXCESS and the very first
            group of students to bring CS50 in Nepal. We are passionate about
            computer science and want to share our knowledge with others.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <Carousel>
            <CarouselContent>{renderCarouselItems()}</CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
}
