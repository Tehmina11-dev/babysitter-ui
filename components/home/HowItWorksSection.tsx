import WorkStepCard from "../ui/WorkStepCards";

export default function HowItWorksSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 relative bg-background overflow-hidden">
      
      {/* Header */}
      <div className="mb-24 max-w-lg text-center md:text-left mx-auto md:mx-0">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-dark">
          How It <span className="text-accent">Works</span>
        </h2>

        <p className="text-gray text-base md:text-lg font-sans">
          Getting started is easy. Find your perfect sitter in just three simple steps.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row 
        items-center md:items-start 
        justify-center md:justify-between 
        gap-16 mt-10"
      >

        {/* SVG Connectors - Only Large Screens */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
          
          {/* Top Curve */}
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

          {/* Bottom Curve */}
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

        {/* Step 1 */}
        <div className="z-10 w-full sm:w-[80%] md:w-auto flex justify-center">
          <WorkStepCard
            title="Relax"
            desc="Sign up with one of our membership options and provide some basic family info"
            img="/images/relax.jpg"
            titleColor="text-[#FF8A65]"
          />
        </div>

        {/* Step 2 */}
        <div className="lg:mt-32 z-10 w-full sm:w-[80%] md:w-auto flex justify-center">
          <WorkStepCard
            title="Post"
            desc="Create a job post for your family's needs, browse and favorite sitters, receive instant communication"
            img="/images/post.jpeg"
            titleColor="text-primary"
          />
        </div>

        {/* Step 3 */}
        <div className="lg:mt-64 z-10 w-full sm:w-[80%] md:w-auto flex justify-center">
          <WorkStepCard
            title="Register"
            desc="You can relax knowing your child is in the safe, caring hands of sitter safety sitters"
            img="/images/register.jpeg"
            titleColor="text-accent"
          />
        </div>

      </div>
    </section>
  );
}