import React, { useState } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  FileCode,
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  Laptop,
  Sparkles,
  BookOpen,
  Cpu,
} from 'lucide-react';
import JSZip from 'jszip';
import {
  STANDALONE_HTML,
  STANDALONE_CSS,
  STANDALONE_JS,
  STANDALONE_README,
} from '../data/standaloneCode';

interface AuditionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditionModal: React.FC<AuditionModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'viva' | 'code' | 'checklist'>('viva');
  const [codeTab, setCodeTab] = useState<'html' | 'css' | 'js' | 'readme'>('html');
  const [copied, setCopied] = useState<string | null>(null);
  const [isZipping, setIsZipping] = useState<boolean>(false);

  if (!isOpen) return null;

  const getActiveCode = () => {
    switch (codeTab) {
      case 'html':
        return STANDALONE_HTML;
      case 'css':
        return STANDALONE_CSS;
      case 'js':
        return STANDALONE_JS;
      case 'readme':
        return STANDALONE_README;
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      const zip = new JSZip();
      zip.file('index.html', STANDALONE_HTML);
      zip.file('style.css', STANDALONE_CSS);
      zip.file('script.js', STANDALONE_JS);
      zip.file('README.md', STANDALONE_README);

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'kinetics-css-motion-showcase.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating zip:', err);
    } finally {
      setIsZipping(false);
    }
  };

  const handleDownloadSingleFile = (filename: string, content: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[90vh] bg-[#0c0e15] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#10131d]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>Kinetics // Technical Architecture & Documentation</span>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  Frontend Engineering
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Technical deep-dive, performance architecture, and 100% standalone HTML5 & CSS3 export.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-[#090a10] border-b border-white/10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('viva')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'viva'
                  ? 'bg-violet-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Technical Deep-Dive</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-violet-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Pure Standalone Code Export</span>
            </button>

            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'checklist'
                  ? 'bg-violet-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Engineering Highlights</span>
            </button>
          </div>

          <button
            onClick={handleDownloadZip}
            disabled={isZipping}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md shadow-emerald-600/20 active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isZipping ? 'Archiving...' : 'Download Project (.ZIP)'}</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: TECHNICAL DEEP-DIVE & ARCHITECTURE */}
          {activeTab === 'viva' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/30 text-xs text-slate-300">
                <span className="font-bold text-violet-300 block mb-1">
                  💡 Engineering Principle: Hardware Acceleration & GPU Compositing
                </span>
                Modern web applications require smooth 60 FPS interactions. This project demonstrates how leveraging native CSS3 keyframes, CSS custom properties, and GPU compositor layers achieves fluid visual animations without the computational overhead of heavy JavaScript animation engines.
              </div>

              {/* Principle 1 */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-xs">1</span>
                  <span>How does `@keyframes` work, and how does the browser execute it?</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed pl-7">
                  An <code>@keyframes</code> rule defines intermediate CSS style checkpoints throughout an animation sequence (e.g. <code>0%</code>, <code>50%</code>, <code>100%</code>). The browser interpolates values smoothly between these states over the specified <code>animation-duration</code> and <code>animation-timing-function</code>.
                </p>
                <div className="pl-7 pt-1">
                  <div className="text-[11px] font-mono text-slate-400 bg-black/50 p-2.5 rounded border border-white/5">
                    animation: orbitSpin 24s linear infinite;
                  </div>
                </div>
              </div>

              {/* Principle 2 */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-xs">2</span>
                  <span>Why animate `transform` and `opacity` instead of `width`, `height`, or `top/left`?</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed pl-7">
                  Properties like <code>width</code>, <code>height</code>, and <code>top/left</code> force the browser engine to perform <strong>Layout (Reflow)</strong> and <strong>Paint</strong> operations on every single frame, taxing CPU threads and causing frame drops (jank). In contrast, <code>transform</code> and <code>opacity</code> are processed directly on the <strong>GPU Compositor Thread</strong>, guaranteeing smooth 60 FPS performance without blocking the main JavaScript thread.
                </p>
              </div>

              {/* Principle 3 */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-xs">3</span>
                  <span>How does the 3D Perspective Tilt on the cards work?</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed pl-7">
                  By applying <code>perspective: 1000px</code>, we define the virtual distance between the viewer and the screen plane. When the user hovers, cursor coordinates calculate deltas relative to the element center, applying angular rotations via <code>rotateX</code> and <code>rotateY</code>, while concurrently projecting a specular radial glare at the mouse coordinate using CSS variables <code>--mouse-x</code> and <code>--mouse-y</code>.
                </p>
              </div>

              {/* Principle 4 */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-xs">4</span>
                  <span>How is organic fluid blob morphing achieved purely in CSS?</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed pl-7">
                  It utilizes CSS3's 8-point <code>border-radius</code> syntax (horizontal radii / vertical radii, e.g. <code>60% 40% 30% 70% / 60% 30% 70% 40%</code>). In `@keyframes morphMesh`, we continuously interpolate these percentages across keyframe timestamps to organically warp the contour boundaries without changing element box dimensions.
                </p>
              </div>

              {/* Principle 5 */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-xs">5</span>
                  <span>How is dynamic runtime theming and speed modulation achieved without page reload?</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed pl-7">
                  The application binds CSS variables on <code>:root</code> (such as <code>--speed</code>, <code>--anim-speed-factor</code>, and <code>--accent-primary</code>). Any runtime modification updates the calculation expressions inside keyframes (e.g. <code>calc(24s / var(--speed))</code>), instantly updating all animation timing curves live.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PURE STANDALONE CODE EXPORT */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-black/40 rounded-xl border border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCodeTab('html')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                      codeTab === 'html'
                        ? 'bg-violet-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    index.html (HTML5)
                  </button>
                  <button
                    onClick={() => setCodeTab('css')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                      codeTab === 'css'
                        ? 'bg-violet-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    style.css (CSS3)
                  </button>
                  <button
                    onClick={() => setCodeTab('js')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                      codeTab === 'js'
                        ? 'bg-violet-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    script.js (Interactivity)
                  </button>
                  <button
                    onClick={() => setCodeTab('readme')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                      codeTab === 'readme'
                        ? 'bg-violet-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    README.md
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(getActiveCode(), codeTab)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-white/10 hover:bg-white/20 rounded-md transition-colors cursor-pointer"
                  >
                    {copied === codeTab ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copied === codeTab ? 'Copied!' : 'Copy Code'}</span>
                  </button>

                  <button
                    onClick={() =>
                      handleDownloadSingleFile(
                        codeTab === 'html'
                          ? 'index.html'
                          : codeTab === 'css'
                          ? 'style.css'
                          : codeTab === 'js'
                          ? 'script.js'
                          : 'README.md',
                        getActiveCode(),
                        codeTab === 'html'
                          ? 'text/html'
                          : codeTab === 'css'
                          ? 'text/css'
                          : codeTab === 'js'
                          ? 'text/javascript'
                          : 'text/markdown'
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-white bg-violet-600 hover:bg-violet-500 rounded-md transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download File</span>
                  </button>
                </div>
              </div>

              {/* Code viewer box */}
              <div className="relative rounded-xl border border-white/10 overflow-hidden bg-black/80">
                <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto max-h-[55vh] leading-relaxed">
                  <code>{getActiveCode()}</code>
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: ENGINEERING HIGHLIGHTS & BENCHMARKS */}
          {activeTab === 'checklist' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-base font-bold text-white mb-4">
                  Engineering Benchmarks & Technical Quality Standards
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">GPU Compositor Optimization</div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        Animation trajectories strictly modify <code>transform</code> and <code>opacity</code> to avoid layout reflows and paint overhead, ensuring 60 FPS performance.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Mathematical 3D Perspective Transforms</div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        Calculates real-time normalized cursor offsets to project spatial depth and dynamic specular glares on interactive cards.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">6+ Custom Keyframe Motion Sequences</div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        Features <code>@keyframes orbitSpin</code>, <code>morphMesh</code>, <code>waveBar</code>, <code>textShimmer</code>, <code>pulseGlow</code>, and <code>floatingCard</code>.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Zero-Framework Standalone Footprint</div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        The export bundle runs directly on pure vanilla HTML5 and CSS3 with no bundler, runtime framework, or external CSS dependency required.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Accessible Visual Contrast & Responsive Design</div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        WCAG AA compliant contrast ratios, balanced fluid typography (Plus Jakarta Sans & Space Mono), and seamless desktop-to-mobile layout adaptability.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#0e1017] border-t border-white/10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>Author: <strong>Tanmay Jambhulkar</strong></span>
            <span aria-hidden="true">·</span>
            <span>Project: <strong>Kinetics // CSS Motion Experience</strong></span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleDownloadZip}
              className="px-4 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors cursor-pointer"
            >
              Download .ZIP Package
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
