import { motion } from 'framer-motion';

import { Mail, MessageSquare, Send, Github, Linkedin, Globe } from 'lucide-react';
import data from '../../data.json';
import type { PortfolioData } from '../types';

const Contact = () => {
  const { contact, personal } = data as PortfolioData;

  if (!contact) return null;

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{contact.title || "Get In Touch"}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {contact.description || "I'm currently looking for new opportunities. My inbox is always open!"}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-6">
                {personal.email && (
                  <div className="flex items-center gap-4 text-slate-400 hover:text-purple-400 transition-colors cursor-pointer group">
                    <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Me</p>
                      <p className="text-lg font-medium">{personal.email}</p>
                    </div>
                  </div>
                )}
                {personal.location && (
                  <div className="flex items-center gap-4 text-slate-400 transition-colors">
                    <div className="p-3 bg-pink-500/10 rounded-xl">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Location</p>
                      <p className="text-lg font-medium">{personal.location}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-12">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Social Connect</p>
                <div className="flex gap-4">
                  {contact.socialLinks?.map((social, index) => {
                    const Icon = social.platform.toLowerCase() === 'github' ? Github :
                      social.platform.toLowerCase() === 'linkedin' ? Linkedin : MessageSquare;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-slate-400 hover:text-white transition-all hover:-translate-y-1"
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
              <input type="text" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-purple-500/50 transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
              <input type="email" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-purple-500/50 transition-all" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
              <textarea rows={4} className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-purple-500/50 transition-all resize-none" placeholder="Your message..."></textarea>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;