import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, FileBadge, Award, MapPin, Building } from "lucide-react";

const education = [
  {
    degree: "Master of Philosophy (MPhil) in Computer Science",
    school: "University of Chitral",
    period: "Sep 2025 - 2027 (Expected)",
    location: "Chitral, Pakistan",
    inProgress: true,
    details: "Advanced research in computer science, focusing on modern software engineering paradigms, artificial intelligence, and scalable systems. Preparing for a PhD and aiming to contribute to academic research in technology.",
  },
  {
    degree: "Bachelor of Science in Computer Science (BS-CS)",
    school: "University of Chitral",
    period: "Sep 2020 - Dec 2024",
    location: "Chitral, Pakistan",
    gpa: "3.60 / 4.0",
    details:
      "Coursework: Web Development, Software Engineering, Database, Compiler Construction, Theory of Automata, Networking, Network Security, Cryptography, Artificial Intelligence, and more.",
    fyp: "Built Khowar Folktales, an Android app using Java, Firebase, and AndroidX to digitize and preserve Khowar folktales.",
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    school: "Government Higher Secondary School, Drosh",
    period: "Aug 2018 - Jul 2020",
    location: "Drosh, Pakistan",
    details: "Core subjects included Computer Science, Mathematics, and Physics. Built a strong foundational understanding of programming logic and algorithms. Started the journey into web development and freelancing during this period.",
  },
  {
    degree: "Matriculation (Science Group)",
    school: "Drosh Public School & College",
    period: "Aug 2016 - Jul 2018",
    location: "Drosh, Pakistan",
    details: "General science group with a focus on Mathematics, Physics, and Computer Sciences. Developed an early interest in computing and technology through school computer labs and personal exploration.",
  },
];

const certifications = [
  {
    name: "Google IT Support",
    issuer: "Google",
  },
  {
    name: "SEO Specialization",
    issuer: "UC Davis",
  },
  {
    name: "Certificate IT",
    issuer: "Trade Testing Board, Peshawar",
  },
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

const EducationSection = ({ onBack }) => {
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
              <StaggeredLetters text="Academic" delay={0.1} /><br className="hidden md:block" />
              <StaggeredLetters text="Journey" delay={0.4} />
            </h2>
            <div className="w-16 md:w-24 h-1.5 rounded-full bg-primary/20 mb-8 mx-auto md:mx-0"></div>
            <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0">
              <AnimatedText text="A solid academic foundation in Computer Science, complemented by industry certifications from Google and UC Davis." delay={0.7} className="justify-center md:justify-start" />
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
            
            {/* Academic Degrees */}
            {education.map((edu, index) => {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                  className="flex flex-col md:flex-row items-start gap-6 md:gap-24 py-16 md:py-24 border-b border-border/30 last:border-0 group"
                >
                  {/* Left Column: Date & Location */}
                  <div className="w-full md:w-1/3 flex flex-col items-start pt-1 sticky top-32">
                    <div className="w-12 h-12 rounded-full border border-border bg-background shadow-sm flex items-center justify-center text-foreground mb-6">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-mono text-blue-600 dark:text-blue-500 font-medium tracking-tight mb-5">{edu.period}</div>
                    
                    <div className="text-lg font-bold text-foreground uppercase tracking-widest leading-relaxed">{edu.school}</div>
                    
                    <div className="text-sm font-medium text-muted-foreground mt-3 flex items-center gap-1.5">
                      <MapPin size={16} />{edu.location}
                    </div>
                  </div>

                  {/* Right Column: Degree & Details */}
                  <div className="w-full md:w-2/3 max-w-none text-left">
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
                      {edu.degree}
                    </h3>
                    
                    {edu.inProgress && (
                      <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1 rounded-full bg-foreground text-background font-sans text-xs font-semibold uppercase tracking-wide shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
                        In Progress
                      </div>
                    )}

                    {(edu.details) && (
                      <div className="mt-8 space-y-6">
                        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                          {edu.details}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Certifications Row */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col md:flex-row items-start gap-6 md:gap-24 py-16 md:py-24 border-b border-border/30 last:border-0"
            >
              <div className="w-full md:w-1/3 flex flex-col items-start pt-1 sticky top-32">
                <div className="w-12 h-12 rounded-full border border-border bg-background shadow-sm flex items-center justify-center text-foreground mb-6">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                  Certifications
                </h3>
              </div>

              <div className="w-full md:w-2/3 max-w-none text-left">
                <div className="space-y-10">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group cursor-default">
                      <div className="w-14 h-14 shrink-0 rounded-full border border-border bg-background shadow-sm flex items-center justify-center text-foreground group-hover:border-blue-500/50 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-all">
                        <FileBadge className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">{cert.name}</div>
                        <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                          {cert.issuer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
