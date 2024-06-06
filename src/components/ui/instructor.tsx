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
      description: "Proficient in Big Data technologies, Mr. Karki is a young and energetic computer engineering (Asst.) professor at IOE Purwanchal Campus.",
      avatar: Pukar.src,
    },
    {
      title: "Suraj Bhattarai",
      description: "Curious and insightful, Mr Bhattarai is an awesome tech community leader, mentor & instructor and equally a cloud enthusiast.",
      avatar: Suraj.src,
    },
    {
      title: "Mahesh Chaudhary",
      description: "Beta MLSA and a tech expert, Mr. Chaudhary is a final year student at IOE Purwanchal Campus and President at EXCESS.",
      avatar: Mahesh.src,
    },
    {
      title: "Sunil Poudel",
      description: "Amazingly talented Mr. Poudel is a great mentor and instructor for web development, API testing and backend services.",
      avatar: Sunil.src,
    },
    {
      title: "Muna Bhattarai",
      description: "GitHub Campus Expert and a rising female leader in tech community, Ms. Bhattarai is a GitHub Campus Expert and beta MLSA.",
      avatar: Muna.src,
    },
    {
      title: "Sudip Parajuli",
      description: "Python expert and expert in different development tools, Mr. Parajuli is a rising star in the roadmap to becoming a data analyst.",
      avatar: Sudip.src,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 mt-20">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Pukar Karki",
    description: "Proficient in Big Data technologies, Mr. Karki is a young and energetic computer engineering (Asst.) professor at IOE Purwanchal Campus.",
    avatar: Pukar,
  }, 
  {
    title: "Suraj Bhattarai",
    description: "Curious and insightful, Mr Bhattarai is an awesome tech community leader, mentor & instructor and equally a cloud enthusiast.",
    avatar: Suraj,
  }, 
  {
    title: "Mahesh Chaudhary",
    description: "Beta MLSA and a tech expert, Mr. Chaudhary is a final year student at IOE Purwanchal Campus and President at EXCESS.",
    avatar: Mahesh,
  }, 
  {
    title: "Sunil Poudel",
    description: "Amazingly talented Mr. Poudel is a great mentor and instructor for web development, API testing and backend services.",
    avatar: Sunil,
  }, 
  {
    title: "Muna Bhattarai",
    description: "GitHub Campus Expert and a rising female leader in tech community, Ms. Bhattarai is a GitHub Campus Expert and beta MLSA.",
    avatar: Muna,
  }, 
  {
    title: "Sudip Parajuli",
    description: "Python expert and expert in different development tools, Mr. Parajuli is a rising star in the roadmap to becoming a data analyst.",
    avatar: Sudip,
  }, 
];
