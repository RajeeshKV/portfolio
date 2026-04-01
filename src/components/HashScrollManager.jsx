import { useEffect } from "react";

const HEADER_GAP = 20;
const MAX_WAIT_FRAMES = 36;
const WARMUP_FRAMES = 2;
const REQUIRED_STABLE_FRAMES = 2;
const STABLE_DELTA = 2;
const FORCED_LAYOUT_CLASS = "hash-scroll-layout-ready";

function getHeaderOffset() {
  const nav = document.querySelector("nav");
  return nav ? nav.getBoundingClientRect().height + HEADER_GAP : 96;
}

function getTargetScrollTop(target) {
  return Math.max(
    0,
    window.scrollY + target.getBoundingClientRect().top - getHeaderOffset()
  );
}

function isPageLoading() {
  return document.documentElement.dataset.pageLoading === "true";
}

function setForcedLayout(enabled) {
  document.documentElement.classList.toggle(FORCED_LAYOUT_CLASS, enabled);
}

export default function HashScrollManager() {
  useEffect(() => {
    let rafIds = [];

    const scheduleScroll = (hash, options = {}) => {
      const registerFrame = (callback) => {
        const id = window.requestAnimationFrame(callback);
        rafIds.push(id);
      };

      let waitFrames = 0;
      let stableFrames = 0;
      let lastTop = null;

      setForcedLayout(true);

      const finish = (top) => {
        setForcedLayout(false);

        if (typeof top === "number") {
          window.scrollTo({
            top,
            behavior: options.behavior ?? "smooth",
          });
        }
      };

      const waitForTarget = () => {
        waitFrames += 1;

        if (isPageLoading()) {
          if (waitFrames < MAX_WAIT_FRAMES) {
            registerFrame(waitForTarget);
          } else {
            finish();
          }
          return;
        }

        const target = document.querySelector(hash);

        if (!target) {
          if (waitFrames < MAX_WAIT_FRAMES) {
            registerFrame(waitForTarget);
          } else {
            finish();
          }
          return;
        }

        if (waitFrames <= WARMUP_FRAMES) {
          registerFrame(waitForTarget);
          return;
        }

        const nextTop = getTargetScrollTop(target);

        if (lastTop !== null && Math.abs(nextTop - lastTop) <= STABLE_DELTA) {
          stableFrames += 1;
        } else {
          stableFrames = 0;
        }

        lastTop = nextTop;

        if (stableFrames >= REQUIRED_STABLE_FRAMES || waitFrames >= MAX_WAIT_FRAMES) {
          finish(nextTop);
          return;
        }

        registerFrame(waitForTarget);
      };

      registerFrame(waitForTarget);
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

      scheduleScroll(href, { behavior: "smooth" });
    };

    const onHashChange = () => {
      if (window.location.hash) {
        scheduleScroll(window.location.hash, { behavior: "smooth" });
      }
    };

    document.addEventListener("click", onDocumentClick);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("page-loader:complete", onHashChange);

    if (window.location.hash) {
      scheduleScroll(window.location.hash, { behavior: "auto" });
    }

    return () => {
      setForcedLayout(false);
      document.removeEventListener("click", onDocumentClick);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("page-loader:complete", onHashChange);
      rafIds.forEach((id) => window.cancelAnimationFrame(id));
      rafIds = [];
    };
  }, []);

  return null;
}
