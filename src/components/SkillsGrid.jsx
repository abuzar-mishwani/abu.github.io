import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Code2, Briefcase, TrendingUp, Languages } from "lucide-react";

const techStack = [
  {
    name: "Languages",
    shields: [
      "https://img.shields.io/badge/TypeScript-0d1117?style=for-the-badge&logo=typescript&logoColor=3178C6",
      "https://img.shields.io/badge/JavaScript-0d1117?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
      "https://img.shields.io/badge/PHP-0d1117?style=for-the-badge&logo=php&logoColor=777BB4",
      "https://img.shields.io/badge/Kotlin-0d1117?style=for-the-badge&logo=kotlin&logoColor=7F52FF",
      "https://img.shields.io/badge/Java-0d1117?style=for-the-badge&logo=openjdk&logoColor=ED8B00",
      "https://img.shields.io/badge/Python-0d1117?style=for-the-badge&logo=python&logoColor=3776AB",
    ],
  },
  {
    name: "Frontend",
    shields: [
      "https://img.shields.io/badge/React-0d1117?style=for-the-badge&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/Next.js-0d1117?style=for-the-badge&logo=next.js&logoColor=ffffff",
      "https://img.shields.io/badge/Vite-0d1117?style=for-the-badge&logo=vite&logoColor=646CFF",
      "https://img.shields.io/badge/Tailwind-0d1117?style=for-the-badge&logo=tailwind-css&logoColor=06B6D4",
    ],
  },
  {
    name: "Backend & Database",
    shields: [
      "https://img.shields.io/badge/Laravel-0d1117?style=for-the-badge&logo=laravel&logoColor=FF2D20",
      "https://img.shields.io/badge/Node.js-0d1117?style=for-the-badge&logo=node.js&logoColor=339933",
      "https://img.shields.io/badge/MySQL-0d1117?style=for-the-badge&logo=mysql&logoColor=4479A1",
      "https://img.shields.io/badge/PostgreSQL-0d1117?style=for-the-badge&logo=postgresql&logoColor=4169E1",
      "https://img.shields.io/badge/SQLite-0d1117?style=for-the-badge&logo=sqlite&logoColor=003B57",
      "https://img.shields.io/badge/MongoDB-0d1117?style=for-the-badge&logo=mongodb&logoColor=47A248",
    ],
  },
  {
    name: "Mobile",
    shields: [
      "https://img.shields.io/badge/Android-0d1117?style=for-the-badge&logo=android&logoColor=34A853",
      "https://img.shields.io/badge/Jetpack_Compose-0d1117?style=for-the-badge&logo=jetpack-compose&logoColor=4285F4",
    ],
  },
  {
    name: "Tools & DevOps",
    shields: [
      "https://img.shields.io/badge/Git-0d1117?style=for-the-badge&logo=git&logoColor=F05032",
      "https://img.shields.io/badge/Docker-0d1117?style=for-the-badge&logo=docker&logoColor=2496ED",
      "https://img.shields.io/badge/VS_Code-0d1117?style=for-the-badge&logo=visual-studio-code&logoColor=007ACC",
      "https://img.shields.io/badge/Figma-0d1117?style=for-the-badge&logo=figma&logoColor=F24E1E",
      "https://img.shields.io/badge/Vercel-0d1117?style=for-the-badge&logo=vercel&logoColor=ffffff",
      "https://img.shields.io/badge/Firebase-0d1117?style=for-the-badge&logo=firebase&logoColor=DD2C00",
      "https://img.shields.io/badge/Postman-0d1117?style=for-the-badge&logo=postman&logoColor=FF6C37",
    ],
  },
];

const executiveSkills = [
  "Team Leadership & Mentorship",
  "Technical Architecture Strategy",
  "Startup Ecosystem Building",
  "Project Management",
  "IT Problem-Solving & Diagnostics",
  "Cross-functional Communication",
];

const marketingSkills = [
  "Technical & On-Page SEO",
  "Off-Page SEO Strategy",
  "Web Performance & Speed Optimization",
  "Content Writing & Strategy",
  "Local SEO Optimization",
];

const spokenLanguages = [
  { name: "Pashto (پښتو)", level: "Native" },
  { name: "Urdu (اُردو)", level: "Native" },
  { name: "Khowar (کھوار)", level: "Native" },
  { name: "English", level: "Fluent" },
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
              <AnimatedText text="A powerful toolbox built over years of engineering, entrepreneurship, and leading technical teams." delay={0.7} className="justify-center md:justify-start" />
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
              <div className="w-full md:w-1/3 flex flex-col items-start pt-1 sticky top-32">
                <div className="w-12 h-12 rounded-full border border-border bg-background shadow-sm flex items-center justify-center text-foreground mb-6">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                  Engineering Stack
                </h3>
              </div>

              <div className="w-full md:w-2/3 max-w-none text-left space-y-12">
                {techStack.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {category.shields.map((shield, i) => (
                        <div 
                          key={i}
                          className="relative rounded-[3px] ring-1 ring-border/40 hover:ring-primary/40 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 overflow-hidden flex items-center justify-center bg-[#0d1117]"
                        >
                          <img
                            src={shield}
                            alt="tech badge"
                            className="h-7 cursor-default"
                          />
                        </div>
                      ))}
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
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                  Executive Leadership
                </h3>
              </div>

              <div className="w-full md:w-2/3 max-w-none text-left">
                <ul className="space-y-6">
                  {executiveSkills.map((skill, j) => (
                    <li key={j} className="flex gap-4 text-xl text-foreground font-medium leading-relaxed">
                      <span className="shrink-0 w-2 h-2 rounded-full bg-blue-500/50 mt-3" />
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
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                  Growth & SEO
                </h3>
              </div>

              <div className="w-full md:w-2/3 max-w-none text-left">
                <ul className="space-y-6">
                  {marketingSkills.map((skill, j) => (
                    <li key={j} className="flex gap-4 text-xl text-foreground font-medium leading-relaxed">
                      <span className="shrink-0 w-2 h-2 rounded-full bg-blue-500/50 mt-3" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsGrid;
