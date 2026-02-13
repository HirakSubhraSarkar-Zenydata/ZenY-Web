
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <div className={`flex items-center gap-4 select-none ${className}`}>
      {/* Enhanced Visibility Origami Icon */}
      <div className="w-11 h-11 shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm filter contrast-125">
          {/* Main Wing Layer - Vibrant Indigo */}
          <path d="M12 35L42 35L30 62L12 35Z" fill="#7C69FF" stroke="#7C69FF" strokeWidth="1" />
          {/* Central Body Core - Deep Royal Blue */}
          <path d="M42 35L72 68L42 92L42 35Z" fill="#2E1CFF" stroke="#2E1CFF" strokeWidth="1" />
          {/* Support Tail - Light Lavender */}
          <path d="M30 62L42 92L30 84L30 62Z" fill="#7C69FF" opacity="0.8" />
          {/* Neck & Head - Primary Brand Blue */}
          <path d="M72 35L80 48L72 68L72 35Z" fill="#2E1CFF" />
          {/* Beak Highlight */}
          <path d="M80 48L90 42L80 54L80 48Z" fill="#1A1199" />
          {/* Internal Geometric Detail */}
          <path d="M56 50L72 35L72 68L56 50Z" fill="#B2A9FF" />
        </svg>
      </div>

      <div className="flex flex-col justify-center">
        <span className={`logo-font text-xl font-black tracking-tight leading-none ${light ? 'text-white' : 'text-slate-900'}`}>
          ZENYDATA
        </span>
        <span className={`text-[9px] font-extrabold uppercase tracking-[0.45em] mt-1.5 ${light ? 'text-blue-300' : 'text-slate-500'}`}>
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );
};

export default Logo;
