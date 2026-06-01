import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "../../data/portfolio";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-6 inset-x-4 z-50"
      >
        <div className="rounded-3xl border border-brand-border/50 bg-white/80 backdrop-blur-md shadow-soft">
          <div className="flex items-center justify-between px-4 py-3.5 sm:px-8">
            {/* Logo */}
            <a href="#hero" className="mr-8 font-bold text-brand-secondary text-lg">
              {personalInfo.firstName}
            </a>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-brand-text rounded-lg transition duration-300 hover:bg-brand-primary/10 hover:text-brand-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <a
                href="#contact"
                className="ml-4 px-5 py-2 rounded-lg bg-brand-primary text-white text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:shadow-hover"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden ml-4 p-3 text-brand-text hover:bg-brand-light rounded-lg transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (slide-down full width) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="sm:hidden mt-3"
          >
            <div className="rounded-2xl border border-brand-border/30 bg-white shadow-md mx-0 px-4 py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-brand-text rounded-lg transition duration-300 hover:bg-brand-primary/10 hover:text-brand-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  className="block w-full text-center px-4 py-3 rounded-lg bg-brand-primary text-white text-base font-semibold transition duration-300 hover:shadow-hover mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
