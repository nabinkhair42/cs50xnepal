"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <main className="mt-20">
      <h1 className="flex text-4xl font-black items-center justify-center">
        Testimonial
      </h1>
      <div className="rounded-md flex flex-col antialiased bg-dot-white/[0.05] items-center justify-center relative overflow-hidden sm:py-8">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </main>
  );
}

const testimonials = [
  {
    quote:
      "The exposure to CS50x has broadened my perspective, and I feel more confident in tackling complex coding challenges. Kudos to the organizers for bringing this incredible opportunity to Nepal!",
    name: "Spandan Guragain",
    title: "BCT Student, IOE Purwanchal Campus",
  },
  {
    quote:
      "Going through the lectures before my project helped me with various other projects as well. I can say that I am confident with my skills, all thanks to CS50x lectures.",
    name: "Gaurav Bohara",
    title: "BCA,NAST",
  },
  {
    quote:
      "For me, CS50x been an enriching experience, providing me with a wealth of knowledge. CS50x is an exceptional course that offers high-quality content for free, providing tremendous value to students worldwide.",
    name: "Manoj Bhattarai",
    title: "Management Student, Mahendra Shanti Secondary School",
  },
  {
    quote:
      "I am delighted to hear on the positive impact of CS50x Nepal on students in Nepal. The curriculum is smooth for begineers. I absolutely loved it.",
    name: "Bivek Bist",
    title: " Computer Engineering, New Summit College",
  },
  {
    quote:
      "The exposure to top-notch lectures from Prof. David J. Malan is a game-changer for students. I am lucky to find it in my very first year at university.",
    name: "Anupam Kandel",
    title: "BEI Student, IOE Purwanchal Campus",
  },
];
