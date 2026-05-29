import { useState, useEffect } from "react";
import { Terminal, Volume2, VolumeX, Menu, X, Play } from "lucide-react";
import { cyberSynth } from "../utils/audio";
import { TechfestLogo } from "./TechfestLogo";

interface HeaderProps {
  onMuteToggle: () => void;
  isMuted: boolean;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onEnterNeuralConsole: () => void;
}

export default function Header({
  onMuteToggle,
  isMuted,
  activeSection,
  setActiveSection,
  onEnterNeuralConsole
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Clock updates every second representing deep network telemetry
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const stringRepresentation = now.toISOString().replace("T", " | ").substring(0, 19) + " UTC";
      setCurrentTime(stringRepresentation);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Technologies", id: "tech" },
    { label: "Chronology", id: "timeline" },
    { label: "Statistics", id: "stats" },
    { label: "Experiences", id: "experiences" },
  ];

  const handleNavClick = (id: string) => {
    cyberSynth.playClick(900, 0.05);
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNeuralClick = () => {
    cyberSynth.playUplink();
    onEnterNeuralConsole();
    setMobileMenuOpen(false);
  };

  const toggleSound = () => {
    onMuteToggle();
    setTimeout(() => {
      cyberSynth.playClick(!isMuted ? 800 : 1200, 0.08);
    }, 50);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#07090e]/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Branding Logos */}
        <div 
          onClick={() => handleNavClick("hero")}
          className="flex items-center space-x-1 cursor-pointer group"
        >
          <TechfestLogo className="w-14 h-10 -ml-1 text-cyan-400 group-hover:scale-105 transition-transform" />
          <div className="flex flex-col -ml-1">
            <span className="tracking-[0.25em] font-bold text-sm text-white group-hover:text-cyan-300 transition-colors font-sans">
              TECHFEST <span className="text-cyan-400">IIT BOMBAY</span>
            </span>
            <span className="text-[9px] font-mono tracking-[0.12em] text-cyan-400/60 uppercase">
              Quantum Gateway 2077
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              id={`nav-item-${item.id}`}
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              onMouseEnter={() => cyberSynth.playHover()}
              className={`text-xs tracking-[0.2em] font-medium hover:text-white transition-colors py-2 relative group uppercase ${
                activeSection === item.id ? "text-cyan-400" : "text-slate-400"
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-cyan-400 transition-all duration-300 ${
                activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
          ))}
        </nav>

        {/* Telemetry Clock & Console Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Virtual UTC Telemetry Clock */}
          <div className="font-mono text-[11px] text-zinc-400 border border-white/5 px-3 py-1.5 rounded bg-black/40">
            <span className="text-cyan-400 mr-1.5">● INTEGRATION ENGINE:</span>
            <span className="text-zinc-200">{currentTime}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => cyberSynth.playHover()}
            className="p-2 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400 rounded transition-all cursor-pointer"
            title={isMuted ? "Unmute Synthesizer" : "Mute Synthesizer"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Connect Neural Core Mode */}
          <button
            onClick={handleNeuralClick}
            className="relative overflow-hidden px-5 py-2 rounded-sm font-semibold text-xs tracking-[0.15em] uppercase border border-cyan-400 bg-cyan-950/20 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] cursor-pointer text-cyan-400 transition-all duration-300 group"
          >
            <span className="relative z-10 flex items-center space-x-1.5">
              <Play className="w-3" fill="currentColor" />
              <span>NEURAL LINK</span>
            </span>
          </button>
        </div>

        {/* Mobile controls & Menu Toggle */}
        <div className="flex lg:hidden items-center space-x-3">
          <button
            onClick={toggleSound}
            className="p-2 border border-cyan-500/20 text-cyan-400 rounded-md"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => handleNeuralClick()}
            className="px-3 py-1.5 rounded border border-cyan-400 bg-cyan-950/20 text-cyan-400 text-[10px] tracking-widest font-bold font-sans"
          >
            UPLINK
          </button>

          <button
            onClick={() => {
              cyberSynth.playClick(1000, 0.05);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 border border-white/10 text-white rounded-md bg-black/30"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden animate-fade-in absolute top-20 left-0 w-full bg-[#07090e]/95 border-b border-white/10 backdrop-blur-2xl py-6 px-4 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm text-left font-medium py-2.5 px-4 rounded border ${
                  activeSection === item.id 
                    ? "text-cyan-400 border-cyan-500/20 bg-cyan-950/20" 
                    : "text-zinc-300 border-transparent hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/5">
            <div className="font-mono text-[10px] text-zinc-500 mb-3 text-center">
              SYSTEM TIME: {currentTime}
            </div>
            <button
              onClick={() => {
                handleNeuralClick();
              }}
              className="w-full text-center font-bold text-xs tracking-widest py-3 rounded bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:brightness-110 active:scale-95"
            >
              INITIALIZE NEURAL LINK PORT
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
