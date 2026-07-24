import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  User, 
  Briefcase, 
  FolderGit2, 
  Code2, 
  GraduationCap, 
  Mail 
} from "lucide-react";
import { Tooltip as AntTooltip, ConfigProvider, theme as antdTheme } from "antd";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "story", label: "Story", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

const FloatingNavDock = ({ activeView, onNavigate, theme }) => {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover)");
    setCanHover(media.matches);
    const listener = (e) => setCanHover(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // Show dock when viewing any inner page or section
  const isVisible = activeView !== "home";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: "-50%", y: 80, opacity: 0, scale: 0.95 }}
          animate={{ x: "-50%", y: 0, opacity: 1, scale: 1 }}
          exit={{ x: "-50%", y: 80, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="fixed bottom-3 sm:bottom-6 left-1/2 z-50 flex items-center max-w-[94vw] sm:max-w-none"
        >
          <ConfigProvider
            theme={{
              algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
              token: {
                fontFamily: "'Inter Tight', var(--font-sans), sans-serif",
                fontWeightStrong: 600,
              },
            }}
          >
            <div className="flex items-center gap-0.5 sm:gap-1.5 p-1 sm:p-2 rounded-full border border-border/80 bg-background/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/40 overflow-hidden">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;

                return (
                  <AntTooltip key={item.id} trigger={canHover ? ["hover"] : []} title={item.label} placement="top" arrow={{ pointAtCenter: true }}>
                    <button
                      type="button"
                      onClick={() => onNavigate(item.id)}
                      className={`relative px-3 py-2 rounded-full flex items-center gap-1.5 text-xs font-bold transition-all duration-300 outline-none select-none shrink-0 ${
                        isActive
                          ? "text-background px-3.5"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeDockPill"
                          className="absolute inset-0 bg-foreground rounded-full shadow-md z-0"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <Icon className={`w-4 h-4 relative z-10 shrink-0 transition-transform duration-200 ${isActive ? "scale-105" : ""}`} />
                      <span className={`relative z-10 font-bold ${isActive ? "inline-block" : "hidden"}`}>
                        {item.label}
                      </span>
                    </button>
                  </AntTooltip>
                );
              })}
            </div>
          </ConfigProvider>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNavDock;
