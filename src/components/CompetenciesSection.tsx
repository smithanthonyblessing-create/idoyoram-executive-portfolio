import { motion } from "framer-motion";

const competencyGroups = [
  {
    title: "AI Energy & SaaS",
    skills: [
      "Go-to-Market Strategy (UK)",
      "AI Energy Platforms",
      "SaaS Enterprise Sales",
      "Energy Optimisation Solutions",
      "Renewable Energy Markets",
      "Technical Pre-Sales",
    ],
  },
  {
    title: "Manufacturing & Operations",
    skills: [
      "EMS Manufacturing Operations",
      "Supply Chain Strategy",
      "Contract Transfers",
      "Lean Operations",
      "Operational Efficiency",
      "Continuous Improvement",
    ],
  },
  {
    title: "Commercial Leadership",
    skills: [
      "P&L Management",
      "Revenue Forecasting",
      "Strategic Account Growth",
      "Channel & Partner Development",
      "Contract Negotiation",
      "CRM & Pipeline Management",
    ],
  },
  {
    title: "Leadership & Strategy",
    skills: [
      "Cross-Functional Leadership",
      "Strategic Alliances",
      "Team Leadership (30+ people)",
      "Project Delivery",
      "Multi-Stakeholder Management",
      "Commercial Strategy",
    ],
  },
];

const CompetenciesSection = () => {
  return (
    <section id="skills" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 font-body">Expertise</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Core Competencies</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {competencyGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border p-8"
            >
              <h3 className="text-primary font-display text-xl font-bold mb-6">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="bg-secondary text-secondary-foreground text-xs font-body px-3 py-1.5 border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground font-body">
            <span>🎓 BEng Industrial Engineering (2:1) — Coventry University</span>
            <span className="hidden md:inline text-border">|</span>
            <span>🌐 English (Native) · Hebrew (Fluent)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetenciesSection;
