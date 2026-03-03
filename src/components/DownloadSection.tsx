import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 font-body">Download</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Get My CV</h2>
          <p className="text-muted-foreground font-body mt-4 text-sm">
            Two tailored CVs — choose the version that best fits your opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.a
            href="/Ido_Yoram_CV_Business_Development_Director.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-border p-8 text-center hover:border-primary/50 transition-all duration-500 group cursor-pointer block"
          >
            <FileText className="mx-auto text-primary mb-4" size={32} strokeWidth={1.5} />
            <h3 className="text-foreground font-display text-lg font-bold mb-2">AI Energy · SaaS · Enterprise Sales</h3>
            <p className="text-muted-foreground text-sm font-body mb-6">Business Development Director CV</p>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-body tracking-widest uppercase group-hover:gap-3 transition-all">
              <Download size={16} /> Download PDF
            </span>
          </motion.a>

          <motion.a
            href="/Ido_Yoram_CV_Operations_Commercial_Director.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-border p-8 text-center hover:border-primary/50 transition-all duration-500 group cursor-pointer block"
          >
            <FileText className="mx-auto text-primary mb-4" size={32} strokeWidth={1.5} />
            <h3 className="text-foreground font-display text-lg font-bold mb-2">EMS · Hi-Tech Manufacturing · Supply Chain</h3>
            <p className="text-muted-foreground text-sm font-body mb-6">Operations & Commercial Director CV</p>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-body tracking-widest uppercase group-hover:gap-3 transition-all">
              <Download size={16} /> Download PDF
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
