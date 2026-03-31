import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/portfolio";

function FeaturedProject({ project }) {
  const [ref, inView] = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="col-span-12 group relative overflow-hidden rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/20 transition-all duration-500"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="h-[200px] sm:h-[240px] lg:h-[300px] overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 blur-[2px] group-hover:blur-0"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-surface-container-highest/80 text-secondary font-label text-[10px] uppercase font-bold tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="font-label text-primary uppercase tracking-widest text-xs font-bold mb-4">
              {project.subtitle}
            </p>
          )}
          <p className="font-body text-white/85 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          {project.features && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
              {project.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">
                    check_circle
                  </span>
                  <span className="text-sm text-on-surface-variant font-medium">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          )}

          <a
            href={project.link || "#"}
            target={project.link?.startsWith("http") ? "_blank" : undefined}
            rel={project.link?.startsWith("http") ? "noopener noreferrer" : undefined}
            className="self-start font-label text-xs uppercase font-black tracking-[0.2em] text-primary hover:text-white transition-colors flex items-center gap-2 group/link"
          >
            Explore Deployment
            <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function CompanyProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  const isFullWidth = project.span === "col-span-12";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.05 * index,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`${project.span} group relative overflow-hidden rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/15 transition-all duration-500`}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high/30 via-transparent to-primary/[0.03] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/[0.04] rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/[0.08] transition-all duration-700" />

      <div className={`relative z-10 ${isFullWidth ? "grid grid-cols-1 lg:grid-cols-12 gap-6" : "flex flex-col"} p-6 md:p-8`}>
        {/* Logo + Company */}
        <div className={`${isFullWidth ? "lg:col-span-4 flex flex-col justify-center" : ""}`}>
          <div className="flex items-center gap-4 mb-5">
            <div className={`${
              project.logoSize === "lg" ? "w-28 h-16 md:w-36 md:h-20" : "w-16 h-16 md:w-20 md:h-20"
            } ${
              project.logoRounded ? "rounded-xl overflow-hidden" : "rounded-xl"
            } bg-white flex items-center justify-center ${
              project.logoRounded ? "p-0" : "p-2.5"
            } ring-1 ring-white/20 shrink-0`}>
              <img
                src={project.logo}
                alt={project.company}
                loading="lazy"
                className={`${project.logoRounded ? "w-full h-full object-cover" : "w-full h-full object-contain"}`}
              />
            </div>
            <div>
              <h3 className="font-headline text-xl md:text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                {project.title}
              </h3>
              <span className="font-label text-secondary text-xs font-bold uppercase tracking-wider">
                {project.company}
              </span>
            </div>
          </div>

          <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-surface-container-highest/60 text-secondary font-label text-[9px] uppercase font-bold tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights + Tech Stack */}
        <div className={`${isFullWidth ? "lg:col-span-8" : ""}`}>
          {/* Highlights */}
          {project.highlights && (
            <div className={`${isFullWidth ? "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2" : "space-y-2"} mb-5`}>
              {project.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-xs mt-1 shrink-0">
                    chevron_right
                  </span>
                  <span className="text-sm text-on-surface-variant/80 font-body leading-relaxed">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          {project.techStack && (
            <div className="pt-4 border-t border-outline-variant/10">
              <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50 font-bold mb-2.5 block">
                Also Used
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-surface-container-highest/40 text-on-surface-variant/70 font-label text-[9px] font-bold tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [headerRef, headerInView] = useInView();

  return (
    <section
      id="projects"
      className="py-12 md:py-16 px-6 md:px-20 bg-surface-container-low"
    >
      {/* Label */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 md:mb-12"
      >
        <span className="font-label text-primary uppercase tracking-[0.4em] block text-xs">
          Technical Deployments
        </span>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {projects.map((project, i) =>
          project.featured ? (
            <FeaturedProject key={project.id} project={project} index={i} />
          ) : project.type === "company" ? (
            <CompanyProjectCard key={project.id} project={project} index={i} />
          ) : null
        )}
      </div>
    </section>
  );
}
