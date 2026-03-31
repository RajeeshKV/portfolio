import { useState, useEffect, startTransition } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import HashScrollManager from "./components/HashScrollManager";

/**
 * Defers mounting of children to a future frame.
 * Each Deferred component triggers its own React render commit
 * via setTimeout, spreading work across multiple frames so the
 * main thread never blocks long enough to cause a visible freeze.
 *
 * startTransition marks the update as non-urgent so React can
 * yield to user input (scrolling, tapping) between renders.
 */
function Deferred({ children, delay = 0 }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      startTransition(() => setShow(true));
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return show ? children : null;
}

export default function App() {
  return (
    <PageLoader>
      <HashScrollManager />
      <Navbar />
      <main>
        {/* Hero mounts immediately — it's above the fold */}
        <Hero />

        {/* Below-fold sections mount progressively, each in its
            own frame. The user is reading the Hero during this
            time so they never perceive the staggered mounting. */}
        <Deferred delay={50}>
          <Projects />
        </Deferred>
        <Deferred delay={100}>
          <Skills />
        </Deferred>
        <Deferred delay={150}>
          <Experience />
        </Deferred>
        <Deferred delay={200}>
          <Education />
        </Deferred>
        <Deferred delay={250}>
          <Hobbies />
        </Deferred>
        <Deferred delay={300}>
          <Contact />
        </Deferred>
      </main>
      <Deferred delay={300}>
        <Footer />
      </Deferred>
      <ScrollToTop />
    </PageLoader>
  );
}
