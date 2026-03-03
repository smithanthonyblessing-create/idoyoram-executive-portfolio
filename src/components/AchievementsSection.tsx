import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Factory, Zap, BarChart3 } from "lucide-react";

const achievements = [
  { icon: DollarSign, metric: "£30M+", label: "Cumulative Revenue", desc: "Generated across ventures and enterprises" },
  { icon: TrendingUp, metric: "£16M", label: "Enterprise Pipeline", desc: "Built across industrial energy sectors" },
  { icon: BarChart3, metric: "$40M", label: "Contract Transfer", desc: "Manufacturing programme delivered successfully" },
  { icon: Zap, metric: "40%", label: "Efficiency Gains", desc: "Operational improvements achieved" },
  { icon: Users, metric: "100+", label: "Partner Network", desc: "Installers and distributors managed" },
  { icon: Factory, metric: "30+", label: "Team Members", desc: "Multi-regional sales teams built and led" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 font-body">Impact & Results</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Key Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border p-8 hover:border-primary/40 transition-all duration-500 group"
            >
              <item.icon className="text-primary mb-4" size={28} strokeWidth={1.5} />
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-2">{item.metric}</p>
              <p className="text-foreground font-body font-semibold text-sm tracking-wide uppercase mb-2">{item.label}</p>
              <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
