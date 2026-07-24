import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Sprout,
  Calculator,
  Utensils,
  Hotel,
  Store,
  ArrowLeft,
  Download,
  Code2,
  Brain,
  Wrench,
  Globe,
  HeartPulse,
  ShoppingBag,
  Smartphone,
  ShieldCheck,
  Monitor,
  Newspaper,
  Building2
} from "lucide-react";

const projects = [
  {
    icon: <Sprout className="w-5 h-5" />,
    name: "Model Farm Services Center KP",
    role: "Lead Developer",
    status: "Production",
    desc: "A massive production-grade enterprise MIS for the Agriculture Department. Currently rolling out across all 38 districts of Khyber Pakhtunkhwa under the Government of KP.",
    tags: ["React", "TypeScript", "Laravel", "MySQL", "Vite"],
    url: "https://mfsckp.com",
    linkText: "mfsckp.com"
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
    name: "Inventro POS Desktop",
    role: "Lead Developer",
    status: "Production",
    desc: "Desktop POS and inventory management system for retail businesses. Features billing, supplier management, khaata accounting, expense tracking, and role-based access.",
    tags: ["Electron", "React", "TypeScript", "SQLite"],
    url: "https://inventro.hindukushsoft.com",
    linkText: "inventro.hindukushsoft.com"
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    name: "Inventro Pocket",
    role: "Lead Mobile Developer",
    status: "Production - Play Store",
    desc: "Native Android companion app for Inventro POS Desktop. Real-time remote monitoring of daily sales, inventory catalogs, bank accounts, and customer dues from anywhere in the world.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "Android"],
    url: "https://play.google.com/store/apps/details?id=com.inventro.pocket",
    linkText: "Play Store"
  },
  {
    icon: <Calculator className="w-5 h-5" />,
    name: "GPA Calculator & Planner",
    role: "Solo Developer",
    status: "Production - #1 Worldwide",
    desc: "The #1 GPA Calculator app globally on Android. Custom grading scales, semester planning, target GPA forecasting, and professional PDF reporting.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
    url: "https://play.google.com/store/apps/details?id=advc.calc.easygpacalculator&hl=en",
    linkText: "Play Store"
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    name: "StayLedger ERP & Web App",
    role: "Lead Developer",
    status: "Production",
    desc: "Enterprise cloud-based hotel management ERP centralizing reservations, billing, multi-outlet POS, housekeeping, inventory, and HR workflows with role-based access control.",
    tags: ["React", "TypeScript", "Laravel", "MySQL"],
    url: "https://stayledger.hindukushsoft.com/",
    linkText: "stayledger.hindukushsoft.com"
  },
  {
    icon: <Monitor className="w-5 h-5" />,
    name: "StayLedger Desktop App",
    role: "Lead Developer",
    status: "Production",
    desc: "Cross-platform desktop suite for offline resilience and local data persistence, unifying hotel front-desk operations, billing, and reservation management.",
    tags: ["Electron", "React", "TypeScript", "SQLite"],
    url: "https://stayledger.hindukushsoft.com/",
    linkText: "stayledger.hindukushsoft.com"
  },
  {
    icon: <Brain className="w-5 h-5" />,
    name: "MindScreen AI",
    role: "Lead Developer",
    status: "In Development",
    desc: "AI-driven digital health platform delivering clinically validated screening tools (PHQ-9, GAD-7, ASRS). Features an intelligent assessment scoring engine, privacy-first UX, and real-time personalized insights.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    url: "https://mind-screen-ai.vercel.app/",
    linkText: "mind-screen-ai.vercel.app"
  },
  {
    icon: <HeartPulse className="w-5 h-5" />,
    name: "Kiddo Psychiatry",
    role: "Lead Web Developer",
    status: "Production",
    desc: "Specialized digital platform for a physician-led psychiatric practice delivering pediatric mental health care for children, teenagers, and families across Texas.",
    tags: ["WordPress", "PHP", "SEO", "Healthcare"],
    url: "https://kiddopsychiatry.com/",
    linkText: "kiddopsychiatry.com"
  },
  {
    icon: <ShoppingBag className="w-5 h-5" />,
    name: "Austin Rug Store",
    role: "Lead Web Developer",
    status: "Production",
    desc: "E-commerce platform and digital showroom for a premier physical retail showroom in Austin, Texas, specializing in handmade wool and luxury Oushak rugs.",
    tags: ["WordPress", "WooCommerce", "PHP", "E-Commerce"],
    url: "https://www.austinrugstore.com/",
    linkText: "austinrugstore.com"
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    name: "RTA Fines",
    role: "Lead Developer",
    status: "Production",
    desc: "Informational portal offering guides, penalty lookups, and appeal procedures for understanding and managing traffic fines under the Roads and Transport Authority in Dubai, UAE.",
    tags: ["WordPress", "PHP", "SEO", "Elementor"],
    url: "https://rtafines.com",
    linkText: "rtafines.com"
  },
  {
    icon: <Newspaper className="w-5 h-5" />,
    name: "TechABU",
    role: "Founder & CEO",
    status: "Production",
    desc: "Digital media platform founded in 2020 serving programming tutorials, SEO insights, freelancing guides, and modern technology innovation news.",
    tags: ["WordPress", "PHP", "SEO", "Tailwind CSS"],
    url: "https://techabu.co",
    linkText: "techabu.co"
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    name: "Spot Web Tools Platform",
    role: "Founder & Lead Developer",
    status: "Production",
    desc: "All-in-one digital utility platform by HindukushSoft offering 190+ free web, developer, SEO, text converter, and productivity utilities in one fast web application.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Kotlin", "Android"],
    url: "https://app.techabu.co",
    linkText: "app.techabu.co"
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    name: "Spot Web Tools Android App",
    role: "Lead Mobile Developer",
    status: "Production - Play Store",
    desc: "Native Android utility platform bringing 190+ developer utilities, converter tools, and SEO helpers directly to mobile devices.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "Android"],
    url: "https://play.google.com/store/apps/details?id=com.swt.spotwebtools&hl=en",
    linkText: "Play Store"
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
    "WordPress": "wordpress",
    "WooCommerce": "woocommerce",
    "Elementor": "elementor",
    "SEO": "google",
    "Shopify": "shopify",
    "E-Commerce": "shopify",
    "Healthcare": "redux"
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
        <div className="text-center md:text-left mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button 
              onClick={(e) => {
                onBack();
                e.currentTarget.blur();
              }}
              className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6 mx-auto md:mx-0 outline-none select-none"
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
          className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-10 md:my-14 origin-center"
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
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.currentTarget.blur()}
                        className="text-lg font-bold text-blue-600 dark:text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-2 relative inline-flex outline-none select-none"
                      >
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
