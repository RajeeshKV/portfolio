import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
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

function ContactIcon({ icon }) {
  if (icon === "linkedin") {
    return <LinkedInIcon className="h-5 w-5" />;
  }

  if (icon === "whatsapp") {
    return <WhatsAppIcon className="h-5 w-5" />;
  }

  return <span className="material-symbols-outlined text-xl">{icon}</span>;
}

const contactCards = [
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: "mail",
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: `https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`,
    icon: "whatsapp",
    external: true,
  },
  {
    label: "Call",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    icon: "call",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: contactInfo.linkedin,
    icon: "linkedin",
    external: true,
  },
];

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-20 bg-surface">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto glass-panel p-8 sm:p-12 md:p-16 lg:p-24 rounded-3xl border border-outline-variant/10 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.05]"
          >
            Let&apos;s build the
            <br />
            <span className="text-primary">Reliable.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-body text-on-surface-variant text-lg md:text-xl mb-10 md:mb-14 max-w-2xl leading-relaxed"
          >
            Available for high-impact architecture roles, backend engineering,
            and enterprise consulting. Reach out directly through the channels
            below.
          </motion.p>

          <div className="flex flex-wrap items-center gap-4 md:gap-5">
            {contactCards.map((item, index) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.08, duration: 0.6 }}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                className="group inline-flex h-16 w-16 items-center justify-center rounded-full border border-outline-variant/10 bg-surface-container-low/70 text-on-surface-variant transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary hover:text-on-primary"
              >
                <span className="transition-colors">
                  <ContactIcon icon={item.icon} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
