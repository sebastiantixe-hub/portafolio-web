import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Server, 
  Cloud, 
  Bot, 
  Check, 
  Sparkles, 
  Award,
  BookOpen
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  Server: Server,
  Cloud: Cloud,
  Bot: Bot
};

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Perfil Profesional</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Sobre <span className="text-gradient-accent">mí</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Detailed Bio Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top subtle decoration line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {personal.degree}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {personal.university}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {about.profileSummary}
              </p>

              {/* Special Interest Callout */}
              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-slate-300 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-1">Enfoque Técnico Actual:</strong>
                  Especialización en desarrollo backend con <span className="text-cyan-300 font-mono">Java</span>, consumo y arquitectura de APIs REST, buenas prácticas de código limpio y aprendizaje continuo de tecnologías cloud.
                </div>
              </div>
            </div>

            {/* Bottom metrics bar */}
            <div className="pt-8 mt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xl font-extrabold text-white">UTP</div>
                <div className="text-[11px] text-slate-400">Ing. de Software</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xl font-extrabold text-cyan-400">Java & JS</div>
                <div className="text-[11px] text-slate-400">Stack Principal</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-xl font-extrabold text-emerald-400">Render/Vercel</div>
                <div className="text-[11px] text-slate-400">Despliegue Cloud</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {about.highlights.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Server;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:border-indigo-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
