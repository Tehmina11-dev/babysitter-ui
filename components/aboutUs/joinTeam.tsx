import React from 'react';
import Image from 'next/image';

const JoinTeam = () => {
  return (
    <section className="bg-background py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* ===== Left Content ===== */}
        <div className="z-10">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-dark leading-tight mb-8">
            Join Our <span className="text-primary">Sitter Safely</span> team
          </h2>
          
          <p className="font-sans text-gray text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Love working with kids? Join our trusted community of
            sitters and start connecting with local families today.
            Create your profile and start getting booking requests
            for flexible, meaningful work. Families are looking for
            someone just like you!
          </p>

          <button className="bg-primary text-white font-heading font-bold py-4 px-10 rounded-full shadow-card hover:scale-105 transition-transform">
            Signup / Join us
          </button>
        </div>

        {/* ===== Right Image Section (House Frame) ===== */}
        <div className="relative flex justify-center lg:justify-end">
          
          {/* Decorative Square Accents */}
          <div className="absolute left-[-20px] top-[40%] w-8 h-8 bg-primary rounded-sm z-0" />
          <div className="absolute left-[-40px] top-[45%] w-12 h-12 border border-primary rounded-sm z-0" />
          <div className="absolute bottom-[-10px] right-[15%] w-10 h-10 bg-primary rounded-sm z-20" />
          <div className="absolute bottom-[-30px] right-[25%] w-6 h-6 border border-primary rounded-sm z-0" />

          {/* House Frame Container */}
          <div className="relative w-full max-w-lg aspect-[5/4]">

  {/* House Border SVG */}
  <div className="absolute inset-0 z-10 pointer-events-none">
    <svg
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-card"
    >

      {/* ⭐ Primary Roof Border (Extended 10px both sides) */}
      <path
        d="M0 125 L250 0 L500 125"
        stroke="var(--primary)"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Main Cottage Border */}
      <path
        d="M10 120 L250 10 L490 120 V380 Q490 390, 480 390 H20 Q10 390, 10 380 Z"
        stroke="#ffb533"
        strokeWidth="8"
        fill="transparent"
      />
    </svg>
  </div>

  {/* Image */}
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="relative w-full h-full"
      style={{
        clipPath:
          "polygon(50% 2%, 98% 30%, 98% 98%, 2% 98%, 2% 30%)",
      }}
    >
      <Image
        src="/images/child.webp"
        alt="Sitters with children"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default JoinTeam;