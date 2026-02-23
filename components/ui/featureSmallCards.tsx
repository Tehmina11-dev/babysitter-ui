interface FeatureCardProps {
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  textColor: string;
}

export default function FeatureSmallCard({ icon, label, bgColor, textColor }: FeatureCardProps) {
  return (
    /* Using xl3 for the cards and font-heading for the label as per theme */
    <div className={`${bgColor} h-40 rounded-xl flex flex-col items-center justify-center gap-3 transition-transform hover:scale-105 shadow-sm`}>
      <div className="text-3xl">
        {icon}
      </div>
      
      <p className={`font-heading text-sm font-medium leading-none text-center px-4 ${textColor}`}>
        {label}
      </p>
    </div>
  );
}