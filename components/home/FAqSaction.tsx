"use client";
import { useState } from "react";
import AccordionItem from "../ui/accordianItems";

const faqData = [
  {
    id: "01",
    question: "Why do you collect a deposit for each job post?",
    answer: "We collect a deposit to ensure that every job request is genuine and respectful of our sitters' time. When a sitter accepts a job, they commit to being available and may turn down other opportunities. If a job is canceled less than 24 hours in advance, the deposit helps compensate the sitter for the lost time."
  },
  {
    id: "02",
    question: "How does Sitter Safely help protect families and sitters?",
    answer: "Our platform uses a multi-layered screening process and secure messaging to ensure a safe environment for everyone involved."
  },
  {
    id: "03",
    question: "What if I need to change the hours or days of my job post?",
    answer: "You can easily modify your job post details through your dashboard. Changes made significantly in advance allow sitters to adjust their schedules accordingly."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        
        {/* Left: Content Area */}
        <div className="flex-1 w-full lg:w-[60%] z-10">
          <header className="mb-12">
            <h2 className="font-heading text-4xl lg:text-5xl text-dark medium leading-tight mb-8">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>

            {/* --- ADDED BUTTONS HERE --- */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button className="bg-primary hover:bg-primary/90 text-orange-50 font-heading font-semibold px-10 py-4 rounded-full transition-all shadow-md hover:shadow-lg">
                Parents
              </button>
              <button className=" text-primary font-heading font-semibold px-10 py-4 rounded-full bg-primary/10">
                Sitter
              </button>
            </div>
          </header>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Right: Decorative Image */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end lg:mt-20">
          <div className="relative w-full max-w-[450px] aspect-square">
            <div 
              className="w-full h-full border-2 border-primary overflow-hidden shadow-card"
              style={{ borderRadius: '45% 55% 30% 70% / 60% 30% 70% 40%' }}
            >
              <img 
                src="/illustration/register.svg" 
                alt="Family high-five"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Small Blob Detail */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#FF8A65] rounded-full -z-10 animate-bounce-slow"></div>
          </div>
        </div>

      </div>
    </section>
  );
}