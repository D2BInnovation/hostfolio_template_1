import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import data from '../../data.json';
import type { PortfolioData } from '../types';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { personal, experience, projects, about, contact } = data as PortfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
  ];
  if (about && (about.description?.length > 0 || about.skills?.length > 0)) {
    navLinks.push({ name: 'About', href: '#about' });
  }
  if (experience && experience.length > 0) {
    navLinks.push({ name: 'Experience', href: '#experience' });
  }
  if (projects && projects.length > 0) {
    navLinks.push({ name: 'Projects', href: '#projects' });
  }
  if (contact) {
    navLinks.push({ name: 'Contact', href: '#contact' });
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-2xl md:rounded-full px-6 py-3 transition-all duration-500 flex items-center justify-between ${scrolled ? 'bg-black/40 shadow-xl' : 'bg-transparent'}`}>
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
              <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-contain filter brightness-0 invert" />
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">{personal.name.split(' ')[0]}</span>
          </a>


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            {contact && (
              <a
                href="#contact"
                className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 active:scale-95"
              >
                Hire Me
              </a>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 md:hidden"
          >
            <div className="glass rounded-3xl p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-medium text-slate-400 hover:text-white py-2 border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {contact && (
                <button className="w-full py-4 bg-white text-black rounded-2xl font-bold mt-4">
                  Hire Me
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;