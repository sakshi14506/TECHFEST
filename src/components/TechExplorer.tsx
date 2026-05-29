import { useState, useEffect } from "react";
import { 
  Brain, Cpu, Orbit, ShieldAlert, Zap, UserCheck, 
  Terminal, ShieldCheck, Settings, Play, RefreshCw, Layers
} from "lucide-react";
import { TECH_CARDS } from "../data";
import { TechCard } from "../types";
import { cyberSynth } from "../utils/audio";

export default function TechExplorer() {
  const [selectedTech, setSelectedTech] = useState<TechCard | null>(null);
  const [diagnosticLogs, setDiagnosticLogs] = useState<string[]>([]);
  const [diagnosticActive, setDiagnosticActive] = useState(false);
  const [diagnosticProgress, setDiagnosticProgress] = useState(0);

  // Icon mapping helper
  const renderIcon = (name: string, glowColor: string) => {
    let colorClass = "text-cyan-400";
    if (glowColor === "pink") colorClass = "text-teal-400";
    if (glowColor === "purple") colorClass = "text-cyan-500";
    if (glowColor === "cyan") colorClass = "text-cyan-300";

    switch (name) {
      case "Brain": return <Brain className={`w-8 h-8 ${colorClass}`} />;
      case "Cpu": return <Cpu className={`w-8 h-8 ${colorClass}`} />;
      case "Orbit": return <Orbit className={`w-8 h-8 ${colorClass}`} />;
      case "ShieldAlert": return <ShieldAlert className={`w-8 h-8 ${colorClass}`} />;
      case "Zap": return <Zap className={`w-8 h-8 ${colorClass}`} />;
      case "UserCheck": return <UserCheck className={`w-8 h-8 ${colorClass}`} />;
      default: return <Layers className={`w-8 h-8 ${colorClass}`} />;
    }
  };

  const handleTechClick = (tech: TechCard) => {
    cyberSynth.playClick(950, 0.08);
    setSelectedTech(tech);
    setDiagnosticActive(false);
    setDiagnosticProgress(0);
    setDiagnosticLogs([
      `> COMMENCING PORT DIAGNOSTIC CHOSEN FOR ID: [${tech.id.toUpperCase()}]`,
      `> ATTEMPTING ENCRYPTED TUNNEL FOR TELEMETRY: ${tech.dataTelemetry}`,
      `> STATUS: IDLE. WAITING FOR HUMAN MANDATE COMMAND.`
    ]);
  };

  const triggerDiagnosticRun = () => {
    if (!selectedTech) return;
    cyberSynth.playUplink();
    setDiagnosticActive(true);
    setDiagnosticProgress(0);

    const stages = [
      `> INST_START: Quantum logic nodes verified.`,
      `> COG_MAPPING: Reading synaptic registers...`,
      `> TELEMETRY_SYNC: Transport packets synced with Server Hub.`,
      `> SECURE_CHECK: Sentinel integrity checks returned 0 issues.`,
      `> SUCCESS: DIAGNOSTICS CLEAN. COHERENT LOAD OPTIMAL.`
    ];

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 20;
      setDiagnosticProgress(currentProgress);
      
      const logIdx = Math.floor(currentProgress / 20) - 1;
      if (stages[logIdx]) {
        cyberSynth.playGlitch();
        setDiagnosticLogs((prev) => [...prev, stages[logIdx]]);
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        cyberSynth.playClick(1500, 0.15);
      }
    }, 450);
  };

  return (
    <div className="section-container">
      
      {/* Visual background accents */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 font-mono text-[9px] text-cyan-400 tracking-[0.4em] select-none uppercase">
            SYNERGY_INDEX // ADVANCED SENSORS
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
            FUTURE TECHNOLOGIES
          </h2>
          <div className="h-[2px] w-16 bg-cyan-500 mx-auto mt-4" />
          <p className="max-w-xl mx-auto font-sans text-xs text-zinc-400 mt-4 leading-relaxed uppercase tracking-wider font-semibold">
            Interactive system vectors powering Techfest IIT Bombay 2077. Select a cyber-gateway to boot live diagnostics.
          </p>
        </div>

        {/* Dynamic Layout Grid or Display HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card list - span 2 */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {TECH_CARDS.map((tech) => {
              const borderGlow = 
                tech.glowColor === "cyan" ? "hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]" :
                tech.glowColor === "pink" ? "hover:border-teal-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)]" :
                tech.glowColor === "purple" ? "hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]" :
                "hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]";

              return (
                <div
                  id={`tech-card-${tech.id}`}
                  key={tech.id}
                  onClick={() => handleTechClick(tech)}
                  onMouseEnter={() => cyberSynth.playHover()}
                  className={`cursor-pointer bg-black/60 backdrop-blur-md p-6 rounded-sm border border-white/5 transition-all duration-300 ${borderGlow} ${
                    selectedTech?.id === tech.id ? "border-cyan-400 bg-cyan-950/20" : ""
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 bg-black/40 rounded border border-white/5">
                      {renderIcon(tech.iconName, tech.glowColor)}
                    </div>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">
                      COGNITIVE_VECTOR_0{TECH_CARDS.indexOf(tech) + 1}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-base tracking-tight text-white mb-1">
                    {tech.title}
                  </h3>
                  <p className="font-mono text-[10px] text-cyan-400 font-semibold uppercase tracking-widest mb-3">
                    {tech.tagline}
                  </p>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {tech.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-zinc-500">
                    <span className="truncate">DATA_NODE: {tech.dataTelemetry.substring(0, 15)}...</span>
                    <span className="text-cyan-400 shrink-0">SELECT GATEWAY &gt;</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Diagnostics HUD - span 1 */}
          <div className="col-span-1">
            <div className="h-full bg-[#07090e] border border-cyan-500/20 rounded-sm p-6 relative flex flex-col justify-between overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.03)] min-h-[500px]">
              {/* Scanlines overlay on terminal */}
              <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

              {selectedTech ? (
                /* Tech Selected HUD details */
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Header bar */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Terminal className="w-5 h-5 text-cyan-400" />
                        <span className="font-sans font-bold text-xs tracking-wider text-white uppercase">
                          PORT_DIAGNOSTIC_HUD
                        </span>
                      </div>
                      <span className="font-mono text-[8px] text-teal-400 bg-teal-500/10 border border-teal-500/30 px-1.5 py-0.5 rounded font-bold uppercase select-none">
                        ONLINE
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-xl text-white tracking-wide mb-1 uppercase">
                      {selectedTech.title}
                    </h3>
                    <p className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-4">
                      {selectedTech.tagline}
                    </p>

                    {/* Integrated Specs list */}
                    <div className="space-y-2 mb-6 bg-black/40 border border-white/5 p-4 rounded-sm">
                      <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider mb-2">
                        AUTHORIZED SPECIFICATION MATRICES
                      </p>
                      {selectedTech.specs.map((spec, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs font-mono text-zinc-300">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Scrolling terminal logic */}
                    <div className="space-y-1 bg-black/80 p-4 rounded border border-white/5 font-mono text-[10px] text-zinc-400 overflow-y-auto max-h-52 leading-relaxed">
                      {diagnosticLogs.map((log, index) => (
                        <p key={index} className={log.startsWith("> SUCCESS") ? "text-teal-400 font-bold" : log.startsWith("> ACCESS") ? "text-cyan-400" : ""}>
                          {log}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Diagnostics progress & button */}
                  <div className="mt-6 pt-4 border-t border-white/5">
                    {diagnosticActive && (
                      <div className="mb-4">
                        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 mb-1">
                          <span>SYSTEM INTEGRITY</span>
                          <span>{diagnosticProgress}%</span>
                        </div>
                        <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                          <div 
                            className="bg-cyan-400 h-full transition-all duration-300"
                            style={{ width: `${diagnosticProgress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <button
                      onClick={triggerDiagnosticRun}
                      disabled={diagnosticActive && diagnosticProgress < 100}
                      className="w-full py-3 rounded-sm font-bold text-xs tracking-widest bg-cyan-500 text-black hover:bg-cyan-400 disabled:opacity-50 transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center justify-center space-x-2"
                    >
                      {diagnosticActive && diagnosticProgress < 100 ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-black" />
                          <span>MAPPING GATEWAY...</span>
                        </>
                      ) : (
                        <>
                          <Settings className="w-4 h-4 animate-spin text-black" style={{ animationDuration: "3s" }} />
                          <span>RUN STATUS CHECK</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                /* No selection placeholder default HUD screen */
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center py-12">
                  <Terminal className="w-12 h-12 text-cyan-500/10 animate-pulse mb-4" />
                  <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-1">
                    DIAGNOSTICS PORT IDLE
                  </p>
                  <p className="font-mono text-[10px] text-zinc-500 max-w-[200px] leading-relaxed uppercase">
                    Select any technology gateway on the left portal to initialize status uplink.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
