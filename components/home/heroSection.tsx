import FeatureSmallCard from "../ui/featureSmallCards";
import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="bg-background font-sans  overflow-hidden">
      {/* Hero Container */}
      <div className="max-w-8xl pt-20 pb-12 mx-24 flex flex-col lg:flex-row items-center justify-around gap-12">
        
        {/* Left Content Column */}
        <div className="flex-0 space-y-8   p-20 max-w-4xl z-10">
          {/* Main Heading with requested 50px/500 weight properties */}
          <h1 className="font-heading text-hero text-dark lg:text-left">
            Find Trusted <br />
            <span className="text-primary">Babysitters</span> Near You!
          </h1>

          <p className="text-gray text-lg max-w-md leading-relaxed font-medium">
            Sitter Safely is Summerville's premier service for finding babysitters in your neighborhood. 
            Book verified, experienced sitters in minutes. Peace of mind for parents, quality care for your children.
          </p>

          <div className="space-y-4">
            <span className="text-xs font-bold text-dark uppercase tracking-widest block">
              Signup as
            </span>

            <div className="flex gap-4">
              <button className="bg-primary text-white px-10 py-3 rounded-full font-bold shadow-card flex items-center gap-2 hover:brightness-105 transition-all">
                Family <span className="text-xl">›</span>
              </button>

              <button className="bg-secondary text-primary px-12 py-3 rounded-full font-bold hover:bg-lightAccent transition-all">
                Sitter
              </button>
            </div>
          </div>
        </div>

        {/* Right Feature Grid Column */}
        <div className="flex-1 bg-background max-w-2xl">
          <div className="grid grid-cols-2 gap-3 p-6 rounded-xl bg-white shadow-lg backdrop-blur-sm border border-white/20">
          <FeatureSmallCard 
  icon={
    <Image
      src="/icons/baby.svg"
      alt="Baby Icon"
      width={35}
      height={35}
    />
  }
  label="Expert Care" 
  bgColor="bg-light" 
  textColor="text-primary" 
/>

<FeatureSmallCard 
  icon={
    <Image
      src="/icons/tick.svg"
      alt="tick Icon"
      width={35}
      height={35}
    />
  }
  label="Verified" 
  bgColor="bg-[#82d1c0]/30" 
  textColor="text-[#82d1c0]" 
/>

<FeatureSmallCard 
  icon={
    <Image
      src="/icons/clock.svg"
      alt="clock Icon"
      width={35}
      height={35}
    />
  }
  label="24/7 Support" 
  bgColor="bg-[#2563eb]/30" 
  textColor="text-[#5C6BC0]" 
/>


<FeatureSmallCard 
  icon={
    <Image
      src="/icons/msg.svg"
      alt="msg Icon"
      width={35}
      height={35}
    />
  }
  label="Easy messaging" 
  bgColor="bg-[#ff895c]/30" 
  textColor="text-[#ff895c]" 
/>
           
          </div>
        </div>
      </div>

      {/* Safety Section - Also using requested Hero properties */}
      <div className="max-w-4xl mx-auto text-center px-6 py-20">
        <h2 className="font-heading text-hero text-dark text-center mb-8">
          Your <span className="text-primary">Child's Safety</span> <br /> Comes First
        </h2>
        <p className="text-gray text-lg leading-relaxed max-w-3xl mx-auto font-medium">
          We understand that trusting someone with your child is a big decision. That's why every 
          sitter on our platform goes through our comprehensive screening process designed 
          specifically with your family's safety in mind.
        </p>
      </div>
    </section>
  );
}