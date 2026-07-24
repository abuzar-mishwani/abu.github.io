import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Code2, 
  Briefcase, 
  TrendingUp, 
  Globe2, 
  Terminal,
  Cpu,
  Database,
  Smartphone,
  Wrench,
  CheckCircle2,
  Sparkles,
  Layers
} from "lucide-react";

const getTagSlug = (tag) => {
  const map = {
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "PHP": "php",
    "Kotlin": "kotlin",
    "Kotlin Mobile": "kotlin",
    "Java": "openjdk",
    "Python": "python",
    "React": "react",
    "Next.js": "nextdotjs",
    "Vite": "vite",
    "Tailwind CSS": "tailwindcss",
    "HTML5 / CSS3": "html5",
    "Laravel": "laravel",
    "Node.js": "nodedotjs",
    "MySQL": "mysql",
    "PostgreSQL": "postgresql",
    "SQLite": "sqlite",
    "MongoDB": "mongodb",
    "REST APIs": "postman",
    "Android SDK": "android",
    "Android": "android",
    "Jetpack Compose": "jetpackcompose",
    "Git & GitHub": "git",
    "Git": "git",
    "Docker": "docker",
    "VS Code": "visualstudiocode",
    "Figma": "figma",
    "Vercel": "vercel",
    "Firebase": "firebase",
    "Postman": "postman",
  };
  return map[tag] || tag.toLowerCase().replace(/[^a-z0-9]/g, "");
};

const techCategories = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "PHP", "Kotlin", "Java", "Python"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    name: "Backend & Database",
    skills: ["Laravel", "Node.js", "MySQL", "PostgreSQL", "SQLite", "MongoDB", "REST APIs"],
  },
  {
    name: "Mobile",
    skills: ["Android SDK", "Jetpack Compose", "Kotlin Mobile"],
  },
  {
    name: "Tools & DevOps",
    skills: ["Git & GitHub", "Docker", "VS Code", "Figma", "Vercel", "Firebase", "Postman"],
  },
];

const executiveSkills = [
  "Team Leadership & Technical Mentorship",
  "System Architecture & Scalability Strategy",
  "Startup Ecosystem & Business Development",
  "Agile Project Management & Delivery",
  "IT Problem-Solving & Diagnostics",
  "Cross-Functional Stakeholder Alignment",
];

const marketingSkills = [
  "Technical & On-Page SEO Optimization",
  "Off-Page Strategy & Backlink Building",
  "Web Core Vitals & Speed Performance",
  "Content Strategy & Copywriting",
  "Local SEO & Search Visibility Strategy",
];

const spokenLanguages = [
  { name: "Pashto (پښتو)", level: "Native / First Language" },
  { name: "Urdu (اُردو)", level: "Native Proficiency" },
  { name: "Khowar (کھوار)", level: "Native Proficiency" },
  { name: "English", level: "Professional Fluent" },
];

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

const SkillsGrid = ({ onBack }) => {
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
              <StaggeredLetters text="Technical &" delay={0.1} /><br className="hidden md:block" />
              <StaggeredLetters text="Executive Arsenal" delay={0.4} />
            </h2>
            <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0">
              <AnimatedText text="A comprehensive toolbox built over years of engineering, entrepreneurship, and leading technical teams." delay={0.7} className="justify-center md:justify-start" />
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

            {/* 1. Engineering Stack */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col md:flex-row items-start gap-6 md:gap-24 py-16 md:py-24 border-b border-border/30 last:border-0"
            >
              {/* Left Column: Icon & Name */}
              <div className="w-full md:w-1/3 flex flex-col items-start pt-1 sticky top-32">
                <div className="w-12 h-12 rounded-full border border-border bg-background shadow-sm flex items-center justify-center text-foreground mb-6">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-2">
                  Engineering Stack
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  Technologies, frameworks & platforms
                </p>
              </div>

              {/* Right Column: Categories & Badges */}
              <div className="w-full md:w-2/3 space-y-10">
                {techCategories.map((category, idx) => (
                  <div key={idx} className="space-y-3.5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2.5">
                      {category.skills.map((skill) => {
                        const iconSlug = getTagSlug(skill);
                        return (
                          <span
                            key={skill}
                            className="px-4 py-2 rounded-full border border-border bg-secondary/40 text-xs md:text-sm font-medium text-foreground shadow-xs inline-flex items-center gap-2.5 hover:border-blue-500/50 transition-all duration-200 hover:scale-[1.02] cursor-default"
                          >
                            <img
                              src={`https://cdn.simpleicons.org/${iconSlug}`}
                              alt={skill}
                              className="w-4 h-4 object-contain shrink-0"
                              onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. Executive Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col md:flex-row items-start gap-6 md:gap-24 py-16 md:py-24 border-b border-border/30 last:border-0"
            >
              <div className="w-full md:w-1/3 flex flex-col items-start pt-1 sticky top-32">
                <div className="w-12 h-12 rounded-full border border-border bg-background shadow-sm flex items-center justify-center text-foreground mb-6">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-2">
                  Executive Leadership
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  Management & strategy
                </p>
              </div>

              <div className="w-full md:w-2/3">
                <ul className="space-y-5">
                  {executiveSkills.map((skill, j) => (
                    <li key={j} className="flex items-center gap-4 text-lg md:text-xl text-foreground font-medium leading-relaxed">
                      <span className="shrink-0 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* 3. Growth & SEO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col md:flex-row items-start gap-6 md:gap-24 py-16 md:py-24 border-b border-border/30 last:border-0"
            >
              <div className="w-full md:w-1/3 flex flex-col items-start pt-1 sticky top-32">
                <div className="w-12 h-12 rounded-full border border-border bg-background shadow-sm flex items-center justify-center text-foreground mb-6">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-2">
                  Growth & SEO
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  Search visibility & reach
                </p>
              </div>

              <div className="w-full md:w-2/3">
                <ul className="space-y-5">
                  {marketingSkills.map((skill, j) => (
                    <li key={j} className="flex items-center gap-4 text-lg md:text-xl text-foreground font-medium leading-relaxed">
                      <span className="shrink-0 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* 4. Spoken Languages */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col md:flex-row items-start gap-6 md:gap-24 py-16 md:py-24"
            >
              <div className="w-full md:w-1/3 flex flex-col items-start pt-1 sticky top-32">
                <div className="w-12 h-12 rounded-full border border-border bg-background shadow-sm flex items-center justify-center text-foreground mb-6">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-2">
                  Spoken Languages
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  Global & regional communication
                </p>
              </div>

              <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {spokenLanguages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-background transition-all group btn-wave-hover cursor-default"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-full bg-secondary flex items-center justify-center text-foreground transition-colors relative z-10 group-hover:bg-background/20 group-hover:text-background dark:group-hover:text-background">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 relative z-10">
                      <div className="text-sm font-bold text-foreground transition-colors group-hover:text-background dark:group-hover:text-background">
                        {lang.name}
                      </div>
                      <div className="text-xs font-semibold text-muted-foreground truncate transition-colors group-hover:text-background/80 dark:group-hover:text-background/80">
                        {lang.level}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsGrid;
