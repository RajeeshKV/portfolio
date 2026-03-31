import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary/15 border border-primary/30 backdrop-blur-lg flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary hover:shadow-[0_0_30px_rgba(170,255,220,0.35)] active:scale-90 transition-all duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-xl">
            keyboard_arrow_up
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
