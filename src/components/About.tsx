import { motion } from 'framer-motion';

import data from '../../data.json';
import type { PortfolioData } from '../types';

const About = () => {
  const { about } = data as PortfolioData;

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>
            <div className="space-y-6">
              {about.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-slate-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-purple-500" />
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {about.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-300 font-medium hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative background shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] -mr-32 -mt-32 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;