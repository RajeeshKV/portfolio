import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { contactInfo } from "../data/portfolio";

export default function Contact() {
  const [ref, inView] = useInView();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 relative z-10">
          {/* Left: Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.05]"
            >
              Let's build the
              <br />
              <span className="text-primary">Reliable.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-body text-on-surface-variant text-lg md:text-xl mb-10 md:mb-12 max-w-md leading-relaxed"
            >
              Available for high-impact architecture roles and enterprise
              consulting.
            </motion.p>

            <div className="space-y-5">
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.45, duration: 0.6 }}
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-xl group-hover:text-on-primary transition-colors">
                    mail
                  </span>
                </div>
                <span className="font-headline text-base md:text-xl font-medium group-hover:text-primary transition-colors break-all">
                  {contactInfo.email}
                </span>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-xl group-hover:text-on-primary transition-colors">
                    phone
                  </span>
                </div>
                <span className="font-headline text-base md:text-xl font-medium group-hover:text-primary transition-colors">
                  {contactInfo.phone}
                </span>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-secondary hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-xl group-hover:text-background transition-colors">
                    person_add
                  </span>
                </div>
                <span className="font-headline text-base md:text-lg font-bold uppercase tracking-wider">
                  Connect on LinkedIn
                </span>
              </motion.a>
            </div>
          </div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            onSubmit={handleSubmit}
            className="space-y-6 md:space-y-8"
          >
            {/* Full Name */}
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/20 py-4 text-white placeholder:text-outline/50 focus:ring-0 focus:border-primary transition-all duration-300 font-body"
                />
                <motion.div
                  animate={{ scaleX: focused === "name" ? 1 : 0 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="john@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/20 py-4 text-white placeholder:text-outline/50 focus:ring-0 focus:border-primary transition-all duration-300 font-body"
                />
                <motion.div
                  animate={{ scaleX: focused === "email" ? 1 : 0 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                Message
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/20 py-4 text-white placeholder:text-outline/50 focus:ring-0 focus:border-primary transition-all duration-300 resize-none font-body"
                />
                <motion.div
                  animate={{ scaleX: focused === "message" ? 1 : 0 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary-fixed text-on-primary py-5 md:py-6 rounded-full font-label font-black uppercase text-xs tracking-[0.25em] hover:shadow-[0_0_40px_rgba(170,255,220,0.3)] active:scale-[0.98] transition-all duration-300"
            >
              Initiate Protocol
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
