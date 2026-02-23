import HeroSection from "@/components/home/heroSection";
import SafetySection from "@/components/home/SafetySection";

import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestCards from "@/components/home/testCardSection";
import MembershipSection from "@/components/home/memberShips";
import FAQSection from "@/components/home/FAqSaction";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFAF3] font-sans text-[#333333] overflow-x-hidden">
      <HeroSection />
      <SafetySection />
      <HowItWorksSection />
      <TestCards />
      <MembershipSection />
      <FAQSection />
    </div>
  );
}
