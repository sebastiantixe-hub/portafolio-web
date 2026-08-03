import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Mesh Grid */}
      <div className="absolute inset-0 bg-grid-mesh opacity-[0.15]" />
      
      {/* Ambient Gradient Orbs */}
      <div 
        className="glow-orb w-[600px] h-[600px] -top-40 -left-40 bg-gradient-to-br from-indigo-600/20 via-cyan-500/10 to-transparent animate-pulse-slow"
      />
      <div 
        className="glow-orb w-[700px] h-[700px] top-[30%] -right-60 bg-gradient-to-tl from-purple-600/15 via-blue-600/10 to-transparent animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="glow-orb w-[500px] h-[500px] bottom-10 left-1/4 bg-gradient-to-tr from-emerald-500/10 via-indigo-500/10 to-transparent animate-pulse-slow"
        style={{ animationDelay: '4s' }}
      />

      {/* Radial vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,9,14,0.7)_100%)]" />
    </div>
  );
}
