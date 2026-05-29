import { useState, useEffect, FormEvent } from "react";
import { 
  Sparkles, ShieldCheck, Cpu, RefreshCw, 
  Award, QrCode, Download, CheckCircle2, AlertCircle
} from "lucide-react";
import { cyberSynth } from "../utils/audio";

interface NeuralConsoleProps {
  onClose: () => void;
}

export default function NeuralConsole({ onClose }: NeuralConsoleProps) {
  const [handle, setHandle] = useState("");
  const [synced, setSynced] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);
  const [cyberFrame, setCyberFrame] = useState("AI_NEURAL_ARCHITECT");
  const [synapticUplink, setSynapticUplink] = useState("OCULAR_DATA_HUD");
  const [cryptoHash, setCryptoHash] = useState("TF-77X-901B");
  const [generatingBadge, setGeneratingBadge] = useState(false);
  const [badgeReady, setBadgeReady] = useState(false);

  // Generate dynamic crypto hashes to represent blockchain ledgers
  useEffect(() => {
    const interval = setInterval(() => {
      if (!badgeReady) {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let r = "TF-UX";
        for (let i = 0; i < 5; i++) {
          r += letters[Math.floor(Math.random() * letters.length)];
        }
        setCryptoHash(r + "-2077");
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [badgeReady]);

  const handleStartSync = (e: FormEvent) => {
    e.preventDefault();
    if (!handle.trim()) {
      cyberSynth.playWarning();
      return;
    }

    cyberSynth.playClick(1000, 0.1);
    setSynced(true);
    setSyncProgress(0);

    const interval = setInterval(() => {
      setSyncProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          cyberSynth.playUplink();
          return 100;
        }
        if (prev % 10 === 0) {
          cyberSynth.playGlitch();
        }
        return prev + 10;
      });
    }, 180);
  };

  const handleCreateBadge = () => {
    cyberSynth.playClick(1100, 0.08);
    setGeneratingBadge(true);
    
    setTimeout(() => {
      setGeneratingBadge(false);
      setBadgeReady(true);
      cyberSynth.playUplink();
    }, 2000);
  };

  const resetConsole = () => {
    cyberSynth.playClick(800, 0.05);
    setSynced(false);
    setSyncProgress(0);
    setBadgeReady(false);
    setHandle("");
  };

  const downloadBadgeConfig = () => {
    cyberSynth.playClick(1200, 0.08);
    const badgeDetails = {
      agency: "Techfest IIT Bombay 2077",
      athlete_handle: handle,
      neural_architecture: cyberFrame,
      receptor_matrix: synapticUplink,
      crypto_ledger: cryptoHash,
      authenticated_at: new Date().toISOString()
    };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(badgeDetails, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `neuro_badge_${handle.replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="section-container relative max-w-4xl mx-auto px-4 py-8 bg-[#07090e] rounded-sm border border-cyan-500/25 shadow-[0_0_30px_rgba(6,182,212,0.03)] overflow-hidden">
      
      {/* Decorative grids */}
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 p-4 border-b border-l border-white/5 font-mono text-[9px] text-cyan-400 select-none">
        UPLINK_CONSOLE_v4.77
      </div>

      <div className="relative z-10">
        
        {/* Title */}
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-cyan-400 tracking-widest font-bold px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-sm uppercase">
            BIO-MECHANICAL PORTAL
          </span>
          <h2 className="font-sans font-extrabold text-3xl text-white tracking-tight mt-4 uppercase">
            NEURAL SYNCHRONIZATION
          </h2>
          <p className="max-w-xl mx-auto font-sans text-xs text-zinc-400 mt-2">
            Establish secure encrypted connection. Generate your cyber-passport badge for Techfest 2077.
          </p>
        </div>

        {!synced ? (
          /* Step 1: Input Handle */
          <form onSubmit={handleStartSync} className="max-w-md mx-auto bg-black/60 p-6 rounded-sm border border-white/5 backdrop-blur-md">
            <div className="text-center mb-6">
              <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-3 animate-pulse" />
              <p className="text-sm text-white font-semibold uppercase tracking-wider">Link Your Biological ID</p>
              <p className="text-xs text-zinc-500 mt-1 uppercase">To construct an authenticated holographic ledger profile.</p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
                  Neuro-Handle / Code-Name
                </label>
                <input
                  type="text"
                  required
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="e.g. CYBORG_NEO_7"
                  className="w-full bg-[#0d1527] border border-cyan-500/20 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white rounded-sm px-4 py-3 font-mono text-sm tracking-wider"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
                  Select Biological Framework
                </label>
                <select
                  value={cyberFrame}
                  onChange={(e) => setCyberFrame(e.target.value)}
                  className="w-full bg-[#0d1527] border border-cyan-500/20 focus:border-cyan-400 focus:outline-none text-white rounded-sm px-3 py-3 font-mono text-xs tracking-wide"
                >
                  <option value="AI_NEURAL_ARCHITECT">AI Neural Architect (Neural Processing)</option>
                  <option value="SWARM_COGNITIVE_NODE">Swarm Cognitive Node (Tactical Ingress)</option>
                  <option value="HEAVY_MECH_CONTROLLER">Heavy Mech Pilot (Chassis Link)</option>
                  <option value="QUANTUM_DECRYPT_AGENT">Quantum Decryption Agent (Cryptology)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
                  Synaptic Booster Module
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "OCULAR_DATA_HUD", name: "Ocular HUD v9" },
                    { id: "NANITE_CORE_CELL", name: "Nanite Reparator" },
                    { id: "SYNAP_BUFFER_12G", name: "Buffer Boost 12G" },
                    { id: "PLASMA_DECOY_NODE", name: "Holograph Decoy" },
                  ].map((boost) => (
                    <button
                      key={boost.id}
                      type="button"
                      onClick={() => {
                        cyberSynth.playClick(600, 0.04);
                        setSynapticUplink(boost.id);
                      }}
                      className={`p-2.5 rounded-sm border text-left font-mono text-[10px] tracking-wide transition-all ${
                        synapticUplink === boost.id 
                          ? "bg-cyan-500/10 border-cyan-400 text-white" 
                          : "bg-black/40 border-white/5 text-zinc-500 hover:border-cyan-500/40"
                      }`}
                    >
                      {boost.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full font-sans font-extrabold text-xs tracking-wider py-3.5 rounded-sm bg-cyan-500 text-black hover:bg-cyan-400 transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.15)] uppercase"
            >
              INITIALIZE SYNC PROTOCOL
            </button>
          </form>
        ) : !badgeReady ? (
          /* Step 2: System Diagnostic Progress */
          <div className="max-w-md mx-auto bg-black/60 p-8 rounded-sm border border-cyan-500/20 backdrop-blur-md text-center">
            <RefreshCw className="w-12 h-12 text-cyan-400 mx-auto mb-4 animate-spin" />
            <h3 className="font-sans font-bold text-lg text-white mb-2 uppercase">SYNAPSE BOOT PROTOCOL</h3>
            <p className="font-mono text-xs text-cyan-400 mb-6">Ledger Verification Hash: {cryptoHash}</p>
            
            <div className="w-full bg-slate-900 border border-white/5 rounded-full h-2 overflow-hidden mb-4">
              <div 
                className="bg-cyan-400 h-full transition-all duration-150"
                style={{ width: `${syncProgress}%` }}
              />
            </div>

            <div className="flex justify-between font-mono text-[10px] text-zinc-500">
              <span>SCANNING AXONS...</span>
              <span>{syncProgress}%</span>
            </div>

            <div className="mt-8 space-y-1 text-left font-mono text-[10px] text-zinc-400 bg-black/80 px-4 py-3 rounded-sm border border-white/5 max-h-32 overflow-y-auto">
              <p className="text-cyan-400 font-bold">&gt; ACCESS STATUS: GRANTED</p>
              <p>&gt; MAPPING NEURAL TOPOLOGY...</p>
              {syncProgress >= 30 && <p>&gt; MEMORY BUFFER SYNCHRONIZED</p>}
              {syncProgress >= 60 && <p className="text-teal-400">&gt; INTEGRITY CHECK: OPTIMAL</p>}
              {syncProgress >= 80 && <p>&gt; GENERATING SIGNATURE BLOCK</p>}
              {syncProgress >= 100 && <p className="text-teal-400 font-bold">&gt; PORT CONNECTED SUCCESSFULLY.</p>}
            </div>

            {syncProgress === 100 && (
              <button
                onClick={handleCreateBadge}
                className="mt-6 w-full font-sans font-extrabold text-xs tracking-wider py-3 rounded-sm bg-cyan-500 text-black hover:bg-cyan-400 transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.15)] uppercase"
              >
                {generatingBadge ? "PREPARING HOLOGRAPH..." : "COMPILE IMMERSIVE DISK PASS"}
              </button>
            )}
          </div>
        ) : (
          /* Step 3: Immersive Passport Badge Generated */
          <div className="max-w-lg mx-auto">
            <div className="bg-[#07090e] p-8 rounded-sm border border-cyan-500/20 relative shadow-[0_0_40px_rgba(6,182,212,0.04)] overflow-hidden">
              <p className="absolute top-2 left-2 text-[8px] font-mono text-cyan-400 tracking-widest uppercase">
                AUTHENTICATED PASS // TF-IIT-BOMBAY-2077
              </p>

              {/* Holographic Watermark Circle */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-cyan-500/5 animate-pulse flex items-center justify-center">
                <div className="w-60 h-60 rounded-full border border-teal-500/5 animate-spin" style={{ animationDuration: "12s" }} />
              </div>

              {/* Passport Interior Grid layout */}
              <div className="relative z-10">
                {/* Header Badge */}
                <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-6">
                  <div>
                    <h4 className="font-sans font-extrabold text-xl text-white tracking-tight uppercase">
                      TECHFEST 2077
                    </h4>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-teal-400 font-bold">
                      OFFICIAL IMMERSIVE VISITOR PASS
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[8px] text-zinc-500 uppercase block">SYSTEM ID</span>
                    <span className="font-mono text-xs text-cyan-400 font-bold">{cryptoHash}</span>
                  </div>
                </div>

                {/* Main ID Details Split Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Digital Photo ID slot */}
                  <div className="col-span-1 flex flex-col items-center">
                    <div className="relative w-32 h-32 rounded-sm border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] bg-slate-950/90 overflow-hidden flex items-center justify-center group mb-2">
                      {/* Avatar design */}
                      <svg className="w-20 h-20 text-cyan-400 opacity-85" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      {/* Scanning neon line effects */}
                      <div className="absolute left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)] animate-bounce" />
                    </div>
                    <span className="font-mono text-[9px] text-teal-400 font-bold bg-teal-500/10 border border-teal-500/30 px-2 py-0.5 rounded-sm uppercase">
                      CHIP SYNCHRONIZED
                    </span>
                  </div>

                  {/* Profile texts */}
                  <div className="col-span-2 space-y-4 font-mono text-left">
                    <div>
                      <span className="text-[9px] text-zinc-500 uppercase block">NEURO HANDLE</span>
                      <span className="text-base text-white font-extrabold tracking-tight">{handle}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[9px] text-zinc-500 uppercase block">FRAMEWORK</span>
                        <span className="text-xs text-cyan-400 font-semibold">{cyberFrame.replace(/_/g, ' ')}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-zinc-500 uppercase block">RECEPTOR MATRIX</span>
                        <span className="text-xs text-teal-400 font-semibold">{synapticUplink}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] text-zinc-500 uppercase block">COGNITIVE STATUS</span>
                      <div className="flex items-center space-x-1 mt-1 text-teal-400">
                        <CheckCircle2 className="w-4 h-4 text-teal-400" />
                        <span className="text-xs font-bold uppercase tracking-wider">LEVEL 5 ACCESS GRANTED</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Barcode and print commands */}
                <div className="border-t border-white/5 pt-4 flex flex-col md:flex-row justify-between items-center bg-black/40 px-4 py-3 rounded-sm border border-white/5">
                  <div className="flex items-center space-x-3 mb-3 md:mb-0">
                    <QrCode className="w-10 h-10 text-white" />
                    <div className="font-mono">
                      <p className="text-[9px] text-zinc-500 uppercase tracking-tight">BLOCK_STATUS</p>
                      <p className="text-[10px] text-teal-400 font-bold tracking-widest uppercase">MUTABLE LEDGER SIGNED</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] font-mono text-zinc-500">HOST COMPLEX</p>
                    <p className="text-[10px] font-sans text-zinc-300 font-bold uppercase">IIT Bombay Complex</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Passport Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={downloadBadgeConfig}
                className="flex-1 flex items-center justify-center space-x-2 font-sans font-bold text-xs tracking-wider py-3.5 rounded-sm border border-cyan-500/30 text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 cursor-pointer transition-all active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>SAVE COGNITIVE DATA</span>
              </button>
              
              <button
                onClick={resetConsole}
                className="flex-1 font-sans font-bold text-xs tracking-wider py-3.5 rounded-sm border border-white/5 text-zinc-400 bg-transparent hover:text-white hover:border-white/20 cursor-pointer transition-all active:scale-[0.98]"
              >
                DISCONNECT PORT
              </button>
            </div>
          </div>
        )}

        {/* Console Close Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              cyberSynth.playClick(500, 0.05);
              onClose();
            }}
            className="font-mono text-xs uppercase tracking-widest text-[#06b6d4] hover:text-white hover:underline transition-all cursor-pointer"
          >
            &lt; CLOSE TERMINAL CONSOLE &gt;
          </button>
        </div>

      </div>
    </div>
  );
}
