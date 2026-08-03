import React from 'react';
import { ArrowUp, Terminal, Heart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#04060a] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center justify-between">
          
          {/* Brand & Subtitle */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="text-slate-400 max-w-md font-light text-xs">
              Egresado de Ingeniería de Software (UTP). Apasionado por construir backend robustos en Java & Node.js y soluciones web de alto impacto.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre mí</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experiencia</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Proyectos</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Habilidades</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certificaciones</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contacto</a>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all flex items-center gap-2 group"
              aria-label="Volver arriba"
            >
              <span className="font-mono text-[11px]">Subir</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {personal.name}. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Desarrollado con</span>
            <span className="text-cyan-400 font-semibold">React</span>
            <span>+</span>
            <span className="text-indigo-400 font-semibold">Tailwind</span>
            <span>+</span>
            <span className="text-emerald-400 font-semibold">Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
