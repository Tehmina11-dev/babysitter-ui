import AboutCare from "@/components/aboutUs/aboutCare";
import Mission from '@/components/aboutUs/mission';
import AdoreUs from "@/components/aboutUs/adoreUs";
import OurSitters from "@/components/aboutUs/ourSitters";
import JoinTeam from "@/components/aboutUs/joinTeam";


export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutCare />
      <Mission />
      <AdoreUs />
      <OurSitters />
      <JoinTeam />      

      
    </main>
  );
}
