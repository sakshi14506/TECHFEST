import { useState, useEffect } from "react";
import { Users, BookOpen, Award, Network, Activity } from "lucide-react";
import { STATS } from "../data";
import { cyberSynth } from "../utils/audio";

export default function StatsSection() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    participants: 0,
    workshops: 0,
    competitions: 0,
    reach: 0,
  });

  useEffect(() => {
    // Smooth counting up animation
    const duration = 2000; // ms
    const steps = 40;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      setCounts({
        participants: Math.floor((STATS[0].value / steps) * currentStep),
        workshops: Math.floor((STATS[1].value / steps) * currentStep),
        competitions: Math.floor((STATS[2].value / steps) * currentStep),
        reach: Math.floor((STATS[3].value / steps) * currentStep),
      });

      // Subtle feedback clicks
      if (currentStep % 5 === 0) {
        cyberSynth.playClick(1100, 0.02);
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        // Ensure final precise values
        setCounts({
          participants: STATS[0].value,
          workshops: STATS[1].value,
          competitions: STATS[2].value,
          reach: STATS[3].value,
        });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const getMetricIcon = (id: string) => {
    switch (id) {
      case "participants":
        return <Users className="w-6 h-6 text-cyan-400" />;
      case "workshops":
        return <BookOpen className="w-6 h-6 text-cyan-400" />;
      case "competitions":
        return <Award className="w-6 h-6 text-cyan-400" />;
      case "reach":
        return <Network className="w-6 h-6 text-cyan-400" />;
      default:
        return <Activity className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="section-container relative">
      
      {/* Background grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Statistics title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-widest font-bold px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-sm uppercase">
            STATISTICS HUD
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-4 uppercase">
            GLOBAL REACH & METRICS
          </h2>
          <div className="h-[2px] w-16 bg-cyan-500 mx-auto mt-4" />
        </div>

        {/* Dynamic Grid of stat panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const glowStyles = "hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] text-cyan-400";

            return (
              <div
                id={`stat-box-${stat.id}`}
                key={stat.id}
                onMouseEnter={() => cyberSynth.playHover()}
                className={`bg-zinc-950 p-6 rounded-sm border border-white/5 transition-all duration-300 flex flex-col justify-between group ${glowStyles}`}
              >
                
                {/* Header detail with status circle */}
                <div className="flex justify-between items-center mb-4">
                  <div className="p-2.5 bg-black/40 rounded border border-white/5 text-white">
                    {getMetricIcon(stat.id)}
                  </div>
                  <div className="flex items-center space-x-1 font-mono text-[8px] text-zinc-500 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                    <span>SYNCHRONIZED</span>
                  </div>
                </div>

                {/* Counter Metric */}
                <div>
                  <div className="flex items-baseline space-x-1 mb-1">
                    <span className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight font-extrabold">
                      {formatNumber(counts[stat.id] || 0)}
                    </span>
                    <span className="font-mono text-xl font-bold">
                      {stat.suffix}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-xs tracking-wider text-zinc-400 group-hover:text-white transition-colors uppercase">
                    {stat.label}
                  </h3>
                </div>

                {/* Sub telemetry signature */}
                <div className="mt-6 pt-3 border-t border-white/5 flex justify-between items-center font-mono text-[9px] text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  <span>METRIC NODE:</span>
                  <span>{stat.telemetry}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global connection mapping graphics footer */}
        <div className="mt-12 bg-black/40 border border-white/5 p-4 rounded-sm flex flex-col sm:flex-row justify-between items-center backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
            <p className="font-sans text-xs text-zinc-300">
              <span className="text-cyan-400 font-bold uppercase mr-1">Status Update:</span> All regional nodes and physical host relays operating at peak integration density.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
