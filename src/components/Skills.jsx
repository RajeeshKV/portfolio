import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { skills } from "../data/portfolio";

function SkillBar({ name, level, color, delay }) {
  const [ref, inView] = useInView();
  const barColor =
    color === "primary" ? "bg-primary" : "bg-secondary";
  const textColor =
    color === "primary" ? "text-primary" : "text-secondary";

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-label text-[11px] uppercase tracking-widest font-bold">
          {name}
        </span>
        <span className={`${textColor} font-mono text-[11px]`}>
          {level}%
        </span>
      </div>
      <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 1.2,
            delay: delay * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`${barColor} h-full origin-left rounded-full`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ category, delay }) {
  const [ref, inView] = useInView();
  const iconColor =
    category.color === "primary" ? "text-primary" : "text-secondary";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: delay * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="col-span-2 p-6 sm:p-8 md:p-10 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:border-outline-variant/25 transition-all duration-500"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
        <div className={`w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0`}>
          <span className={`material-symbols-outlined text-2xl ${iconColor}`}>
            {category.icon}
          </span>
        </div>
        <h3 className="font-headline text-xl md:text-2xl font-bold break-words">
          {category.title}
        </h3>
      </div>
      <div className="space-y-5">
        {category.items.map((skill, i) => (
          <SkillBar
            key={skill.name}
            {...skill}
            color={category.color}
            delay={i}
          />
        ))}
      </div>
    </motion.div>
  );
}

function ToolCard({ tool, delay }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="p-4 sm:p-6 md:p-8 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:border-primary/20 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-surface-container"
    >
      <span className="material-symbols-outlined text-2xl sm:text-3xl mb-3 sm:mb-4 text-on-surface-variant group-hover:text-primary transition-colors duration-300">
        {tool.icon}
      </span>
      <span className="font-label text-[10px] uppercase font-bold tracking-widest group-hover:text-white transition-colors">
        {tool.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-20 bg-surface">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20 text-center max-w-3xl mx-auto"
      >
        <span className="font-label text-secondary uppercase tracking-[0.4em] mb-4 block text-xs">
          Technical Arsenal
        </span>
        <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
          Tools of the Trade
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <SkillCategory category={skills.backend} delay={0} />
        <SkillCategory category={skills.architecture} delay={1} />
        {skills.tools.map((tool, i) => (
          <ToolCard key={tool.name} tool={tool} delay={i + 2} />
        ))}
      </div>
    </section>
  );
}
