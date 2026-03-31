import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hard max — never show loader more than 2.5s
    const maxTimeout = setTimeout(() => setLoading(false), 3000);

    // Min 600ms so the loader is perceived (not a flash)
    const minDelay = new Promise((r) => setTimeout(r, 800));
    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    Promise.all([minDelay, fontsReady])
      .then(() => setLoading(false))
      .catch(() => setLoading(false));

    return () => clearTimeout(maxTimeout);
  }, []);

  return (
    <>
      {/* Loader overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center gap-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl font-black tracking-tighter font-headline"
            >
              <span className="text-primary">Rajeesh</span>
              <span className="text-on-surface-variant/40">.KV</span>
            </motion.div>

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

      {/*
        Children are NOT rendered until loading is false.
        This prevents ALL React components from mounting while
        the loader is visible — the #1 cause of the mobile freeze.

        The contentFadeIn CSS animation is used instead of
        framer-motion here to avoid adding FM overhead to the
        content wrapper itself.
      */}
      {!loading && (
        <div style={{ animation: "contentFadeIn 0.4s ease-out forwards" }}>
          {children}
        </div>
      )}
    </>
  );
}
