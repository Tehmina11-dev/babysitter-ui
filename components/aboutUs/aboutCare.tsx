import Image from "next/image";

const AboutCommunity = () => {
  return (
    <section className="w-full flex flex-col py-10 lg:py-12 bg-background px-20">
      
      {/* Main Grid Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        
        {/* Left Side: Content */}
        <div className="order-2 lg:order-1 space-y-6 lg:pr-5">
          
          {/* Section Heading */}
          <h1 className="font-heading text-[56px] font-medium leading-[100%] tracking-[0em] text-dark">
  <span className="text-primary">Building</span> A Child Care <br />
  <span className="text-primary">Community</span>
</h1>




          {/* Body Text */}
          <p className="font-poppins text-[22px] font-normal leading-[130%] tracking-[0.01em] text-gray">
  Finding safe, dependable child care shouldn't be so hard. That's why we connect Summerville 
  families with trusted, thoroughly vetted babysitters who bring experience, warmth, and a 
  commitment to safety. Our goal is to help you feel confident and at ease every time care is needed.
</p>

        </div>

        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          
          <div className="absolute -top-4 right-10 w-12 h-12 bg-primary rounded-lg z-0 animate-pulse opacity-20" />
          
          <div className="relative flex flex-col w-full max-w-[520px]">

            <div className="relative self-end w-[85%] aspect-[20/11] overflow-hidden rounded-tl-xl3 rounded-br-xl3 border-2 border-primary shadow-card z-10">
              <Image 
                src="/images/child.webp" 
                alt="Caregiver and child"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative self-end mr-[220px] -mt-[100px] -translate-x-[100px] w-[85%] aspect-[20/11] overflow-hidden rounded-tl-xl3 rounded-br-xl3 border-2 border-primary shadow-card z-20">
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
