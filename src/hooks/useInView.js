import { useEffect, useRef, useState } from "react";

// ===================================================================
// SHARED INTERSECTION OBSERVER
// Instead of creating one IntersectionObserver per useInView() call
// (~20+ on this page), we share a single observer for all elements
// with the same threshold. This drastically reduces main-thread work
// on mobile during initial render.
// ===================================================================

const observerMap = new Map(); // key: threshold -> observer instance
const callbackMap = new WeakMap(); // element -> callback

function getSharedObserver(threshold) {
  const key = String(threshold);
  if (observerMap.has(key)) return observerMap.get(key);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const cb = callbackMap.get(entry.target);
        if (cb && entry.isIntersecting) {
          cb();
          observer.unobserve(entry.target);
          callbackMap.delete(entry.target);
        }
      });
    },
    { threshold }
  );

  observerMap.set(key, observer);
  return observer;
}

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const threshold = options.threshold ?? 0.1;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getSharedObserver(threshold);

    callbackMap.set(element, () => setIsInView(true));
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      callbackMap.delete(element);
    };
  }, [threshold]);

  return [ref, isInView];
}

export function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    let observer;

    function observe() {
      if (observer) observer.disconnect();

      const sections = document.querySelectorAll("section[id]");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      sections.forEach((s) => observer.observe(s));
    }

    // Initial setup
    observe();

    // Re-observe after deferred sections have mounted (~300ms stagger)
    const timer = setTimeout(observe, 1000);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  return active;
}
