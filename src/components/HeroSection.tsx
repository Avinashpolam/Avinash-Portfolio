import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-6">
            Software Developer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Avinash</span>{" "}
            <span className="text-gradient">Reddy</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            4+ years building backend & full-stack applications in financial services and consumer tech. 
            Java · Spring Boot · AWS · Kafka · Microservices
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <a href="mailto:avinashr.polam@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-glow transition-all duration-300">
            <Mail className="w-4 h-4 text-primary" />
            <span>avinashr.polam@gmail.com</span>
          </a>
          <a href="tel:+14696946389" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-glow transition-all duration-300">
            <span className="text-primary font-mono text-xs">☎</span>
            <span>(469) 694-6389</span>
          </a>
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Commerce, Texas</span>
          </span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-glow transition-all duration-300">
            <Linkedin className="w-4 h-4 text-primary" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
