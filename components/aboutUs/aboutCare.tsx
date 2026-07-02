import Image from "next/image";

const AboutCommunity = () => {
  return (
    <section className="w-full bg-background px-6 md:px-12 lg:px-20 py-12 lg:py-24 overflow-hidden">
      
      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-5 items-center">
        
        {/* Left Side: Content */}
        <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
          
          {/* Section Heading - Responsive font sizes */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-medium leading-[110%] lg:leading-[100%] tracking-tight text-dark">
            <span className="text-primary">Building</span> A Child Care <br className="hidden lg:block" />
            <span className="text-primary">Community</span>
          </h1>

          {/* Body Text - Adjusted font size for mobile */}
          <p className="font-sans text-lg lg:text-[22px] font-normal leading-[150%] lg:leading-[130%] tracking-wide text-gray max-w-xl mx-auto lg:mx-0">
            Finding safe, dependable child care shouldn't be so hard. That's why we connect Summerville 
            families with trusted, thoroughly vetted babysitters who bring experience, warmth, and a 
            commitment to safety.
          </p>

          {/* Optional: Add those 2 buttons here too if needed for consistency */}
        </div>

        {/* Right Side: Staggered Images */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          
          {/* Decorative Background Element */}
          <div className="absolute -top-4 right-1/4 lg:right-10 w-12 h-12 bg-primary rounded-lg z-0 animate-pulse opacity-20" />
          
          <div className="relative flex flex-col w-full max-w-[450px] lg:max-w-[520px]">

            {/* Top Image */}
            <div className="relative self-end w-[85%] aspect-[20/12] overflow-hidden rounded-tl-xl3 rounded-br-xl3 border-2 border-primary shadow-card z-10">
              <Image 
                src="/images/child.webp" 
                alt="Caregiver and child"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Staggered Image - Adjusted overlap for mobile */}
            <div className="relative self-start -mt-[20%] lg:-mt-[100px] w-[85%] aspect-[20/12] overflow-hidden rounded-tl-xl3 rounded-br-xl3 border-2 border-primary shadow-card z-20">
              <Image 
                src="/images/kid.webp" 
                alt="Happy interaction"
                fill
                className="object-cover"
              />
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCommunity;