import { IconType } from "react-icons";

interface SocialIconProps {
  Icon: IconType;
}

const SocialIcon = ({ Icon }: SocialIconProps) => {
  return (
    <div
      className="
      w-5 h-5 flex items-center justify-center
      rounded-full bg-slate-300
      hover:bg-primary/10
      transition-all duration-300
      cursor-pointer
      hover:scale-110
    "
    >
      <Icon className="text-white text-sm opacity-80 hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default SocialIcon;
