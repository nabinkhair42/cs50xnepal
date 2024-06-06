"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from 'next/image';
import BGEffect from "@/assets/homepage/bg-effect.svg"

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    image: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  return (
    <main style={{ backgroundImage: `url(${BGEffect.src})` }} className="w-screen ">
    <h1 className="text-center text-4xl font-bold leading-8 text-white mb-8">
          Introducting CS50xNepal
        </h1>
            <motion.div
          className="h-[30rem] w-full overflow-y-scroll flex justify-center gap-36"
          ref={ref}
          style={{ scrollbarWidth: "none" }}
        >
      <div className="div relative flex items-start px-5">
      
        <div>
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-4xl font-bold text-slate-100 "
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10 text-justify"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        className="hidden lg:block h-80 w-80 rounded-md text-black sticky top-10 mt-4"
        style={{ overflow: "hidden" }}
      >
        <Image src={content[activeCard % content.length].image} alt='image' />
      </motion.div>
    </motion.div>
    </main>
    
  );
};
