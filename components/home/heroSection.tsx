import FeatureSmallCard from "../ui/featureSmallCards";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-background font-sans overflow-hidden">
      {/* Hero Container */}
      <div className="max-w-[1440px] mx-auto pt-10 lg:pt-20 pb-12 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* Left Content Column */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 z-10 text-center lg:text-left">
          {/* Main Heading - text-hero for desktop, responsive for mobile */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-hero text-dark leading-[1.1] font-bold">
            Find Trusted <br className="hidden md:block" />
            <span className="text-primary">Babysitters</span> Near You!
          </h1>

          <p className="text-gray text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
            Sitter Safely is Summerville's premier service for finding babysitters in your neighborhood. 
            Book verified, experienced sitters in minutes.
          </p>

          <div className="space-y-4">
            <span className="text-xs font-bold text-dark uppercase tracking-widest block">
              Signup as
            </span>

            <div className="flex flex-row justify-center lg:justify-start gap-4">
              <button className="bg-primary text-white px-6 md:px-10 py-3 rounded-full font-bold shadow-card flex items-center gap-2 hover:brightness-105 transition-all text-sm md:text-base whitespace-nowrap">
                Family <span className="text-xl leading-none">›</span>
              </button>

              <button className="bg-secondary text-primary px-8 md:px-12 py-3 rounded-full font-bold hover:bg-lightAccent transition-all text-sm md:text-base whitespace-nowrap">
                Sitter
              </button>
            </div>
          </div>
        </div>

        {/* Right Feature Grid Column */}
        <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 md:p-7 rounded-2xl bg-white shadow-card border border-gray/5">
            <FeatureSmallCard 
              icon={<Image src="/icons/baby.svg" alt="Baby Icon" width={35} height={35} />}
              label="Expert Care" 
              bgColor="bg-light" 
              textColor="text-primary" 
            />

            <FeatureSmallCard 
              icon={<Image src="/icons/tick.svg" alt="tick Icon" width={35} height={35} />}
              label="Verified" 
              bgColor="bg-[#82d1c0]/20" 
              textColor="text-[#56b3a0]" 
            />

            <FeatureSmallCard 
              icon={<Image src="/icons/clock.svg" alt="clock Icon" width={35} height={35} />}
              label="24/7 Support" 
              bgColor="bg-[#2563eb]/10" 
              textColor="text-[#2563eb]" 
            />

            <FeatureSmallCard 
              icon={<Image src="/icons/msg.svg" alt="msg Icon" width={35} height={35} />}
              label="Easy messaging" 
              bgColor="bg-[#ff895c]/10" 
              textColor="text-[#ff895c]" 
            />
          </div>
        </div>
      </div>

      {/* Safety Section */}
      <div className="max-w-4xl mx-auto text-center px-6 py-16 lg:py-24">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-hero text-dark mb-6 lg:mb-8">
          Your <span className="text-primary">Child's Safety</span> <br className="hidden sm:block" /> Comes First
        </h2>
        <p className="text-gray text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
          We understand that trusting someone with your child is a big decision. That's why<br /> every 
          sitter on every plateform goes through our comprehensive screening <br /> process designed specifically with your family's safty in mind.
        </p>
      </div>
    </section>
  );
}