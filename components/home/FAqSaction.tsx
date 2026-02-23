"use client";
import { useState } from "react";
import AccordionItem from "../ui/accordianItems";

const faqData = [
  {
    id: "01",
    question: "Why do you collect a deposit for each job post?",
    answer: "We collect a deposit to ensure that every job request is genuine and respectful of our sitters' time. When a sitter accepts a job, they commit to being available and may turn down other opportunities. If a job is canceled less than 24 hours in advance, the deposit helps compensate the sitter for the lost time. This policy protects both families and sitters by encouraging reliability and reducing last-minute cancellations."
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
    <section className="bg-background py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: FAQ Accordion List */}
        <div className="flex-1 lg:w-[70%] z-10">
          <header className="mb-12">
            <h2 className="font-heading text-hero text-dark">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </header>

          <div className="space-y-5">
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

        {/* Right: Decorative Organic Image */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-square">
            
            {/* Organic Shape Image Container */}
            <div 
              className="w-full h-full border-[3px]  border-primary p-2 overflow-hidden shadow-2xl transition-all duration-700 hover:rotate-2"
              style={{ borderRadius: '30% 60% 70% 40% / 50% 30% 60% 70%' }}
            >
              <img 
                src="/illustration/register.svg" // Replace with your image
                alt="Happy family"
                className="w-full h-full object-cover rounded-inherit"
              />
            </div>

            {/* Background Decor Blobs */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#FF8A65] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
}