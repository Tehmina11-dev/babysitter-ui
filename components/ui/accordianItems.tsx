"use client";
import React from "react";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionItem({ id, question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="group border border-gray/30 rounded-xl overflow-hidden flex bg-white/40 backdrop-blur-sm transition-all duration-300">
      {/* Text Content */}
      <div className="flex-1 p-6 lg:p-8">
        <div className="flex items-start gap-5 lg:gap-8">
          <span className="font-heading text-xl text-gray/80 leading-none pt-1">{id}</span>
          <div className="flex-1">
            <button 
              onClick={onToggle}
              className="w-full text-left font-heading text-lg lg:text-xl text-dark font-medium leading-tight hover:text-primary transition-colors"
            >
              {question}
            </button>
            
            {/* Animated Answer Body */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
              <p className="text-dark/80 text-sm lg:text-base leading-relaxed font-sans">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Sidebar Button */}
      <button 
        onClick={onToggle}
        aria-label="Toggle Accordion"
        className={`w-14 lg:w-16 flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-primary text-dark shadow-inner' : 'bg-primary/80 text-dark/80 hover:bg-primary'
        }`}
      >
        <span className="text-2xl font-bold transform transition-transform duration-300">
          {isOpen ? "−" : "+"}
        </span>
      </button>
    </div>
  );
}