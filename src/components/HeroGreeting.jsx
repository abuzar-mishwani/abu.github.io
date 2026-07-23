import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Code,
  Zap,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  ZoomIn,
  X,
  Mail,
  Github,
  Facebook,
  Instagram
} from "lucide-react";

const menuItems = [
  {
    key: "story",
    icon: <BookOpen size={18} />,
    title: "My Story",
    desc: "A journey from mountains to code",
  },
  {
    key: "experience",
    icon: <Briefcase size={18} />,
    title: "Experience",
    desc: "Where I've worked & built",
  },
  {
    key: "projects",
    icon: <Code size={18} />,
    title: "Projects",
    desc: "Products people actually use",
  },
  {
    key: "skills",
    icon: <Zap size={18} />,
    title: "Skills & Tools",
    desc: "My technical arsenal",
  },
  {
    key: "education",
    icon: <GraduationCap size={18} />,
    title: "Education",
    desc: "Academic journey & certs",
  },
  {
    key: "contact",
    icon: <MessageCircle size={18} />,
    title: "Connect",
    desc: "Say hello, let's collaborate",
  },
];

const AnimatedText = ({ text, className, delay = 0, children }) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 200 } },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className={`flex flex-wrap gap-x-[0.25em] justify-center md:justify-start ${className}`}>
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {word}
        </motion.span>
      ))}
      {children && (
        <motion.span variants={child} className="inline-block">
          {children}
        </motion.span>
      )}
    </motion.div>
  );
};

// Component for letter-by-letter stagger animation
const StaggeredLetters = ({ text, delay = 0, className }) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
  };

  return (
    <motion.span variants={container} initial="hidden" animate="show" className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span variants={child} key={letterIndex} className="inline-block">
              {letter}
            </motion.span>
          ))}
          {wordIndex !== words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  );
};

// Component for continuous looped letter-by-letter wave animation
const LoopedStaggeredLetters = ({ text, entranceDelay = 0, className }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: entranceDelay },
    },
  };
  
  const childEntrance = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
  };

  return (
    <motion.span variants={container} initial="hidden" animate="show" className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span variants={childEntrance} key={letterIndex} className="inline-block">
              <span
                className="inline-block animate-wave-text"
                style={{ 
                  animationDelay: `${(wordIndex * 10 + letterIndex) * 0.1}s`,
                  WebkitAnimationDelay: `${(wordIndex * 10 + letterIndex) * 0.1}s` 
                }}
              >
                {letter}
              </span>
            </motion.span>
          ))}
          {wordIndex !== words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  );
};

const HeroGreeting = ({ onNavigate }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section className="flex flex-col justify-center pt-2 pb-40 md:pt-6 md:pb-24 w-full relative overflow-hidden">
      
      {/* Ambient Background Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-background" />
        {/* Top Right Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] md:w-[50%] md:h-[60%] rounded-full bg-blue-600/10 dark:bg-blue-500/10 blur-[100px] md:blur-[140px]" />
        {/* Bottom Left Glow */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] md:w-[40%] md:h-[50%] rounded-full bg-blue-400/5 dark:bg-blue-600/10 blur-[100px] md:blur-[120px]" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Editorial Two-Column Layout - Top aligned via items-start */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-24 md:gap-20 lg:gap-24">
          
          {/* Left Column: Narrative Introduction (Centered on mobile, Left on desktop) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto flex-1 max-w-[500px] pt-4">
            
            {/* Avatar with Physical Layered Stack Effect */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 md:mb-10 relative"
            >
              <motion.div 
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* Physical Layer 3 (Outer Ring) */}
                <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-secondary border border-border/30 scale-[1.16] md:scale-[1.12] -z-20 shadow-[0_4px_20px_rgba(0,0,0,0.05)]" />
                
                {/* Physical Layer 2 (Middle Ring) */}
                <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-card border border-border/50 scale-[1.08] md:scale-[1.06] -z-10 shadow-sm" />
                
                {/* Physical Layer 1 (Top Avatar) */}
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-background border border-border relative z-30 shadow-sm cursor-pointer group"
                  onClick={() => setIsPreviewOpen(true)}
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src="/images/abu-zar.mishwani.webp"
                      alt="Abu Zar Mishwani"
                      className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Greeting */}
            <div className="mb-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-bold tracking-tight text-muted-foreground mb-2"
              >
                Hi, I'm
              </motion.div>
              
              <h1 className="text-[2.75rem] leading-[1.1] sm:text-5xl md:text-7xl font-black tracking-tighter text-foreground relative">
                <StaggeredLetters text="Abu Zar" delay={0.2} className="text-blue-600 dark:text-blue-500" /><br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="relative inline-block mt-1 sm:mt-0">
                  <LoopedStaggeredLetters text="Mishwani" entranceDelay={0.4} />
                  {/* Curvy underline back by popular demand! Now in Blue */}
                  <motion.svg 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
                    className="absolute -bottom-3 left-0 w-full h-3 text-blue-600/40 dark:text-blue-500/40" 
                    viewBox="0 0 100 10" 
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" strokeLinecap="round"/>
                  </motion.svg>
                </span>
              </h1>
            </div>

            {/* Word-by-Word Animated Bio */}
            <div className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-md">
              <AnimatedText text="Software Engineer & Tech Entrepreneur. Building scalable software solutions and leading" delay={0.8}>
                <a 
                  href="https://www.hindukushsoft.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors underline decoration-border hover:decoration-blue-500 underline-offset-4"
                >
                  HindukushSoft Technologies.
                </a>
              </AnimatedText>
            </div>

            {/* Quick Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-8"
            >
              {[
                { icon: <Mail className="w-4 h-4" />, href: "mailto:ceo@hindukushsoft.com", label: "Email" },
                { icon: <Github className="w-4 h-4" />, href: "https://github.com/abuzar-mishwani", label: "GitHub" },
                { icon: <Facebook className="w-4 h-4" />, href: "https://facebook.com/itsabuzarr", label: "Facebook" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/abuzar.mishwani", label: "Instagram" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 shrink-0 rounded-full border border-border bg-transparent flex items-center justify-center text-muted-foreground shadow-sm hover:shadow-md group btn-wave-hover"
                >
                  <span className="relative z-10 flex items-center justify-center group-hover:text-background transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Timeline Cards (Optimized for Mobile) */}
          <div className="relative flex justify-center md:justify-start w-full md:w-auto flex-1 max-w-[450px]">
            
            <div className="relative w-full max-w-[450px]">
              {/* The Vertical Animated Timeline Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1.0, ease: "easeInOut" }}
                className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-600/50 via-border to-transparent z-0"
              />

              <div className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                    onClick={() => onNavigate(item.key)}
                    whileHover={{ x: 8, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center gap-4 cursor-pointer z-10 pl-[64px] pr-4 py-3 rounded-2xl hover:bg-card/40 transition-colors border border-transparent hover:border-border/50 text-left"
                  >
                    {/* Timeline Node Point */}
                    <div className="absolute left-[9px] w-[14px] h-[14px] rounded-full border-2 border-background bg-border group-hover:bg-blue-600 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(37,99,235,0.5)] transition-all duration-300 z-10" />
                    
                    {/* Icon Box */}
                    <div className="absolute left-[36px] w-10 h-10 rounded-xl bg-card border border-border/60 flex items-center justify-center text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:border-blue-600/30 transition-all shadow-sm z-20">
                      {React.cloneElement(item.icon, { className: "w-[18px] h-[18px]" })}
                    </div>

                    {/* Card Text Content */}
                    <div className="flex-1 ml-[30px]">
                      <h3 className="text-lg font-bold text-foreground mb-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors flex items-center gap-2">
                        {item.title}
                        <ArrowRight size={14} className="text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Profile Picture Lightbox Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-lg w-full aspect-square md:h-[70vh] md:aspect-auto bg-card border border-border rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsPreviewOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background/50 hover:bg-background border border-border/50 transition-colors backdrop-blur-sm"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              <img
                src="/images/abu-zar.mishwani.webp"
                alt="Abu Zar Mishwani Full Size"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroGreeting;
