import { motion } from "framer-motion";
import { contactInfo } from "../data/portfolio";

function LinkedInIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.05-.79-1.94-1.91-1.94-1.11 0-1.91.89-1.91 1.94 0 1.03.78 1.94 1.88 1.94h.02c1.14 0 1.92-.91 1.92-1.94ZM20.44 13.05c0-3.47-1.85-5.08-4.33-5.08-2 0-2.89 1.1-3.39 1.88V8.5H9.34c.04.89 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.13-.92.27-.68.89-1.39 1.92-1.39 1.36 0 1.9 1.04 1.9 2.57V20H20v-6.95Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M19.11 4.89A9.93 9.93 0 0 0 12.04 2C6.53 2 2.06 6.47 2.06 11.98c0 1.76.46 3.47 1.32 4.98L2 22l5.19-1.36a9.95 9.95 0 0 0 4.85 1.24h.01c5.5 0 9.97-4.48 9.97-9.99a9.9 9.9 0 0 0-2.91-7Zm-7.07 15.3h-.01a8.28 8.28 0 0 1-4.22-1.16l-.3-.18-3.08.81.82-3-.2-.31a8.27 8.27 0 0 1-1.28-4.39c0-4.57 3.72-8.29 8.3-8.29 2.21 0 4.29.86 5.85 2.43a8.23 8.23 0 0 1 2.43 5.87c0 4.57-3.72 8.29-8.31 8.29Zm4.55-6.19c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.56.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.76-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.89-.2-.49-.41-.42-.57-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.17 1.77 2.7 4.3 3.79.6.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

function FooterIcon({ icon }) {
  if (icon === "linkedin") {
    return <LinkedInIcon className="h-5 w-5" />;
  }

  if (icon === "whatsapp") {
    return <WhatsAppIcon className="h-5 w-5" />;
  }

  return <span className="material-symbols-outlined text-[20px]">{icon}</span>;
}

const quickLinks = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`,
    icon: "whatsapp",
  },
  {
    label: "Call",
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    icon: "call",
  },
  {
    label: "Mail",
    href: `mailto:${contactInfo.email}`,
    icon: "mail",
  },
  {
    label: "LinkedIn",
    href: contactInfo.linkedin,
    icon: "linkedin",
  },
];

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

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {quickLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant/20 bg-surface-container-low text-on-surface-variant transition-all duration-300 hover:border-primary/40 hover:bg-primary hover:text-on-primary"
            >
              <FooterIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
