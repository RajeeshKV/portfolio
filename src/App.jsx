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
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </PageLoader>
  );
}
