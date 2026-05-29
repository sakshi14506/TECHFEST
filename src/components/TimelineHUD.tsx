import { useState } from "react";
import { 
  History, ShieldAlert, CheckCircle2, Lock, Unlock, 
  Calendar, EyeOff, Sparkles, Orbit
} from "lucide-react";
import { TIMELINE_EVENTS } from "../data";
import { TimelineMilestone } from "../types";
import { cyberSynth } from "../utils/audio";

export default function TimelineHUD() {
  const [activeEvent, setActiveEvent] = useState<TimelineMilestone | null>(TIMELINE_EVENTS[1]); // Default 2026

  const handleMilestoneClick = (item: TimelineMilestone) => {
    if (item.status === "classified") {
      cyberSynth.playWarning();
    } else {
      cyberSynth.playClick(1050, 0.08);
    }
    setActiveEvent(item);
  };

  const renderStatusTag = (status: TimelineMilestone["status"]) => {
    switch (status) {
      case "completed":
        return (
          <span className="flex items-center space-x-1 font-mono text-[9px] text-teal-400 bg-teal-500/10 border border-teal-500/30 px-2 py-0.5 rounded-sm font-bold uppercase">
            <CheckCircle2 className="w-3 h-3" />
            <span>ARCHIVED</span>
          </span>
        );
      case "active":
        return (
          <span className="flex items-center space-x-1 font-mono text-[9px] text-cyan-400 bg-cyan-500/15 border border-cyan-500/30 px-2 py-0.5 rounded-sm font-bold uppercase animate-pulse">
            <Unlock className="w-3 h-3 animate-spin" style={{ animationDuration: "10s" }} />
            <span>PRIMARY CORE</span>
          </span>
        );
      case "classified":
        return (
          <span className="flex items-center space-x-1 font-mono text-[9px] text-cyan-500 bg-cyan-950/25 border border-cyan-500/30 px-2 py-0.5 rounded-sm font-bold uppercase">
            <Lock className="w-3 h-3" />
            <span>RESTRICTED</span>
          </span>
        );
      case "future":
        return (
          <span className="flex items-center space-x-1 font-mono text-[9px] text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded-sm font-bold uppercase">
            <Orbit className="w-3 h-3" />
            <span>TARGET VECTOR</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="section-container relative">
      
      {/* Dynamic graphic lines */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg-dark to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-widest font-bold px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-sm uppercase">
            TEMPORAL FLOW INDEX
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-4 uppercase">
            INNOVATION CHRONOLOGY
          </h2>
          <div className="h-[2px] w-16 bg-cyan-500 mx-auto mt-4" />
          <p className="max-w-xl mx-auto font-sans text-xs text-zinc-400 mt-4 leading-relaxed uppercase tracking-wider font-semibold">
            Follow the synthetic milestones from Techfest's biological foundation in 1998 up to the cybernetic convergence in 2077.
          </p>
        </div>

        {/* Dual Column Timeline HUD layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Line Timeline Vector Node Selector - spans 5 cols */}
          <div className="lg:col-span-5 space-y-6 relative pl-8 border-l border-white/5 py-4">
            
            {/* Glowing Vertical Connector Line indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-cyan-700" />

            {TIMELINE_EVENTS.map((item, index) => {
              const isActive = activeEvent?.year === item.year;
              
              let borderStyle = "border-white/10 hover:border-cyan-500/40";
              let dotColor = "bg-white/20 border-white/10";
              
              if (isActive) {
                borderStyle = "border-cyan-400 bg-slate-950/70 shadow-[0_0_15px_rgba(6,182,212,0.15)]";
                dotColor = "bg-cyan-500 border-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]";
              } else if (item.status === "classified") {
                dotColor = "bg-cyan-950/50 border-cyan-400/30";
              }

              return (
                <div
                  id={`milestone-${item.year}`}
                  key={item.year}
                  onClick={() => handleMilestoneClick(item)}
                  onMouseEnter={() => cyberSynth.playHover()}
                  className={`cursor-pointer bg-black/40 backdrop-blur-md p-5 rounded-sm border transition-all duration-300 relative group ${borderStyle}`}
                >
                  
                  {/* Absolute positioning of connecting dot */}
                  <div className={`absolute -left-[41px] top-6 w-5 h-5 rounded-full border-4 flex items-center justify-center transition-all ${dotColor}`}>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <span className="font-sans font-bold text-cyan-400 text-xl tracking-wider group-hover:text-cyan-300">
                      {item.year}
                    </span>
                    {renderStatusTag(item.status)}
                  </div>

                  <h3 className="font-sans font-bold text-xs tracking-wider text-white uppercase truncate">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[11px] text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Holographic Display Display Screen - spans 7 cols */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-[#07090e] border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.03)] rounded-sm p-8 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
              
              {/* Overlay elements */}
              <div className="absolute top-2 left-2 font-mono text-[8px] text-cyan-400 tracking-widest uppercase select-none">
                CHRONICLE_LEDGER_DISPLAY
              </div>
              <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

              {activeEvent ? (
                <>
                  <div>
                    {/* Header bar metadata */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/5 pb-4 mb-6">
                      <div>
                        <span className="font-sans font-extrabold text-2xl text-white tracking-tight">
                          {activeEvent.year} CHRONICLE
                        </span>
                        <p className="font-mono text-[9px] text-cyan-400 font-bold uppercase mt-1">
                          LEDGER INDEX: {activeEvent.telemetry}
                        </p>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        {renderStatusTag(activeEvent.status)}
                      </div>
                    </div>

                    {/* Immersive interactive decryption block or locked view */}
                    {activeEvent.status === "classified" ? (
                      <div className="space-y-4">
                        <div className="bg-red-950/10 border border-red-500/20 p-6 rounded-sm text-center my-4 animate-pulse">
                          <EyeOff className="w-10 h-10 text-red-400/80 mx-auto mb-3" />
                          <h4 className="font-sans font-bold text-sm text-white tracking-wider uppercase">
                            CLASSIFIED RESTRICTED NETWORK NODE
                          </h4>
                          <p className="font-mono text-[10px] text-zinc-400 mt-2 max-w-sm mx-auto uppercase">
                            Direct biomechanical uplink required to decrypt historical archive log. Please pass credential updates inside the NEURAL CORE.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6 font-mono text-left text-xs text-zinc-300">
                        <div className="bg-black/60 p-4 rounded-sm border border-white/5 relative">
                          <span className="absolute bottom-1 right-2 font-mono text-[8.5px] text-zinc-600">DECRYPT:_STABLE</span>
                          <p className="leading-relaxed text-sm text-zinc-200 font-sans">
                            {activeEvent.description}
                          </p>
                        </div>

                        {/* Secondary status specs representation */}
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div className="border border-white/5 p-3 rounded-sm bg-black/20">
                            <span className="text-[9px] text-zinc-500 block">COHERENCE RATIO</span>
                            <span className="text-xs text-cyan-400 font-bold tracking-wider uppercase">100.0% SECURED</span>
                          </div>
                          <div className="border border-white/5 p-3 rounded-sm bg-black/20">
                            <span className="text-[9px] text-zinc-500 block">RESOLVER LINKAGE</span>
                            <span className="text-xs text-teal-400 font-bold tracking-wider uppercase font-sans">DIRECT SYNC ACTIVE</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Operational telemetry ticker footer */}
                  <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                    <div className="flex items-center space-x-1.5">
                      <div className={`w-2 h-2 rounded-full ${activeEvent.status === "classified" ? "bg-red-500" : "bg-teal-400"} animate-pulse`} />
                      <span className="uppercase font-sans">Sequence Node: 0{TIMELINE_EVENTS.indexOf(activeEvent) + 1}</span>
                    </div>
                    <span className="uppercase tracking-wider">CHRONO_BUFFER_LOADED</span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <History className="w-12 h-12 text-cyan-500/20 mb-4 animate-pulse" />
                  <p className="text-xs font-bold tracking-widest text-[#06b6d4] uppercase">
                    CHRONICLE DISPLAY IDLE
                  </p>
                  <p className="font-mono text-[10px] text-zinc-500 max-w-[200px] mt-1 leading-relaxed">
                    Select any chronological portal milestone to decrypt historical database records.
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
