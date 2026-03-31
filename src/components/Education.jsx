import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { education } from "../data/portfolio";

export default function Education() {
  const [headerRef, headerInView] = useInView();
  const [cardRef, cardInView] = useInView();

  return (
    <section id="education" className="py-16 md:py-24 px-6 md:px-20 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Title */}
          <div className="md:col-span-4">
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-label text-secondary uppercase tracking-[0.4em] mb-4 block text-xs">
                Academic Background
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
                Education
                <br />
                <span className="text-primary">Foundation.</span>
              </h2>
            </motion.div>
          </div>

          {/* Education Card */}
          <div className="md:col-span-8">
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, y: 40 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 md:p-10 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:border-primary/20 transition-all duration-500 group overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/10 transition-all duration-700" />

              <div className="relative z-10">
                {/* Degree icon */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl text-primary">
                      school
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {education.degree}
                    </h3>
                    <p className="font-label text-secondary font-bold tracking-wider text-sm mb-1">
                      {education.institution}
                    </p>
                    <p className="font-body text-on-surface-variant/60 text-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {education.location}
                    </p>
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-outline-variant/10">
                  <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-container">
                    <span className="material-symbols-outlined text-xl text-primary">
                      military_tech
                    </span>
                    <div>
                      <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/60 block">
                        CGPA
                      </span>
                      <span className="font-headline text-2xl font-bold text-primary">
                        {education.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
