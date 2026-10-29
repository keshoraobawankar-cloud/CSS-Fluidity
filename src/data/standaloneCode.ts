/**
 * Standalone pure HTML5, CSS3, and JavaScript code.
 * Clean, production-ready frontend project with zero external framework dependencies.
 * Ready for GitHub showcase, live portfolio demo, and developer review.
 */

export const STANDALONE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KINETICS // CSS Motion & Interactive Web Experience</title>
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</head>
<body class="theme-purple">

  <!-- Top Navigation (Semantic HTML5) -->
  <header class="top-nav">
    <div class="brand">KINETICS</div>
    <nav class="nav-links">
      <a href="#hero">Overview</a>
      <a href="#animations">Keyframes</a>
      <a href="#interactive-cards">Hover Dynamics</a>
      <a href="#architecture">Architecture</a>
    </nav>
    <div class="nav-cta">
      <button class="btn btn-primary luminous-btn" onclick="scrollToArchitecture()">Technical Specs</button>
    </div>
  </header>

  <!-- Hero Section with CSS Animations -->
  <main>
    <section id="hero" class="hero-section">
      <div class="hero-content">
        <div class="hero-kicker">FRONTEND ENGINEERING · INTERACTION DESIGN · CSS3 MOTION</div>
        <h1 class="hero-headline">
          Fluid Motion Crafted With <span class="shimmer-text">Pure CSS3</span>
        </h1>
        <p class="hero-subtext">
          A high-performance demonstration of hardware-accelerated CSS animations, 3D perspective transforms, and responsive tactile hover mechanics without external UI frameworks.
        </p>
        <div class="hero-actions">
          <a href="#animations" class="btn btn-primary luminous-btn">Explore Keyframes</a>
          <a href="#interactive-cards" class="btn btn-secondary">Interactive Cards</a>
        </div>
      </div>

      <!-- Orbital Kinetic 3D Visualizer (Pure CSS Animation) -->
      <div class="hero-visual">
        <div class="kinetic-stage">
          <!-- Concentric Orbit Rings -->
          <div class="orbit-ring ring-outer anim-orbit">
            <div class="satellite sat-1"></div>
            <div class="satellite sat-2"></div>
          </div>
          <div class="orbit-ring ring-middle anim-orbit-reverse">
            <div class="satellite sat-3"></div>
          </div>
          <div class="orbit-ring ring-inner anim-orbit"></div>

          <!-- Central Morphing Fluid Core with Trailing Shadow -->
          <div class="morph-core anim-morph anim-trail"></div>
          <div class="glow-aura anim-pulse-glow"></div>
        </div>
      </div>
    </section>

    <!-- Interactive Animation Controls -->
    <section class="controls-bar">
      <div class="control-group">
        <span class="control-label">Animation State:</span>
        <button id="togglePlayBtn" class="pill-btn active" onclick="togglePlayState()">Playing</button>
      </div>
      <div class="control-group">
        <span class="control-label">Speed Multiplier:</span>
        <button class="pill-btn" onclick="setSpeed(0.5)">0.5x</button>
        <button class="pill-btn active" onclick="setSpeed(1)">1.0x</button>
        <button class="pill-btn" onclick="setSpeed(2)">2.0x</button>
      </div>
      <div class="control-group">
        <span class="control-label">Color Theme:</span>
        <button class="pill-btn active" onclick="setTheme('purple')">Cosmic Violet</button>
        <button class="pill-btn" onclick="setTheme('cyan')">Cyber Cyan</button>
        <button class="pill-btn" onclick="setTheme('amber')">Solar Amber</button>
      </div>
    </section>

    <!-- Keyframe Animations Showcase Section -->
    <section id="animations" class="section">
      <div class="section-header">
        <span class="section-tag">KEYFRAME ARCHITECTURE</span>
        <h2 class="section-title">Core CSS3 Keyframe Animations</h2>
        <p class="section-desc">Each animation runs on the browser compositor layer using hardware-accelerated transforms and opacity for constant 60 FPS performance.</p>
      </div>

      <div class="grid-3">
        <!-- Animation 1: Orbital Physics -->
        <div class="anim-card">
          <div class="card-demo">
            <div class="demo-box">
              <div class="mini-ring anim-orbit">
                <div class="mini-dot"></div>
              </div>
              <div class="mini-core"></div>
            </div>
          </div>
          <div class="card-content">
            <h3>01. Orbital Trajectory</h3>
            <p>Concentric 360-degree rotation with opposing planetary satellites using <code>@keyframes orbitSpin</code>.</p>
            <div class="code-badge">transform: rotate(360deg)</div>
          </div>
        </div>

        <!-- Animation 2: Fluid Organic Morphing -->
        <div class="anim-card">
          <div class="card-demo">
            <div class="demo-box">
              <div class="mini-morph anim-morph"></div>
            </div>
          </div>
          <div class="card-content">
            <h3>02. Organic Mesh Morph</h3>
            <p>Continuous dynamic morphing achieved via asymmetric 8-point <code>border-radius</code> percentages.</p>
            <div class="code-badge">border-radius: 60% 40% 30% 70%</div>
          </div>
        </div>

        <!-- Animation 3: Kinetic Waveform Equalizer -->
        <div class="anim-card">
          <div class="card-demo">
            <div class="demo-box flex-bars">
              <div class="bar bar-1"></div>
              <div class="bar bar-2"></div>
              <div class="bar bar-3"></div>
              <div class="bar bar-4"></div>
              <div class="bar bar-5"></div>
              <div class="bar bar-6"></div>
              <div class="bar bar-7"></div>
            </div>
          </div>
          <div class="card-content">
            <h3>03. Waveform Synthesizer</h3>
            <p>Harmonic vertical scaling with staggered CSS animation delay properties.</p>
            <div class="code-badge">animation-delay: calc(var(--i) * 0.15s)</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Hover Effects Section -->
    <section id="interactive-cards" class="section">
      <div class="section-header">
        <span class="section-tag">INTERACTION & FEEDBACK</span>
        <h2 class="section-title">Micro-Interactions & Hover Dynamics</h2>
        <p class="section-desc">Tactile visual feedback responding seamlessly to cursor hover, depth perspectives, and mouse coordinates.</p>
      </div>

      <div class="grid-2">
        <!-- Tilt Card 1 -->
        <div class="tilt-card" onmousemove="handleTilt(event, this)" onmouseleave="resetTilt(this)">
          <div class="card-shine"></div>
          <div class="tilt-inner">
            <div class="card-icon">⚡</div>
            <h3>3D Perspective Tilt</h3>
            <p>Hover and move your mouse over this card. Pure CSS <code>transform: perspective(1000px) rotateX(...) rotateY(...)</code> tracks cursor coordinates in real time.</p>
            <div class="tech-spec">transform: perspective(1000px) rotateX(calc(...))</div>
          </div>
        </div>

        <!-- Glow Border Card 2 -->
        <div class="conic-glow-card">
          <div class="conic-inner">
            <div class="card-icon">✨</div>
            <h3>Luminous Rotating Border</h3>
            <p>Conic-gradient border beam that rotates smoothly and responds on hover with an intensified ambient back-glow.</p>
            <div class="tech-spec">background: conic-gradient(from var(--angle), ...)</div>
          </div>
        </div>
      </div>

      <!-- Button Hover Variations Showcase -->
      <div class="buttons-showcase">
        <h3 class="subsection-title">Creative Button Hover Effects</h3>
        <div class="btn-row">
          <button class="btn btn-primary luminous-btn">Luminous Light Streak</button>
          <button class="btn btn-neon-pulse">Pulse Glow Wave</button>
          <button class="btn btn-magnetic">Elastic Lift</button>
          <button class="btn btn-border-slide">Border Outline Fill</button>
        </div>
      </div>
    </section>

    <!-- Architecture & Technical Highlights -->
    <section id="architecture" class="section viva-section">
      <div class="viva-box">
        <div class="viva-header">
          <h3>Frontend Engineering Highlights</h3>
          <span class="viva-badge">PERFORMANCE BENCHMARKS</span>
        </div>
        <p>Architectural principles and technical choices implemented throughout this project:</p>
        <ul class="viva-list">
          <li><strong>GPU Compositor Isolation:</strong> Animations modify solely <code>transform</code> and <code>opacity</code>, circumventing the browser Layout (Reflow) and Paint pipeline for 60 FPS fluidity.</li>
          <li><strong>Mathematical 3D Tilt:</strong> Calculates normalized mouse deltas relative to container center with dynamic specular highlight illumination.</li>
          <li><strong>Complex CSS3 Keyframes:</strong> 6+ custom keyframe sequences powering orbital paths, morphing shapes, and wave physics without heavy JS libraries.</li>
          <li><strong>CSS Custom Property Theming:</strong> Dynamic runtime theming and speed modulation governed by CSS variables (<code>--speed</code>, <code>--accent-primary</code>).</li>
          <li><strong>Zero Dependency Architecture:</strong> 100% pure semantic HTML5 and vanilla CSS3 with responsive viewport support.</li>
        </ul>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">KINETICS // 2026</div>
      <div class="footer-meta">Crafted by Tanmay Jambhulkar · Modern Frontend & CSS Motion Showcase</div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;

export const STANDALONE_CSS = `/* ==========================================================================
   KINETICS // CSS Motion & Interactive Web Experience
   Author: Tanmay Jambhulkar
   Tech Stack: Pure HTML5 & CSS3 (Hardware-Accelerated)
   ========================================================================== */

/* 1. CSS Variables & Theme Tokens */
:root {
  --bg-main: #08090d;
  --bg-card: rgba(18, 20, 29, 0.75);
  --bg-card-hover: rgba(26, 30, 44, 0.9);
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --border-subtle: rgba(255, 255, 255, 0.08);
  
  /* Accent Colors (Default Purple Theme) */
  --accent-primary: #8b5cf6;
  --accent-secondary: #06b6d4;
  --accent-glow: rgba(139, 92, 246, 0.35);
  --accent-gradient: linear-gradient(135deg, #8b5cf6, #3b82f6, #06b6d4);

  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'Space Mono', monospace;

  /* Animation Speed Multiplier Variable */
  --speed: 1;
}

/* Theme Variations */
body.theme-cyan {
  --accent-primary: #06b6d4;
  --accent-secondary: #3b82f6;
  --accent-glow: rgba(6, 182, 212, 0.35);
  --accent-gradient: linear-gradient(135deg, #06b6d4, #0284c7, #6366f1);
}

body.theme-amber {
  --accent-primary: #f59e0b;
  --accent-secondary: #ef4444;
  --accent-glow: rgba(245, 158, 11, 0.35);
  --accent-gradient: linear-gradient(135deg, #f59e0b, #f97316, #ef4444);
}

/* 2. Global Resets & Typography */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--bg-main);
  color: var(--text-main);
  line-height: 1.6;
  overflow-x: hidden;
  background-image: 
    radial-gradient(circle at 15% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 85% 60%, rgba(6, 182, 212, 0.08) 0%, transparent 40%);
}

/* 3. Top Navigation Bar (3-Zone Contract) */
.top-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2.5rem;
  background: rgba(8, 9, 13, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
}

.brand {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
}

.nav-links a:hover {
  color: var(--text-main);
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: var(--accent-primary);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

/* 4. Hero Section */
.hero-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem 4rem;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 4rem;
  min-height: calc(85vh - 80px);
}

.hero-kicker {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent-primary);
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.hero-headline {
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.shimmer-text {
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), #ffffff, var(--accent-primary));
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textShimmer calc(5s / var(--speed)) linear infinite;
}

.hero-subtext {
  font-size: 1.125rem;
  color: var(--text-muted);
  max-width: 540px;
  margin-bottom: 2.25rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* 5. Buttons & Luminous Hover */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid transparent;
}

.btn-primary {
  background: var(--accent-primary);
  color: #ffffff;
  box-shadow: 0 4px 20px var(--accent-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px var(--accent-glow);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-main);
  border: 1px solid var(--border-subtle);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.luminous-btn {
  position: relative;
  overflow: hidden;
}

.luminous-btn::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -70%;
  width: 25%;
  height: 200%;
  background: linear-gradient(60deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  transform: rotate(25deg);
  transition: all 0.75s ease;
}

.luminous-btn:hover::after {
  left: 150%;
}

/* 6. Kinetic Visual Stage (CSS Animations) */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.kinetic-stage {
  position: relative;
  width: 380px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.orbit-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  transform-style: preserve-3d;
}

.ring-outer {
  width: 360px;
  height: 360px;
}

.ring-middle {
  width: 260px;
  height: 260px;
  border-color: rgba(139, 92, 246, 0.25);
  border-style: solid;
}

.ring-inner {
  width: 170px;
  height: 170px;
  border-color: rgba(6, 182, 212, 0.3);
}

.satellite {
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 15px currentColor;
}

.sat-1 {
  width: 16px;
  height: 16px;
  background: var(--accent-primary);
  color: var(--accent-primary);
  top: 15px;
  left: 50px;
}

.sat-2 {
  width: 12px;
  height: 12px;
  background: var(--accent-secondary);
  color: var(--accent-secondary);
  bottom: 25px;
  right: 60px;
}

.sat-3 {
  width: 14px;
  height: 14px;
  background: #ffffff;
  color: #ffffff;
  top: 50%;
  right: -7px;
}

/* Central Organic Morph Mesh */
.morph-core {
  position: absolute;
  width: 120px;
  height: 120px;
  background: var(--accent-gradient);
  box-shadow: 0 0 50px var(--accent-glow);
  z-index: 2;
}

.glow-aura {
  position: absolute;
  width: 200px;
  height: 200px;
  background: var(--accent-primary);
  border-radius: 50%;
  filter: blur(50px);
  z-index: 1;
}

/* 7. Controls Bar */
.controls-bar {
  max-width: 1100px;
  margin: 0 auto 3rem;
  padding: 1rem 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.control-label {
  font-size: 0.825rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.pill-btn {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pill-btn:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.12);
}

.pill-btn.active {
  background: var(--accent-primary);
  color: #ffffff;
  border-color: var(--accent-primary);
}

/* 8. Sections Layout */
.section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.section-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem;
}

.section-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: var(--accent-primary);
  display: block;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.section-desc {
  color: var(--text-muted);
  font-size: 1rem;
}

/* 9. Grids & Animation Cards */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.anim-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.anim-card:hover {
  border-color: rgba(139, 92, 246, 0.4);
  transform: translateY(-6px);
  box-shadow: 0 15px 35px -10px var(--accent-glow);
}

.card-demo {
  height: 180px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-subtle);
}

.demo-box {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mini-ring {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px dashed var(--accent-primary);
  position: relative;
}

.mini-dot {
  width: 10px;
  height: 10px;
  background: var(--accent-secondary);
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 10px;
  box-shadow: 0 0 10px var(--accent-secondary);
}

.mini-core {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--accent-primary);
}

.mini-morph {
  width: 70px;
  height: 70px;
  background: var(--accent-gradient);
}

/* Wave Equalizer */
.flex-bars {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 80px;
}

.bar {
  width: 6px;
  background: var(--accent-primary);
  border-radius: 3px;
  animation: waveBar calc(1.4s / var(--speed)) ease-in-out infinite alternate;
}

.bar-1 { animation-delay: 0.1s; }
.bar-2 { animation-delay: 0.3s; }
.bar-3 { animation-delay: 0.5s; }
.bar-4 { animation-delay: 0.2s; }
.bar-5 { animation-delay: 0.6s; }
.bar-6 { animation-delay: 0.4s; }
.bar-7 { animation-delay: 0.15s; }

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}

.card-content p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.code-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent-primary);
  background: rgba(139, 92, 246, 0.1);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
}

/* 10. Interactive 3D Tilt Card */
.tilt-card {
  position: relative;
  perspective: 1000px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  transition: transform 0.15s ease-out, border-color 0.3s ease;
  overflow: hidden;
}

.tilt-card:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 20px 40px -15px var(--accent-glow);
}

.card-shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1) 0%, transparent 60%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tilt-card:hover .card-shine {
  opacity: 1;
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.tech-spec {
  margin-top: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-dim);
}

/* Conic Border Card */
.conic-glow-card {
  position: relative;
  background: var(--bg-card);
  border-radius: 12px;
  padding: 1px;
  overflow: hidden;
}

.conic-glow-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(transparent, var(--accent-primary), transparent 30%);
  animation: orbitSpin calc(8s / var(--speed)) linear infinite;
}

.conic-inner {
  position: relative;
  background: #0f1118;
  border-radius: 11px;
  padding: 2.5rem 2rem;
  height: 100%;
}

/* Button Showcase */
.buttons-showcase {
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
}

.subsection-title {
  font-size: 1.15rem;
  margin-bottom: 1.5rem;
  color: var(--text-main);
}

.btn-row {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.btn-neon-pulse {
  background: transparent;
  color: var(--accent-secondary);
  border: 1px solid var(--accent-secondary);
}

.btn-neon-pulse:hover {
  background: rgba(6, 182, 212, 0.15);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
  transform: scale(1.03);
}

.btn-magnetic {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-main);
}

.btn-magnetic:hover {
  background: var(--text-main);
  color: #08090d;
  transform: translateY(-4px) scale(1.02);
}

.btn-border-slide {
  background: transparent;
  color: var(--text-main);
  border: 1px solid var(--border-subtle);
  position: relative;
  z-index: 1;
}

.btn-border-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--accent-primary);
  transition: width 0.3s ease;
  z-index: -1;
  border-radius: 6px;
}

.btn-border-slide:hover::before {
  width: 100%;
}

/* 11. Architecture Highlights */
.viva-section {
  padding-top: 2rem;
}

.viva-box {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  padding: 2.5rem;
}

.viva-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.viva-badge {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent-primary);
  background: rgba(139, 92, 246, 0.15);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
}

.viva-list {
  margin-top: 1.5rem;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: var(--text-muted);
}

.viva-list strong {
  color: var(--text-main);
}

/* 12. Footer */
.footer {
  border-top: 1px solid var(--border-subtle);
  padding: 2.5rem 2rem;
  background: rgba(8, 9, 13, 0.95);
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-brand {
  font-weight: 700;
  font-size: 1rem;
}

.footer-meta {
  font-size: 0.85rem;
  color: var(--text-dim);
}

/* 13. CSS3 Animations Keyframes */
@keyframes orbitSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes orbitSpinReverse {
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
}

@keyframes morphMesh {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: rotate(0deg) scale(1);
  }
  33% {
    border-radius: 40% 60% 70% 30% / 50% 60% 30% 60%;
    transform: rotate(120deg) scale(1.08);
  }
  66% {
    border-radius: 70% 30% 50% 50% / 30% 40% 60% 70%;
    transform: rotate(240deg) scale(0.96);
  }
}

@keyframes textShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.35;
    transform: scale(1);
    filter: blur(45px);
  }
  50% {
    opacity: 0.75;
    transform: scale(1.15);
    filter: blur(60px);
  }
}

@keyframes waveBar {
  0% { height: 12%; opacity: 0.4; }
  100% { height: 95%; opacity: 1; }
}

@keyframes shadowTrail {
  0%, 100% {
    box-shadow: 
      0 0 30px rgba(139, 92, 246, 0.5),
      -10px 14px 28px -4px rgba(139, 92, 246, 0.4),
      -22px 26px 45px -8px rgba(6, 182, 212, 0.3);
  }
  25% {
    box-shadow: 
      0 0 30px rgba(139, 92, 246, 0.5),
      14px -10px 28px -4px rgba(6, 182, 212, 0.4),
      26px -18px 45px -8px rgba(139, 92, 246, 0.3);
  }
  50% {
    box-shadow: 
      0 0 30px rgba(6, 182, 212, 0.5),
      10px 16px 28px -4px rgba(139, 92, 246, 0.4),
      20px 30px 45px -8px rgba(6, 182, 212, 0.3);
  }
  75% {
    box-shadow: 
      0 0 30px rgba(139, 92, 246, 0.5),
      -14px -10px 28px -4px rgba(6, 182, 212, 0.4),
      -26px -18px 45px -8px rgba(139, 92, 246, 0.3);
  }
}

/* Animation utilities */
.anim-orbit {
  animation: orbitSpin calc(24s / var(--speed)) linear infinite;
}

.anim-orbit-reverse {
  animation: orbitSpinReverse calc(32s / var(--speed)) linear infinite;
}

.anim-morph {
  animation: morphMesh calc(14s / var(--speed)) ease-in-out infinite;
}

.anim-pulse-glow {
  animation: pulseGlow calc(8s / var(--speed)) ease-in-out infinite;
}

.anim-trail {
  animation: shadowTrail calc(6s / var(--speed)) ease-in-out infinite;
}

.anim-morph.anim-trail {
  animation: 
    morphMesh calc(14s / var(--speed)) ease-in-out infinite,
    shadowTrail calc(6s / var(--speed)) ease-in-out infinite;
}

/* Responsive Rules */
@media (max-width: 900px) {
  .hero-section {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 3rem;
  }
  .hero-subtext {
    margin: 0 auto 2rem;
  }
  .hero-actions {
    justify-content: center;
  }
  .top-nav {
    padding: 1rem 1.5rem;
  }
  .nav-links {
    display: none;
  }
  .kinetic-stage {
    width: 300px;
    height: 300px;
    margin: 2rem auto;
  }
  .ring-outer {
    width: 280px;
    height: 280px;
  }
  .ring-middle {
    width: 200px;
    height: 200px;
  }
}
`;

export const STANDALONE_JS = `/**
 * Vanilla JavaScript Interactivity Module
 * Handles live parameter controls (pause/play, speed, theme) and 3D card perspective tilt.
 */

let isPlaying = true;

// Toggle Play/Pause state for all CSS animations
function togglePlayState() {
  isPlaying = !isPlaying;
  const elements = document.querySelectorAll('.anim-orbit, .anim-orbit-reverse, .anim-morph, .anim-pulse-glow, .shimmer-text, .bar');
  elements.forEach(el => {
    el.style.animationPlayState = isPlaying ? 'running' : 'paused';
  });
  const btn = document.getElementById('togglePlayBtn');
  if (btn) {
    btn.textContent = isPlaying ? 'Playing' : 'Paused';
    btn.classList.toggle('active', isPlaying);
  }
}

// Set Animation Speed dynamically via CSS custom property
function setSpeed(multiplier) {
  document.documentElement.style.setProperty('--speed', multiplier);
  const buttons = event.target.parentElement.querySelectorAll('.pill-btn');
  buttons.forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

// Switch Accent Theme
function setTheme(theme) {
  document.body.className = 'theme-' + theme;
  const buttons = event.target.parentElement.querySelectorAll('.pill-btn');
  buttons.forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

// 3D Perspective Card Tilt on Mouse Move
function handleTilt(e, card) {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / centerY) * -12;
  const rotateY = ((x - centerX) / centerX) * 12;
  
  card.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale3d(1.02, 1.02, 1.02)\`;
  
  // Update shine position variables
  card.style.setProperty('--mouse-x', \`\${(x / rect.width) * 100}%\`);
  card.style.setProperty('--mouse-y', \`\${(y / rect.height) * 100}%\`);
}

function resetTilt(card) {
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
}

function scrollToArchitecture() {
  const el = document.getElementById('architecture');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
`;

export const STANDALONE_README = `# Kinetics // CSS Motion & Interactive Web Experience
**Engineered by Tanmay Jambhulkar**

An interactive, high-performance web experience demonstrating modern frontend capabilities, hardware-accelerated CSS3 animations, 3D perspective depth, and responsive tactile micro-interactions.

---

## 🚀 Key Highlights & Capabilities

1. **Hardware-Accelerated CSS3 Keyframe Animations:**
   - **Orbital Planetary Mechanics:** \`@keyframes orbitSpin\` executing continuous 360-degree rotation along 3D plane trajectories.
   - **Organic Shape Morphing:** \`@keyframes morphMesh\` interpolating 8-point asymmetric \`border-radius\` percentages for fluid organic motion.
   - **Radiant Pulse Aura:** \`@keyframes pulseGlow\` creating breathing luminescent depth.
   - **Waveform Synthesizer:** \`@keyframes waveBar\` simulating harmonic soundwave audio frequencies with staggered CSS animation delays.
   - **Linear Gradient Text Shimmer:** Continuous specular reflection across typography via \`background-clip: text\`.

2. **Interactive 3D Micro-Interactions:**
   - **Dynamic 3D Perspective Tilt:** Pure CSS \`perspective(1000px) rotateX(...) rotateY(...)\` tracking real-time cursor coordinates with mouse-following radial glare.
   - **Luminous Conic Border Beam:** Rotating neon perimeter beam built using \`conic-gradient()\`.
   - **Layered Parallax Elevation:** Z-axis depth displacement on hover.
   - **Button Hover Suite:** Luminous light streak sweep, neon glow pulse, elastic lift, and sliding fill.

3. **Performance & Architecture:**
   - **Compositor Isolation:** All animations strictly target \`transform\` and \`opacity\`, bypassing browser Layout (Reflow) and Paint cycles to guarantee 60 FPS performance.
   - **Zero Framework Footprint (Standalone):** Runs purely on vanilla HTML5 and CSS3.
   - **Responsive & Accessible:** Fully fluid across mobile, tablet, and desktop displays with WCAG AA contrast compliance.

---

## 🛠️ How to Run Locally

1. Clone or download this repository.
2. Double-click \`index.html\` to open in any modern browser (Chrome, Edge, Firefox, Safari).
3. No package managers, bundlers, or local server dependencies required.
`;
