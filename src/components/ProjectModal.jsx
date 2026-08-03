import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Layers, Code, CheckCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass-panel border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#0a0e17] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Layers className="w-4 h-4" />
              <span>{project.category}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content (Scrollable) */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Image Preview */}
            <div className="relative rounded-xl overflow-hidden aspect-video border border-white/10">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />
            </div>

            {/* Title & Tag */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed font-light">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Stats / Key Details */}
            {project.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[11px] font-mono text-slate-400 block">{stat.label}</span>
                    <span className="text-sm font-bold text-cyan-300">{stat.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 font-semibold">
                Tecnologías Utilizadas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 bg-[#0a0e17] border-t border-white/10 flex items-center justify-end gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Ver Código en GitHub</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-semibold hover:from-indigo-500 hover:to-cyan-500 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Ver Demo en Vivo</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
