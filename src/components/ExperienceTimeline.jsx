import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Briefcase, ExternalLink, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Founder, CEO & Lead Developer",
    company: "HindukushSoft Technologies Pvt. Ltd.",
    url: "https://www.hindukushsoft.com",
    date: "May 2025 — Present",
    location: "Chitral, Pakistan",
    points: [
      "Founded and registered the first software house in Chitral, creating IT jobs and opportunities for local youth",
      "Signed MoU with University of Chitral to mentor students and support internships",
      "Acting as Lead Developer and CTO, responsible for technical strategy, architecture, and mentoring the team",
      "Introduced the first paid internship program in Chitral through the PSEB Skill Bridge Apprenticeship Program",
    ],
  },
  {
    role: "Founder, Editor-in-Chief & Tech Writer",
    company: "TechABU",
    url: "https://techabu.co",
    date: "Sep 2020 — Present",
    location: "Drosh, Pakistan",
    points: [
      "Built and managed a technology blog, writing in-depth articles on WordPress, SEO, and AI",
      "Achieved 81% increase in readership and engagement through quality content",
      "Applied SEO strategies that increased website traffic by 92%",
    ],
  },
  {
    role: "Web Developer & SEO Specialist",
    company: "SoftLixx Technologies Pvt Ltd",
    url: "https://softlixx.com",
    date: "Jan 2025 — May 2025",
    location: "Peshawar, Pakistan",
    points: [
      "Optimized 5+ websites for speed, mobile responsiveness, and user experience using WordPress, Elementor, and SEO best practices",
      "Implemented advanced SEO strategies, increasing site rankings and organic traffic by 20%",
    ],
  },
  {
    role: "SEO Strategist",
    company: "COCO Development Group (Indonesia)",
    url: "https://cocodevelopmentgroup.com",
    date: "Feb 2025 — May 2025",
    location: "Remote",
    points: [
      "Resolved all technical and on-page SEO issues, leading to better indexing and performance",
      "Improved keyword rankings and optimized website structure, increasing organic visibility",
      "Enhanced website speed and achieved 95+ score on PageSpeed Insights",
    ],
  },
  {
    role: "Writer (Intern)",
    company: "Deputy Commissioner Summer Internship Program",
    date: "Sep 2022 — Nov 2022",
    location: "Lower Chitral",
    points: [
      "Researched and authored a district gazetteer (awaiting publication)",
      "Conducted detailed analysis and documentation to support local government initiatives",
    ],
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
          {wordIndex !== words.length - 1 && <span className="inline-block">&nbsp;</span>}
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

const ExperienceTimeline = ({ onBack }) => {
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
              <StaggeredLetters text="Where I've" delay={0.1} /><br className="hidden md:block" />
              <StaggeredLetters text="Worked" delay={0.4} />
            </h2>
            <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0">
              <AnimatedText text="From founding companies to building products at scale - every role has shaped who I am today." delay={0.7} className="justify-center md:justify-start" />
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
            {experiences.map((exp, index) => {
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
                    <div className="text-2xl font-mono text-blue-600 dark:text-blue-500 font-medium tracking-tight mb-5">{exp.date}</div>
                    
                    {exp.url ? (
                      <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-foreground uppercase tracking-widest hover:text-blue-600 transition-colors flex items-center gap-2 relative inline-flex">
                        {exp.company} 
                        <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    ) : (
                      <div className="text-lg font-bold text-foreground uppercase tracking-widest">{exp.company}</div>
                    )}
                    
                    <div className="text-sm font-medium text-muted-foreground mt-3 flex items-center gap-1.5">
                      <MapPin size={16} />{exp.location}
                    </div>
                  </div>

                  {/* Right Column: Role & Points */}
                  <div className="w-full md:w-2/3 max-w-none text-left">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
                      {exp.role}
                    </h3>
                    <ul className="space-y-6">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex gap-4 text-lg text-muted-foreground leading-relaxed">
                          <span className="shrink-0 w-2 h-2 rounded-full bg-blue-500/50 mt-2.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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

export default ExperienceTimeline;
