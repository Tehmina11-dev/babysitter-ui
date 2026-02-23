"use client";
import React from "react";

interface SafetyCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: "orange" | "red" | "teal" | "yellow";
  align: "left" | "right";
}

export default function SafetyCard({ title, desc, icon, color, align }: SafetyCardProps) {
  const colors = {
    orange: { shadow: "bg-[#ffb533]", grad: "from-[#ffb533] to-[#ffb533]/10" },
    red: { shadow: "bg-[#ff895c]", grad: "from-[#FF895c] to-[#ff895c]/10" },
    teal: { shadow: "bg-[#80CBC4]", grad: "from-[#80CBC4] to-[#80CBC4]/10" },
    yellow: { shadow: "bg-[#FFB533]", grad: "from-[#FFB533] to-[#FFD180]/10" },
  };

  const c = colors[color];

  return (
    <div
      className={`relative flex w-full max-w-[550px] group ${
        align === "left" ? "justify-end md:pr-14" : "justify-start md:pl-14"
      }`}
    >
      <div className="relative w-full">
        {/* 🔹 Square Shadow - Height & Width Doubled (w-40 h-40) */}
        {/* -left-6 aur -bottom-6 kiya hai taake bade size mein card ke piche se sahi peeking effect aaye */}
        <div
          className={`absolute -left-3 -bottom-3 w-32 h-32 rounded-3xl ${c.shadow} z-0 opacity-80 transition-transform group-hover:scale-110`}
        />

        {/* 🔹 Main Card */}
        <div
          className={`relative z-10 bg-gradient-to-r ${c.grad} p-6 pr-10 rounded-3xl shadow-md flex items-center gap-6 border border-white/30 min-h-[150px] backdrop-blur-sm`}
        >
          {/* Icon Box with Thick Border */}
          <div className="flex-shrink-0 w-20 h-20 rounded-[22px] bg-transparent border-[4px] border-white flex items-center justify-center text-white shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center">
              {icon}
            </div>
          </div>

          {/* Text Content */}
          <div className="text-left py-2">
            <h3 className="text-xl font-heading font-semibold text-[#323230] mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-sm font-sans text-[#323230]/90 leading-relaxed font-medium">
              {desc}
            </p>
          </div>
        </div>
      </div>

      {/* Dotted Connector Line */}
      <div
        className={`hidden md:block absolute top-1/2 w-14 border-t-2 border-dashed border-primary/30 ${
          align === "left" ? "-right-0" : "-left-0"
        }`}
      />
    </div>
  );
}