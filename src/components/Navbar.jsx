import React, { useState, useEffect } from "react";
import { ArrowLeft, Sun, Moon, Download } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = ({ activeView, onBack, onThemeToggle, theme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Abu-Zar-Mishwani-Resume.pdf";
    link.download = "Abu-Zar-Mishwani-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar z-50">
      <div className="nav-inner flex items-center justify-between w-full max-w-[1100px] mx-auto h-16">
        
        {/* Brand */}
        <a
          href="#"
          className="nav-brand flex items-center gap-1 text-[17px] font-bold tracking-tight transition-all hover:opacity-80 font-mono"
          onClick={(e) => {
            e.preventDefault();
            if (activeView !== "home") onBack();
          }}
        >
          <span className="text-muted-foreground font-medium">&lt;</span>
          <span className="text-foreground">abu_zar</span>
          <span className="text-blue-600 dark:text-blue-500">.mishwani</span>
          <span className="text-muted-foreground font-medium">/&gt;</span>
        </a>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={handleDownload}
            className="h-10 w-10 sm:w-auto p-0 sm:px-5 rounded-full sm:gap-2 shadow-sm border-border bg-background font-extrabold transition-all duration-300 group btn-wave-hover shrink-0 flex items-center justify-center"
          >
            <Download size={15} className="relative z-10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:text-background" />
            <span className="relative z-10 hidden sm:inline group-hover:text-background transition-colors duration-300">Download Resume</span>
          </Button>

          <Button
            variant="outline"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
            className="h-10 w-10 p-0 rounded-full shadow-sm border-border bg-background transition-all hover:bg-secondary group shrink-0 flex items-center justify-center"
          >
            <div className="transition-transform duration-500 group-hover:rotate-180 flex items-center justify-center">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
