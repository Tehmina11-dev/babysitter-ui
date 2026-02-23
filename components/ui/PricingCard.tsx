interface PricingProps {
    title: string;
    price: string;
    subPrice: string;
    desc: string;
    features: string[];
    isPopular?: boolean;
  }
  
  export const PricingCard = ({ title, price, subPrice, desc, features, isPopular }: PricingProps) => (
    <div className={`p-10 rounded-[2.5rem] border ${isPopular ? 'bg-[#FFB347] text-white scale-105 shadow-2xl' : 'bg-white text-gray-800 border-orange-100 shadow-xl'} flex flex-col gap-6`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-2xl font-bold ${!isPopular && 'text-[#FFB347]'}`}>{title}</h3>
        {isPopular && <span className="bg-white text-[#FFB347] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Popular</span>}
      </div>
      <p className={`text-sm ${isPopular ? 'text-white/90' : 'text-gray-400'}`}>{desc}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-black">${price}</span>
        <span className={`text-sm ${isPopular ? 'text-white/80' : 'text-gray-400'}`}>{subPrice}</span>
      </div>
      <button className={`w-full py-4 rounded-full font-bold transition-all ${isPopular ? 'bg-white text-[#FFB347] hover:bg-gray-50' : 'bg-[#FFB347] text-white hover:bg-orange-400'}`}>
        Get Started Now
      </button>
      <ul className="space-y-4 mt-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span className={`p-1 rounded-full ${isPopular ? 'bg-white/20' : 'bg-orange-100'}`}>
              <svg className={`w-3 h-3 ${isPopular ? 'text-white' : 'text-[#FFB347]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );