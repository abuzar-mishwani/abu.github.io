import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  ArrowLeft,
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Github, 
  Coffee,
  Send,
  Phone,
  MessageSquare
} from "lucide-react";

const socialLinks = [
  {
    href: "mailto:ceo@hindukushsoft.com",
    icon: <Mail className="w-5 h-5" />,
    platform: "Email",
    handle: "ceo@hindukushsoft.com",
  },
  {
    href: "https://wa.link/evrjp7",
    icon: <MessageCircle className="w-5 h-5" />,
    platform: "WhatsApp",
    handle: "Direct Chat",
  },
  {
    href: "https://www.linkedin.com/in/mishwani7/",
    icon: <Linkedin className="w-5 h-5" />,
    platform: "LinkedIn",
    handle: "@mishwani7",
  },
  {
    href: "https://www.x.com/itsabuzarr",
    icon: <Twitter className="w-5 h-5" />,
    platform: "Twitter",
    handle: "@itsabuzarr",
  },
  {
    href: "https://github.com/abuzar-mishwani",
    icon: <Github className="w-5 h-5" />,
    platform: "GitHub",
    handle: "@abuzar-mishwani",
  },

  {
    href: "https://www.instagram.com/abuzar.mishwani",
    icon: <Instagram className="w-5 h-5" />,
    platform: "Instagram",
    handle: "@abuzar.mishwani",
  },
  {
    href: "https://www.facebook.com/abuzar.mishwani/",
    icon: <Facebook className="w-5 h-5" />,
    platform: "Facebook",
    handle: "@abuzar.mishwani",
  },
  {
    href: "https://www.buymeacoffee.com/mishwani",
    icon: <Coffee className="w-5 h-5" />,
    platform: "Coffee",
    handle: "@mishwani",
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

const ContactSection = ({ onBack }) => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Abu-Zar-Mishwani-Resume.pdf";
    link.download = "Abu-Zar-Mishwani-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

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
              <StaggeredLetters text="Let's Build" delay={0.1} /><br className="hidden md:block" />
              <StaggeredLetters text="Something Great" delay={0.4} />
            </h2>
            <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0">
              <AnimatedText text="Looking for a technical partner to architect and build your next production system? Drop me a message." delay={0.7} className="justify-center md:justify-start" />
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
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24 py-8"
            >
              
              {/* Left Column: Form */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between relative z-20 bg-card/30 backdrop-blur-md border border-border/50 p-8 md:p-10 rounded-3xl shadow-sm">
                <h3 className="text-3xl font-bold tracking-tight text-foreground mb-8">
                    Send a Message
                  </h3>
                  
                  {submitted ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
                        <Send className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h4>
                      <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8 flex flex-col flex-1">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Your Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-border/50 focus:border-blue-500 py-3 text-lg text-foreground transition-colors outline-none placeholder:text-muted-foreground/30" 
                          placeholder="John Doe" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-border/50 focus:border-blue-500 py-3 text-lg text-foreground transition-colors outline-none placeholder:text-muted-foreground/30" 
                          placeholder="john@example.com" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                        <input 
                          type="text" 
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-border/50 focus:border-blue-500 py-3 text-lg text-foreground transition-colors outline-none placeholder:text-muted-foreground/30" 
                          placeholder="Project Inquiry" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                        <textarea 
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-border/50 focus:border-blue-500 py-3 text-lg text-foreground transition-colors outline-none resize-none h-32 placeholder:text-muted-foreground/30" 
                          placeholder="Tell me about your project..." 
                        />
                      </div>
                      
                      <button 
                        disabled={isSubmitting}
                        className="group flex items-center justify-center w-full py-5 rounded-2xl border border-border bg-transparent text-foreground font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-auto btn-wave-hover"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3 w-full group-hover:text-background transition-colors">
                          {isSubmitting ? "Sending..." : "Send Message"} 
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      </button>
                    </form>
                  )}
              </div>

              {/* Right Column: Socials & Resume */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between h-full lg:pt-4 gap-8">
                
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Connect Directly</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialLinks.slice(0, 4).map((link, i) => (
                      <a 
                        key={i} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={link.handle}
                        className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-background transition-all group btn-wave-hover"
                      >
                        <div className="w-10 h-10 shrink-0 rounded-full bg-secondary flex items-center justify-center text-foreground transition-colors relative z-10 group-hover:bg-background/20 group-hover:text-background dark:group-hover:text-background">
                          {link.icon}
                        </div>
                        <div className="min-w-0 relative z-10">
                          <div className="text-sm font-bold text-foreground transition-colors group-hover:text-background dark:group-hover:text-background">{link.platform}</div>
                          <div className="text-xs font-semibold text-muted-foreground truncate transition-colors group-hover:text-background/80 dark:group-hover:text-background/80">{link.handle}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">More Links</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.slice(4).map((link, i) => (
                      <a 
                        key={i} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={link.handle}
                        className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-background transition-all group btn-wave-hover"
                      >
                        <span className="text-muted-foreground transition-colors relative z-10 group-hover:text-background dark:group-hover:text-background">{link.icon}</span>
                        <span className="text-sm font-bold text-foreground transition-colors relative z-10 group-hover:text-background dark:group-hover:text-background">{link.platform}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Phone Numbers</h4>
                  <div className="flex flex-col gap-3">
                    {[
                      { phone: "+92 322 9953031", icon: <img src="/images/whatsapp-128-svgrepo-com.svg" alt="WhatsApp" className="w-5 h-5 dark:invert group-hover:invert dark:group-hover:invert-0 opacity-70 group-hover:opacity-100 transition-all" /> },
                      { phone: "+92 306 2169608", icon: <img src="/images/whatsapp-business-svgrepo-com.svg" alt="WhatsApp Business" className="w-5 h-5 dark:invert group-hover:invert dark:group-hover:invert-0 opacity-70 group-hover:opacity-100 transition-all" /> },
                      { phone: "+92 345 2097245", icon: <Phone className="w-4 h-4" /> }
                    ].map((item, i) => (
                      <a 
                        key={i} 
                        href={`tel:${item.phone.replace(/\\s+/g, '')}`} 
                        title={item.phone}
                        className="flex items-center gap-4 px-5 py-3 rounded-xl border border-border bg-background transition-all group btn-wave-hover"
                      >
                        <div className="w-8 h-8 shrink-0 rounded-full bg-secondary flex items-center justify-center text-muted-foreground transition-colors relative z-10 group-hover:bg-background/20 group-hover:text-background dark:group-hover:text-background">
                          {item.icon}
                        </div>
                        <span className="text-sm font-bold tracking-wider text-foreground transition-colors relative z-10 group-hover:text-background dark:group-hover:text-background">{item.phone}</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
