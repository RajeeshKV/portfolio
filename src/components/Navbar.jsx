import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/portfolio";
import { useActiveSection } from "../hooks/useInView";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile nav open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-5 transition-all duration-500 ${
          scrolled
            ? "bg-surface-container-lowest/90 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(72,72,73,0.15)]"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="text-2xl font-black tracking-tighter font-headline group">
          <span className="text-primary">
            Rajeesh
          </span>
          <span className="text-on-surface-variant/40">.KV</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 font-headline text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                active === link.href.slice(1)
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              {link.label}
              {active === link.href.slice(1) && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Resume Button (Desktop) */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-fixed text-on-primary px-7 py-2.5 rounded-full font-label font-bold uppercase text-[10px] tracking-[0.2em] hover:shadow-[0_0_25px_rgba(170,255,220,0.35)] active:scale-95 transition-all duration-300"
        >
          Resume
          <span className="material-symbols-outlined text-sm">download</span>
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white origin-center"
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 mobile-nav-overlay bg-surface-container-lowest/95 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`font-headline text-3xl font-bold uppercase tracking-wider transition-colors ${
                  active === link.href.slice(1)
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-white"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              className="mt-4 bg-gradient-to-r from-primary to-primary-fixed text-on-primary px-10 py-4 rounded-full font-label font-bold uppercase text-xs tracking-[0.2em]"
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
