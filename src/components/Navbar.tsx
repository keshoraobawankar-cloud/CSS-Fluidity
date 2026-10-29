import React from 'react';
import { Sparkles, Terminal, FileCode2, Play, Pause } from 'lucide-react';

interface NavbarProps {
  onOpenAuditionModal: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuditionModal,
  isPlaying,
  onTogglePlay,
}) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-8 px-6 lg:px-12 py-4 bg-[#08090d]/85 backdrop-blur-md border-b border-white/10">
      {/* Zone 1: Single text element wordmark */}
      <a
        href="#hero"
        className="text-lg font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
      >
        <span className="w-2.5 h-2.5 rounded-sm bg-violet-500 rotate-45 transition-transform group-hover:rotate-90"></span>
        <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
          KINETICS
        </span>
      </a>

      {/* Zone 2: 4-5 clean single-line text navigation links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a
          href="#hero"
          className="hover:text-white transition-colors whitespace-nowrap shrink-0"
        >
          Hero Experience
        </a>
        <a
          href="#animations"
          className="hover:text-white transition-colors whitespace-nowrap shrink-0"
        >
          Keyframe Gallery
        </a>
        <a
          href="#interactive-cards"
          className="hover:text-white transition-colors whitespace-nowrap shrink-0"
        >
          Hover Dynamics
        </a>
        <a
          href="#playground"
          className="hover:text-white transition-colors whitespace-nowrap shrink-0"
        >
          Motion Playground
        </a>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onTogglePlay}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
          title={isPlaying ? "Pause all CSS animations" : "Resume all CSS animations"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          <span>{isPlaying ? "Pause Motion" : "Resume Motion"}</span>
        </button>

        <button
          onClick={onOpenAuditionModal}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-all shadow-lg shadow-violet-600/25 whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
        >
          <FileCode2 className="w-4 h-4" />
          <span>Tech Specs & Code</span>
        </button>
      </div>
    </header>
  );
};
