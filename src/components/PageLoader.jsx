import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Hard max timeout — never block the page for more than 2s
    const maxTimeout = setTimeout(() => setLoading(false), 2000);

    const minDelay = new Promise((r) => setTimeout(r, 400));

    // Safely check fonts API with fallback
    const fontsReady = document.fonts && document.fonts.ready
      ? document.fonts.ready
      : Promise.resolve();

    Promise.all([minDelay, fontsReady])
      .then(() => setLoading(false))
      .catch(() => setLoading(false));

    return () => clearTimeout(maxTimeout);
  }, []);

  // Once loading ends, wait a frame then mount children
  // This prevents the main thread from freezing because
  // we no longer render all heavy components while the loader is visible
  useEffect(() => {
    if (!loading) {
      // Use requestAnimationFrame to let the exit animation start,
      // then mount children on the next frame
      const raf = requestAnimationFrame(() => {
        setShowContent(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ pointerEvents: "auto" }}
            className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center gap-6"
          >
            {/* Animated logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl font-black tracking-tighter font-headline"
            >
              <span className="text-primary">Rajeesh</span>
              <span className="text-on-surface-variant/40">.KV</span>
            </motion.div>

            {/* Loading bar */}
            <div className="w-40 h-[2px] bg-surface-container-highest rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="w-full h-full bg-primary rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && children}
    </>
  );
}
