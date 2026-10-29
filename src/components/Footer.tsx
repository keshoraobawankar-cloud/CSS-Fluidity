import React from 'react';
import { ArrowUp, FileCode2 } from 'lucide-react';

interface FooterProps {
  onOpenAuditionModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditionModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06070a] py-12 px-6 lg:px-12 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Editorial Notice */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-violet-500 rotate-45"></span>
            <span className="font-extrabold text-white tracking-tight">KINETICS</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Crafted by Tanmay Jambhulkar</span>
            <span aria-hidden="true">·</span>
            <span>Modern Frontend & CSS Motion Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Open Source Showcase</span>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="flex items-center gap-6 text-xs font-medium">
          <a href="#hero" className="hover:text-white transition-colors">
            Hero
          </a>
          <a href="#animations" className="hover:text-white transition-colors">
            Animations
          </a>
          <a href="#interactive-cards" className="hover:text-white transition-colors">
            Hover Effects
          </a>
          <a href="#playground" className="hover:text-white transition-colors">
            Playground
          </a>
          <button
            onClick={onOpenAuditionModal}
            className="hover:text-white text-violet-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span>Tech Specs & Code</span>
          </button>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono cursor-pointer"
          title="Scroll to Top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
