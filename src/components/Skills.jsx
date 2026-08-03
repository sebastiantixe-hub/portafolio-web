import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Layers, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Sparkles, 
  CheckCircle,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIconMap = {
  Code: Code,
  Layers: Layers,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
  Cpu: Cpu
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5 bg-[#07090e]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Competencias Técnicas</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Habilidades <span className="text-gradient-accent">& Tecnologías</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skills.map((categoryGroup, index) => {
            const IconComp = categoryIconMap[categoryGroup.icon] || Terminal;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {categoryGroup.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {categoryGroup.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-2 h-2 rounded-full ${skill.highlight ? 'bg-cyan-400 shadow-sm shadow-cyan-400' : 'bg-slate-500'}`} />
                          <span className="text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Footer Indicator */}
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>{categoryGroup.items.length} tecnologías</span>
                  <span className="text-cyan-400 font-semibold">Verificado</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
