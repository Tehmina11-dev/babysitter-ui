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
    orange: { shadow: "bg-[#ffb533]", border: "border-[#ffb533]", grad: "from-[#ffb533] to-[#ffb533]/10" },
    red: { shadow: "bg-[#ff895c]", border: "border-[#ff895c]", grad: "from-[#FF895c] to-[#ff895c]/10" },
    teal: { shadow: "bg-[#80CBC4]", border: "border-[#80CBC4]", grad: "from-[#80CBC4] to-[#80CBC4]/10" },
    yellow: { shadow: "bg-[#FFB533]", border: "border-[#FFB533]", grad: "from-[#FFB533] to-[#FFD180]/10" },
  };

  const c = colors[color];
  const isLeft = align === "left";

  return (
    <div className="relative group w-full max-w-[calc(340px+15px)] sm:max-w-[calc(450px+15px)] lg:max-w-[calc(500px+15px)]">
      
      {/* 🔹 MOBILE/MEDIUM CONNECTORS (Staircase / Bottom-L Style) */}
      <div className="lg:hidden absolute -left-5 -top-10 bottom-0 z-0">
        {/* 1. Top Horizontal Line  */}
        <div className={`absolute top-6 left-0 w-20 border-t-2 border-dashed ${c.border} opacity-50`} />
        
        {/* 2. Vertical Line */}
        <div className={`absolute top-6 bottom-[-40px] left-0 border-l-2 border-dashed ${c.border} opacity-50`} />
        
        {/* 3. Bottom Horizontal Line  */}
        <div className={`absolute bottom-[-40px] left-0 w-20 border-t-2 border-dashed ${c.border} opacity-50`} />
      </div>

      {/* 🔹 DESKTOP CONNECTORS */}
      <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-24 border-t-2 border-dotted ${c.border} opacity-60 z-0 ${
        isLeft ? "-right-24" : "-left-24"
      }`} />

      {/* 🔹 Background Square Shadow */}
      <div className={`absolute -left-3 -bottom-3 w-24 h-24 md:w-28 md:h-28 rounded-3xl ${c.shadow} z-0 opacity-80 transition-transform group-hover:scale-105`} />

      {/* 🔹 Main Card Body */}
      <div className={`relative z-10 bg-gradient-to-r ${c.grad} p-4 md:p-5 rounded-3xl shadow-md flex items-center gap-4 md:gap-6 border border-white/30 min-h-[110px] md:min-h-[130px] backdrop-blur-sm`}>
        <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-[16px] md:rounded-[20px] bg-transparent border-[3px] md:border-[4px] border-white flex items-center justify-center text-white shadow-sm">
          <div className="w-7 h-7 md:w-8 md:h-8">
            {icon}
          </div>
        </div>

        <div className="text-left py-1">
          <h3 className="text-base md:text-lg font-heading font-semibold text-[#323230] mb-0.5 leading-tight">
            {title}
          </h3>
          <p className="text-[11px] md:text-sm font-sans text-[#323230]/90 leading-snug font-medium">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}