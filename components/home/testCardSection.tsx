import TestimonialCard from "../ui/testCards";

const testimonialData = [
  {
    quote: "Working with this team transformed our business. Their expertise in digital marketing helped us increase our revenue by 300%.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    bgColor: "bg-[#FFF2EB]",
    accentColor: "text-[#FF8A65]",
  },
  {
    quote: "Working with this team transformed our business. Their expertise in digital marketing helped us increase our revenue by 300%.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "https://i.pravatar.cc/150?u=sarah2",
    bgColor: "bg-[#FFF9EB]",
    accentColor: "text-[#FFB347]",
  },
  {
    quote: "Working with this team transformed our business. Their expertise in digital marketing helped us increase our revenue by 300%.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "https://i.pravatar.cc/150?u=sarah3",
    bgColor: "bg-[#F0F9F6]",
    accentColor: "text-[#4DB6AC]",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <div className="space-y-6">
        <h2 className="text-5xl font-extrabold text-[#333]">
          What <span className="text-[#FFB347]">Parents</span> Say
        </h2>
        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
          Don't just take our word for it. Here's what real parents think about our service.
        </p>
        <button className="bg-[#FFB347] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#ffa01a] transition-colors shadow-lg shadow-orange-200/50">
          View all 
          <span className="text-lg">›</span>
        </button>
      </div>

      {/* Right Column (Stacked Cards) */}
      <div className="flex flex-col gap-6">
        {testimonialData.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>

    </section>
  );
}