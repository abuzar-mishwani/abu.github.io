import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  User,
  Heart,
  Monitor,
  Compass,
  BookOpen,
  Briefcase,
  Code,
  Building2,
  Laptop,
  Handshake,
  Wrench,
  Gamepad2,
  Target,
  Quote,
} from "lucide-react";

const chapters = [
  {
    icon: <User className="w-5 h-5" />,
    title: "Who I Am",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>My name is <span className="font-semibold text-foreground">Abu Zar Mishwani</span>, and people close to me also call me <span className="font-semibold text-foreground">Mufasa</span>, a nickname I proudly carry. It is inspired by the wise and brave character from <a href="https://en.wikipedia.org/wiki/The_Lion_King" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:underline">The Lion King</a>. The name Mufasa means king or brave leader, and I have always loved it because it reminds me to lead with strength, kindness, and responsibility.</p>
        <p>I was born on <span className="font-semibold text-foreground">August 24, 2000</span>, in a small and remote village called <span className="font-semibold text-foreground">Domel Nisar</span>, near Arandu, close to the Afghan border in Chitral, Pakistan. It is one of those places where life is peaceful but isolated. There were no proper schools, no healthcare, and no communication network.</p>
        <p>My father, a government school teacher and principal, realized that his children's future could not be built there. He once told my mother, "Our children cannot grow here the way we want them to." With that thought and faith in Allah, he decided to move our family to Drosh, a small town in Chitral, so we could get an education and a better life.</p>
        <p>That one decision changed everything. Today, when I look back, I know that every achievement in my life began with his foresight and sacrifices.</p>
      </div>
    ),
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Family and Faith",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>I come from a <span className="font-semibold text-foreground">Pashtun Muslim family</span> that values simplicity, honesty, and education. My father has been a teacher for over 32 years, educating children in the most remote valleys of Chitral. His love for knowledge and his service to others taught me that true success lies in helping people. My mother is the most peaceful and loving person I know. Her prayers are the real reason behind everything good in my life.</p>
        <p>I am a Muslim, and my faith defines who I am. I learned Islam first from my parents, then through the lectures of Dr. Zakir Naik and Dr. Israr Ahmad, who helped me understand the Quran deeply.</p>
        <blockquote className="pl-6 border-l-[3px] border-blue-500 text-foreground text-xl italic py-2 my-8 font-serif">
          "Indeed, with me is my Lord; He will guide me." <span className="block text-base text-muted-foreground font-sans mt-2 not-italic">— Surah Ash-Shu'ara 26:62</span>
        </blockquote>
        <p>Whenever I face challenges, I remind myself of this verse, and it fills me with peace and direction.</p>
      </div>
    ),
  },
  {
    icon: <Monitor className="w-5 h-5" />,
    title: "The Beginning",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>My journey with computers started in <span className="font-semibold text-foreground">2010</span>, when I was in fourth grade. I was a <span className="font-semibold text-foreground">ten-year-old boy</span> who had never even seen a computer. One day my father came home and said, "Abu Zar, a <span className="font-semibold text-foreground">computer center</span> has opened nearby. Would you like to join?"</p>
        <p>I didn't really understand what a computer was, but something in me was curious. Without thinking much, I said, "Yes, Baba, I'll join!"</p>
        <p>That single decision changed my life. My small hands struggled to type on the keyboard, and I used to get excited every time I learned something new in <span className="font-semibold text-foreground">MS Word or Excel</span>. After a few months, I received my first computer certificate, and it felt like a big achievement.</p>
        <p>Not long after, my father bought me my first computer, an <span className="font-semibold text-foreground">old Pentium 2</span>. At that age, I only used it to play games. But as I grew older, my curiosity grew with me. In <span className="font-semibold text-foreground">2016</span>, after many requests, I finally got my first <span className="font-semibold text-foreground">smartphone</span>. That was when everything changed.</p>
        <p>With that phone came <span className="font-semibold text-foreground">internet access</span>. I soon found out I needed a <span className="font-semibold text-foreground">Wi-Fi adapter</span>, which cost around Rs. 800, but my pocket money was only Rs. 10 a day. When my elder sister came home, she gave me Rs. 1000 without a second thought.</p>
        <p>That day felt magical. I bought the adapter, connected to the internet, and for the first time, I opened <span className="font-semibold text-foreground">Google</span> on my computer. I still remember the feeling. I sat back and said to myself, "Now the world is in front of me."</p>
      </div>
    ),
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Exploration & Curiosity",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>Once I had <span className="font-semibold text-foreground">internet</span>, I spent hours exploring. At first, I didn't even know what to search for. I would sit there thinking, "What should I learn today?"</p>
        <p>Then one day, a random thought crossed my mind:</p>
        <blockquote className="pl-6 border-l-[3px] border-blue-500 text-foreground text-xl italic py-2 my-8 font-serif">
          "How are websites made?"
        </blockquote>
        <p>That simple question opened the door to my journey as a <span className="font-semibold text-foreground">developer</span>. I started experimenting with website builders like <span className="font-semibold text-foreground">Wix</span>, then discovered <span className="font-semibold text-foreground">WordPress</span>, and slowly learned how to build websites. I even bought my first <span className="font-semibold text-foreground">domain</span> with Eidi money, not even knowing what I would do with it.</p>
        <p>Back then, I had <span className="font-semibold text-foreground">no teacher or mentor</span>. No one in my family knew about computers, and no one in my town could guide me. It was just me, my passion, and <span className="font-semibold text-foreground">YouTube</span>. Every day I faced problems I couldn't solve, and every night I tried again.</p>
      </div>
    ),
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Education",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>I completed my <span className="font-semibold text-foreground">matriculation from Drosh Public School and College</span>, and later did my <span className="font-semibold text-foreground">ICS (Intermediate in Computer Science) from Government Higher Secondary School Drosh</span>.</p>
        <p>After that, I joined the <span className="font-semibold text-foreground">University of Chitral</span> for my <span className="font-semibold text-foreground">BS in Computer Science</span>, which I completed in <span className="font-semibold text-foreground">December 2024</span>.</p>
        <p>I am now pursuing my <span className="font-semibold text-foreground">MPhil in Computer Science</span> and plan to complete my PhD before turning 30, InshaAllah.</p>
      </div>
    ),
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "First Earnings",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>My freelancing journey began while I was doing my ICS. It started when I realized that the skills I was learning could actually help others. I began offering small services like <span className="font-semibold text-foreground">creating WordPress websites, doing SEO, and writing content</span>.</p>
        <p>I still remember the day I received my <span className="font-semibold text-foreground">first payment</span>. It was not a big amount, but it felt like I had conquered the world. Earning money for the first time through something I built on my own was an unforgettable moment.</p>
        <p>Freelancing gave me <span className="font-semibold text-foreground">independence, confidence, and direction</span>. It taught me how to manage clients, work with deadlines, and most importantly, trust my own skills.</p>
      </div>
    ),
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Building Projects",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>In <span className="font-semibold text-foreground">2020</span>, I started a tech blog called <a href="https://techabu.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:underline">TechABU</a>, where I explained technical concepts, SEO, and online tools in simple language. My goal was to make learning technology easy and fun for everyone.</p>
        <p>In <span className="font-semibold text-foreground">2022</span>, I launched <a href="https://app.techabu.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:underline">Spot Web Tools</a>, an online platform offering over <span className="font-semibold text-foreground">190 free SEO and web tools</span> used by developers, students, and marketers around the world.</p>
        <p>In <span className="font-semibold text-foreground">2023</span>, I created the <a href="https://play.google.com/store/apps/details?id=advc.calc.easygpacalculator" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:underline">GPA Calculator & Planner</a> app for students. Seeing students benefit from my app was deeply fulfilling.</p>
        <p>As a software engineer, I have developed many <span className="font-semibold text-foreground">AI-powered tools and platforms</span> that simplify tasks and improve workflows.</p>
      </div>
    ),
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Professional Work",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>After graduation, I joined <span className="font-semibold text-foreground">SoftLixx Technologies Pvt. Ltd.</span> as a <span className="font-semibold text-foreground">Web Developer</span>, where I worked on real-world projects and gained hands-on experience in professional software development.</p>
        <p>Alongside my professional career, I have been working with <span className="font-semibold text-foreground">Accelerate Prosperity</span> as an entrepreneur, learning, growing, and contributing to building the startup ecosystem in Chitral.</p>
      </div>
    ),
  },
  {
    icon: <Laptop className="w-5 h-5" />,
    title: "HindukushSoft",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>In <span className="font-semibold text-foreground">2025</span>, I founded <a href="https://www.hindukushsoft.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:underline">HindukushSoft Technologies Pvt. Ltd.</a>, the <span className="font-semibold text-foreground">first registered software house in Chitral</span>.</p>
        <blockquote className="pl-6 border-l-[3px] border-blue-500 text-foreground text-xl italic py-2 my-8 font-serif">
          "What if there had been a software house in Chitral when I started my journey?"
        </blockquote>
        <p>That question became my mission. I wanted to create the platform that I once needed myself - a place where talented youth could learn, grow, and apply their skills.</p>
        <p>HindukushSoft was built with a vision to <span className="font-semibold text-foreground">create IT jobs, train young minds, and bring digital innovation to Chitral</span>.</p>
        <p>We also introduced the <span className="font-semibold text-foreground">first paid internship program in Chitral</span> through the <span className="font-semibold text-foreground">PSEB Skill Bridge Apprenticeship Program</span>, a government-backed initiative by the Pakistan Software Export Board.</p>
        <p>For me, HindukushSoft is more than just a company. It is a vision, a movement, and a promise that the youth of Chitral can also become part of the digital future.</p>
      </div>
    ),
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: "Giving Back",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>Giving back to my community has always been close to my heart. I have volunteered with <span className="font-semibold text-foreground">Al-Khidmat Foundation Chitral</span>, helping them with <span className="font-semibold text-foreground">IT support and digital systems</span>.</p>
        <p>Through HindukushSoft, I have provided platforms for local youth to gain experience, earn stipends, and learn in a real work environment. My goal is to create a culture of learning, innovation, and self-reliance in Chitral.</p>
      </div>
    ),
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Technical Skills",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>I started my programming journey with <span className="font-semibold text-foreground">HTML, CSS, and JavaScript</span>, and later explored backend technologies like <span className="font-semibold text-foreground">PHP, Laravel, Node.js, and Express</span>. Today, I work with modern web technologies such as <span className="font-semibold text-foreground">React, TypeScript, Next.js, and Laravel</span> to build fast and interactive applications.</p>
        <p>I am also highly skilled in <span className="font-semibold text-foreground">WordPress development and SEO</span>, having helped numerous clients improve their websites and online presence.</p>
        <p>Beyond coding, I possess strong <span className="font-semibold text-foreground">logical, analytical, and problem-solving skills</span>, which allow me to tackle complex challenges effectively.</p>
      </div>
    ),
  },
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    title: "Hobbies",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>Outside of work, I have always loved <span className="font-semibold text-foreground">cricket</span>. I used to be a proper cricketer, a good batsman, and a part-time bowler. After completing my ICS, I had to quit cricket to focus on my studies, but the passion for the game still lives in me.</p>
        <p>Between 2010 and 2016, I was also a dedicated gamer, playing almost every popular computer game of that time, including <span className="font-semibold text-foreground">GTA V, Max Payne 3, Call of Duty</span>, among others.</p>
      </div>
    ),
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Vision & Future",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>My vision goes far beyond just one company. HindukushSoft is my <span className="font-semibold text-foreground">first step, my first startup</span>, and InshaAllah, it will be the foundation for many more. I plan to build more companies and projects in the future that solve real problems, create jobs, and bring technological awareness to underdeveloped regions.</p>
        <p>My mission in life is to <span className="font-semibold text-foreground">make life easier for others, to help people, and to create opportunities</span> wherever I can.</p>
        <p>For me, everything begins and ends with faith. I believe that Allah is always with me and that nothing is impossible when your heart is sincere.</p>
      </div>
    ),
  },
  {
    icon: <Quote className="w-5 h-5" />,
    title: "Closing Thoughts",
    content: (
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>From a small mountain village with no electricity or internet to founding the first software house in Chitral, my journey is a story of faith, patience, and hard work. Every obstacle I faced became a reason to grow.</p>
        <div className="mt-12">
          <blockquote className="text-2xl text-foreground font-serif italic leading-relaxed">
            "I believe the best way to shape the future is to take the lead and create it yourself."
          </blockquote>
          <div className="mt-6 font-bold text-blue-600 dark:text-blue-500 tracking-wide uppercase text-sm">
            — Abu Zar Mishwani
          </div>
        </div>
      </div>
    ),
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

const StorySection = ({ onBack }) => {
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
              <StaggeredLetters text="The Journey" delay={0.1} /><br className="hidden md:block" />
              <StaggeredLetters text="So Far" delay={0.4} />
            </h2>
            <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0">
              <AnimatedText text="From a remote mountain village with no internet to founding the first software house in Chitral." delay={0.7} className="justify-center md:justify-start" />
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
            {chapters.map((chapter, index) => {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                  className="flex flex-col md:flex-row items-start gap-6 md:gap-24 py-16 md:py-24 border-b border-border/30 last:border-0"
                >
                  {/* Left Column: Icon and Title */}
                  <div className="w-full md:w-1/3 flex flex-col items-start pt-1 sticky top-32">
                    <div className="w-12 h-12 rounded-full border border-border bg-background shadow-sm flex items-center justify-center text-foreground mb-6">
                      {chapter.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                      {chapter.title}
                    </h3>
                  </div>

                  {/* Right Column: Story Text */}
                  <div className="w-full md:w-2/3 max-w-none text-left">
                    {chapter.content}
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

export default StorySection;
