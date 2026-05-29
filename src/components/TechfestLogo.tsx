import { FC, SVGProps } from "react";

export const TechfestLogo: FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 150 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="50%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
        </linearGradient>
        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Styled TF Logo Mark */}
      <g filter="url(#neon-glow)">
        <path
          d="M34.5 19H96.5C100.5 19 103.5 21.5 102.5 25.5L101.5 29.5C101 32 98.5 33.5 95 33.5H62.5L59 47.5H84.5C88 47.5 90.5 49.5 90 53L89 57C88 60.5 85.5 62 82 62H55.5L50.5 81C49.5 84.5 47 86.5 43 86.5H30.5C26 86.5 23.5 83.5 25 78.5L25.5 76C27 70.5 31.5 67 36 67H42.5L46.5 51H32C28.5 51 26 49.2 26.5 45.3L27.5 41.5C28 38 30.5 36.5 34 36.5H50L54 21.2C54.2 20 53.2 19 52 19H34.5C31 19 28.5 17 29.2 14C29.8 11 31.5 9 35 9H101C104.5 9 105.8 11.2 105 14C104.2 16.8 102 19 98.5 19H34.5C33.2 19 32.2 20 32.5 21.2L34.5 19Z"
          fill="url(#cyber-grad)"
          className="animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        
        {/* Subtle geometric line offsets for high-tech look */}
        <path
          d="M106 14H114M91 53H102M103.5 25.5H111"
          stroke="#00f0ff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>
    </svg>
  );
};
