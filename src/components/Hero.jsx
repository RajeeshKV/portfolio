import { motion } from "framer-motion";
import { useEffect, useState, memo } from "react";

const terminalLines = [
  { text: "> dotnet --version", type: "cmd", delay: 0 },
  { text: "8.0.100", type: "output", delay: 600 },
  { text: "> dotnet run architecture", type: "cmd", delay: 1200 },
  { text: "Bootstrapping Backend_Services...", type: "status", delay: 1800 },
  { text: "[1] Resolving microservice dependencies", type: "output", delay: 2200 },
  { text: "[2] Validating CQRS pipelines", type: "output", delay: 2600 },
  { text: "[3] Establishing database handshake", type: "output", delay: 3000 },
  { text: "[4] Scaling Azure nodes...", type: "output", delay: 3400 },
  { text: "✓ System Online: 200 OK", type: "success", delay: 4200 },
];

const colorMap = {
  cmd: "text-secondary/80",
  output: "text-on-surface-variant/80",
  status: "text-primary",
  success: "text-primary font-bold",
};

const TypingLine = memo(function TypingLine({ text, type, delay }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started) return null;

  return (
    <div className={`${colorMap[type]} text-[13px] leading-relaxed font-mono`}>
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-pulse text-primary">▊</span>
      )}
    </div>
  );
});

export default function Hero() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const instantIntro = isMobile;
  const scrollIndicatorAnimation = isMobile ? {} : { y: [0, 8, 0] };
  const scrollIndicatorTransition = isMobile
    ? { duration: 0 }
    : { repeat: Infinity, duration: 2, ease: "easeInOut" };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start px-6 md:px-20 overflow-hidden"
    >
      {/* Ambient Glow Effects — simplified on mobile via will-change */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-tertiary/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(170,255,220,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,220,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full">
        <motion.span
          initial={instantIntro ? false : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: instantIntro ? 0.2 : 0.8,
            delay: instantIntro ? 0 : 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-label text-secondary uppercase tracking-[0.4em] mb-6 block text-xs md:text-sm"
        >
          Staff Engineer | Backend Architect
        </motion.span>

        <motion.h1
          initial={instantIntro ? false : { opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: instantIntro ? 0.25 : 1,
            delay: instantIntro ? 0 : 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 text-glow"
        >
          Rajeesh KV.
          <br />
          <span className="text-on-surface-variant/30">Architect.</span>
          <br />
          Engineer.
        </motion.h1>

        <motion.p
          initial={instantIntro ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: instantIntro ? 0.25 : 0.9,
            delay: instantIntro ? 0.05 : 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-body text-lg md:text-xl lg:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed"
        >
          Architecting scalable enterprise systems with 5+ years of experience
          in .NET Core, Microservices, and Cloud Infrastructure.
        </motion.p>

        <motion.div
          initial={instantIntro ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: instantIntro ? 0.25 : 0.9,
            delay: instantIntro ? 0.08 : 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6"
        >
          <a
            href="#projects"
            data-home-cta-primary
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-fixed text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-full font-label font-extrabold uppercase text-xs md:text-sm tracking-[0.15em] hover:shadow-[0_0_40px_rgba(170,255,220,0.4)] transition-all duration-300"
          >
            System Portfolio
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
          <a
            href="#contact"
            data-home-cta-secondary
            className="inline-flex items-center justify-center gap-3 border border-outline-variant/30 text-primary px-8 md:px-10 py-4 md:py-5 rounded-full font-label font-extrabold uppercase text-xs md:text-sm tracking-[0.15em] hover:bg-surface-container-high hover:border-primary/30 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Terminal Decoration — only on desktop (hidden lg:block), so no perf impact on mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute right-16 xl:right-24 top-1/2 -translate-y-1/2 w-[420px]"
      >
        <div className="bg-surface-container-lowest/80 border border-outline-variant/20 rounded-xl p-6 backdrop-blur-sm shadow-2xl shadow-black/30">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-5 pb-4 border-b border-outline-variant/15">
            <div className="w-3 h-3 rounded-full bg-error-dim/80" />
            <div className="w-3 h-3 rounded-full bg-tertiary/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <span className="ml-3 font-mono text-[10px] text-on-surface-variant/40 uppercase tracking-wider">
              terminal — zsh
            </span>
          </div>
          {/* Terminal Lines */}
          <div className="space-y-1 min-h-[200px]">
            {terminalLines.map((line, i) => (
              <TypingLine key={i} {...line} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={instantIntro ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: instantIntro ? 0.12 : 1.5, duration: instantIntro ? 0.25 : 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-label text-[9px] uppercase tracking-[0.3em] text-on-surface-variant/40">
          Scroll
        </span>
        <motion.div
          animate={scrollIndicatorAnimation}
          transition={scrollIndicatorTransition}
          className="w-5 h-8 border border-outline-variant/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
