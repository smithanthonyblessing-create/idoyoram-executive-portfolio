import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 font-body">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground font-body text-sm mb-12">
            Available for interim or permanent executive leadership roles across AI Energy, SaaS, EMS, and Hi-Tech Manufacturing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="mailto:L.yoram@btinternet.com"
            className="inline-flex items-center gap-3 border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Mail size={16} /> Email Me
          </a>
          <a
            href="https://linkedin.com/in/idoyoram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-3 text-sm tracking-widest uppercase font-body hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-body"
        >
          <span className="flex items-center gap-2"><MapPin size={14} /> Bedfordshire, UK</span>
          <span className="flex items-center gap-2"><Phone size={14} /> +44 7807 054667</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
