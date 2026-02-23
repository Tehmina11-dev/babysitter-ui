import React from 'react';

const Connecting = () => {
  return (
    <section className="bg-background py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image Grid */}
        <div className="grid grid-cols-2 gap-4 relative">
          {/* Top Left Image */}
          <div className="overflow-hidden border-2 border-primary h-52 
                rounded-tl-xl3 rounded-tr-xl3 rounded-br-xl3 rounded-bl-none">
  <img 
    src="/images/learn.jpeg" 
    alt="Babysitter with child" 
    className="w-full h-full object-cover"
  />
</div>

          {/* Top Right Image */}
          <div className="rounded-tl-xl3 rounded-tr-xl3 rounded-bl-xl3 rounded-br-none overflow-hidden border-2 border-primary h-52 ">
            <img 
              src="/images/kid.webp" 
              alt="Sitter playing" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Wide Image */}
          <div className="col-span-2 rounded-tl-xl3 rounded-tr-none rounded-bl-xl3 rounded-br-xl3 overflow-hidden border-2 border-primary h-52 relative">
            <img 
              src="/images/child.webp" 
              alt="Group activity" 
              className="w-full h-full object-cover"
            />
          
            
          </div>
          
        </div>
      

        {/* Right Side: Content */}
        <div className="text-right lg:text-right">
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-primary">Connecting</span> <span className="text-dark">Families with</span>
            <br />
            <span className="text-dark">Trusted</span> <span className="text-primary">Babysitters</span>
          </h2>
          
          <div className="max-w-md ml-auto">
            <p className="text-gray text-lg leading-relaxed mb-4">
              We make finding reliable childcare simple and stress-free. 
              Whether you're a parent or a sitter, our platform is built 
              to support your needs with care and confidence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Connecting;