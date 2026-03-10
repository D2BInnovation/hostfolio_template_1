import { useEffect } from 'react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import data from '../data.json';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (data.personal?.name) {
      document.title = `${data.personal.name} | Portfolio`;
    }
  }, []);

  return (
    <div className="relative antialiased">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navigation />

      <main className="space-y-0">
        <Hero />
        {data.about && <About />}
        {data.experience && data.experience.length > 0 && <Experience />}
        {data.projects && data.projects.length > 0 && <Projects />}
        {data.contact && <Contact />}
      </main>

      <footer className="py-12 text-center text-slate-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} {data.personal?.name || 'Portfolio'}. Built with Template 1.</p>
      </footer>
    </div>
  );
}

export default App;
