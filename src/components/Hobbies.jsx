import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const hobbies = [
  {
    icon: "photo_camera",
    title: "Photography",
    description: "Capturing moments through the lens - landscapes, street life, and creative compositions.",
    link: "https://www.google.com",
    linkText: "View Gallery",
    color: "primary",
  },
];

export default function Hobbies() {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="hobbies" className="py-16 md:py-24 px-6 md:px-20 bg-surface">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
      >
        <span className="font-label text-secondary uppercase tracking-[0.4em] mb-4 block text-xs">
          Beyond Code
        </span>
        <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
          Hobbies & Interests
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
        {hobbies.map((hobby, i) => {
          const [ref, inView] = useInView();
          return (
            <motion.a
              key={hobby.title}
              ref={ref}
              href={hobby.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 md:p-10 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:border-primary/25 transition-all duration-500 flex items-center gap-6 md:gap-8 cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-surface-container flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-primary group-hover:scale-110 transition-transform">
                  {hobby.icon}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {hobby.title}
                </h3>
                <p className="font-body text-on-surface-variant text-sm md:text-base leading-relaxed">
                  {hobby.description}
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 font-label text-xs uppercase font-black tracking-[0.2em] text-primary shrink-0 group-hover:translate-x-1 transition-transform">
                {hobby.linkText}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
