export interface TechCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  specs: string[];
  iconName: string;
  glowColor: "cyan" | "pink" | "purple" | "blue";
  dataTelemetry: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  status: "completed" | "active" | "classified" | "future";
  telemetry: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  telemetry: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  type: string;
  sector: string;
  description: string;
  highlights: string[];
  interactiveStatus: string;
  systemLoad: string;
  gridColor: string;
}
