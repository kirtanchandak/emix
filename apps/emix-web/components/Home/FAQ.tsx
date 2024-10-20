"use client";

import React, { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const faqs = [
  {
    question: "How do I start generating email MJML?",
    answer:
      "To start generating email MJML, you can use our intuitive interface to input your content and design preferences. Our AI will then create the MJML code for your email.",
  },
  {
    question: "How do I use the generated MJML code?",
    answer:
      "Once the MJML is generated, you can copy it and paste it into your email marketing platform or email client that supports MJML emails.",
  },
  {
    question: "Can I customize the MJML generated by AI?",
    answer:
      "Yes, you can customize the generated MJML. We provide options to edit the code directly or use our visual editor to make changes to the design and content.",
  },
  {
    question: "What are the costs involved?",
    answer:
      "Our pricing is based on the number of emails you generate. We offer various plans to suit different needs, from individual users to large enterprises.",
  },
  {
    question: "What if I run out of tokens?",
    answer:
      "If you run out of tokens, you can easily purchase more through your account dashboard. We also offer auto-renewal options to ensure uninterrupted service.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Frequently asked questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-200">
            <button
              className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <IconChevronDown
                className={`w-6 h-6 transition-transform duration-500 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="pb-4 text-gray-600">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}