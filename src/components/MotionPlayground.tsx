import React, { useState } from 'react';
import { Sliders, RotateCw, Sparkles, Box, Gauge, Layers } from 'lucide-react';

interface MotionPlaygroundProps {
  speed: number;
  setSpeed: (s: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  activeTheme: string;
  setActiveTheme: (t: string) => void;
}

export const MotionPlayground: React.FC<MotionPlaygroundProps> = ({
  speed,
  setSpeed,
  isPlaying,
  onTogglePlay,
  activeTheme,
  setActiveTheme,
}) => {
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [easing, setEasing] = useState<string>('cubic-bezier(0.16, 1, 0.3, 1)');
  const [shape, setShape] = useState<'orb' | 'cube' | 'torus'>('orb');

  return (
    <section id="playground" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono text-emerald-400 tracking-wider block mb-2">
          LIVE PARAMETER EXPERIMENTER
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
          Interactive Motion Playground
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          Interact with live CSS custom properties to dynamically modulate keyframe timing, compositor frames, and visual rendering in real time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Interactive Controls */}
        <div className="lg:col-span-6 glass-panel rounded-2xl p-8 border border-white/10 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-violet-400" />
              <span>CSS Variable Modulators</span>
            </h3>

            {/* Speed Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-slate-300">--anim-speed-factor</span>
                <span className="text-violet-400 font-bold">{speed.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full accent-violet-500 cursor-pointer bg-white/10 h-2 rounded-lg"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                <span>0.2x (Ultra Slow-Mo)</span>
                <span>1.0x (Standard)</span>
                <span>3.0x (Hyper Kinetic)</span>
              </div>
            </div>

            {/* Easing Curves */}
            <div className="mb-6">
              <label className="text-xs font-mono text-slate-300 block mb-2">
                animation-timing-function
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Spring Easing', val: 'cubic-bezier(0.16, 1, 0.3, 1)' },
                  { label: 'Ease-In-Out', val: 'ease-in-out' },
                  { label: 'Linear', val: 'linear' },
                ].map((item) => (
                  <button
                    key={item.val}
                    onClick={() => setEasing(item.val)}
                    className={`px-3 py-2 text-xs font-mono rounded-lg border transition-all text-left ${
                      easing === item.val
                        ? 'bg-violet-600/30 border-violet-500 text-white font-semibold'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Shape Selector */}
            <div className="mb-6">
              <label className="text-xs font-mono text-slate-300 block mb-2">
                Kinetic Geometry Topology
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['orb', 'cube', 'torus'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setShape(s)}
                    className={`px-3 py-2 text-xs capitalize font-mono rounded-lg border transition-all ${
                      shape === s
                        ? 'bg-cyan-600/30 border-cyan-500 text-white font-semibold'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {s} Geometry
                  </button>
                ))}
              </div>
            </div>

            {/* Wireframe toggle */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-slate-200">Inspect Compositor Wireframes</span>
              </div>
              <button
                onClick={() => setWireframe(!wireframe)}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                  wireframe
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'bg-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {wireframe ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          {/* Real-time Code Echo */}
          <div className="p-4 rounded-xl bg-black/70 border border-white/10 font-mono text-[11px] text-slate-300">
            <div className="text-violet-400 mb-1">:root &#123;</div>
            <div className="pl-4 text-emerald-400">--anim-speed-factor: {speed};</div>
            <div className="pl-4 text-cyan-400">--timing: {easing};</div>
            <div className="pl-4 text-amber-400">--play-state: {isPlaying ? 'running' : 'paused'};</div>
            <div className="text-violet-400">&#125;</div>
          </div>
        </div>

        {/* Right Column: Live Kinetic Stage */}
        <div className={`lg:col-span-6 glass-panel rounded-2xl p-8 border ${wireframe ? 'border-dashed border-emerald-400/80 bg-emerald-950/20' : 'border-white/10'} flex flex-col items-center justify-center min-h-[420px] relative overflow-hidden`}>
          
          {wireframe && (
            <div className="absolute top-4 left-4 text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
              WIREFRAME OVERLAY ACTIVE // COMPOSITOR DEBUG
            </div>
          )}

          {/* Interactive Dynamic Stage */}
          <div className="relative w-72 h-72 flex items-center justify-center">
            
            {/* Outer Orbital Ring */}
            <div
              className={`absolute inset-0 rounded-full ${wireframe ? 'border-2 border-emerald-400' : 'border border-dashed border-white/20'} ${isPlaying ? 'anim-orbit' : ''}`}
              style={{
                animationDuration: `${20 / speed}s`,
                animationTimingFunction: easing,
                animationPlayState: isPlaying ? 'running' : 'paused',
              }}
            >
              <div className={`absolute top-2 left-10 w-4 h-4 rounded-full ${wireframe ? 'bg-emerald-400' : 'bg-violet-400 shadow-[0_0_15px_#8b5cf6]'}`} />
              <div className={`absolute bottom-4 right-8 w-3 h-3 rounded-full ${wireframe ? 'bg-emerald-400' : 'bg-cyan-400 shadow-[0_0_12px_#06b6d4]'}`} />
            </div>

            {/* Counter Ring */}
            <div
              className={`absolute inset-8 rounded-full ${wireframe ? 'border border-emerald-500' : 'border border-violet-500/30'} ${isPlaying ? 'anim-orbit-reverse' : ''}`}
              style={{
                animationDuration: `${28 / speed}s`,
                animationTimingFunction: easing,
                animationPlayState: isPlaying ? 'running' : 'paused',
              }}
            >
              <div className={`absolute top-1/2 -right-1.5 w-3 h-3 rounded-full ${wireframe ? 'bg-emerald-400' : 'bg-white shadow-[0_0_12px_#ffffff]'}`} />
            </div>

            {/* Geometry Core based on selection */}
            {shape === 'orb' && (
              <div
                className={`relative z-10 w-28 h-28 ${
                  wireframe
                    ? 'border-2 border-emerald-400 bg-transparent'
                    : 'bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 shadow-2xl shadow-violet-500/40'
                } flex items-center justify-center ${isPlaying ? 'anim-morph' : ''}`}
                style={{
                  animationDuration: `${12 / speed}s`,
                  animationTimingFunction: easing,
                  animationPlayState: isPlaying ? 'running' : 'paused',
                }}
              >
                <span className="text-xs font-mono font-bold text-white drop-shadow">ORB</span>
              </div>
            )}

            {shape === 'cube' && (
              <div
                className={`relative z-10 w-24 h-24 ${
                  wireframe
                    ? 'border-2 border-emerald-400 bg-transparent'
                    : 'bg-gradient-to-tr from-cyan-500 to-violet-600 shadow-2xl rounded-2xl'
                } flex items-center justify-center ${isPlaying ? 'anim-orbit' : ''}`}
                style={{
                  animationDuration: `${8 / speed}s`,
                  animationTimingFunction: easing,
                  animationPlayState: isPlaying ? 'running' : 'paused',
                }}
              >
                <span className="text-xs font-mono font-bold text-white">CUBE</span>
              </div>
            )}

            {shape === 'torus' && (
              <div
                className={`relative z-10 w-28 h-28 rounded-full border-8 ${
                  wireframe
                    ? 'border-emerald-400 bg-transparent'
                    : 'border-violet-400 border-t-cyan-400 border-b-indigo-500 shadow-2xl'
                } flex items-center justify-center ${isPlaying ? 'anim-orbit-reverse' : ''}`}
                style={{
                  animationDuration: `${6 / speed}s`,
                  animationTimingFunction: easing,
                  animationPlayState: isPlaying ? 'running' : 'paused',
                }}
              >
                <div className="w-8 h-8 rounded-full bg-violet-500/40" />
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <span className="text-xs font-mono text-slate-300">
              Current Rendering FPS: <strong className="text-emerald-400 font-mono">60.0 FPS (GPU Compositor)</strong>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
