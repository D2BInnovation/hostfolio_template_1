import { useState, useEffect, type FC } from 'react';
import './Navigation.css';
import type { PortfolioData } from '../types';
import data from '../../data.json';

const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { personal, about, experience, projects, contact, resume } = data as PortfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [];
  if (about && (about.description?.length > 0 || about.skills?.length > 0)) {
    navItems.push({ label: 'About', href: '#about' });
  }
  if (experience && experience.length > 0) {
    navItems.push({ label: 'Experience', href: '#experience' });
  }
  if (projects && projects.length > 0) {
    navItems.push({ label: 'Projects', href: '#projects' });
  }
  if (contact) {
    navItems.push({ label: 'Contact', href: '#contact' });
  }

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {personal.name}
          </a>
        </div>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          {resume && (
            <a href={resume} target="_blank" rel="noopener noreferrer" className="nav-link resume-btn">
              Resume
            </a>
          )}
        </div>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;