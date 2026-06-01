import { motion } from "framer-motion";
import SectionShell from "../components/layout/SectionShell";
import { portfolioProfile } from "../data/portfolio";

function ProjectsSection() {
  const { projects } = portfolioProfile;

  return (
    <SectionShell id="projects" className="relative py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
      >
        <p className="eyebrow mb-4">{projects.eyebrow}</p>
        <h2 className="mb-5 text-3xl font-bold leading-[1.05] text-brand-secondary sm:text-4xl lg:text-5xl">
          {projects.heading}
        </h2>
        <p className="text-base leading-relaxed text-brand-muted sm:text-lg">
          {projects.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="card-premium mx-auto max-w-2xl p-8 text-center"
      >
        <p className="text-lg font-bold text-brand-secondary">
          {projects.emptyLabel}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted">
          {projects.emptyText}
        </p>
      </motion.div>
    </SectionShell>
  );
}

export default ProjectsSection;
