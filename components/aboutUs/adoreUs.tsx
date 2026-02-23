import React from 'react';
import { Phone, Key, Clock } from 'lucide-react';

const AdoreUs = () => {
  const features = [
    {
      title: "No More Endless Calls",
      subtitle: "Book with a tap",
      desc: "Say goodbye to phone tag and busy signals. Our site connects you instantly with sitters.",
      icon: <Phone size={32} strokeWidth={2.5} />,
      bgColor: "bg-[#FF8B60]", // Coral Accent
    },
    {
      title: "Every Sitter is Safety Certified",
      subtitle: "Peace of mind guaranteed",
      desc: "Thorough background checks and personal references ensure your little ones are in caring hands.",
      icon: <Key size={32} strokeWidth={2.5} />,
      bgColor: "bg-primary", // Your #ffb533
    },
    {
      title: "Timely. Thoughtful. Trustworthy.",
      subtitle: "Punctuality you can trust",
      desc: "Sitters who show up on time, follow through, and take the time to know what matters to your family.",
      icon: <Clock size={32} strokeWidth={2.5} />,
      bgColor: "bg-[#87D1C1]", // Teal Accent
    }
  ];

  return (
    <section className="bg-background py-24 px-6 relative overflow-hidden">
      
      {/* Decorative Dashed Path */}
      <div className="absolute top-1/2 left-0 w-full hidden lg:block -z-0 pointer-events-none translate-y-12">
        <svg width="100%" height="200" viewBox="0 0 1200 200" fill="none">
          <path 
            d="M-50 150 C 200 50, 400 180, 600 100 C 800 20, 1000 150, 1250 50" 
            stroke="#ffb533" 
            strokeWidth="3" 
            strokeDasharray="12 12" 
            className="opacity-30"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-dark leading-tight">
            Why <span className="text-primary">Families</span> Adore Us
          </h2>
          <p className="text-gray text-xl mt-4 font-sans italic opacity-80">
            Time-tested values in a modern world
          </p>
        </div>

        {/* Feature Cards Grid */}
      {/* Feature Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-8 lg:gap-x-12 mt-12">
  {features.map((feature, index) => (
    <div 
      key={index} 
      className={`
        ${feature.bgColor} 
        rounded-xl2 p-8 pt-16 text-center text-white relative shadow-lg 
        transition-all duration-300 hover:shadow-card hover:scale-[1.02]
        /* Pushes only the center card down on medium screens and up */
        ${index === 1 ? 'md:translate-y-12' : ''}
      `}
    >
      {/* Overlapping Icon Circle */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full p-2 shadow-xl">
        <div className={`${feature.bgColor} w-full h-full rounded-full flex items-center justify-center text-white`}>
          {feature.icon}
        </div>
      </div>

      {/* Text Content */}
      <h3 className="font-heading text-2xl font-bold mb-3 px-4">
        {feature.title}
      </h3>
      <p className="font-heading text-sm font-semibold opacity-90 mb-6 tracking-wide uppercase">
        {feature.subtitle}
      </p>
      <p className="font-sans text-base leading-relaxed opacity-95">
        {feature.desc}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default AdoreUs;