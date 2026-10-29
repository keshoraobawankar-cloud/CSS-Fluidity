import React, { useState } from 'react';
import { Play, Pause, Code2, Copy, Check } from 'lucide-react';

interface AnimationGalleryProps {
  isPlaying: boolean;
}

export const AnimationGallery: React.FC<AnimationGalleryProps> = ({ isPlaying }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const animations = [
    {
      title: "01. Orbital Trajectory & Planetary Mechanics",
      tag: "COMPOSITOR ROTATION",
      desc: "Concentric circular trajectories rotating satellites across 360-degree orbital planes using GPU-accelerated transform: rotate().",
      code: `@keyframes orbitSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
      renderPreview: () => (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div
            className={`w-28 h-28 rounded-full border border-dashed border-violet-500/40 relative ${
              isPlaying ? 'anim-orbit' : ''
            }`}
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4]" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_10px_#8b5cf6]" />
          </div>
          <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg" />
        </div>
      ),
    },
    {
      title: "02. Organic Fluid Mesh Morphing",
      tag: "BORDER-RADIUS INTERPOLATION",
      desc: "Continuous organic shape transformation shifting between 8 corner control points without altering geometric width or height.",
      code: `@keyframes morphMesh {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: rotate(0deg) scale(1);
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: rotate(180deg) scale(1.08);
  }
}`,
      renderPreview: () => (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div
            className={`w-24 h-24 bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 shadow-[0_0_35px_rgba(139,92,246,0.4)] ${
              isPlaying ? 'anim-morph' : ''
            }`}
          />
        </div>
      ),
    },
    {
      title: "03. Kinetic Waveform Synthesizer",
      tag: "STAGGERED DELAY",
      desc: "Harmonic equalizer frequencies generated purely with CSS keyframe vertical scaling and calculated CSS variable animation delays.",
      code: `@keyframes waveBar {
  0%, 100% { height: 15%; opacity: 0.4; }
  50% { height: 95%; opacity: 1; }
}
/* Stagger with animation-delay */`,
      renderPreview: () => (
        <div className="flex items-center gap-1.5 h-24">
          {[0.1, 0.4, 0.2, 0.6, 0.3, 0.5, 0.15, 0.35].map((delay, i) => (
            <div
              key={i}
              className="w-2 rounded-full bg-gradient-to-t from-violet-600 to-cyan-400"
              style={{
                height: '75%',
                animation: isPlaying ? `waveBar 1.2s ease-in-out infinite alternate` : 'none',
                animationDelay: `${delay}s`,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "04. Dynamic Linear Gradient Text Shimmer",
      tag: "BACKGROUND CLIP TEXT",
      desc: "Luminous reflection travelling across typography created via 200% wide linear gradient and continuous background-position shift.",
      code: `@keyframes textShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}`,
      renderPreview: () => (
        <div className="text-center px-4">
          <div
            className="text-2xl font-black tracking-tight anim-shimmer"
            style={{
              background: 'linear-gradient(90deg, #8b5cf6, #06b6d4, #ffffff, #8b5cf6)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            KINETIC CSS3
          </div>
          <span className="text-[11px] font-mono text-slate-400 mt-1 block">
            background-size: 200% auto
          </span>
        </div>
      ),
    },
    {
      title: "05. Radiant Sonar Beacon Pulse",
      tag: "SCALE & OPACITY FADE",
      desc: "Expanding spherical signal waves radiating outwards with progressive opacity decay for spatial presence and radar signaling.",
      code: `@keyframes beaconRing {
  0% { transform: scale(0.6); opacity: 0.9; }
  100% { transform: scale(2.2); opacity: 0; }
}`,
      renderPreview: () => (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div
            className="absolute w-16 h-16 rounded-full border border-violet-400"
            style={{ animation: isPlaying ? 'beaconRing 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite' : 'none' }}
          />
          <div
            className="absolute w-16 h-16 rounded-full border border-cyan-400"
            style={{ animation: isPlaying ? 'beaconRing 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite 0.8s' : 'none' }}
          />
          <div className="w-5 h-5 rounded-full bg-violet-400 shadow-[0_0_15px_#8b5cf6]" />
        </div>
      ),
    },
    {
      title: "06. Floating Levitation Physics",
      tag: "TRANSLATE3D HARMONICS",
      desc: "Gentle natural hover oscillation utilizing cubic-bezier easing to simulate zero-gravity floating on compositor thread.",
      code: `@keyframes floatingCard {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}`,
      renderPreview: () => (
        <div
          className="glass-panel px-4 py-3 rounded-xl border border-white/15 text-center shadow-lg"
          style={{ animation: isPlaying ? 'floatingCard 3s ease-in-out infinite' : 'none' }}
        >
          <div className="text-xs font-mono font-semibold text-cyan-300">Levitating Element</div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">translateY(-12px)</div>
        </div>
      ),
    },
  ];

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="animations" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono text-violet-400 tracking-wider block mb-2">
          KEYFRAME ARCHITECTURE
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
          Core CSS3 Keyframe Animations
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          Engineered with pure CSS3 animations running seamlessly on the GPU compositor layer with hardware acceleration and zero external JavaScript libraries.
        </p>
      </div>

      {/* Grid of Animation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animations.map((anim, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-xl border border-white/10 overflow-hidden flex flex-col transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-900/20 group"
          >
            {/* Visual Demo Stage */}
            <div className="h-44 bg-black/40 border-b border-white/5 flex items-center justify-center p-6 relative">
              {anim.renderPreview()}
              <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                {anim.tag}
              </div>
            </div>

            {/* Content & Code */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {anim.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {anim.desc}
                </p>
              </div>

              {/* Code snippet block */}
              <div className="relative mt-2">
                <pre className="text-[11px] font-mono bg-black/60 p-3 rounded-lg border border-white/5 text-slate-300 overflow-x-auto">
                  <code>{anim.code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(anim.code, idx)}
                  className="absolute top-2 right-2 p-1.5 rounded bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                  title="Copy CSS Keyframe"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
