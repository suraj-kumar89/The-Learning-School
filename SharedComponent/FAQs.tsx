"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "I am a beginner. Will this help me?",
      answer:
        "This is a live online session where you can interact and ask questions in real time.",
    },
    {
      question: "How long is the trial class?",
      answer: "The trial session runs for 60 minutes.",
    },
    {
      question: "What happens after the trial?",
      answer:
        "After the session, you will have clarity on your level and preparation roadmap. If you decide to enrol in the full program, you can proceed with the discounted offer.",
    },
    {
      question: "Is the ₹99 refundable?",
      answer:
        "Yes. The ₹99 trial fee is fully refunded if you enrol in the full TEF program.",
    },
    {
      question: "Is the 50% OFF valid for limited time?",
      answer:
        "Yes. The 50% discount is available for a limited period after attending the trial class.",
    },
    {
      question: "Can beginners join?",
      answer:
        "Yes. Beginners can join. We guide you on the right starting level based on your current level assessment.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full flex justify-center py-12 sm:py-16 md:py-20 lg:py-16">
      <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center gap-8 sm:gap-10 md:gap-12">

        {/* HEADING */}
        <h2 className="font-display text-black text-center text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-bold leading-tight tracking-[-0.04rem]">
          Frequently Asked Questions
        </h2>

        {/* FAQ CONTAINER */}
        <div className="w-full rounded-[1.5rem] bg-[#EDE7D6] p-5 sm:p-6 md:p-10 lg:p-12 flex flex-col gap-5 sm:gap-6">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-black/10 pb-5 sm:pb-6 last:border-none"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <span
                    className={`font-display text-sm sm:text-base md:text-[1.125rem] lg:text-[1.25rem] font-semibold ${
                      isOpen ? "text-[#3E4A1D]" : "text-[#8B5CF6]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* ARROW */}
                  <span
                    className={`text-lg sm:text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ^
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[400px] mt-3 sm:mt-4" : "max-h-0"
                  }`}
                >
                  <p className="font-display text-[#5E5E5E] text-sm sm:text-base leading-[1.6rem] max-w-[520px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}