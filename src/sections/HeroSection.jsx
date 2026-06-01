import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profileImage from "../assets/meckson-profile-image.jpg";
import SectionShell from "../components/layout/SectionShell";
import { portfolioProfile } from "../data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function HeroSection() {
  const { name, title, intro, focusAreas, hero } = portfolioProfile;

  return (
    <SectionShell id="hero" className="relative flex min-h-screen items-center justify-center pt-32 pb-20 sm:pt-40 sm:pb-24">
      {/* Subtle floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-10 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:text-left">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="order-1 mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div className="card-premium overflow-hidden p-0">
              <img
                src={profileImage}
                alt={`${name} profile portrait`}
                className="aspect-square h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          <div className="order-2 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-white/50 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-brand-primary" />
              <span className="text-sm font-medium text-brand-text">
                {hero.badge}
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.p variants={itemVariants} className="eyebrow mb-4">
            {name}
          </motion.p>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-brand-secondary mb-6">
            {title}
            <span className="block bg-gradient-to-r from-brand-primary to-brand-primary/70 bg-clip-text text-transparent">
              {hero.highlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-brand-muted max-w-2xl mb-8 leading-relaxed"
          >
            {intro}
          </motion.p>

          {/* Focus Areas */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
            {focusAreas.map((item) => (
              <div
                key={item}
                className="px-4 py-2 rounded-full border border-brand-border bg-white/60 backdrop-blur-sm text-sm font-medium text-brand-text hover:border-brand-primary hover:bg-brand-primary/10 transition duration-300"
              >
                {item}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <a
              href="#projects"
              className="btn-primary"
            >
              Explore Work
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="btn-secondary"
            >
              Get in Touch
            </a>
          </motion.div>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}

export default HeroSection;
