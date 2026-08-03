import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Cloud, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/5 bg-[#07090e]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trayectoria</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Experiencia <span className="text-gradient-accent">Profesional</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent -translate-x-1/2 hidden sm:block" />

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Center Badge Node */}
              <div className="absolute left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-[#0d111a] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20 z-10 hidden sm:flex">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
              </div>

              {/* Main Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                
                {/* Accent top gradient indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400" />

                {/* Company & Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{item.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">{item.type}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed my-5 font-light">
                  {item.description}
                </p>

                {/* Functions & Responsibilities List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Funciones y Logros Clave:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.responsibilities.map((resp, rIdx) => (
                      <div 
                        key={rIdx} 
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 font-light hover:bg-white/[0.04] transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies used */}
                <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Tech Stack:</span>
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
