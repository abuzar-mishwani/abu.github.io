import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Sprout,
  Calculator,
  Utensils,
  Hotel,
  Store,
  Star,
  CheckCircle2,
  ArrowLeft,
  Download,
  Code2
} from "lucide-react";

const projects = [
  {
    icon: <Sprout className="w-5 h-5" />,
    name: "Digitization of Model Farm Services Center — KP",
    role: "Lead Developer",
    status: "Production",
    desc: "A massive production-grade enterprise MIS for the Agriculture Department. Currently rolling out across all 38 districts of Khyber Pakhtunkhwa under the Government of KP.",
    tags: ["React", "TypeScript", "Laravel", "MySQL", "Vite"],
    url: "https://mfsckp.com",
    linkText: "mfsckp.com",
  },
  {
    icon: <Calculator className="w-5 h-5" />,
    name: "GPA Calculator & Planner",
    role: "Solo Developer",
    status: "Production — #1 Worldwide",
    desc: "The #1 GPA Calculator app globally on Android. Custom grading scales, semester planning, target GPA forecasting, and professional PDF reporting.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
    url: "https://play.google.com/store/apps/details?id=advc.calc.easygpacalculator&hl=en",
    linkText: "Play Store"
  },
  {
    icon: <Utensils className="w-5 h-5" />,
    name: "Cibao Grille",
    role: "Lead Developer",
    status: "Production",
    desc: "Full-stack web platform for a fine dining restaurant in Naples, Florida. Dynamic menu management, CMS-powered content, and polished brand experience.",
    tags: ["Next.js", "Payload CMS", "TypeScript"],
    url: "https://cibaogrille.com",
    linkText: "cibaogrille.com"
  },
  {
    icon: <Hotel className="w-5 h-5" />,
    name: "Hotel Innjigaan",
    role: "Lead Developer",
    status: "Production",
    desc: "Custom hospitality website with room showcases, booking inquiries, gallery, and integrated desktop hotel management software for a client in Chitral, Pakistan.",
    tags: ["React.js", "TypeScript", "Vite", "Tailwind CSS"],
    url: "https://innjigaan.com",
    linkText: "innjigaan.com"
  },
  {
    icon: <Store className="w-5 h-5" />,
    name: "Inventro POS",
    role: "Lead Developer",
    status: "Production",
    desc: "Desktop POS and inventory management system for retail businesses. Features billing, supplier management, khaata management, expense tracking, and role-based access.",
    tags: ["Electron", "React", "TypeScript", "SQLite"],
    url: "https://inventro.hindukushsoft.com",
    linkText: "inventro.hindukushsoft.com"
  }
];

const getTagSlug = (tag) => {
  const map = {
    "React": "react",
    "React.js": "react",
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "Laravel": "laravel",
    "MySQL": "mysql",
    "Vite": "vite",
    "TailwindCSS": "tailwindcss",
    "Tailwind CSS": "tailwindcss",
    "Tailwind": "tailwindcss",
    "Node.js": "nodedotjs",
    "Next.js": "nextdotjs",
    "Payload CMS": "payload",
    "PHP": "php",
    "Kotlin": "kotlin",
    "Jetpack Compose": "jetpackcompose",
    "Material 3": "materialdesign",
    "Java": "openjdk",
    "Python": "python",
    "MongoDB": "mongodb",
    "PostgreSQL": "postgresql",
    "SQLite": "sqlite",
    "Electron": "electron",
    "Android": "android",
    "Git": "git",
    "Docker": "docker",
    "Figma": "figma",
  };
  return map[tag] || tag.toLowerCase().replace(/[^a-z0-9]/g, "");
};

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

const AnimatedText = ({ text, className, delay = 0 }) => {
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
    <motion.div variants={container} initial="hidden" animate="show" className={`flex flex-wrap gap-x-[0.25em] ${className}`}>
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const ProjectsShowcase = ({ onBack }) => {
  return (
    <section className="relative w-full py-12 md:py-32 overflow-hidden">
      


      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center md:text-left mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button 
              onClick={onBack}
              className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6 mx-auto md:mx-0"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>

            
            <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-8 leading-[1.1] relative">
              <StaggeredLetters text="Products People" delay={0.1} /><br className="hidden md:block" />
              <StaggeredLetters text="Actually Use" delay={0.4} />
            </h2>
            <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0">
              <AnimatedText text="As CEO & Lead Developer at HindukushSoft Technologies, I architect and build production systems that serve thousands of users." delay={0.7} className="justify-center md:justify-start" />
            </div>
          </motion.div>
        </div>

        {/* Hero Separator */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16 md:mb-24 origin-center"
        />

        {/* Clean Editorial Layout */}
        <div className="relative">
          <div className="space-y-0">
            {projects.map((project, index) => {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                  className="flex flex-col md:flex-row items-start gap-6 md:gap-24 py-16 md:py-24 border-b border-border/30 last:border-0 group"
                >
                  {/* Left Column: Icon & Name */}
                  <div className="w-full md:w-1/3 flex flex-col items-start pt-1 sticky top-32">
                    <div className="w-12 h-12 rounded-full border border-border bg-background shadow-sm flex items-center justify-center text-foreground mb-6">
                      {project.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
                      {project.name}
                    </h3>
                    
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-blue-600 dark:text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-2 relative inline-flex">
                        {project.linkText}
                        <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    )}
                  </div>

                  {/* Right Column: Details & Tech */}
                  <div className="w-full md:w-2/3 max-w-none text-left">
                    <div className="flex flex-wrap items-center gap-2.5 mb-6">
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-sans text-xs font-semibold uppercase tracking-wide shadow-sm">
                        {project.role}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-foreground text-background font-sans text-xs font-semibold uppercase tracking-wide shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
                        {project.status}
                      </div>
                    </div>

                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-medium">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mb-8">
                      {project.tags.map((tag) => {
                        const iconSlug = getTagSlug(tag);
                        return (
                          <span key={tag} className="px-3.5 py-1.5 rounded-full border border-border bg-secondary/40 dark:bg-secondary/40 text-xs font-normal text-foreground shadow-xs inline-flex items-center gap-2 hover:border-blue-500/50 transition-colors">
                            <img 
                              src={`https://cdn.simpleicons.org/${iconSlug}`} 
                              alt={tag} 
                              className="w-3.5 h-3.5 object-contain shrink-0" 
                              onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsShowcase;
