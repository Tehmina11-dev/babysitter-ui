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
    <div className={`group border border-gray/30 rounded-xl overflow-hidden bg-white/40 backdrop-blur-sm transition-all duration-300 ${isOpen ? "shadow-card bg-white" : ""}`}>
      
      {/* Header Row: Reduced height to align with the square */}
      <div className="flex items-stretch min-h-[60px] lg:min-h-[70px]">
        
        {/* Question Area - Reduced padding to stay compact */}
        <div className="flex-1 flex items-center gap-4 lg:gap-6 px-5 lg:px-8 py-2">
          <span className="font-heading text-lg text-gray/80 font-medium">
            {id}
          </span>
          <button 
            onClick={onToggle}
            className="flex-1 text-left font-heading text-base lg:text-lg text-dark font-medium leading-tight hover:text-primary transition-colors"
          >
            {question}
          </button>
        </div>

        {/* The Square Toggle Button - Fixed Width/Height Ratio */}
        <button 
          onClick={onToggle}
          aria-label="Toggle Accordion"
          className={`w-[60px] lg:w-[70px] flex items-center justify-center transition-all duration-300 rounded-bl-xl ${
            isOpen ? 'bg-primary text-dark' : 'bg-primary/80 text-dark/80 hover:bg-primary'
          }`}
        >
          <span className="text-2xl font-bold">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </div>

      {/* Answer Body - Positioned so it doesn't affect the square header height */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 lg:px-8 pb-6 pt-2 ml-9 lg:ml-14 mr-14 lg:mr-16">
          <div className="w-full h-[1px] bg-gray/10 mb-4" />
          <p className="text-dark/80 text-sm lg:text-base leading-relaxed font-sans">
            {answer}
          </p>
        </div>
      </div>
    </div>
  ); 
}