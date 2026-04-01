import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    document.body.style.overflow = "hidden";

    const hardMaxTimeout = setTimeout(() => {
      if (!cancelled) setLoading(false);
    }, isMobile ? 2200 : 2600);

    const waitForWindowLoad = () =>
      new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve();
          return;
        }

        const onLoad = () => {
          window.removeEventListener("load", onLoad);
          resolve();
        };

        window.addEventListener("load", onLoad, { once: true });
      });

    const waitForFrames = (frames = 2) =>
      new Promise((resolve) => {
        const step = (remaining) => {
          if (remaining <= 0) {
            resolve();
            return;
          }
          requestAnimationFrame(() => step(remaining - 1));
        };
        step(frames);
      });

    const minDelay = new Promise((resolve) =>
      setTimeout(resolve, isMobile ? 280 : 420)
    );
    const loadSettled = Promise.race([
      waitForWindowLoad(),
      new Promise((resolve) =>
        setTimeout(resolve, isMobile ? 900 : 1200)
      ),
    ]);

    Promise.all([loadSettled, minDelay])
      .then(() => waitForFrames(2))
      .then(() => {
        if (!cancelled) setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
      clearTimeout(hardMaxTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = "";
    }
  }, [loading]);

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

      <div
        aria-hidden={loading}
        style={
          loading
            ? {
                opacity: 0,
                visibility: "hidden",
                pointerEvents: "none",
              }
            : { animation: "contentFadeIn 0.35s ease-out forwards" }
        }
      >
        {children}
      </div>
    </>
  );
}
