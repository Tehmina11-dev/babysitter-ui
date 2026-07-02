"use client";
import React from "react";
import { ShieldCheck, Heart, UserCheck, MessageCircle } from "lucide-react";
import SafetyCard from "../ui/SafetyCards";

export default function SafetySection() {
  const safetySteps = [
    {
      id: 1,
      align: "left" as const,
      color: "orange" as const,
      title: "Thorough Background Checks",
      desc: "Sitters pass background and vehicle checks for identity, safety, and transport verification",
      icon: <MessageCircle className="w-full h-full text-white fill-white" />,
    },
    {
      id: 2,
      align: "right" as const,
      color: "red" as const,
      title: "CPR & First Aid Certified",
      desc: "All sitters are hands-on CPR and First Aid certified to handle emergencies with confidence and skill.",
      icon: <Heart className="w-full h-full text-white fill-white" />,
    },
    {
      id: 3,
      align: "left" as const,
      color: "teal" as const,
      title: "Personal Interviews",
      desc: "Sitters are personally interviewed by the Sitter Safely team to assess their childcare experience and reliability.",
      icon: <UserCheck className="w-full h-full text-white fill-white" />,
    },
    {
      id: 4,
      align: "right" as const,
      color: "yellow" as const,
      title: "Responsive Communication",
      desc: "Remove the guesswork with hiring. Sitters are committed to timely communication with families.",
      icon: <ShieldCheck className="w-full h-full text-white fill-white" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 bg-background overflow-hidden font-sans">
      <div className="relative flex flex-col items-center">
        
        {/* 🔹 Central Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/20 -translate-x-1/2 z-0" />

        {/* Space-y handles mobile gap, lg:space-y-0 handles desktop gap control via min-h */}
        <div className="w-full relative z-10 space-y-20 lg:space-y-0">
          {safetySteps.map((step) => {
            const isLeft = step.align === "left";
            
            return (
              <div 
                key={step.id} 
                /* 🔹 Reduced min-h from 250px to 180px for tighter gap on Large Screens */
                className={`flex w-full items-center justify-center lg:min-h-[180px] relative ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`w-full lg:w-1/2 flex justify-center lg:relative ${
                  isLeft ? "lg:justify-end lg:pr-24" : "lg:justify-start lg:pl-24"
                }`}>
                  <SafetyCard {...step} />
                </div>
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}