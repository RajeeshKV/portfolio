import { useEffect } from "react";

const HEADER_GAP = 20;
const MAX_ATTEMPTS = 30;

function getHeaderOffset() {
  const nav = document.querySelector("nav");
  return nav ? nav.getBoundingClientRect().height + HEADER_GAP : 96;
}

function scrollToHash(hash, options = {}) {
  if (!hash || hash === "#") return false;

  const target = document.querySelector(hash);
  if (!target) return false;

  const top =
    window.scrollY + target.getBoundingClientRect().top - getHeaderOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: options.behavior ?? "smooth",
  });

  return true;
}

export default function HashScrollManager() {
  useEffect(() => {
    let rafId = 0;

    const scheduleScroll = (hash, options = {}) => {
      let attempts = 0;

      const tryScroll = () => {
        const didScroll = scrollToHash(hash, options);
        attempts += 1;

        if (!didScroll && attempts < MAX_ATTEMPTS) {
          rafId = window.requestAnimationFrame(tryScroll);
        }
      };

      rafId = window.requestAnimationFrame(tryScroll);
    };

    const onDocumentClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const url = new URL(link.href, window.location.href);
      if (
        url.pathname !== window.location.pathname ||
        url.origin !== window.location.origin
      ) {
        return;
      }

      event.preventDefault();

      if (window.location.hash !== href) {
        window.history.pushState(null, "", href);
      }

      scheduleScroll(href);
    };

    const onHashChange = () => {
      if (window.location.hash) {
        scheduleScroll(window.location.hash, { behavior: "smooth" });
      }
    };

    document.addEventListener("click", onDocumentClick);
    window.addEventListener("hashchange", onHashChange);

    if (window.location.hash) {
      scheduleScroll(window.location.hash, { behavior: "auto" });
    }

    return () => {
      document.removeEventListener("click", onDocumentClick);
      window.removeEventListener("hashchange", onHashChange);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
