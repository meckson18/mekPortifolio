import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionShell from "../components/layout/SectionShell";
import ProjectModal from "../components/ui/ProjectModal";
import { portfolioProfile } from "../data/portfolio";

function ProjectsSection() {
  const { projects } = portfolioProfile;
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasProjects = projects.items.length > 0;

  const handleProjectClick = (project) => {
    const isCompleted = project.status === "completed";
    const isOngoing = project.status === "ongoing";

    if (isCompleted && project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (isOngoing) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <SectionShell id="projects" className="relative py-16 sm:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center mb-10 sm:mb-12"
      >
        <p className="eyebrow mb-4">{projects.eyebrow}</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-secondary leading-[1.05] tracking-[-0.03em] mb-5">
          {projects.heading}
        </h2>
        <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
          {projects.description}
        </p>
      </motion.div>

      {/* Projects Grid */}
      {hasProjects ? (
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {projects.items.map((project, index) => {
          const isCompleted = project.status === "completed";
          const isOngoing = project.status === "ongoing";
          const isClickable = isOngoing || (isCompleted && project.liveUrl);

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              onClick={() => handleProjectClick(project)}
              className={isClickable ? "cursor-pointer" : ""}
            >
              <motion.article
                whileHover={isClickable ? { y: -8 } : {}}
                transition={{ duration: 0.3 }}
                className="card-premium group overflow-hidden h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-56 sm:h-64 bg-gradient-to-br from-brand-light to-brand-bg overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/20 via-transparent to-transparent" />

                  {/* Status Badge - Floating */}
                  <motion.div
                    className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border bg-white/70"
                    whileHover={isClickable ? { scale: 1.05 } : {}}
                  >
                    {isOngoing ? (
                      <>
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-amber-700">Ongoing</span>
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 rounded-full bg-emerald-600" />
                        <span className="text-emerald-700">Completed</span>
                      </>
                    )}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-secondary mb-2 group-hover:text-brand-primary transition duration-300">
                    {project.title}
                  </h3>

                  {/* One-line Description */}
                  <p className="text-sm text-brand-muted leading-relaxed mb-4 flex-grow">
                    {project.shortDescription}
                  </p>

                  {/* Technologies - Minimal */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-brand-primary/8 text-brand-primary text-xs font-medium border border-brand-primary/15"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2.5 py-1 text-xs font-medium text-brand-muted">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-brand-border">
                    {isCompleted && project.liveUrl ? (
                      <motion.div
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary group-hover:text-brand-secondary transition duration-300"
                        whileHover={{ x: 4 }}
                      >
                        View Live
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.div>
                    ) : isOngoing ? (
                      <motion.div
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-muted group-hover:text-brand-primary transition duration-300"
                        whileHover={{ x: 4 }}
                      >
                        View Progress
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.div>
                    ) : (
                      <div className="text-sm font-semibold text-brand-muted">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            </motion.div>
          );
        })}
        </div>
      ) : (
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
      )}

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </SectionShell>
  );
}

export default ProjectsSection;
