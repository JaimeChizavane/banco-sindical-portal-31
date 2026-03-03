import { useState, useEffect } from 'react';

const provinces = [
  {
    name: 'Niassa',
    members: 120,
    cx: 285, cy: 75,
    path: 'M230,20 L260,15 L290,10 L320,15 L340,25 L350,45 L345,70 L335,95 L320,110 L300,115 L280,120 L260,115 L245,105 L235,90 L225,70 L220,50 L225,35 Z',
  },
  {
    name: 'Cabo Delgado',
    members: 95,
    cx: 355, cy: 45,
    path: 'M340,25 L360,15 L380,10 L400,15 L410,30 L405,50 L395,70 L380,80 L360,85 L345,70 L350,45 Z',
  },
  {
    name: 'Nampula',
    members: 420,
    cx: 345, cy: 140,
    path: 'M280,120 L300,115 L320,110 L335,95 L345,70 L360,85 L380,80 L390,100 L395,120 L390,145 L375,165 L355,175 L330,170 L310,165 L290,155 L275,145 L270,130 Z',
  },
  {
    name: 'Zambézia',
    members: 310,
    cx: 305, cy: 200,
    path: 'M250,175 L270,165 L275,145 L290,155 L310,165 L330,170 L355,175 L350,195 L340,215 L320,225 L300,230 L280,225 L260,215 L245,200 L240,185 Z',
  },
  {
    name: 'Tete',
    members: 180,
    cx: 215, cy: 145,
    path: 'M160,100 L180,90 L200,85 L220,80 L225,35 L230,20 L220,50 L225,70 L235,90 L245,105 L260,115 L270,130 L275,145 L270,165 L250,175 L240,185 L225,175 L210,165 L195,155 L180,145 L170,130 L160,115 Z',
  },
  {
    name: 'Manica',
    members: 150,
    cx: 215, cy: 250,
    path: 'M180,215 L195,205 L210,200 L225,200 L240,200 L245,200 L260,215 L265,235 L260,255 L250,270 L235,280 L220,275 L205,265 L190,250 L180,235 Z',
  },
  {
    name: 'Sofala',
    members: 280,
    cx: 275, cy: 270,
    path: 'M245,200 L260,215 L280,225 L300,230 L320,225 L325,245 L320,265 L310,285 L295,295 L275,300 L260,295 L250,280 L250,270 L260,255 L265,235 L260,215 Z',
  },
  {
    name: 'Inhambane',
    members: 200,
    cx: 285, cy: 370,
    path: 'M255,340 L270,330 L285,335 L300,345 L310,360 L315,380 L305,395 L290,405 L275,400 L260,390 L250,375 L248,355 Z',
  },
  {
    name: 'Gaza',
    members: 245,
    cx: 255, cy: 330,
    path: 'M220,290 L235,285 L250,280 L260,295 L275,300 L280,315 L270,330 L255,340 L248,355 L240,340 L230,320 L220,310 L215,300 Z',
  },
  {
    name: 'Maputo Província',
    members: 450,
    cx: 255, cy: 415,
    path: 'M230,395 L248,390 L260,390 L275,400 L280,415 L275,430 L260,440 L245,435 L232,425 L225,410 Z',
  },
  {
    name: 'Maputo Cidade',
    members: 800,
    cx: 268, cy: 452,
    path: 'M255,445 L265,442 L275,445 L278,455 L272,462 L260,460 L253,455 Z',
  },
];

const SNEBIcon = ({ x, y, size, isHovered, delay }: { x: number; y: number; size: number; isHovered: boolean; delay: number }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  const r = size / 2;
  return (
    <g className="sneb-icon" style={{ 
      transform: `translate(${x}px, ${y}px)`,
      animation: `snebPulse 3s ease-in-out ${delay}ms infinite`,
    }}>
      {/* Glow effect */}
      <circle
        cx={0} cy={0} r={isHovered ? r * 2.5 : r * 1.8}
        fill="url(#snebGlow)"
        opacity={isHovered ? 0.6 : 0.3}
        className="transition-all duration-500"
      />
      {/* Outer ring */}
      <circle
        cx={0} cy={0} r={r + 2}
        fill="none"
        stroke="#d4a017"
        strokeWidth={isHovered ? 2 : 1.2}
        opacity={isHovered ? 1 : 0.7}
        className="transition-all duration-300"
      />
      {/* Inner circle bg */}
      <circle
        cx={0} cy={0} r={r}
        fill="#1a365d"
        stroke="#d4a017"
        strokeWidth={0.8}
      />
      {/* SNEB text */}
      <text
        x={0} y={1}
        fontSize={size * 0.45}
        fill="#d4a017"
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight="bold"
        style={{ fontFamily: 'serif' }}
      >
        S
      </text>
    </g>
  );
};

const MozambiqueMap = () => {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <style>{`
        @keyframes snebPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes provinceAppear {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes dashDraw {
          to { stroke-dashoffset: 0; }
        }
        .province-path {
          animation: provinceAppear 0.6s ease-out both;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .province-path:hover {
          filter: brightness(1.3);
        }
        .tooltip-box {
          animation: provinceAppear 0.2s ease-out;
        }
      `}</style>

      <svg
        viewBox="0 0 450 490"
        className="w-full h-auto drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for ocean */}
          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 50%, 92%)" />
            <stop offset="100%" stopColor="hsl(210, 60%, 85%)" />
          </linearGradient>
          {/* Province gradient */}
          <linearGradient id="provinceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(145, 60%, 38%)" />
            <stop offset="100%" stopColor="hsl(145, 55%, 28%)" />
          </linearGradient>
          <linearGradient id="provinceHoverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(145, 65%, 45%)" />
            <stop offset="100%" stopColor="hsl(145, 60%, 35%)" />
          </linearGradient>
          {/* SNEB icon glow */}
          <radialGradient id="snebGlow">
            <stop offset="0%" stopColor="#d4a017" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d4a017" stopOpacity="0" />
          </radialGradient>
          {/* Shadow filter */}
          <filter id="provinceShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.2" />
          </filter>
          <filter id="hoverShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="3" dy="4" stdDeviation="5" floodColor="#d4a017" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width="450" height="490" fill="url(#oceanGradient)" rx="12" />
        
        {/* Coast line effect */}
        <path
          d="M395,70 L390,100 L395,120 L390,145 L375,165 L355,175 L350,195 L340,215 L325,245 L320,265 L310,285 L295,295 L280,315 L285,335 L300,345 L310,360 L315,380 L305,395 L290,405 L280,415 L275,430 L260,440 L265,442 L275,445 L278,455 L272,462 L260,460 L253,455"
          fill="none"
          stroke="hsl(210, 40%, 75%)"
          strokeWidth="1"
          strokeDasharray="4,3"
          opacity="0.5"
        />

        {/* Province paths */}
        {provinces.map((p, i) => {
          const isHovered = hoveredProvince === p.name;
          return (
            <g key={p.name}>
              <path
                d={p.path}
                fill={isHovered ? 'url(#provinceHoverGradient)' : 'url(#provinceGradient)'}
                stroke={isHovered ? '#d4a017' : 'hsl(0, 0%, 100%)'}
                strokeWidth={isHovered ? 2.5 : 1.2}
                className="province-path"
                style={{ animationDelay: `${i * 80}ms` }}
                filter={isHovered ? 'url(#hoverShadow)' : 'url(#provinceShadow)'}
                onMouseEnter={() => setHoveredProvince(p.name)}
                onMouseLeave={() => setHoveredProvince(null)}
              />
            </g>
          );
        })}

        {/* SNEB Icons on each province */}
        {provinces.map((p, i) => {
          const isHovered = hoveredProvince === p.name;
          const iconSize = p.name === 'Maputo Cidade' ? 8 : 11;
          return (
            <g
              key={`icon-${p.name}`}
              onMouseEnter={() => setHoveredProvince(p.name)}
              onMouseLeave={() => setHoveredProvince(null)}
              className="cursor-pointer"
            >
              <SNEBIcon
                x={p.cx}
                y={p.cy}
                size={iconSize}
                isHovered={isHovered}
                delay={i * 120 + 500}
              />
            </g>
          );
        })}

        {/* Province labels and tooltips */}
        {provinces.map((p) => {
          const isHovered = hoveredProvince === p.name;
          const labelX = p.cx + (p.name === 'Maputo Cidade' ? 20 : 16);
          const labelY = p.cy + 3;

          return (
            <g
              key={`label-${p.name}`}
              onMouseEnter={() => setHoveredProvince(p.name)}
              onMouseLeave={() => setHoveredProvince(null)}
              className="cursor-pointer"
            >
              {/* Province name */}
              <text
                x={labelX}
                y={labelY}
                fontSize={p.name === 'Maputo Cidade' ? "8" : "9.5"}
                fill={isHovered ? '#d4a017' : 'hsl(222, 47%, 20%)'}
                fontWeight={isHovered ? 'bold' : '600'}
                className="transition-all duration-200 select-none"
                style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}
              >
                {p.name}
              </text>

              {/* Tooltip on hover */}
              {isHovered && (
                <g className="tooltip-box">
                  <rect
                    x={p.cx - 70}
                    y={p.cy - 52}
                    width={140}
                    height={38}
                    rx={8}
                    fill="hsl(222, 47%, 11%)"
                    opacity={0.95}
                    stroke="#d4a017"
                    strokeWidth="1"
                  />
                  {/* Triangle pointer */}
                  <polygon
                    points={`${p.cx - 6},${p.cy - 14} ${p.cx + 6},${p.cy - 14} ${p.cx},${p.cy - 6}`}
                    fill="hsl(222, 47%, 11%)"
                  />
                  <text
                    x={p.cx}
                    y={p.cy - 38}
                    fontSize="10"
                    fill="#d4a017"
                    textAnchor="middle"
                    fontWeight="bold"
                    className="select-none"
                  >
                    {p.name}
                  </text>
                  <text
                    x={p.cx}
                    y={p.cy - 23}
                    fontSize="12"
                    fill="white"
                    textAnchor="middle"
                    fontWeight="bold"
                    className="select-none"
                  >
                    {p.members} membros
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Map title */}
        <text
          x="225"
          y="482"
          fontSize="10"
          fill="hsl(222, 47%, 30%)"
          textAnchor="middle"
          fontWeight="500"
          opacity="0.6"
        >
          MOÇAMBIQUE — Presença SNEB por Província
        </text>
      </svg>
    </div>
  );
};

export default MozambiqueMap;
