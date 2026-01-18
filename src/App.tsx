import React, { lazy, Suspense } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import data from './data.json';
import type { PortfolioData } from './types';

// Dynamic imports for conditional rendering
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const portfolioData = data as PortfolioData;

  return (
    <div className="App">
      <Navigation />
      
      {/* Hero Section - Show if hero data exists */}
      {portfolioData.hero && (
        <Suspense fallback={<div />}>
          <Hero />
        </Suspense>
      )}
      
      {/* About Section - Show if about data exists */}
      {portfolioData.about && (
        <Suspense fallback={<div />}>
          <About />
        </Suspense>
      )}
      
      {/* Experience Section - Show if experience data exists and has items */}
      {portfolioData.experience && portfolioData.experience.length > 0 && (
        <Suspense fallback={<div />}>
          <Experience />
        </Suspense>
      )}
      
      {/* Projects Section - Show if projects data exists and has items */}
      {portfolioData.projects && portfolioData.projects.length > 0 && (
        <Suspense fallback={<div />}>
          <Projects />
        </Suspense>
      )}
      
      {/* Contact Section - Show if contact data exists */}
      {portfolioData.contact && (
        <Suspense fallback={<div />}>
          <Contact />
        </Suspense>
      )}
    </div>
  );
}

export default App;
