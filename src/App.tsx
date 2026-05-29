import { useState, useEffect } from "react";
import { 
  Terminal, Sparkles, ShieldCheck, ArrowRight, 
  Dna, Cpu, Award, Zap, ChevronRight, Play, Info
} from "lucide-react";

// Components
import Header from "./components/Header";
import ParticleNetwork from "./components/ParticleNetwork";
import NeuralConsole from "./components/NeuralConsole";
import TechExplorer from "./components/TechExplorer";
import TimelineHUD from "./components/TimelineHUD";
import StatsSection from "./components/StatsSection";
import ExperiencesHUD from "./components/ExperiencesHUD";
import { TechfestLogo } from "./components/TechfestLogo";

// Synthesizer Audio
import { cyberSynth } from "./utils/audio";

export default function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showConsole, setShowConsole] = useState(false);

  // Monitor Scroll Position to sync Header highlight
  useEffect(() => {
    const sections = ["hero", "about", "tech", "timeline", "stats", "experiences"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMuteToggle = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    cyberSynth.setMute(newMuteState);
  };

  const handleEnterConsole = () => {
    setShowConsole(true);
    // Auto-scroll to neural console panel for convenient visual focus
    setTimeout(() => {
      const consolePanel = document.getElementById("neural-console-panel");
      if (consolePanel) {
        consolePanel.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const handleScrollToSection = (id: string) => {
    cyberSynth.playClick(950, 0.05);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark text-zinc-100 selection:bg-cyan-500 selection:text-black antialiased scanline-roll-active">
      
      {/* Header component */}
      <Header 
        isMuted={isMuted}
        onMuteToggle={handleMuteToggle}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onEnterNeuralConsole={handleEnterConsole}
      />

      {/* Hero Section Container */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
      >
        {/* Holographic dynamic Canvas Particle background */}
        <ParticleNetwork />

        {/* Ambient Darkened Underlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark/30 to-bg-dark pointer-events-none" />
        <div className="absolute inset-0 digital-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center py-20">
          
          {/* Top aesthetic ticker */}
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-[10px] tracking-widest font-extrabold text-cyan-400 uppercase">
              ASIA'S LARGEST SCIENCE & TECH FESTIVAL
            </span>
          </div>

          {/* Centered Large glowing Techfest Brand Identity Logo */}
          <div className="flex flex-col items-center justify-center mb-6 relative">
            <div className="absolute inset-x-0 top-0 h-40 bg-cyan-400/10 filter blur-[80px] rounded-full pointer-events-none" />
            <TechfestLogo className="w-56 h-36 md:w-72 md:h-44 text-cyan-400 relative z-10 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]" />
          </div>

          {/* Main Huge Typography Hero Title with space spacing and elegant pairing */}
          <div className="relative mb-6">
            <h1 className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase text-glow-blue select-none">
              TECHFEST
            </h1>
            <div className="font-sans font-extrabold text-xl sm:text-3xl lg:text-4xl tracking-[0.3em] text-cyan-400 text-glow-blue mt-2">
              IIT BOMBAY
            </div>
          </div>

          {/* Dynamic Cyber Tagline */}
          <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base lg:text-lg text-zinc-300 font-semibold uppercase tracking-wider mb-10 leading-relaxed">
            Where Human Intelligence Meets Artificial Evolution
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => handleScrollToSection("tech")}
              onMouseEnter={() => cyberSynth.playHover()}
              className="w-full sm:w-auto px-8 py-4 rounded-sm font-bold text-xs tracking-widest border border-cyan-500 text-white bg-cyan-950/20 hover:bg-cyan-500 hover:text-black cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 uppercase shrink-0"
            >
              Explore the Future
            </button>

            <button
              onClick={handleEnterConsole}
              onMouseEnter={() => cyberSynth.playHover()}
              className="w-full sm:w-auto px-8 py-4 rounded-sm font-bold text-xs tracking-widest bg-cyan-500 text-black hover:bg-cyan-400 active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 uppercase shrink-0"
            >
              Join the Future
            </button>
          </div>

          {/* Quick telemetry parameters under buttons */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 font-mono text-[10px] text-zinc-500 uppercase">
            <span>&gt; COGNITIVE ENCLAVES ACTIVE</span>
            <span className="hidden sm:inline">•</span>
            <span>&gt; CENTRAL SYSTEM SECURE</span>
          </div>

        </div>

        {/* Scroll helper */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-80 hover:opacity-100" onClick={() => handleScrollToSection("about")}>
          <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 mb-2 font-bold font-sans">Sequence Initiation</span>
          <div className="w-5 h-8 border border-cyan-500/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Interactive Neural Console Portal Area */}
      {showConsole && (
        <section id="neural-console-panel" className="bg-[#07090e] relative py-12 border-t border-b border-cyan-500/20 scroll-mt-24">
          <NeuralConsole onClose={() => setShowConsole(false)} />
        </section>
      )}

      {/* About Techfest Section */}
      <section 
        id="about" 
        className="py-24 sm:py-32 relative border-t border-white/5 bg-black/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Left Frame Split: Textual presentation - Span 7 */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase">
                  INTELLIGENCE_CORE // SYSTEMS
                </span>
                <span className="h-px w-12 bg-cyan-500/20" />
              </div>

              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase leading-tight">
                ABOUT ASIA'S LARGEST SCIENCE & TECH FESTIVAL
              </h2>

              <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed uppercase tracking-wider font-semibold">
                Techfest IIT Bombay stands as the absolute pinnacle center of technical display, research, and competition across Asia.
              </p>

              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                By integrating specialized biological nodes with computing networks, edition 2077 merges physical systems with autonomous AI swarm minds. Here, scientists, mechatronics designers, quantum cryptologists, and visionaries meet to display the next evolution stage of human intellect.
              </p>

              {/* Static visual blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="border border-white/5 p-4 rounded bg-black/60 backdrop-blur">
                  <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                    <Dna className="w-4 h-4" />
                    <span className="font-bold text-xs tracking-wider uppercase font-sans">Biological Linkage</span>
                  </div>
                  <p className="font-sans text-xs text-zinc-500">
                    Seamless biometric sensors map short-term human memory matrices into computing structures without physical connectors.
                  </p>
                </div>

                <div className="border border-white/5 p-4 rounded bg-black/60 backdrop-blur">
                  <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                    <Cpu className="w-4 h-4" />
                    <span className="font-bold text-xs tracking-wider uppercase font-sans">Superposed Logic</span>
                  </div>
                  <p className="font-sans text-xs text-zinc-500">
                    Algorithms operate calculations in parallel timelines, completing infinite cryptanalytic checks instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Right Frame Split: Futuristic SVG Matrix display - Span 5 */}
            <div className="lg:col-span-5">
              <div className="relative p-1 rounded-sm bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 border border-white/5 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.05)] group">
                
                {/* Visual SVG schematic card representing cyborg-mind connectivity */}
                <div className="bg-[#050505] p-8 rounded relative overflow-hidden flex flex-col justify-between min-h-[340px]">
                  <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
                  
                  {/* Top-right tech label */}
                  <span className="absolute top-2 right-2 font-mono text-[8px] text-cyan-400 tracking-wider select-none uppercase">
                    CYBORG_UPLINK_SCHEMATIC
                  </span>

                  {/* Core Schematic SVG */}
                  <div className="my-auto flex justify-center">
                    <svg className="w-48 h-48 text-cyan-400 animate-pulse" viewBox="0 0 100 100" fill="none">
                      {/* Outer target grids */}
                      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-cyan-500/20 animate-spin" style={{ animationDuration: "35s" }} />
                      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" className="text-teal-500/30 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
                      
                      {/* Innermost neural core lines */}
                      <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400" />
                      <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/10" />
                      <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/10" />
                      
                      {/* Synaptic nodes */}
                      <circle cx="50" cy="15" r="3" fill="#14b8a6" />
                      <circle cx="50" cy="85" r="3" fill="#14b8a6" />
                      <circle cx="15" cy="50" r="3" fill="#06b6d4" />
                      <circle cx="85" cy="50" r="3" fill="#06b6d4" />
                      
                      {/* Diagonal connections representing neural links */}
                      <line x1="15" y1="50" x2="50" y2="15" stroke="#14b8a6" strokeWidth="1" />
                      <line x1="85" y1="50" x2="50" y2="85" stroke="#14b8a6" strokeWidth="1" />
                    </svg>
                  </div>

                  {/* Schema Info Footer */}
                  <div className="border-t border-white/5 pt-4 text-center">
                    <span className="font-mono text-[9px] text-[#06b6d4] uppercase tracking-widest font-extrabold block">
                      STABLE TRANSMISSION GATEWAY
                    </span>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase block mt-1">
                      CONNECTION ENCRYPTED & SECURED
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Future Technologies Section */}
      <section id="tech" className="py-24 sm:py-32 relative scroll-mt-20">
        <TechExplorer />
      </section>

      {/* Chronological Vertical Timeline Section */}
      <section id="timeline" className="py-24 sm:py-32 relative bg-black/30 border-t border-white/5 scroll-mt-20">
        <TimelineHUD />
      </section>

      {/* Techfest statistics counters Section */}
      <section id="stats" className="py-24 sm:py-32 relative border-t border-white/5 scroll-mt-20">
        <StatsSection />
      </section>

      {/* Featured Experiences Interactive Section */}
      <section id="experiences" className="py-24 sm:py-32 relative bg-black/40 border-t border-white/5 scroll-mt-20">
        <ExperiencesHUD />
      </section>

      {/* Epic Glowing CTA Section */}
      <section id="cta" className="py-24 relative overflow-hidden border-t border-cyan-500/10">
        
        {/* Background neon elements */}
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
          
          <span className="font-mono text-xs text-cyan-400 tracking-[0.4em] font-bold block mb-4 uppercase">
            REACH MAXIMUM CAPAC_CONVERGENCE
          </span>

          <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-widest uppercase mb-6 text-glow-blue">
            The Future Starts Here
          </h2>

          <p className="max-w-lg mx-auto font-sans text-xs sm:text-sm text-zinc-400 mb-10 leading-relaxed uppercase tracking-widest font-semibold">
            Deploy your identity interface to complete authorization checks and connect with Asia's largest tech-gathering.
          </p>

          <button
            onClick={handleEnterConsole}
            onMouseEnter={() => cyberSynth.playHover()}
            className="px-10 py-5 rounded-sm font-bold text-sm tracking-widest bg-cyan-500 text-black hover:bg-cyan-400 cursor-pointer shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 uppercase"
          >
            Join Techfest
          </button>

          {/* Clean human readable footer indicator */}
          <div className="mt-14 inline-grid grid-cols-2 gap-6 text-[10px] uppercase font-mono text-zinc-600">
            <span>UPLINK STABLE</span>
            <span>TRANSMISSION SECURE</span>
          </div>

        </div>
      </section>

      {/* Footer copyright and telemetry parameters */}
      <footer className="bg-black py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center bg-black">
          
          <div className="flex items-center space-x-1 mb-6 md:mb-0">
            <TechfestLogo className="w-16 h-12 text-cyan-400" />
            <div className="font-mono text-left">
              <span className="font-sans font-bold text-xs tracking-[0.2em] text-white">
                TECHFEST IIT BOMBAY
              </span>
              <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold mt-0.5">
                ESTABLISHED 1998 // CONTINUOUS EVOLUTION 2077
              </p>
            </div>
          </div>

          <div className="text-center md:text-right font-mono text-[9.5px] text-zinc-600 leading-relaxed">
            <p>DESIGNED FOR IIT BOMBAY SPECIAL BIOMECHANICAL EDITION v2.077</p>
            <p className="text-cyan-400 uppercase font-semibold mt-1">© 2077 TECHFEST IIT BOMBAY. ALL TRANSMISSION RIGHTS SIGNED.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
