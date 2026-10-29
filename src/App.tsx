import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AnimationGallery } from './components/AnimationGallery';
import { InteractiveCardsSection } from './components/InteractiveCardsSection';
import { MotionPlayground } from './components/MotionPlayground';
import { AuditionModal } from './components/AuditionModal';
import { Footer } from './components/Footer';
import { Sparkles, FileCode2, ArrowRight } from 'lucide-react';

export default function App() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(1.0);
  const [activeTheme, setActiveTheme] = useState<'purple' | 'cyan' | 'amber'>('purple');
  const [isAuditionModalOpen, setIsAuditionModalOpen] = useState<boolean>(false);

  // Sync speed multiplier with root CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty('--anim-speed-factor', speed.toString());
  }, [speed]);

  // Sync play state
  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const getThemeClass = () => {
    switch (activeTheme) {
      case 'cyan':
        return 'theme-cyan selection:bg-cyan-500/30 selection:text-cyan-200';
      case 'amber':
        return 'theme-amber selection:bg-amber-500/30 selection:text-amber-200';
      default:
        return 'theme-purple selection:bg-violet-500/30 selection:text-violet-200';
    }
  };

  return (
    <div className={`min-h-screen bg-[#08090d] text-slate-100 ${getThemeClass()}`}>
      
      {/* Featured Showcase Ribbon */}
      <div className="bg-gradient-to-r from-violet-900/60 via-indigo-900/60 to-cyan-900/60 border-b border-white/10 px-4 py-2 text-center text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="font-mono text-violet-300 font-semibold">
            Featured Frontend Project // Kinetics
          </span>
          <span aria-hidden="true" className="text-white/30 hidden sm:inline">·</span>
          <span className="text-slate-300">
            Hardware-Accelerated CSS3 Motion & 3D Interactive Web Architecture
          </span>
          <button
            onClick={() => setIsAuditionModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-violet-600/80 hover:bg-violet-500 px-3 py-1 rounded-full transition-all ml-1 cursor-pointer"
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span>Tech Specs & Standalone ZIP</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Top Bar Navigation */}
      <Navbar
        onOpenAuditionModal={() => setIsAuditionModalOpen(true)}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
      />

      {/* Hero Section with Orbital Kinetics & CSS Animations */}
      <HeroSection
        isPlaying={isPlaying}
        speed={speed}
        setSpeed={setSpeed}
        activeTheme={activeTheme}
        setActiveTheme={(t: string) => setActiveTheme(t as 'purple' | 'cyan' | 'amber')}
        onOpenAuditionModal={() => setIsAuditionModalOpen(true)}
      />

      {/* Core Keyframe Animations Showcase */}
      <AnimationGallery isPlaying={isPlaying} />

      {/* Interactive Micro-Interactions & Hover Dynamics */}
      <InteractiveCardsSection />

      {/* Interactive Motion Playground & Parameter Tweaker */}
      <MotionPlayground
        speed={speed}
        setSpeed={setSpeed}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        activeTheme={activeTheme}
        setActiveTheme={(t: string) => setActiveTheme(t as 'purple' | 'cyan' | 'amber')}
      />

      {/* Quiet, Compliant Footer */}
      <Footer onOpenAuditionModal={() => setIsAuditionModalOpen(true)} />

      {/* Audition Mode Modal (Viva Guide, Code Inspector, ZIP Download) */}
      <AuditionModal
        isOpen={isAuditionModalOpen}
        onClose={() => setIsAuditionModalOpen(false)}
      />

    </div>
  );
}
