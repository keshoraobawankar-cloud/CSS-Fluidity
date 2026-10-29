import React from 'react';
import { ArrowDown, Sparkles, Layers, Sliders, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  isPlaying: boolean;
  speed: number;
  setSpeed: (s: number) => void;
  activeTheme: string;
  setActiveTheme: (t: string) => void;
  onOpenAuditionModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isPlaying,
  speed,
  setSpeed,
  activeTheme,
  setActiveTheme,
  onOpenAuditionModal,
}) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:py-24 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background radial gradient mesh */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">
        {/* Left Column: Editorial Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Unboxed Metadata Kicker (Anti-pill discipline) */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-violet-400 mb-4">
            <span>FRONTEND ARCHITECTURE</span>
            <span aria-hidden="true">·</span>
            <span>INTERACTION DESIGN</span>
            <span aria-hidden="true">·</span>
            <span>CSS3 MOTION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-2xl text-balance">
            Fluid Motion Crafted With{' '}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent anim-shimmer inline-block">
              Pure CSS3 Animations
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
            A high-performance interactive web experience engineered with hardware-accelerated keyframe physics, 3D perspective depth, and responsive tactile hover dynamics without relying on external UI frameworks.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#animations"
              className="luminous-btn px-6 py-3.5 text-sm font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-500 shadow-lg shadow-violet-600/30 transition-all inline-flex items-center gap-2 active:scale-95"
            >
              <span>Explore CSS Keyframes</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenAuditionModal}
              className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-white/5 border border-white/15 rounded-lg hover:bg-white/10 hover:border-white/25 transition-all inline-flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Architecture Specs & Code</span>
            </button>
          </div>

          {/* Adjacency Proof: Engineering Highlights */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 pt-4 border-t border-white/10 w-full">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>GPU Compositor 60 FPS</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Mathematical 3D Tilt</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Tactile Micro-Interactions</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Pure HTML5 & CSS3 Engine</span>
            </span>
          </div>
        </div>

        {/* Right Column: Kinetic Motion Stage */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-8">
          <div className="relative w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
            
            {/* Outer Orbital Ring with Satellites */}
            <div
              className={`absolute inset-0 rounded-full border border-dashed border-white/20 ${isPlaying ? 'anim-orbit' : ''}`}
              style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
            >
              {/* Satellite 1: Violet Beacon */}
              <div className="absolute top-2 left-16 w-4 h-4 rounded-full bg-violet-400 shadow-[0_0_15px_#8b5cf6]" />
              {/* Satellite 2: Cyan Beacon */}
              <div className="absolute bottom-6 right-14 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4]" />
            </div>

            {/* Middle Reverse Ring */}
            <div
              className={`absolute inset-8 rounded-full border border-violet-500/30 ${isPlaying ? 'anim-orbit-reverse' : ''}`}
              style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
            >
              {/* Satellite 3: Pure Light */}
              <div className="absolute top-1/2 -right-2 w-3 h-3 rounded-full bg-white shadow-[0_0_14px_#ffffff]" />
            </div>

            {/* Inner Ring */}
            <div
              className={`absolute inset-16 rounded-full border border-dashed border-cyan-500/35 ${isPlaying ? 'anim-orbit' : ''}`}
              style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
            />

            {/* Center Ambient Glow Aura */}
            <div
              className={`absolute w-44 h-44 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 opacity-60 blur-2xl ${isPlaying ? 'anim-pulse-glow' : ''}`}
              style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
            />

            {/* Central Floating Morphing Orb with Trailing Shadow Effect */}
            <div
              className={`relative z-10 w-28 h-28 bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 shadow-2xl shadow-violet-500/50 flex items-center justify-center ${isPlaying ? 'anim-morph anim-trail' : ''}`}
              style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
            >
              <div className="text-white text-xs font-mono font-bold tracking-widest text-center uppercase drop-shadow">
                60 FPS<br />CSS
              </div>
            </div>

            {/* Floating Kinetic Pill Tags */}
            <div className="absolute -bottom-2 -left-4 glass-panel px-3.5 py-2 rounded-lg text-xs font-mono text-slate-300 border border-white/10 shadow-xl flex items-center gap-2 anim-float">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Hardware-Accelerated</span>
            </div>

            <div
              className="absolute -top-4 -right-2 glass-panel px-3.5 py-2 rounded-lg text-xs font-mono text-slate-300 border border-white/10 shadow-xl anim-float"
              style={{ animationDelay: '1.5s' }}
            >
              <span>@keyframes Compositor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Motion Control Dock */}
      <div className="mt-8 p-4 glass-panel rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto shadow-2xl">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">Live Control Strip:</span>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-400 font-mono mr-1">Speed:</span>
          {[0.5, 1, 1.5, 2].map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                speed === s
                  ? 'bg-violet-600 text-white font-semibold'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>

        {/* Theme Palette Switcher */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-400 font-mono mr-1">Palette:</span>
          <button
            onClick={() => setActiveTheme('purple')}
            className={`px-2.5 py-1 text-xs rounded transition-colors ${
              activeTheme === 'purple'
                ? 'bg-violet-600/30 text-violet-300 border border-violet-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Cosmic
          </button>
          <button
            onClick={() => setActiveTheme('cyan')}
            className={`px-2.5 py-1 text-xs rounded transition-colors ${
              activeTheme === 'cyan'
                ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Cyber
          </button>
          <button
            onClick={() => setActiveTheme('amber')}
            className={`px-2.5 py-1 text-xs rounded transition-colors ${
              activeTheme === 'amber'
                ? 'bg-amber-600/30 text-amber-300 border border-amber-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Solar
          </button>
        </div>
      </div>
    </section>
  );
};
