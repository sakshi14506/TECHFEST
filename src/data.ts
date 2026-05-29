import { TechCard, TimelineMilestone, StatItem, ExperienceItem } from "./types";

export const TECH_CARDS: TechCard[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    tagline: "Autonomous Super-Intelligence",
    description: "Operate neural swarm-minds, self-evolving code architectures, and decentralized cognitive engines that bypass conventional processing limitations.",
    specs: ["Cognitive Synaptic Nets", "99.999% Neural Synthesis Rate", "Decentralized Decision Swarms"],
    iconName: "Brain",
    glowColor: "cyan",
    dataTelemetry: "AI_SWARM_UPLINK_SECURE_NODE_908"
  },
  {
    id: "robotics",
    title: "Quantum Robotics",
    tagline: "Self-Assembling Nanites",
    description: "Interact with programmable matter, bio-mimetic combat chassis, and automated search-and-assembly swarms capable of sub-atomic structural repair.",
    specs: ["Superposition Micro-actuators", "Molecular Nanite Fluid Dynamics", "Adaptable Poly-carbon Shells"],
    iconName: "Cpu",
    glowColor: "pink",
    dataTelemetry: "NANO_MECH_ACTUATOR_V12_ONLINE"
  },
  {
    id: "space_tech",
    title: "Space Technology",
    tagline: "Hyperwarp Propulsion & Exo-Mining",
    description: "Harness atmospheric synthesizer arrays, gravitational anchor drives, and fleet mining automated ships directed at harvesting materials from asteroids.",
    specs: ["Gravitational Wave Deflection Engines", "Martian Cryo-Habitation Shelds", "Sling-thrust Acceleration Vectors"],
    iconName: "Orbit",
    glowColor: "blue",
    dataTelemetry: "ORBITAL_PROPULSION_SYNC_T77"
  },
  {
    id: "cyber_sec",
    title: "Cyber Security",
    tagline: "Sentinel Aegis Blockades",
    description: "Implement post-quantum sentient firewall algorithms that hunt intruder traces across neural networks and incinerate unauthorized datastream links.",
    specs: ["Quantum Cryptographic Crypts", "Threat-Response Sentinel Swarms", "Neural-link Biometric Shielding"],
    iconName: "ShieldAlert",
    glowColor: "purple",
    dataTelemetry: "SENTINEL_AEGIS_ACTIVE_BLOCK_COUNT:0"
  },
  {
    id: "quantum",
    title: "Quantum Computing",
    tagline: "Infinite Parallel Resolvers",
    description: "Leverage absolute-zero cryo-processor states that operate calculation lines across overlapping dimensions to solve complex terraforming problems.",
    specs: ["Sub-K Cryostatic Coherence Cells", "Multi-Dimensional Superpositions", "Instantaneous Crypt-Decryption Arrays"],
    iconName: "Zap",
    glowColor: "cyan",
    dataTelemetry: "QUBIT_STATE_99_89_STABLE_CORRECT"
  },
  {
    id: "human_aug",
    title: "Human Augmentation",
    tagline: "Transcending Bio-Limitations",
    description: "Install non-biological synaptic boosting chips, high-speed bio-photonic optical enhancements, and high-tensile graphene muscle strands.",
    specs: ["Optic HUD High-Contrast Upgrades", "Synaptic Buffer Boosters (12Ghz)", "Carbon-Graphene Muscle Fibers"],
    iconName: "UserCheck",
    glowColor: "pink",
    dataTelemetry: "NEURO_AUGMENT_RECEPTOR_LOAD:0.35"
  }
];

export const TIMELINE_EVENTS: TimelineMilestone[] = [
  {
    year: "2026",
    title: "AI Revolution",
    description: "Super-agentic intelligence engines surpass expectations, fully processing live data streams and deploying decentralized cognitive networks.",
    status: "active",
    telemetry: "REVOLUTION_STABLE_UPLINK"
  },
  {
    year: "2035",
    title: "Human-AI Collaboration",
    description: "Seamless neural bridging links physical brain-stems directly to cloud nodes, creating superpositions of memory transmission and intuitive synergy.",
    status: "classified",
    telemetry: "BIOLOGICAL_BRIDGE_EST"
  },
  {
    year: "2050",
    title: "Smart Civilizations",
    description: "Planetary infrastructure, clean energy grids, and resource routing systems become fully autonomous, guided by massive multi-agent clusters.",
    status: "future",
    telemetry: "WORLD_GRID_INTEGRATED_99"
  },
  {
    year: "2077",
    title: "Cyborg Era",
    description: "The line between organic synapses and carbon-silicon processors vanishes completely, unlocking continuous evolutionary intelligence.",
    status: "future",
    telemetry: "CYBORG_STASIS_TARGET_ACTIVE"
  }
];

export const STATS: StatItem[] = [
  {
    id: "participants",
    label: "Active Cyber-Athletes",
    value: 175000,
    suffix: "+",
    telemetry: "NEURAL_UPLINKS_TOTAL"
  },
  {
    id: "workshops",
    label: "Hyper-Tech Workshops",
    value: 75,
    suffix: "+",
    telemetry: "SKILL_CORE_UPLINKS"
  },
  {
    id: "competitions",
    label: "AI & Mecha Divisions",
    value: 45,
    suffix: "+",
    telemetry: "SENTIENT_ARENA_UNITS"
  },
  {
    id: "reach",
    label: "Global Net Intercepts",
    value: 2500000,
    suffix: "+",
    telemetry: "BROADCAST_RECEIVERS_L77"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "future_me",
    title: "Future Me Dome",
    type: "AI Life Vector Predictions",
    sector: "Intelligent Cognition",
    description: "Step inside a 360-degree biometric dome. An advanced AI analyzing engine reads your cognitive profile to render a personalized, high-fidelity projection of your life, milestones, and career pathways in the year 2056.",
    highlights: ["Biometric Axon Scan", "Dynamic Life Scenario Rendering", "2056 Career Ledger Export"],
    interactiveStatus: "ONLINE / STABLE",
    systemLoad: "48.2 TF",
    gridColor: "cyber-cyan"
  },
  {
    id: "parallel_universe",
    title: "Parallel Universe",
    type: "Immersive Future Sandbox",
    sector: "Virtual Chronos",
    description: "Experience an immersive, physical-virtual alternate zone where visitors can physically step in to explore a futuristic version of India in the year 2100, managed entirely by hyper-dense neural frameworks.",
    highlights: ["Holographic Cityscapes", "India 2100 Climatic Mockup", "Quantum Relational Physics"],
    interactiveStatus: "UPLINK STABLE",
    systemLoad: "75.4 TF",
    gridColor: "cyber-blue"
  },
  {
    id: "ai_clone",
    title: "AI Clone Arena",
    type: "Polymorphic Agent Duel",
    sector: "Competitive AI",
    description: "Upload your personal code profile and interact with a live, self-improving AI replica. Compete in complex logic debates, structural coding challenges, and tactical simulation combat against your digital clone.",
    highlights: ["Instant Semantic Duplication", "Cognitive Strategy Duels", "Evolving Neural Clone Profiles"],
    interactiveStatus: "WARNING - ACTIVE HAZARD",
    systemLoad: "92.1 TF",
    gridColor: "cyber-pink"
  },
  {
    id: "global_portal",
    title: "Global Time Portal",
    type: "Decentralized Tele-Presence",
    sector: "Quantum Comms",
    description: "Instantly cross boundaries. High-definition spatial audio and visual holographic portals link Techfest attendees with students, researchers, and tech innovators across global continents in real-time.",
    highlights: ["Spatial Holographic Transit", "Intelligent Real-Time Translation", "Zero-Latency Sub-Space Stream"],
    interactiveStatus: "LIVE ACTIVE CONNECT",
    systemLoad: "31.8 TF",
    gridColor: "cyber-cyan"
  },
  {
    id: "mars_colony",
    title: "Mars Colony Simulation",
    type: "Exo-Habitation Mechanics",
    sector: "Aerospace Systems",
    description: "Test survival strategies as a Martian pioneer. Live in a pressurized dome module and control robotic soil miners, atmospheric filters, and deep-space communication transmitters to save the colony from extreme solar storms.",
    highlights: ["Life-Support Telemetry HUD", "Remote Mineral Extraction", "Solar Storm Radiation Shields"],
    interactiveStatus: "INTERACTIVE LIVE DEPLOYMENT",
    systemLoad: "58.6 TF",
    gridColor: "cyber-purple"
  },
  {
    id: "project_immortal",
    title: "Project IMMORTAL",
    type: "Digital Legacy Construct",
    sector: "Synthesized Memory",
    description: "Record your logical mind map into an encrypted ledger. Project IMMORTAL generates an eternal neural avatar of your decisions, thoughts, and philosophy, enabling future generations to consult and converse with you.",
    highlights: ["Synaptic Weight Harvesting", "Infinite Self-Sustained Avatars", "Post-Physical Consult Gateways"],
    interactiveStatus: "SECURE LEDGER ACTIVE",
    systemLoad: "84.9 TF",
    gridColor: "cyber-blue"
  }
];
