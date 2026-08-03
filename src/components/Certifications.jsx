import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Cloud, 
  Smartphone, 
  FileSpreadsheet, 
  Languages, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const certIconMap = {
  Cloud: Cloud,
  Smartphone: Smartphone,
  FileSpreadsheet: FileSpreadsheet,
  Languages: Languages
};

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Reconocimientos</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Certificaciones <span className="text-gradient-accent">& Logros</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = certIconMap[cert.icon] || Award;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300"
              >
                {/* Background Tint Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono border ${cert.badgeColor}`}>
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed font-light">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Verified Mark */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 relative z-10">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Acreditado</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
