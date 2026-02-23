"use client";
import React, { Fragment } from "react";
import { ShieldCheck, Heart, UserCheck, MessageCircle } from "lucide-react";
import SafetyCard from "../ui/SafetyCards";

export default function SafetySection() {
  const safetySteps = [
    {
      id: 1,
      align: "left" as const,
      color: "orange" as const,
      title: "Thorough Background Checks",
      desc: "Sitters pass background and vehicle checks for identity, criminal history, and transportation verification",
      icon: <MessageCircle className="w-full h-full fill-current text-white" />,
    },
    {
      id: 2,
      align: "right" as const,
      color: "red" as const,
      title: "CPR & First Aid Certified",
      desc: "All sitters are hands-on CPR and First Aid certified to handle emergencies with confidence and skill",
      icon: <Heart className="w-full h-full fill-current text-white" />,
    },
    {
      id: 3,
      align: "left" as const,
      color: "teal" as const,
      title: "Personal Interviews",
      desc: "Sitters are personally interviewed by the Sitter Safely team to assess their childcare experience and reliability",
      icon: <UserCheck className="w-full h-full fill-current text-white" />,
    },
    {
      id: 4,
      align: "right" as const,
      color: "yellow" as const,
      title: "Responsive Communication",
      desc: "Remove the guesswork with hiring. Sitters are committed to timely communication with families",
      icon: <ShieldCheck className="w-full h-full fill-current text-white" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-background">
      <div className="relative">
        
        {/* Vertical Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {safetySteps.map((step) => (
            <Fragment key={step.id}>
              
              {step.align === "left" ? (
                <>
                  <div className="flex md:justify-end pr-5">
                    <SafetyCard {...step} />
                  </div>
                  <div className="hidden md:block" />
                </>
              ) : (
                <>
                  <div className="hidden md:block" />
                  <div className="flex md:justify-start pl-5 md:mt-20">
                    <SafetyCard {...step} />
                  </div>
                </>
              )}

            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
