import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import idoPortrait from "@/assets/ido-portrait.png";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />

      <div className="relative z-10 section-padding text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary mb-6 glow-gold">
            <img src={idoPortrait} alt="Ido Yoram" className="w-full h-full object-cover" />
          </div>
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-6">
            Executive Leadership
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-foreground">
            Ido Yoram
          </h1>
          <div className="w-24 h-[2px] bg-primary mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg md:text-xl font-body">
            <span className="text-primary font-semibold">AI Energy · SaaS · Enterprise Sales</span>
            <span className="hidden md:block text-muted-foreground">|</span>
            <span className="text-primary font-semibold">EMS · Hi-Tech Manufacturing · Supply Chain</span>
          </div>

          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed font-body">
            Senior commercial and operations leader with 15+ years driving growth across AI-driven energy technology,
            SaaS platforms, electronics manufacturing, and complex industrial solutions. Proven track record delivering
            £30M+ revenue, building enterprise pipelines, and leading cross-functional teams across multinational organisations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-muted-foreground font-body"
        >
          <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Bedfordshire, UK</span>
          <a href="tel:+447807054667" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={16} className="text-primary" /> +44 7807 054667</a>
          <a href="mailto:L.yoram@btinternet.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} className="text-primary" /> L.yoram@btinternet.com
          </a>
          <a href="https://www.linkedin.com/in/ido-yoram-34710839/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Linkedin size={16} className="text-primary" /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <a href="#achievements" className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Explore Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
