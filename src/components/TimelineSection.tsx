import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const timeline = [
  {
    period: "Sep 2025 – Present",
    role: "Business Development Manager",
    company: "enSights.ai",
    sector: "AI Energy · SaaS",
    highlights: [
      "Led UK go-to-market strategy for AI energy performance optimisation platform",
      "Generated and closed 2–3 new customers within four months",
      "Owned full sales cycle targeting complex operational environments",
    ],
  },
  {
    period: "Nov 2023 – Feb 2025",
    role: "Sales Manager",
    company: "SolarEdge UK",
    sector: "Energy Technology · SaaS Monitoring",
    highlights: [
      "Delivered 20% revenue growth through strategic partner expansion",
      "Built relationships with 100+ installer partners and national distributors",
      "Contributed to £100M UK revenue performance",
    ],
  },
  {
    period: "Jun 2021 – Oct 2023",
    role: "Sales Director",
    company: "Advanced Anaerobics Limited",
    sector: "Industrial Renewable Energy",
    highlights: [
      "Built £16M enterprise pipeline across industrial customers",
      "Delivered £4.7M first-year revenue forecast",
      "Managed complex project lifecycle including technical negotiation",
    ],
  },
  {
    period: "May 2008 – Oct 2023",
    role: "Business Owner & Director",
    company: "Bare Necessity Solutions LTD",
    sector: "Commercial Operations",
    highlights: [
      "Built and managed five regional sales teams (30+ personnel)",
      "Delivered £30M+ cumulative revenue across ventures",
      "Full P&L responsibility and operational strategy",
    ],
  },
  {
    period: "Dec 2005 – Apr 2008",
    role: "Operations Manager",
    company: "Jaltek Systems",
    sector: "EMS · Electronics Manufacturing",
    highlights: [
      "Supervised 40+ personnel across production operations",
      "Improved manufacturing efficiency by 30% and quality by 20%",
    ],
  },
  {
    period: "Mar 2000 – Dec 2005",
    role: "Senior Project Manager",
    company: "Flex Israel",
    sector: "Global EMS Provider",
    highlights: [
      "Delivered $40M manufacturing contract transfer (Ireland → Israel)",
      "Achieved 40% operational efficiency improvements",
      "Led cross-functional teams across engineering, procurement, logistics",
    ],
  },
];

const TimelineSection = () => {
  return (
    <section id="career" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 font-body">Professional Journey</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Career Timeline</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div className={`absolute top-1 left-2.5 md:left-auto w-3 h-3 rounded-full bg-primary border-2 border-background ${
                i % 2 === 0 ? "md:right-[-6.5px]" : "md:left-[-6.5px]"
              }`} />

              <p className="text-primary text-xs tracking-widest uppercase font-body mb-1">{item.period}</p>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">{item.role}</h3>
              <p className="text-primary/80 font-body font-medium text-sm mb-1">{item.company}</p>
              <p className="text-muted-foreground text-xs mb-3 font-body">{item.sector}</p>
              <ul className={`space-y-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                {item.highlights.map((h, j) => (
                  <li key={j} className="text-secondary-foreground text-sm font-body leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
