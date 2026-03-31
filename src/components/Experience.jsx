import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { experiences } from "../data/portfolio";

function TimelineItem({ exp, index }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative pl-8 md:pl-14 pb-12 md:pb-14 last:pb-0 group"
    >
      {/* Vertical line */}
      <div className="absolute left-[3px] md:left-0 top-0 bottom-0 w-[2px] bg-outline-variant/20 group-last:bg-gradient-to-b group-last:from-outline-variant/20 group-last:to-transparent" />

      {/* Dot */}
      <div
        className={`absolute -left-[4px] md:-left-[7px] top-1 w-4 h-4 rounded-full ring-[6px] ring-background transition-all duration-500 ${
          exp.current
            ? "bg-primary shadow-[0_0_12px_rgba(170,255,220,0.5)]"
            : "bg-outline-variant/60 group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(170,255,220,0.3)]"
        }`}
      />

      {/* Status badge for current */}
      {exp.current && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-label text-[9px] uppercase tracking-widest text-primary font-bold">
            Current
          </span>
        </motion.div>
      )}

      <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold mb-3 block">
        {exp.period}
      </span>
      <h3 className="font-headline text-2xl md:text-3xl font-bold mb-1 break-words">
        {exp.role}
      </h3>
      <p className="font-label text-secondary mb-1 font-bold tracking-wider text-sm break-words">
        {exp.company}
      </p>
      <p className="font-body text-on-surface-variant/50 text-xs mb-4 flex items-center gap-1 flex-wrap break-words">
        <span className="material-symbols-outlined text-xs shrink-0">location_on</span>
        {exp.location}
      </p>
      <p className="font-body text-on-surface-variant text-sm md:text-base leading-relaxed mb-4 break-words">
        {exp.description}
      </p>

      {/* Highlights */}
      {exp.highlights && exp.highlights.length > 0 && (
        <ul className="space-y-2">
          {exp.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-on-surface-variant/80 w-full overflow-hidden">
              <span className="material-symbols-outlined text-primary text-xs mt-1 shrink-0">
                chevron_right
              </span>
              <span className="font-body leading-relaxed flex-1 min-w-0 break-words">{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default function Experience() {
  const [headerRef, headerInView] = useInView();

  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-6 md:px-20 bg-surface-container-low"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Sticky Title */}
          <div className="md:col-span-4">
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="md:sticky md:top-32"
            >
              <span className="font-label text-primary uppercase tracking-[0.4em] mb-4 block text-xs">
                Career Path
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
                Experience
                <br />
                <span className="text-secondary">Chronicles.</span>
              </h2>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="md:col-span-8">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
