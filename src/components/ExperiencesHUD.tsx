import { useState } from "react";
import { 
  Play, ShieldCheck, Cpu, RefreshCw, BarChart2,
  Settings2, Activity, BatteryCharging, Zap 
} from "lucide-react";
import { EXPERIENCES } from "../data";
import { ExperienceItem } from "../types";
import { cyberSynth } from "../utils/audio";

export default function ExperiencesHUD() {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(EXPERIENCES[0]);
  const [simRunning, setSimRunning] = useState(false);
  const [simStatus, setSimStatus] = useState("IDLE");
  const [simMetrics, setSimMetrics] = useState({ coreTemp: 38, coherence: 85, outputGflops: 120 });
  const [nodes, setNodes] = useState([
    { id: 1, active: true, load: 12 },
    { id: 2, active: true, load: 24 },
    { id: 3, active: false, load: 0 },
    { id: 4, active: true, load: 43 },
  ]);

  const handleSelectExp = (exp: ExperienceItem) => {
    cyberSynth.playClick(900, 0.05);
    setSelectedExp(exp);
    setSimRunning(false);
    setSimStatus("STANDBY");
    // Generate initial randomized mock analytics based on sector
    setSimMetrics({
      coreTemp: Math.floor(Math.random() * 30 + 35),
      coherence: Math.floor(Math.random() * 15 + 80),
      outputGflops: Math.floor(Math.random() * 200 + 100),
    });
  };

  const startSimulation = () => {
    if (!selectedExp) return;
    cyberSynth.playUplink();
    setSimRunning(true);
    setSimStatus("INITIALIZING CORE...");

    // Live state triggers
    setTimeout(() => {
      setSimStatus("TUNING SENSORY FREQUENCIES");
      cyberSynth.playGlitch();
    }, 850);

    setTimeout(() => {
      setSimStatus("ACTIVE LIVE DEPLOYMENT");
      cyberSynth.playClick(1400, 0.1);
      
      // Update values
      setSimMetrics({
        coreTemp: Math.floor(Math.random() * 25 + 60),
        coherence: Math.floor(Math.random() * 10 + 89),
        outputGflops: Math.floor(Math.random() * 400 + 500),
      });

      setNodes([
        { id: 1, active: true, load: Math.floor(Math.random() * 40 + 50) },
        { id: 2, active: true, load: Math.floor(Math.random() * 40 + 50) },
        { id: 3, active: true, load: Math.floor(Math.random() * 40 + 40) },
        { id: 4, active: true, load: Math.floor(Math.random() * 40 + 50) },
      ]);
    }, 1800);
  };

  const handleCalibrateTuner = (factor: number) => {
    if (!simRunning) return;
    cyberSynth.playClick(750, 0.04);
    setSimMetrics((prev) => ({
      ...prev,
      coreTemp: Math.max(40, prev.coreTemp - 2),
      coherence: Math.min(100, prev.coherence + factor),
      outputGflops: prev.outputGflops + 15,
    }));
  };

  return (
    <div className="section-container relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-widest font-bold px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-sm uppercase">
            SIMULATOR_HUB // EXP_VECTORS
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-4 uppercase">
            FEATURED EXPERIENCES
          </h2>
          <div className="h-[2px] w-16 bg-cyan-500 mx-auto mt-4" />
          <p className="max-w-xl mx-auto font-sans text-xs text-zinc-400 mt-4 leading-relaxed uppercase tracking-wider font-semibold">
            Deploy holographic nodes. Simulate high-energy particle experiments and mechatronic drive systems live in the web browser.
          </p>
        </div>

        {/* Dual Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Experience selection portal - spans 5 cols */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {EXPERIENCES.map((exp) => {
              const active = selectedExp?.id === exp.id;
              let borderClass = active ? "border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]" : "border-white/5 hover:border-cyan-500/40 bg-black/40";
              let titleColor = active ? "text-cyan-400" : "text-white";

              return (
                <div
                  id={`exp-card-${exp.id}`}
                  key={exp.id}
                  onClick={() => handleSelectExp(exp)}
                  onMouseEnter={() => cyberSynth.playHover()}
                  className={`p-5 rounded-sm border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group ${borderClass}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-sm">
                      {exp.sector}
                    </span>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase">
                      SYS_LOAD: {exp.systemLoad}
                    </span>
                  </div>

                  <h3 className={`font-sans font-bold text-base tracking-tight ${titleColor} transition-colors uppercase`}>
                    {exp.title}
                  </h3>
                  <p className="font-mono text-[10px] text-teal-400 font-semibold uppercase tracking-widest mt-0.5">
                    {exp.type}
                  </p>
                  <p className="font-sans text-xs text-zinc-400 mt-3 line-clamp-2 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Absolute subtle visual decor */}
                  <div className="absolute right-0 bottom-0 p-3 opacity-0 group-hover:opacity-30 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Simulation Console Deck - spans 7 cols */}
          <div className="lg:col-span-7">
            <div className="bg-[#07090e] border border-cyan-500/20 shadow-[0_0_25px_rgba(6,182,212,0.03)] rounded-sm p-8 relative flex flex-col justify-between h-full min-h-[450px]">
              <div className="absolute top-2 left-2 font-mono text-[8px] text-cyan-400 tracking-widest uppercase select-none">
                SIMULATION_CORE_TELEMETRY // FEEDBACK_ACTIVE
              </div>
              <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

              {selectedExp ? (
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Header sector information */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                      <div>
                        <h4 className="font-sans font-bold text-lg text-white tracking-tight uppercase mb-1">
                          {selectedExp.title} DECK
                        </h4>
                        <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase">
                          SECTOR BLOCK: {selectedExp.sector.toUpperCase()}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-teal-400 bg-teal-500/10 border border-teal-500/30 px-2 py-0.5 rounded-sm font-bold uppercase select-none">
                        {simStatus}
                      </span>
                    </div>

                    {/* Simulation graphics display panel box */}
                    <div className="bg-black/80 rounded-sm border border-white/5 p-6 mb-6 min-h-[170px] relative overflow-hidden flex flex-col justify-center">
                      
                      {simRunning ? (
                        /* Active simulation screen */
                        <div className="space-y-4">
                          <div className="flex justify-between items-center bg-cyan-500/10 border border-cyan-500/20 p-2 rounded-sm">
                            <div className="flex items-center space-x-2">
                              <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                              <span className="font-mono text-[10px] text-cyan-400 font-bold tracking-widest uppercase">MUTATOR PROCESS COHERENCE</span>
                            </div>
                            <span className="font-mono text-[11px] text-white font-black">{simMetrics.coherence}%</span>
                          </div>

                          {/* Dynamic SVG / Graph indicators */}
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                            {nodes.map((n) => (
                              <div key={n.id} className="bg-black/60 border border-white/5 p-2.5 rounded-sm text-center">
                                <span className="font-mono text-[8px] text-zinc-500 block uppercase">NODE-0{n.id}</span>
                                <span className={`font-mono text-xs font-bold block mt-1 ${n.active ? "text-teal-400" : "text-zinc-600"}`}>
                                  {n.active ? `${n.load}% LOAD` : "OFFLINE"}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Action manual boosters */}
                          <div className="flex justify-center space-x-2 pt-2">
                            <button
                              onClick={() => handleCalibrateTuner(3)}
                              className="px-3 py-1 bg-cyan-500/10 border border-cyan-500 text-cyan-400 rounded-sm font-mono text-[9px] tracking-widest uppercase hover:bg-cyan-500 hover:text-black cursor-pointer transition-colors"
                            >
                              + TUNE COHERENCY
                            </button>
                            <button
                              onClick={() => handleCalibrateTuner(-2)}
                              className="px-3 py-1 bg-teal-500/10 border border-teal-500 text-teal-400 rounded-sm font-mono text-[9px] tracking-widest uppercase hover:bg-teal-500 hover:text-black cursor-pointer transition-colors"
                            >
                              - SYSTEM RELEASE
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Idle simulation screen */
                        <div className="text-center">
                          <Play className="w-10 h-10 text-cyan-400/30 mx-auto mb-2 animate-bounce" />
                          <h5 className="font-sans font-bold text-xs text-cyan-400 uppercase tracking-widest mb-1">
                            Awaiting Reactor Core Boot
                          </h5>
                          <p className="font-mono text-[9px] text-zinc-500 max-w-sm mx-auto uppercase leading-relaxed">
                            Initialize direct sensory feedback loops by triggering the operational simulation below.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Specifications List */}
                    <div className="bg-black/40 border border-white/5 p-4 rounded-sm mb-4">
                      <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider mb-2 font-bold">
                        FEATURED METRICS & TRAINING TARGETS
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedExp.highlights.map((h, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs font-mono text-zinc-300">
                            <Zap className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 border-t border-white/5 pt-6 mt-4">
                    <div className="flex-1 grid grid-cols-3 gap-2 bg-black/60 border border-white/5 p-2 rounded-sm">
                      <div className="text-center">
                        <span className="font-mono text-[8px] text-zinc-500 uppercase block">CORE_TEMP</span>
                        <span className={`font-mono text-xs font-bold ${simMetrics.coreTemp > 50 ? "text-teal-400 animate-pulse" : "text-zinc-300"}`}>
                          {simMetrics.coreTemp}°C
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="font-mono text-[8px] text-zinc-500 uppercase block">COHERENCE</span>
                        <span className="font-mono text-xs text-cyan-400 font-bold block">
                          {simMetrics.coherence}%
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="font-mono text-[8px] text-zinc-500 uppercase block">SYNAP_LOAD</span>
                        <span className="font-mono text-xs text-cyan-500 font-bold block">
                          {simMetrics.outputGflops} GF
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={startSimulation}
                      disabled={simRunning && simStatus === "ACTIVE LIVE DEPLOYMENT"}
                      className="px-6 py-3 rounded-sm bg-cyan-500 text-black hover:bg-cyan-400 font-sans font-extrabold text-xs tracking-widest uppercase cursor-pointer disabled:opacity-50 transition-all flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    >
                      <RefreshCw className={`w-4 h-4 ${simRunning && simStatus !== "ACTIVE LIVE DEPLOYMENT" ? "animate-spin" : ""}`} />
                      <span>{simRunning ? "RE-BOOT SIMULATOR" : "RUN SIMULATION REACTOR"}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <p className="font-sans font-bold text-xs tracking-widest text-[#06b6d4] uppercase">
                    SIMULATION MODULE STANDBY
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
