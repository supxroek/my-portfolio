import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";

// Import Vercel Analytics
import { Analytics } from "@vercel/analytics/react";
// Import Vercel Speed Insights
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ scrollBehavior: "smooth" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
