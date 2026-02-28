import { motion } from 'framer-motion';

import { Briefcase, Calendar, MapPin } from 'lucide-react';
import data from '../../data.json';

const Experience = () => {
  const { experience } = data;

  return (
    <section id="experience" className="py-24 px-4 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Journey</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-ml-px" />

              <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 w-full">
                  <div className="glass p-8 rounded-[2rem] hover:border-purple-500/30 transition-all duration-500 relative">
                    <div className="flex items-center gap-3 text-purple-400 mb-4">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-bold uppercase tracking-wider text-xs">{item.company}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.position}</h3>

                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-6">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    </div>

                    <p className="text-slate-400 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies?.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] font-bold uppercase rounded-lg border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute top-8 -left-[41px] md:left-auto md:right-[-41px] w-5 h-5 bg-purple-500 rounded-full border-4 border-[#0a0a0c] z-10 hidden md:block"
                      style={index % 2 === 0 ? { right: '-41px' } : { left: '-41px' }}
                    />
                    {/* Mobile timeline dot */}
                    <div className="absolute top-8 -left-[41px] w-5 h-5 bg-purple-500 rounded-full border-4 border-[#0a0a0c] z-10 md:hidden" />
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;