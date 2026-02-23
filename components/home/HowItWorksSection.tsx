import WorkStepCard from "../ui/WorkStepCards";

export default function HowItWorksSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 relative bg-background overflow-hidden">
      {/* Header */}
      <div className="mb-24 max-w-lg">
        <h2 className="text-5xl font-heading font-extrabold mb-4 text-dark">
          How It <span className="text-accent">Works</span>
        </h2>
        <p className="text-gray text-lg font-sans">
          Getting started is easy. Find your perfect sitter in just three simple steps.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 mt-10">
        
        {/* 🔹 SVG Connectors - Refined for MD+ Screens */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
          {/* Top Curve (Register to Post) */}
          <svg className="absolute top-[-60px] left-[22%] w-[32%] h-48" viewBox="0 0 100 100" fill="none">
            <path 
              d="M0,80 Q50,-10 100,80" 
              stroke="#ffb533" 
              strokeWidth="1.5" 
              strokeDasharray="6 6" 
              opacity="0.4"
            />
            <circle cx="100" cy="80" r="3" fill="#ffb533" />
          </svg>
          
          {/* Bottom Curve (Post to Relax) */}
          <svg className="absolute top-[40%] left-[52%] w-[32%] h-48" viewBox="0 0 100 100" fill="none">
            <path 
              d="M0,20 Q50,110 100,20" 
              stroke="#ffb533" 
              strokeWidth="1.5" 
              strokeDasharray="6 6" 
              opacity="0.4"
            />
            <circle cx="100" cy="20" r="3" fill="#ffb533" />
          </svg>
        </div>

        {/* Step 1: Register (High) */}
        <div className="z-10 w-full md:w-auto">
          <WorkStepCard
            title="Register"
            desc="Sign up with one of our membership options and provide some basic family info"
            img="/illustration/register.svg" // 👈 Aapki download ki hui file
            titleColor="text-[#FF8A65]"
          />
        </div>

        {/* Step 2: Post (Centered/Lower) */}
        <div className="md:mt-32 z-10 w-full md:w-auto">
          <WorkStepCard
            title="Post"
            desc="Create a job post for your family's needs, browse and favorite sitters, receive instant communication"
            img="/illustration/register.svg" 
            titleColor="text-primary"
          />
        </div>

        {/* Step 3: Relax (Highest Offset) */}
        <div className="md:mt-64 z-10 w-full md:w-auto">
          <WorkStepCard
            title="Relax"
            desc="You can relax knowing your child is in the safe, caring hands of sitter safety sitters"
            img="/illustration/register.svg"
            titleColor="text-accent"
          />
        </div>

      </div>
    </section>
  );
}