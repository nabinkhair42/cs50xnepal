"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface FAQ {
  question: string;
  answer: string;
}

const QuestionAnswer: FAQ[] = [
  {
    question: "When and where is CS50x Nepal starting?",
    answer:
      "CS50x Nepal is starting this soon in 2024, at Library building in IOE Purwanchal Campus.",
  },
  {
    question: "How many students can join CS50x Nepal?",
    answer:
      "Initially, we are planning to enroll 30 students. However, the student count can change based on interest.",
  },
  {
    question: "Is CS50x for beginners, or do I need prior coding experience?",
    answer:
      "CS50x is perfect for beginners! No prior coding experience is needed.",
  },
  {
    question: "How do I enroll in CS50x Nepal?",
    answer:
      "You can enroll in CS50x online for free. However, for CS50x Nepal, you need to apply to get into the event.",
  },
  {
    question: "What programming languages are taught in CS50x Nepal?",
    answer:
      "CS50x Nepal follows the same course structure as of CS50x from 2022/23.",
  },
  {
    question: "How much time should I dedicate to CS50x Nepal each week?",
    answer:
      "We recommend about 12–18 hours per week, but you can adjust your pace to fit your schedule.",
  },
  {
    question: "Are there assignments and exams in CS50x Nepal?",
    answer:
      "Yes, you'll have problem sets and quizzes to test your knowledge. They're a great way to learn!",
  },
  {
    question:
      "Can I get a certificate from Harvard for completing CS50x Nepal?",
    answer:
      "You will only get the free certificate offered by CS50 on completion of the course.",
  },
  {
    question: "What kind of computer or software do I need for CS50x?",
    answer:
      "You would need a decent laptop. In case of software, you can explore the online setup or some offline Integrated Development Environment (IDE).",
  },
  {
    question: "Can I take CS50x Nepal at my own pace?",
    answer:
      "Absolutely! But not keeping up to our scheduled timeline might let you not graduate the course together with others.",
  },
];

import BGEffect from "@/assets/homepage/bg-effect.svg";

const Faqs: React.FC = () => {
  return (
    <main style={{ backgroundImage: `url(${BGEffect.src})` }}>
      <div className="flex-col w-2/3 justify-center items-center mx-auto ">
        <h1 className="flex text-4xl font-black items-center justify-center">
          Frequently Asked Questions
        </h1>
        <Accordion
          type="single"
          collapsible
          className="py-8 sm:py-8 flex flex-col gap-4"
          style={{ borderRadius: "6px" }}
        >
          {QuestionAnswer.map((qa, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{qa.question}</AccordionTrigger>
              <AccordionContent>{qa.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
};

export default Faqs;
