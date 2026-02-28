import { motion } from 'framer-motion';

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import data from '../../data.json';
import type { PortfolioData } from '../types';
import ImageWithFallback from './ImageWithFallback';

const Hero = () => {
  const { personal, hero } = data as PortfolioData;


  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4 block"
          >
            {hero.greeting || "Hello World, I'm"}
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-400 mb-8">
            {personal.title}
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={hero.primaryButton?.link || "#projects"}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-purple-500/20"
            >
              {hero.primaryButton?.text || "View My Work"}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <div className="flex items-center gap-3 ml-4">
              {personal.github && (
                <a href={personal.github} target="_blank" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition text-slate-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {personal.linkedin && (
                <a href={personal.linkedin} target="_blank" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition text-slate-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {personal.email && (
                <a href={`mailto:${personal.email}`} className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition text-slate-400 hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden border-2 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-700 glass p-4">
            <ImageWithFallback
              src={personal.profileImage}
              alt={personal.name}
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;