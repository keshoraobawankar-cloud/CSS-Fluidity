import React, { useRef, useState } from 'react';
import { Sparkles, Compass, ShieldAlert, Cpu, Eye, ExternalLink, Activity } from 'lucide-react';

export const InteractiveCardsSection: React.FC = () => {
  // 3D Tilt Card Ref and State
  const tiltCardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [shineStyle, setShineStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltCardRef.current) return;
    const rect = tiltCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.05s ease-out',
    });

    setShineStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,255,255,0.18) 0%, transparent 60%)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    setShineStyle({ opacity: 0, transition: 'opacity 0.4s ease' });
  };

  return (
    <section id="interactive-cards" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono text-cyan-400 tracking-wider block mb-2">
          TACTILE FEEDBACK & HOVER MECHANICS
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
          Interactive Cards & Button States
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          Experience physics-inspired micro-interactions: tactile depth, 3D perspective tilts, and luminous light streaks designed for modern interactive web applications.
        </p>
      </div>

      {/* 2x2 Grid of Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* Card 1: 3D Perspective Tilt Card */}
        <div
          ref={tiltCardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={tiltStyle}
          className="relative rounded-2xl p-8 glass-panel border border-white/10 overflow-hidden cursor-pointer select-none group will-change-transform"
        >
          {/* Mouse tracking radial light reflection */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={shineStyle}
          />

          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded bg-violet-500/10">
              PERSPECTIVE 3D
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
            Dynamic Cursor 3D Tilt
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Hover over this card and move your cursor across its surface. Mathematical angles calculate the offset from card center, rotating on X and Y axes with dynamic specular glare.
          </p>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-4 border-t border-white/10">
            <span>rotateX: 12deg max</span>
            <span aria-hidden="true">·</span>
            <span>rotateY: 12deg max</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400">Zero Jank</span>
          </div>
        </div>

        {/* Card 2: Conic Gradient Border Beam */}
        <div className="relative rounded-2xl p-[1px] overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
          {/* Animated conic gradient edge */}
          <div className="absolute -inset-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#8b5cf6_20%,#06b6d4_40%,transparent_60%)] anim-orbit opacity-60 group-hover:opacity-100 transition-opacity" />

          {/* Card inner surface */}
          <div className="relative h-full w-full rounded-2xl p-8 bg-[#0d0f17] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded bg-cyan-500/10">
                  CONIC BORDER
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                Luminous Rotating Border Beam
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                A moving conic gradient creates a continuous neon border ray traveling along the container perimeter, intensifying in luminance when engaged.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-4 border-t border-white/10">
              <span>conic-gradient()</span>
              <span aria-hidden="true">·</span>
              <span>padding: 1px masking</span>
              <span aria-hidden="true">·</span>
              <span className="text-cyan-300">GPU Cached</span>
            </div>
          </div>
        </div>

        {/* Card 3: Layered 3D Depth Card */}
        <div className="relative rounded-2xl p-8 glass-panel border border-white/10 group cursor-pointer transition-all duration-300 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-900/25">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded bg-emerald-500/10">
              LAYERED PARALLAX
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
            Layered Z-Elevation Depth
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Internal elements translate upward at differentiated speeds on hover, creating the sensory perception of multi-tiered glass sheets floating over each other.
          </p>

          <div className="space-y-2 mb-4">
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 w-3/4 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span>Render Efficiency</span>
              <span className="text-white">99.8%</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-4 border-t border-white/10">
            <span>transition: all 0.3s</span>
            <span aria-hidden="true">·</span>
            <span>cubic-bezier</span>
          </div>
        </div>

        {/* Card 4: Audio-Visual Pulse Wave Card */}
        <div className="relative rounded-2xl p-8 glass-panel border border-white/10 group cursor-pointer transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-900/25">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded bg-amber-500/10">
              KINETIC AUDIO WAVE
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
            Active Waveform Feedback
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Waveform frequency bars oscillate dynamically. When hovered, the animation speed doubles and ambient cyan backlights brighten with audio-tactile energy.
          </p>

          <div className="flex items-end gap-1.5 h-10 mb-4 px-3 py-1 bg-black/40 rounded-lg border border-white/5">
            {[20, 60, 45, 90, 30, 80, 50, 95, 40, 70].map((h, i) => (
              <div
                key={i}
                className="w-1.5 rounded-t bg-gradient-to-t from-amber-500 to-cyan-400 transition-all duration-300 group-hover:animate-pulse"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-4 border-t border-white/10">
            <span>@keyframes waveBar</span>
            <span aria-hidden="true">·</span>
            <span>Hover Acceleration</span>
          </div>
        </div>

      </div>

      {/* Button Hover Effects Showcase */}
      <div className="p-8 glass-panel rounded-2xl border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-lg font-bold text-white">Creative Button Hover Suite</h3>
            <p className="text-xs text-slate-400 mt-1">Four production-tested CSS hover patterns for modern landing interfaces.</p>
          </div>
          <span className="text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded">
            CSS MICRO-INTERACTIONS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Button 1: Luminous Sweep */}
          <div className="flex flex-col gap-2">
            <button className="luminous-btn w-full py-3.5 px-4 text-xs font-bold text-white bg-violet-600 rounded-lg hover:bg-violet-500 shadow-lg shadow-violet-600/30 transition-all active:scale-95 cursor-pointer">
              Luminous Sweep Ray
            </button>
            <span className="text-[11px] font-mono text-slate-400 text-center">Light streak across ::after</span>
          </div>

          {/* Button 2: Neon Pulse Wave */}
          <div className="flex flex-col gap-2">
            <button className="w-full py-3.5 px-4 text-xs font-bold text-cyan-300 bg-cyan-950/40 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-[1.02] transition-all active:scale-95 cursor-pointer">
              Neon Aura Pulse
            </button>
            <span className="text-[11px] font-mono text-slate-400 text-center">Glow box-shadow bloom</span>
          </div>

          {/* Button 3: Elastic Magnetic Lift */}
          <div className="flex flex-col gap-2">
            <button className="w-full py-3.5 px-4 text-xs font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-100 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-white/15 transition-all duration-300 ease-out active:scale-95 cursor-pointer">
              Elastic Lift Float
            </button>
            <span className="text-[11px] font-mono text-slate-400 text-center">translateY(-6px) with shadow</span>
          </div>

          {/* Button 4: Sliding Border Fill */}
          <div className="flex flex-col gap-2">
            <button className="relative w-full py-3.5 px-4 text-xs font-bold text-white bg-transparent border border-white/20 rounded-lg overflow-hidden group cursor-pointer active:scale-95">
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-300 ease-out group-hover:w-full -z-10" />
              Sliding Fill Backdrop
            </button>
            <span className="text-[11px] font-mono text-slate-400 text-center">Width expansion 0% to 100%</span>
          </div>

        </div>
      </div>
    </section>
  );
};
