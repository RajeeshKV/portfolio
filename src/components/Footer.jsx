import { motion } from "framer-motion";
import { contactInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 md:py-20 px-6 md:px-10 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold font-headline"
        >
          <span className="text-primary">Rajeesh</span>
          <span className="text-on-surface-variant/40">.KV</span>
        </motion.a>

        {/* Copyright */}
        <div className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/50 text-center">
          © {new Date().getFullYear()} RAJEESH KV. ENGINEERED FOR RELIABILITY.
        </div>

        {/* Social Links */}
        <div className="flex gap-8 md:gap-12">
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-xs font-black uppercase tracking-[0.2em] text-secondary hover:text-primary transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant/50 hover:text-primary transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
