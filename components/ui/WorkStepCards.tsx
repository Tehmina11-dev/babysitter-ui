"use client";
import React from "react";
import Image from "next/image";

interface WorkStepCardProps {
  title: string;
  desc: string;
  img: string; // Path to your SVG file
  titleColor: string;
  className?: string;
}

export default function WorkStepCard({
  title,
  desc,
  img,
  titleColor,
  className,
}: WorkStepCardProps) {
  return (
    <div
    className={`bg-white pl-6 pr-6 pb-6 rounded-xl shadow-card border border-orange-50 
    text-center flex flex-col items-center max-w-sm 
    transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${className}`}
  >
  
    {/* 🔹 Image Container (Smaller & Responsive) */}
    <div className="w-56 h-56 md:w-64 md:h-64 mb-6 flex items-center justify-center relative">
      <Image
        src={img}
        alt={title}
        fill
        className="object-contain"
        priority={title === "Register"}
      />
    </div>
  
    {/* 🔹 Title */}
    <h3 className={`text-xl font-heading font-bold mb-3 ${titleColor}`}>
      {title}
    </h3>
  
    {/* 🔹 Description */}
    <p className="text-dark/60 font-sans text-sm leading-relaxed px-2">
      {desc}
    </p>
  
  </div>
  );
}