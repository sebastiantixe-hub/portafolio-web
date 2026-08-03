import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Code, 
  Database, 
  Server,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personal.subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [personal.subtitles]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Main Title & Name */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-mono text-cyan-400 uppercase tracking-widest block">
                Egresado UTP • Ingeniería de Software
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hola, soy <br className="hidden sm:inline" />
                <span className="text-gradient-accent">
                  {personal.name}
                </span>
              </h1>
            </div>

            {/* Subtitles / Animated Role Switcher */}
            <div className="h-10 sm:h-12 flex items-center">
              <span className="text-lg sm:text-2xl font-medium text-slate-300 mr-2">Especialista en</span>
              <div className="relative overflow-hidden h-8 sm:h-10 inline-block font-mono font-semibold text-cyan-400">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block text-lg sm:text-2xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent"
                >
                  {personal.subtitles[currentRoleIndex]}
                </motion.span>
              </div>
            </div>

            {/* Brief Bio Summary */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              Apasionado por el desarrollo de software de alto impacto. Especializado en arquitectura backend con <strong className="text-slate-200">Java</strong> y <strong className="text-slate-200">Node.js</strong>, integraciones con <strong className="text-slate-200">APIs REST</strong> y aplicaciones frontend responsivas con <strong className="text-slate-200">React</strong>.
            </p>

            {/* Action Buttons Grid */}
            <div className="pt-4 flex flex-wrap gap-3.5 items-center">
              {/* Descargar CV */}
              <a
                href={personal.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Descargar CV</span>
              </a>

              {/* Contacto */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 font-semibold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contacto</span>
              </a>

              {/* Social Buttons */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-indigo-500/40 transition-all hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-indigo-500/40 transition-all hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Micro Tech Tags */}
            <div className="pt-6 border-t border-white/5 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-indigo-400" />
                <span>Java & Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>React & APIs REST</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>MySQL</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Terminal Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-lg opacity-25 hover:opacity-40 transition duration-500"></div>

              {/* Code Terminal Window */}
              <div className="relative rounded-2xl glass-panel border border-white/10 overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="px-4 py-3 bg-[#0a0e17] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>DeveloperProfile.java</span>
                  </div>
                  <div className="w-12"></div>
                </div>

                {/* Window Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 space-y-3 overflow-x-auto">
                  <div className="text-slate-500">// Software Engineer Profile</div>
                  <div>
                    <span className="text-purple-400">public class</span>{' '}
                    <span className="text-amber-300">SebastianTixe</span> {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-400">private String</span> degree ={' '}
                    <span className="text-emerald-300">"Ingeniería de Software - UTP"</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-400">private String[]</span> stack = {'{'}
                  </div>
                  <div className="pl-8 text-cyan-300">
                    "Java", "MySQL", "Node.js", "React", "APIs REST"
                  </div>
                  <div className="pl-4">{'}'};</div>
                  
                  <div className="pl-4 pt-2">
                    <span className="text-purple-400">public void</span>{' '}
                    <span className="text-blue-400">buildSolutions</span>() {'{'}
                  </div>
                  <div className="pl-8 text-slate-400">
                    System.out.println(<span className="text-emerald-300">"Building scalable & clean code..."</span>);
                  </div>
                  <div className="pl-4">{'}'}</div>
                  <div>{'}'}</div>

                  {/* Terminal Execution Output preview */}
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Status: Ready for production code</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge overlay */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-5 bg-[#0d111a] border border-cyan-500/30 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Prácticas Superinka EIRL</div>
                  <div className="text-[11px] text-slate-400">Backend & APIs REST</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
