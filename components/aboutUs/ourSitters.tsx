import React from "react";
import Image from "next/image";
import SocialIcon from "../ui/socialIcons";

import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const OurSitters = () => {
  const sitters = [
    {
      name: "Dominic Game",
      role: "3D Artist",
      desc: "Football enthusiast, enjoys movie nights with friends",
      img: "/images/sitter.jpeg",
      color: "border-[#ffb533]/30",
      textColor: "text-[#ffb533]",
    },
    {
      name: "Maya Mathy",
      role: "Founder",
      desc: "Pop music lover, seeks joy and exciting pop concerts",
      img: "/images/sitter.jpeg",
      color: "border-[#87D1C1]/30",
      textColor: "text-[#87D1C1]",
    },
    {
      name: "Alexis Jensen",
      role: "CTO",
      desc: "Bookworm, creative software developer with precision",
      img: "/images/sitter.jpeg",
      color: "border-[#FF8B60]/30",
      textColor: "text-[#FF8B60]",
    },
    {
      name: "James Vial",
      role: "Head of Front-End",
      desc: "Culinary artist, explores diverse flavors, skilled in cooking",
      img: "/images/sitter.jpeg",
      color: "border-[#ffb533]/30",
      textColor: "text-[#ffb533]",
    },
  ];

  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-dark">
            Meet Our <span className="text-[#87D1C1]">Sitters</span>
          </h2>

          <p className="text-gray text-xl mt-4 font-sans max-w-2xl mx-auto">
            Get to know a few of the sitters families love most
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sitters.map((sitter, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-xl2 p-6 text-center shadow-md border-t-2
                ${sitter.color}
                flex flex-col items-center transition-all duration-300
                hover:shadow-xl hover:scale-[1.02]
                ${(index === 1 || index === 3) ? "sm:translate-y-12" : ""}
              `}
            >
              
              {/* Profile Image */}
              <div className={`relative w-40 h-40 rounded-full ${sitter.color} p-1 mb-6 shadow-inner`}>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={sitter.img}
                    alt={sitter.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <h3 className="font-heading text-xl font-bold text-dark mb-1">
                {sitter.name}
              </h3>

              <p className={`font-sans text-sm font-bold mb-4 ${sitter.textColor}`}>
                {sitter.role}
              </p>

              <p className="font-sans text-gray text-sm leading-relaxed mb-6 px-2">
                {sitter.desc}
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                <SocialIcon Icon={FaFacebookF} />
                <SocialIcon Icon={FaGithub} />
                <SocialIcon Icon={FaLinkedinIn} />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSitters;
