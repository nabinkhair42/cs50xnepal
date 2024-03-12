import { HoverEffect } from "../ui/card-hover-effect";
import Image from 'next/image';
import Pukar from"@/assets/instructors/pukar-karki.png";
import Mahesh from"@/assets/instructors/mahesh-chaudhary.png";
import Suraj from"@/assets/instructors/suraj-bhattarai.png";
import Sudip from"@/assets/instructors/sudip-prajuli.png";
import Muna from"@/assets/instructors/muna-bhattarai.png";
import Sunil from"@/assets/instructors/sunil-poudel.jpg";

export function CardHoverEffectDemo() {
  const projects = [
    {
      title: "Pukar Karki",
      description: "Tech Enthusiast and deputy HOD of CSE Department.",
      avatar: Pukar.src,
    },
    {
      title: "Suraj Bhattarai",
      description: "Tech Enthusiast and deputy HOD of CSE Department.",
      avatar: Suraj.src,
    },
    {
      title: "Mahesh Chaudhary",
      description: "Tech Enthusiast and deputy HOD of CSE Department.",
      avatar: Mahesh.src,
    },
    {
      title: "Sunil Poudel",
      description: "Tech Enthusiast and deputy HOD of CSE Department.",
      avatar: Sunil.src,
    },
    {
      title: "Muna Bhattarai",
      description: "Tech Enthusiast and deputy HOD of CSE Department.",
      avatar: Muna.src,
    },
    {
      title: "Sudip Prajuli",
      description: "Tech Enthusiast and deputy HOD of CSE Department.",
      avatar: Sudip.src,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Pukar Karki",
    description: "Tech Enthusiast and deputy HOD of CSE Department.",
    avatar: Pukar,
  }, 
  {
    title: "Suraj Bhattarai",
    description: "Tech Enthusiast and deputy HOD of CSE Department.",
    avatar: Suraj,
  }, 
  {
    title: "Mahesh Chaudhary",
    description: "Tech Enthusiast and deputy HOD of CSE Department.",
    avatar: Mahesh,
  }, 
  {
    title: "Sunil Poudel",
    description: "Tech Enthusiast and deputy HOD of CSE Department.",
    avatar: Sunil,
  }, 
  {
    title: "Muna Bhattarai",
    description: "Tech Enthusiast and deputy HOD of CSE Department.",
    avatar: Muna,
  }, 
  {
    title: "Sudip Prajuli",
    description: "Tech Enthusiast and deputy HOD of CSE Department.",
    avatar: Sudip,
  }, 

];
