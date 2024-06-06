"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import Image1 from '@/assets/homepage/slider/Image1.png';
import Image2 from '@/assets/homepage/slider/Image2.png';
import Image3 from '@/assets/homepage/slider/Image3.png';
import Image4 from '@/assets/homepage/slider/Image4.png';
import Image5 from '@/assets/homepage/slider/Image5.png';
import Image6 from '@/assets/homepage/slider/Image6.png';
import Image7 from '@/assets/homepage/slider/Image7.png';
import Image8 from '@/assets/homepage/slider/Image8.png';
import Image9 from '@/assets/homepage/slider/Image9.png';
import Image10 from '@/assets/homepage/slider/Image10.png';
import Image11 from '@/assets/homepage/slider/Image11.png';
import Image12 from '@/assets/homepage/slider/Image12.png';
import Image13 from '@/assets/homepage/slider/Image13.png';



export function HeroParallaxDemo() {
  const convertedProducts = products.map((product) => ({
    ...product,
    thumbnail: product.thumbnail.src,
  }));

  return <HeroParallax products={convertedProducts} />;
}
export const products = [
  {
    title: "CS50xNepal Events Images1",
    link: "./",
    thumbnail: Image1,
  },
  {
    title: "CS50xNepal Events Images2",
    link: "./",
    thumbnail: Image2,
  },{
    title: "CS50xNepal Events Images3",
    link: "./",
    thumbnail: Image3,
  },
  {
    title: "CS50xNepal Events Images4",
    link: "./",
    thumbnail: Image4,
  },
  {
    title: "CS50xNepal Events Images5",
    link: "./",
    thumbnail: Image5,
  },
  {
    title: "CS50xNepal Events Images6",
    link: "./",
    thumbnail: Image5,
  },
  {
    title: "CS50xNepal Events Images7",
    link: "./",
    thumbnail: Image6,
  },
  {
    title: "CS50xNepal Events Images8",
    link: "./",
    thumbnail: Image7,
  },
  {
    title: "CS50xNepal Events Images9",
    link: "./",
    thumbnail: Image7,
  },
  {
    title: "CS50xNepal Events Images10",
    link: "./",
    thumbnail: Image8,
  },
  {
    title: "CS50xNepal Events Images11",
    link: "./",
    thumbnail: Image9,
  },
  {
    title: "CS50xNepal Events Images12",
    link: "./",
    thumbnail: Image10,
  },
  {
    title: "CS50xNepal Events Images13",
    link: "./",
    thumbnail: Image11,
  },
  {
    title: "CS50xNepal Events Images14",
    link: "./",
    thumbnail: Image12,
  },
  {
    title: "CS50xNepal Events Images15",
    link: "./",
    thumbnail: Image13,
  },
];
