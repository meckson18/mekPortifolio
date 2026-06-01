import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import SectionShell from "../components/layout/SectionShell";
import SocialLink from "../components/ui/SocialLink";
import { portfolioProfile } from "../data/portfolio";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
};

function ContactSection() {
  const { contact, socialLinks, name } = portfolioProfile;

  return (
    <SectionShell id="contact" className="relative py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
      >
        <p className="eyebrow mb-4">{contact.eyebrow}</p>
        <h2 className="mb-5 text-3xl font-bold leading-[1.05] text-brand-secondary sm:text-4xl lg:text-5xl">
          {contact.heading}
        </h2>
        <p className="text-base leading-relaxed text-brand-muted sm:text-lg">
          {contact.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 grid max-w-5xl gap-5 md:grid-cols-2"
      >
        <div className="card-premium p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-brand-primary/10 p-3 text-brand-primary">
              <Mail className="h-6 w-6" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted">
              {contact.panel.emailLabel}
            </p>
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="break-words text-lg font-semibold text-brand-secondary transition duration-300 hover:text-brand-primary"
          >
            {contact.email}
          </a>
        </div>

        <div className="card-premium p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-brand-primary/10 p-3 text-brand-primary">
              <Phone className="h-6 w-6" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted">
              {contact.panel.phoneLabel}
            </p>
          </div>
          <div className="space-y-2">
            {contact.phone.map((number) => (
              <a
                key={number}
                href={`tel:${number}`}
                className="block font-medium text-brand-secondary transition duration-300 hover:text-brand-primary"
              >
                {number}
              </a>
            ))}
          </div>
        </div>

        <div className="card-premium p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-brand-primary/10 p-3 text-brand-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-muted">
                {contact.panel.locationLabel}
              </p>
              <p className="font-medium text-brand-secondary">
                {contact.location}
              </p>
            </div>
          </div>
        </div>

        <div className="card-premium border-brand-primary/30 bg-brand-primary/5 p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-muted">
            {contact.panel.availabilityLabel}
          </p>
          <p className="font-medium text-brand-secondary">
            {contact.availability}
          </p>
        </div>

        <div className="card-premium p-6 md:col-span-2">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-muted">
            {contact.panel.socialLabel}
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href }) => (
              <SocialLink
                key={label}
                href={href}
                label={label}
                icon={socialIcons[label.toLowerCase()] || socialIcons[label]}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="card-premium border-t-2 border-brand-border p-6 sm:p-8"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold text-brand-secondary">{name}</p>
            <p className="mt-1 text-sm text-brand-muted">
              {contact.footer.note}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-brand-text transition duration-300 hover:text-brand-primary"
            >
              {contact.email}
            </a>
            <span className="hidden text-brand-border sm:inline">|</span>
            <p className="text-brand-muted">{contact.footer.copyright}</p>
            <span className="hidden text-brand-border sm:inline">|</span>
            <a
              href="#hero"
              className="font-semibold text-brand-primary transition duration-300 hover:text-brand-secondary"
            >
              {contact.footer.backToTopLabel}
            </a>
          </div>
        </div>
      </motion.footer>
    </SectionShell>
  );
}

export default ContactSection;
