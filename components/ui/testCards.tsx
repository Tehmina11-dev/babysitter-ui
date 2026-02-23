interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    avatar: string;
    bgColor: string; // e.g., 'bg-orange-50'
    accentColor: string; // e.g., 'text-orange-400'
  }
  
  export default function TestimonialCard({
    quote,
    author,
    role,
    avatar,
    bgColor,
    accentColor,
  }: TestimonialCardProps) {
    return (
      <div className={`${bgColor} p-8 rounded-[2rem] flex flex-col gap-4 transition-all hover:scale-[1.02]`}>
        {/* 5 Stars */}
        <div className={`flex gap-1 ${accentColor}`}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xl">★</span>
          ))}
        </div>
  
        {/* Quote */}
        <p className="text-gray-700 text-sm leading-relaxed font-medium">
          "{quote}"
        </p>
  
        {/* Author Info */}
        <div className="flex items-center gap-3 mt-2">
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <h4 className={`font-bold text-sm ${accentColor}`}>{author}</h4>
            <p className="text-gray-400 text-xs">{role}</p>
          </div>
        </div>
      </div>
    );
  }