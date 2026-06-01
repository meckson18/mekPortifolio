import { motion } from "framer-motion";
import { DatabaseZap, ScanSearch, Sparkles } from "lucide-react";
import SectionShell from "../components/layout/SectionShell";
import { portfolioProfile } from "../data/portfolio";

const highlightIcons = [Sparkles, ScanSearch, DatabaseZap];

function AboutSection() {
  const { about } = portfolioProfile;

  return (
    <SectionShell id="about" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Content Column */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-secondary leading-[1.05] tracking-[-0.03em]">
              {about.heading}
            </h2>
            <div className="space-y-4 text-brand-muted leading-relaxed">
              {about.biography.map((paragraph) => (
                <p key={paragraph} className="text-base sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {about.highlights.map((item, index) => {
              const Icon = highlightIcons[index];

              return (
                <div
                  key={item}
                  className="card-premium p-5 space-y-3"
                >
                  <Icon className="h-6 w-6 text-brand-primary" />
                  <p className="text-sm font-medium text-brand-text">{item}</p>
                </div>
              );
            })}
          </motion.div>

          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 pt-4">
            {about.stats.map(({ label, value, detail }, index) => (
              <motion.article
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.08,
                }}
                className="card-premium p-5 space-y-2"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                  {label}
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-brand-secondary">
                  {value}
                </p>
                <p className="text-sm text-brand-muted">
                  {detail}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default AboutSection;
