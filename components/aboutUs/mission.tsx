import React from 'react';
import Image from "next/image";

const OurMission = () => {
  return (
    <section className="bg-background py-16 px-4">
      {/* Outer Card Container */}
      <div className="max-w-6xl mx-auto bg-light/50 rounded-xl3 p-8 md:p-16 text-center relative overflow-hidden">
        
        {/* Title */}
        <h2 className="font-heading text-[48px] font-medium leading-[100%] tracking-[0em] text-primary mb-8">
          Our Mission
        </h2>

        {/* Mission Text */}
        <p className="font-poppins text-[22px] font-normal leading-[100%] tracking-[0.01em] text-[#999999] max-w-4xl mx-auto mb-12">

          At Sitter Safely, we're on a mission to make part-time child care safer, more affordable, and 
          easier to access for families in Summerville, SC. As a local, mom-owned and operated 
          business, we understand the challenges of finding trustworthy in-home care—and we're here 
          to help. Our secure platform connects families with thoroughly vetted babysitters who are CPR 
          and First Aid certified, personally interviewed, and background checked. With safety measures 
          in place for both sitters and families, we're creating a reliable, community-rooted network that 
          supports working parents and empowers local child care providers.
        </p>

        {/* Signature Section */}
        <div className="relative inline-block mb-12">
          <div className="text-left">
            <p className="font-heading text-[24px] font-medium leading-[100%] tracking-[0em] text-primary">
              With love & care,
            </p>
            <p className="font-poppins text-[18px] font-normal leading-[100%] tracking-[0.01em] text-gray">
              The Sitter Safely Family
            </p>
          </div>
          
          {/* Decorative Orange Circles */}
          <div className="absolute -right-16 -top-2 flex items-center justify-center">
             <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md">
               <Image
                 src="/icons/search.svg"
                 alt="search icon"
                 width={24}
                 height={24}
                 className="brightness-0 invert"
               />
             </div>
             <div className="w-4 h-4 bg-primary rounded-full absolute -top-1 -right-1" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-primary text-white font-poppins text-[18px] font-medium leading-[100%] tracking-[0.01em] py-4 px-10 rounded-full hover:opacity-90 transition-all shadow-md">
            Parents registration
          </button>
          <button className="bg-[#ffb533]/30 text-primary font-poppins text-[18px] font-medium leading-[100%] tracking-[0.01em] py-4 px-10 rounded-full hover:bg-light transition-all">
            Sitter registration
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurMission;
