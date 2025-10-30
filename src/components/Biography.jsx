import React, { useEffect, useRef, useState } from "react";
import {
  User,
  Heart,
  Monitor,
  Compass,
  BookOpen,
  Briefcase,
  Code,
  Building2,
  Rocket,
  Handshake,
  Wrench,
  Gamepad2,
  Target,
  Sparkles,
  ChevronDown
} from "lucide-react";

const BiographySection = ({ id, title, children, sectionNumber }) => {
  const lineNumbersRef = useRef(null);
  const contentRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Function to get custom short titles for sections
  const getCustomTitle = (sectionNumber) => {
    const titleMap = {
      1: "Introduction",
      2: "Family and Faith", 
      3: "The Beginning",
      4: "Exploration and Curiosity",
      5: "Education",
      6: "Freelancing and First Earnings",
      7: "TechABU and Other Projects",
      8: "Professional Experience",
      9: "HindukushSoft Technologies",
      10: "Volunteering and Giving Back",
      11: "Technical Skills",
      12: "Hobbies and Inspirations",
      13: "Vision and Future",
      14: "Closing Thoughts",
    };
    return titleMap[sectionNumber] || "Section";
  };
  
  // Function to get relevant Lucide icon based on section
  const getSectionIcon = (sectionNumber) => {
    const iconMap = {
      1: <User size={16} />, // Introduction
      2: <Heart size={16} />, // Family and Faith
      3: <Monitor size={16} />, // The Beginning
      4: <Compass size={16} />, // Exploration and Curiosity
      5: <BookOpen size={16} />, // Education
      6: <Briefcase size={16} />, // Freelancing and First Earnings
      7: <Code size={16} />, // TechABU and Other Projects
      8: <Building2 size={16} />, // Professional Experience
      9: <Rocket size={16} />, // HindukushSoft Technologies
      10: <Handshake size={16} />, // Volunteering and Giving Back
      11: <Wrench size={16} />, // Technical Skills
      12: <Gamepad2 size={16} />, // Hobbies and Inspirations
      13: <Target size={16} />, // Vision and Future
      14: <Sparkles size={16} />, // Closing Thoughts
    };
    return iconMap[sectionNumber] || <Code size={16} />;
  };
  
  // Function to trim long file names for mobile
  const getDisplayFileName = (sectionNumber) => {
    const customTitle = getCustomTitle(sectionNumber);
    // Convert title to file-friendly format
    let fileName = customTitle.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .trim();
    
    return fileName;
  };

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const generateLineNumbers = () => {
      const lineNumbersContainer = lineNumbersRef.current;
      const bioContent = contentRef.current;
      
      if (!lineNumbersContainer || !bioContent) return;      // Clear existing content
      lineNumbersContainer.textContent = "";

      // Force layout recalculation and reset height constraints
      bioContent.style.height = 'auto';
      bioContent.style.minHeight = 'auto';
      bioContent.offsetHeight; // Force reflow

      // Get the computed line height
      const computedStyle = window.getComputedStyle(bioContent);
      const lineHeight = parseFloat(computedStyle.lineHeight) || 26;

      // Get the actual content height including all text
      const contentHeight = bioContent.scrollHeight;
      const paddingTop = parseFloat(computedStyle.paddingTop) || 32;
      const paddingBottom = parseFloat(computedStyle.paddingBottom) || 32;

      // Calculate effective content height
      const effectiveHeight = contentHeight - paddingTop - paddingBottom;      // Calculate number of lines based purely on content (no artificial minimum)
      const actualContentLines = Math.ceil(effectiveHeight / lineHeight);
      const numberOfLines = Math.max(actualContentLines + 1, 2); // Just 1-2 extra lines, minimum 2 total

      // Generate line numbers
      let lineNumbers = "";
      for (let j = 1; j <= numberOfLines; j++) {
        lineNumbers += j.toString().padStart(2, " ") + "\n";
      }

      lineNumbersContainer.textContent = lineNumbers.trim();
    };

    // Generate line numbers with multiple attempts
    const timer1 = setTimeout(generateLineNumbers, 50);
    const timer2 = setTimeout(generateLineNumbers, 200);
    const timer3 = setTimeout(generateLineNumbers, 500);
    
    // Regenerate on font load
    document.fonts.ready.then(() => {
      setTimeout(generateLineNumbers, 100);
    });

    // Regenerate on window resize
    const handleResize = () => {
      setTimeout(generateLineNumbers, 100);
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("resize", handleResize);
    };
  }, [children]);
  
  // Add mouse tracking for glow effect
  useEffect(() => {
    const cardElement = document.getElementById(id);
    if (!cardElement) return;

    const handleMouseMove = (e) => {
      const rect = cardElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      cardElement.style.setProperty('--mouse-x', `${x}%`);
      cardElement.style.setProperty('--mouse-y', `${y}%`);
    };

    cardElement.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      cardElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, [id]);

  return (
    <div className="section-card code-editor-card" id={id}>
      {/* Code Editor Toolbar */}
      <div className="code-editor-toolbar">
        <div className="toolbar-left">
          <div className="window-controls">
            <span className="control close"></span>
            <span className="control minimize"></span>
            <span className="control maximize"></span>
          </div>          <div className="file-tab">
            <span className="file-icon">{getSectionIcon(sectionNumber)}</span>
            <span className="file-name">{getDisplayFileName(sectionNumber)}.jsx</span>
            <span className="file-modified">●</span>
          </div>
        </div>
      </div>
      
      {/* Code Editor Content */}
      <div className="code-editor-content">
        <div className="line-numbers" ref={lineNumbersRef}></div>
        <div className="bio-content" ref={contentRef}>
          <h2 className={`section-title section-${sectionNumber}`} data-section={sectionNumber}>
            {title}
          </h2>
          <div className="section-content">
            {children}
          </div>
        </div>
      </div>
        {/* Code Editor Footer */}
      <div className="code-editor-footer">
        <div className="footer-left">
          <span className="encoding">UTF-8</span>
        </div><div className="footer-right">
          <span className="cursor-position">Ln {sectionNumber * 15 + Math.floor(Math.random() * 10) + 5}, Col {Math.floor(Math.random() * 60) + 20}</span>
        </div>
      </div>
    </div>
  );
};

const Biography = () => {
  const [isTocExpanded, setIsTocExpanded] = useState(false);

  useEffect(() => {
    // Scroll animations observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-in");
          }, 50);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Initialize animation observer
    const allElements = document.querySelectorAll(
      ".section-card, .section-connector"
    );
    const firstSectionCard = document.querySelector(".section-card");

    allElements.forEach((el) => {
      el.classList.remove("animate-in");

      // Make the first section card appear immediately on page load
      if (el === firstSectionCard) {
        setTimeout(() => {
          el.classList.add("animate-in");
        }, 100);
      } else {
        // All other elements still use scroll-based animation
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      {/* Table of Contents - Collapsible */}
      <div className="bio-table-of-contents">
        <button 
          className="toc-header" 
          onClick={() => setIsTocExpanded(!isTocExpanded)}
          aria-expanded={isTocExpanded}
        >
          <h2>📖 Table of Contents</h2>
          <ChevronDown 
            size={24} 
            className={`toc-chevron ${isTocExpanded ? 'expanded' : ''}`}
          />
        </button>
        
        <div className={`toc-grid ${isTocExpanded ? 'expanded' : 'collapsed'}`}>
          <a href="#introduction" className="toc-item">
            <span className="toc-icon"><User size={18} /></span>
            <span className="toc-title">Who is Abu?</span>
          </a>
          <a href="#family-faith" className="toc-item">
            <span className="toc-icon"><Heart size={18} /></span>
            <span className="toc-title">Faith & Family</span>
          </a>
          <a href="#the-beginning" className="toc-item">
            <span className="toc-icon"><Monitor size={18} /></span>
            <span className="toc-title">First Computer</span>
          </a>
          <a href="#exploration-curiosity" className="toc-item">
            <span className="toc-icon"><Compass size={18} /></span>
            <span className="toc-title">Learning Web Dev</span>
          </a>
          <a href="#education" className="toc-item">
            <span className="toc-icon"><BookOpen size={18} /></span>
            <span className="toc-title">Education Path</span>
          </a>
          <a href="#freelancing-earnings" className="toc-item">
            <span className="toc-icon"><Briefcase size={18} /></span>
            <span className="toc-title">Freelance Start</span>
          </a>
          <a href="#techabu-projects" className="toc-item">
            <span className="toc-icon"><Code size={18} /></span>
            <span className="toc-title">My Projects</span>
          </a>
          <a href="#professional-experience" className="toc-item">
            <span className="toc-icon"><Building2 size={18} /></span>
            <span className="toc-title">Professional Work</span>
          </a>
          <a href="#hindukushsoft" className="toc-item">
            <span className="toc-icon"><Rocket size={18} /></span>
            <span className="toc-title">HindukushSoft</span>
          </a>
          <a href="#volunteering" className="toc-item">
            <span className="toc-icon"><Handshake size={18} /></span>
            <span className="toc-title">Giving Back</span>
          </a>
          <a href="#technical-skills" className="toc-item">
            <span className="toc-icon"><Wrench size={18} /></span>
            <span className="toc-title">Tech Stack</span>
          </a>
          <a href="#hobbies-inspirations" className="toc-item">
            <span className="toc-icon"><Gamepad2 size={18} /></span>
            <span className="toc-title">Hobbies & Heroes</span>
          </a>
          <a href="#vision-future" className="toc-item">
            <span className="toc-icon"><Target size={18} /></span>
            <span className="toc-title">My Vision</span>
          </a>
          <a href="#closing-thoughts" className="toc-item">
            <span className="toc-icon"><Sparkles size={18} /></span>
            <span className="toc-title">Final Thoughts</span>
          </a>
        </div>
      </div>

      <div className="section-connector"></div>

      <BiographySection id="introduction" title="Introduction" sectionNumber={1}>
        <p>
          My name is <span className="highlight">Abu Zar Mishwani</span>, and people close to me also call me <span className="highlight">Mufasa</span>, a nickname I proudly carry. It is inspired by the wise and brave character from <a href="https://en.wikipedia.org/wiki/The_Lion_King" target="_blank" className="link" rel="noopener noreferrer">The Lion King</a>. The name Mufasa means king or brave leader, and I have always loved it because it reminds me to lead with strength, kindness, and responsibility.
        </p>
        <p>
          I was born on <span className="highlight">August 24, 2000</span>, in a small and remote village called <span className="highlight">Domel Nisar</span>, near Arandu, close to the Afghan border in Chitral, Pakistan. My village is a beautiful but backward place surrounded by mountains and rivers, where modern facilities like electricity, gas, internet, and proper schools hardly exist. Life there was simple, but opportunities were limited.
        </p>
        <p>
          My father, a government school teacher and principal, realized that his children's future could not be built there. He once told my mother, "Our children cannot grow here the way we want them to." With that thought and faith in Allah, he decided to move our family to Drosh, a small town in Chitral, so we could get an education and a better life.
        </p>
        <p>
          That one decision changed everything. Today, when I look back, I know that every achievement in my life began with his foresight and sacrifices.
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="family-faith" title="Family and Faith" sectionNumber={2}>
        <p>
          I come from a <span className="highlight">Pashtun Muslim family</span> that values simplicity, honesty, and education. My father has been a teacher for over 32 years, educating children in the most remote valleys of Chitral. His love for knowledge and his service to others taught me that true success lies in helping people. My mother is the most peaceful and loving person I know. Her prayers are the real reason behind everything good in my life.
        </p>
        <p>
          I am a Muslim, and my faith defines who I am. I learned Islam first from my parents, then through the lectures of Dr. Zakir Naik and Dr. Israr Ahmad, who helped me understand the Quran deeply.
        </p>
        <p>
          The Quran is my ultimate guide. There is one verse that always gives me strength in difficult times:
        </p>
        <p className="quote">
          <em>"Indeed, with me is my Lord; He will guide me." (Surah Ash-Shu'ara 26:62)</em>
        </p>
        <p>
          Whenever I face challenges, I remind myself of this verse, and it fills me with peace and direction.
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="the-beginning" title="The Beginning" sectionNumber={3}>
        <p>
          My journey with computers started in <span className="highlight">2010</span>, when I was in class 4. I was ten years old when my father came home one day and said, "Abu Zar, there's a new computer center nearby. Would you like to join?"
        </p>
        <p>
          At that time, I didn't even know what a computer was, but I said yes immediately. I still remember my excitement on the first day. I sat in front of a computer, and it felt like magic. I learned to type with small fingers, worked on <span className="highlight">MS Word and Excel</span>, and after a few months, I received my first certificate. That was one of the happiest moments of my childhood.
        </p>
        <p>
          A few months later, my father bought me my first computer, a <span className="highlight">used Pentium 2</span>. At first, I only used it for playing games, but soon my curiosity took over. In <span className="highlight">2016</span>, after many requests, I got my first smartphone, and that changed everything.
        </p>
        <p>
          For the first time, I could connect to the internet. I learned that I needed a Wi-Fi adapter, but it cost around Rs. 800, and my pocket money was only Rs. 10 a day. I didn't know how to ask my father for it, so I told my elder sister when she visited. Without thinking twice, she gave me Rs. 1000. I still remember how happy I was that day. I ran to the shop, bought the adapter, and connected my computer to the internet.
        </p>
        <p>
          That day, when <span className="highlight">Google</span> opened on my screen for the first time, I felt like I had unlocked a new world. I whispered to myself, "Now Google is mine."
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="exploration-curiosity" title="Exploration and Curiosity" sectionNumber={4}>
        <p>
          Once I had access to the internet, I spent hours exploring random things. I didn't even know what to search for in the beginning. Then one day, I asked myself, <span className="highlight">"How are websites made?"</span>
        </p>
        <p>
          That one question opened the door to my future. I started learning how to make websites. I first found platforms like <span className="highlight">Wix</span>, then discovered <span className="highlight">WordPress</span>, and step by step began to understand how the web worked. I even bought my first domain name with my Eidi money, without knowing exactly what I was going to do with it.
        </p>
        <p>
          At that time, I had no guide, no IT background in my family, and no one to ask for help. It was just me, my curiosity, and <span className="highlight">YouTube</span>. Every time something didn't work, I would sit for hours trying to fix it. Sometimes I wanted to give up, but I never did. Every time I solved a problem, I learned something new.
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="education" title="Education" sectionNumber={5}>
        <p>
          I completed my <span className="highlight">matriculation from Drosh Public School and College</span>, and later did my <span className="highlight">ICS (Intermediate in Computer Science) from Government Higher Secondary School Drosh</span>.
        </p>
        <p>
          After that, I joined the <span className="highlight">University of Chitral</span> for my <span className="highlight">BS in Computer Science</span>, which I completed in <span className="highlight">December 2024</span>.
        </p>
        <p>
          I am now pursuing my <span className="highlight">MPhil in Computer Science</span> and plan to complete my PhD before turning 30, InshaAllah.
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="freelancing-earnings" title="Freelancing and First Earnings" sectionNumber={6}>
        <p>
          My freelancing journey began while I was doing my FSc. It started when I realized that the skills I was learning could actually help others. I began offering small services like <span className="highlight">creating WordPress websites, doing SEO, and writing content</span>.
        </p>
        <p>
          I still remember the day I received my <span className="highlight">first payment</span>. It was not a big amount, but it felt like I had conquered the world. Earning money for the first time through something I built on my own was an unforgettable moment. That day, I realized that with knowledge and determination, you can create your own opportunities.
        </p>
        <p>
          Freelancing gave me <span className="highlight">independence, confidence, and direction</span>. It taught me how to manage clients, work with deadlines, and most importantly, trust my own skills.
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="techabu-projects" title="TechABU and Other Projects" sectionNumber={7}>
        <p>
          In <span className="highlight">2020</span>, I started a tech blog called <a href="https://techabu.co" target="_blank" className="link" rel="noopener noreferrer">TechABU</a>, where I explained technical concepts, SEO, and online tools in simple language. My goal was to make learning technology easy and fun for everyone, especially people from smaller towns like mine.
        </p>
        <p>
          In <span className="highlight">2022</span>, I launched <a href="https://app.techabu.co" target="_blank" className="link" rel="noopener noreferrer">Spot Web Tools</a>, an online platform offering over <span className="highlight">190 free SEO and web tools</span> used by developers, students, and marketers around the world. I also developed its Android app to make it more accessible.
        </p>
        <p>
          In <span className="highlight">2023</span>, I created the <a href="https://play.google.com/store/apps/details?id=advc.calc.easygpacalculator" target="_blank" className="link" rel="noopener noreferrer">GPA Calculator & Planner</a> app for students to calculate and plan their semester performance easily. Seeing students benefit from my app was deeply fulfilling. It reminded me that technology, when built with purpose, can truly make people's lives easier.
        </p>
        <p>
          As a software engineer, I have developed many <span className="highlight">AI-powered tools and platforms</span> that simplify tasks and improve workflows. Under HindukushSoft Technologies, I also built a SaaS platform to automate business operations in Chitral and help local businesses transition to technology.
        </p>
        <p>
          You can see my development work on my GitHub, linked in the social section below.
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="professional-experience" title="Professional Experience" sectionNumber={8}>
        <p>
          After graduation, I joined <span className="highlight">SoftLixx Technologies Pvt. Ltd.</span> as a <span className="highlight">Web Developer</span>, where I worked on real-world projects and gained hands-on experience in professional software development. This role helped me understand industry standards, teamwork, and how to deliver production-level software.
        </p>
        <p>
          Alongside my professional career, I have been working with <span className="highlight">Accelerate Prosperity</span> as an entrepreneur, learning, growing, and contributing to building the startup ecosystem in Chitral.
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="hindukushsoft" title="HindukushSoft Technologies Pvt. Ltd." sectionNumber={9}>
        <p>
          In <span className="highlight">2025</span>, I founded <a href="https://www.hindukushsoft.com" target="_blank" className="link" rel="noopener noreferrer">HindukushSoft Technologies Pvt. Ltd.</a>, the <span className="highlight">first registered software house in Chitral</span>.
        </p>
        <p>
          The idea came from a simple but powerful question that always stayed with me:
        </p>
        <p className="quote">
          <em>"What if there had been a software house in Chitral when I started my journey?"</em>
        </p>
        <p>
          That question became my mission. I wanted to create the platform that I once needed myself — a place where talented youth could learn, grow, and apply their skills.
        </p>
        <p>
          HindukushSoft was built with a vision to <span className="highlight">create IT jobs, train young minds, and bring digital innovation to Chitral</span>.
        </p>
        <p>
          We also introduced the <span className="highlight">first paid internship program in Chitral</span> through the <span className="highlight">PSEB Skill Bridge Apprenticeship Program</span>, a government-backed initiative by the Pakistan Software Export Board (PSEB) under the Ministry of IT and Telecom. This program allows students to gain professional skills, real-world experience, and earn a monthly stipend while contributing to meaningful projects.
        </p>
        <p>
          HindukushSoft also focuses on <span className="highlight">SaaS platforms, AI-powered applications, and automation solutions</span> to help businesses transition into technology. We aim to create awareness of technology, provide skill development opportunities, and ensure that Chitral's youth are not left behind in the global digital economy.
        </p>
        <p>
          For me, HindukushSoft is more than just a company. It is a vision, a movement, and a promise that the youth of Chitral can also become part of the digital future. It represents the change I once wished for in my hometown and continues to inspire the next generation to dream bigger, learn more, and create opportunities.
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="volunteering" title="Volunteering and Giving Back" sectionNumber={10}>
        <p>
          Giving back to my community has always been close to my heart. I have volunteered with <span className="highlight">Al-Khidmat Foundation Chitral</span>, helping them with <span className="highlight">IT support and digital systems</span>. I have also taught <span className="highlight">computer science</span> voluntarily at local academies to inspire students and help them build careers in technology.
        </p>
        <p>
          Through HindukushSoft, I have provided platforms for local youth to gain experience, earn stipends, and learn in a real work environment. My goal is to create a culture of learning, innovation, and self-reliance in Chitral.
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="technical-skills" title="Technical Skills" sectionNumber={11}>
        <p>
          I started my programming journey with <span className="highlight">HTML, CSS, and JavaScript</span>, and later explored backend technologies like <span className="highlight">PHP, Laravel, Node.js, and Express</span>. Today, I work with modern web technologies such as <span className="highlight">React, TypeScript, Next.js, and Laravel</span>, among others, to build fast and interactive applications.
        </p>
        <p>
          I am also highly skilled in <span className="highlight">WordPress development and SEO</span>, having helped numerous clients improve their websites and online presence. In addition, I have developed <span className="highlight">AI-powered tools and SaaS platforms</span> to automate tasks and support businesses.
        </p>
        <p>
          Beyond coding, I possess strong <span className="highlight">logical, analytical, and problem-solving skills</span>, which allow me to tackle complex challenges effectively and create solutions that are both practical and impactful.
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="hobbies-inspirations" title="Hobbies and Inspirations" sectionNumber={12}>
        <p>
          Outside of work, I have always loved <span className="highlight">cricket</span>. I used to be a proper cricketer, a good batsman, and a part-time bowler. After completing my FSc, I had to quit cricket to focus on my studies, but the passion for the game still lives in me.
        </p>
        <p>
          Between 2010 and 2016, I was also a dedicated gamer, playing almost every popular computer game of that time, including <span className="highlight">GTA V, Max Payne 3, Call of Duty</span>, among others. Those years as a gamer improved my focus, problem-solving, and creativity.
        </p>
        <p>
          My favorite batsman is <span className="highlight">Babar Azam</span> because of his calmness, discipline, and humility. I admire how he performs with grace and focus, no matter how big the stage.
        </p>
        <p>
          My favorite superhero is <span className="highlight">Iron Man (Tony Stark)</span> because he represents intelligence, innovation, and the power of using technology for good. I relate to him because I also believe in building solutions that make life better for others.
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="vision-future" title="Vision and Future" sectionNumber={13}>
        <p>
          My vision goes far beyond just one company. HindukushSoft is my <span className="highlight">first step, my first startup</span>, and InshaAllah, it will be the foundation for many more. I plan to build more companies and projects in the future that solve real problems, create jobs, and bring technological awareness to underdeveloped regions like Chitral.
        </p>
        <p>
          My mission in life is to <span className="highlight">make life easier for others, to help people, and to create opportunities</span> wherever I can. I believe that success only has meaning when it benefits others.
        </p>
        <p>
          For me, everything begins and ends with faith. I believe that Allah is always with me and that nothing is impossible when your heart is sincere.
        </p>
      </BiographySection>

      <div className="section-connector"></div>

      <BiographySection id="closing-thoughts" title="Closing Thoughts" sectionNumber={14}>
        <p>
          From a small mountain village with no electricity or internet to founding the first software house in Chitral, my journey is a story of faith, patience, and hard work. Every obstacle I faced became a reason to grow. Every difficulty taught me that with faith, consistency, and effort, anything is possible.
        </p>
        <div className="quote">
          <p className="quote-text">
            I believe the best way to shape the future is to take the lead and create it yourself.
          </p>
          <p className="quote-author">— Abu Zar Mishwani</p>
        </div>
      </BiographySection>
    </>
  );
};

export default Biography;
