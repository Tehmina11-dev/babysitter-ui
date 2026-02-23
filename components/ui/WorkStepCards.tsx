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
      className={`bg-white p-10 rounded-xl3 shadow-card border border-orange-50 text-center flex flex-col items-center max-w-sm transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${className}`}
    >
      {/* 🔹 SVG Illustration Container */}
      <div className="w-56 h-56 mb-8 flex items-center justify-center relative">
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain" // Taake SVG proportional rahe
          priority={title === "Register"} // Pehli image ko fast load karne ke liye
        />
      </div>

      {/* 🔹 Title */}
      <h3 className={`text-2xl font-heading font-bold mb-4 ${titleColor}`}>
        {title}
      </h3>

      {/* 🔹 Description */}
      <p className="text-dark/60 font-sans text-[15px] leading-relaxed px-4">
        {desc}
      </p>
    </div>
  );
}