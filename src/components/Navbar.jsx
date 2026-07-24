import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Download } from "lucide-react";
import { Tooltip as AntTooltip, ConfigProvider, theme as antdTheme } from "antd";

const Navbar = ({ activeView, onBack, onThemeToggle, theme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const media = window.matchMedia("(hover: hover)");
    setCanHover(media.matches);
    const listener = (e) => setCanHover(e.matches);
    media.addEventListener("change", listener);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      media.removeEventListener("change", listener);
    };
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
        <div className="flex items-center gap-1">
          <ConfigProvider
            theme={{
              algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
              token: {
                fontFamily: "'Inter Tight', var(--font-sans), sans-serif",
                fontWeightStrong: 600,
              },
            }}
          >
            <AntTooltip trigger={canHover ? ["hover"] : []} title="Download Resume" placement="bottom" arrow={{ pointAtCenter: true }}>
              <button
                type="button"
                onClick={(e) => {
                  handleDownload();
                  e.currentTarget.blur();
                }}
                aria-label="Download Resume"
                className="h-10 w-10 p-0 rounded-xl text-muted-foreground hover:text-foreground [media(hover:hover)]:hover:bg-secondary/60 active:scale-90 flex items-center justify-center outline-none select-none shrink-0 transition-all duration-200"
              >
                <Download size={18} className="shrink-0 transition-transform duration-200" />
              </button>
            </AntTooltip>
          </ConfigProvider>

          <button
            type="button"
            onClick={(e) => {
              onThemeToggle();
              e.currentTarget.blur();
            }}
            aria-label="Toggle theme"
            className="h-10 w-10 p-0 rounded-xl text-muted-foreground hover:text-foreground [media(hover:hover)]:hover:bg-secondary/60 active:scale-90 flex items-center justify-center outline-none select-none shrink-0 transition-all duration-200"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex items-center justify-center pointer-events-none"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
