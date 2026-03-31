import { useEffect } from "react";

const HEADER_GAP = 20;
const MAX_WAIT_FRAMES = 180;
const STABLE_ALIGNMENT_FRAMES = 8;
const POSITION_TOLERANCE = 4;

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

function scrollToHash(hash, options = {}) {
  if (!hash || hash === "#") return false;

  const target = document.querySelector(hash);
  if (!target) return false;

  window.scrollTo({
    top: getTargetScrollTop(target),
    behavior: options.behavior ?? "smooth",
  });

  return target;
}

export default function HashScrollManager() {
  useEffect(() => {
    let rafIds = [];

    const scheduleScroll = (hash, options = {}) => {
      let waitFrames = 0;
      let alignedFrames = 0;

      const registerFrame = (callback) => {
        const id = window.requestAnimationFrame(callback);
        rafIds.push(id);
      };

      const alignToTarget = (target) => {
        const desiredTop = getTargetScrollTop(target);
        const delta = Math.abs(window.scrollY - desiredTop);

        window.scrollTo({
          top: desiredTop,
          behavior: options.behavior ?? "smooth",
        });

        if (delta <= POSITION_TOLERANCE) {
          alignedFrames += 1;
        } else {
          alignedFrames = 0;
        }

        if (alignedFrames < STABLE_ALIGNMENT_FRAMES) {
          registerFrame(() => alignToTarget(target));
        }
      };

      const waitForTarget = () => {
        const target = scrollToHash(hash, options);
        waitFrames += 1;

        if (target) {
          alignedFrames = 0;
          registerFrame(() => alignToTarget(target));
          return;
        }

        if (waitFrames < MAX_WAIT_FRAMES) {
          registerFrame(waitForTarget);
        }
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
      rafIds.forEach((id) => window.cancelAnimationFrame(id));
      rafIds = [];
    };
  }, []);

  return null;
}
