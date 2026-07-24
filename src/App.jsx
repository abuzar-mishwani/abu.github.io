import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import Navbar from "./components/Navbar";
import HeroGreeting from "./components/HeroGreeting";
import SectionViewer from "./components/SectionViewer";
import StorySection from "./components/StorySection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsShowcase from "./components/ProjectsShowcase";
import SkillsGrid from "./components/SkillsGrid";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import StructuredData from "./components/StructuredData";
import FloatingNavDock from "./components/FloatingNavDock";

const sectionComponents = {
  story: StorySection,
  experience: ExperienceTimeline,
  projects: ProjectsShowcase,
  skills: SkillsGrid,
  education: EducationSection,
  contact: ContactSection,
};

const App = () => {
  const [theme, setTheme] = useState("light");
  const [activeView, setActiveView] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") || "light";
    setTheme(saved);
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Simple preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove("loading");
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleThemeToggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleNavigate = (view) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setActiveView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return null;

  const ActiveSection = sectionComponents[activeView];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <StructuredData />

      {/* Global Ambient Background */}
      <div className="ambient-bg">
        <div className="ambient-blob ambient-blob-1"></div>
        <div className="ambient-blob ambient-blob-2"></div>
        <div className="ambient-blob ambient-blob-3"></div>
        <div className="ambient-noise"></div>
      </div>

      {/* Navbar */}
      <Navbar
        activeView={activeView}
        onBack={handleBack}
        onThemeToggle={handleThemeToggle}
        theme={theme}
      />

      {/* Main content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <SectionViewer activeView={activeView}>
          {activeView === "home" ? (
            <HeroGreeting onNavigate={handleNavigate} />
          ) : (
            ActiveSection && <ActiveSection onBack={handleBack} />
          )}
        </SectionViewer>
      </main>

      {/* Desktop Floating Navigation Dock */}
      <FloatingNavDock
        activeView={activeView}
        onNavigate={handleNavigate}
        theme={theme}
      />

      {/* Footer */}
      <footer className={`w-full flex justify-center pt-12 transition-all duration-300 ${activeView === "home" ? "pb-10" : "pb-28 sm:pb-32"}`}>
        <div className="flex items-center gap-1.5 text-[13px] md:text-sm font-mono transition-all hover:scale-105 cursor-default bg-secondary/30 border border-border/50 shadow-sm px-5 py-2.5 rounded-full">
          <span className="text-muted-foreground font-medium">&lt;</span>
          <span className="text-foreground font-medium">built_with</span>
          <Heart className="w-4 h-4 mx-0.5 text-red-500 fill-red-500 animate-heartbeat drop-shadow-sm" />
          <span className="text-blue-600 dark:text-blue-500 font-medium">by_abu</span>
          <span className="text-muted-foreground font-medium">/&gt;</span>
        </div>
      </footer>
    </div>
  );
};

export default App;