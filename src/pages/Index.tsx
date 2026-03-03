import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import TimelineSection from "@/components/TimelineSection";
import CompetenciesSection from "@/components/CompetenciesSection";
import DownloadSection from "@/components/DownloadSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AchievementsSection />
      <TimelineSection />
      <CompetenciesSection />
      <DownloadSection />
      <ContactSection />
      <footer className="py-8 text-center text-xs text-muted-foreground font-body border-t border-border">
        © {new Date().getFullYear()} Ido Yoram. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
