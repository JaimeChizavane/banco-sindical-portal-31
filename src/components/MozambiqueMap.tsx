import { useState, useEffect } from 'react';

// Province data with real capital coordinates (mapped to SVG viewBox)
const provinces = [
  {
    name: 'Niassa',
    members: 120,
    capital: 'Lichinga',
    cx: 248, cy: 95,
    path: 'M195,22 L215,18 L240,15 L265,12 L280,18 L290,30 L295,50 L290,70 L283,90 L275,105 L265,115 L250,120 L235,118 L220,112 L210,100 L200,85 L192,65 L188,45 L190,32 Z',
  },
  {
    name: 'Cabo Delgado',
    members: 95,
    capital: 'Pemba',
    cx: 345, cy: 48,
    path: 'M290,30 L310,18 L335,10 L360,8 L380,15 L390,28 L395,45 L388,60 L378,75 L365,85 L350,90 L335,88 L320,82 L308,72 L298,58 L295,50 Z',
  },
  {
    name: 'Nampula',
    members: 420,
    capital: 'Nampula',
    cx: 340, cy: 145,
    path: 'M265,115 L275,105 L283,90 L298,58 L308,72 L320,82 L335,88 L350,90 L365,85 L378,75 L392,95 L400,115 L398,140 L388,160 L372,175 L352,182 L332,180 L312,172 L295,162 L278,150 L268,135 L262,125 Z',
  },
  {
    name: 'Zambézia',
    members: 310,
    capital: 'Quelimane',
    cx: 310, cy: 215,
    path: 'M228,185 L245,178 L260,172 L268,135 L278,150 L295,162 L312,172 L332,180 L352,182 L348,200 L338,218 L322,232 L305,238 L288,235 L270,228 L255,218 L242,205 L232,195 Z',
  },
  {
    name: 'Tete',
    members: 180,
    capital: 'Tete',
    cx: 188, cy: 148,
    path: 'M108,85 L130,72 L155,62 L175,55 L190,32 L195,22 L192,65 L200,85 L210,100 L220,112 L235,118 L250,120 L262,125 L268,135 L260,172 L245,178 L228,185 L215,178 L198,168 L182,155 L168,142 L152,128 L138,115 L122,100 Z',
  },
  {
    name: 'Manica',
    members: 150,
    capital: 'Chimoio',
    cx: 210, cy: 262,
    path: 'M168,232 L185,222 L200,215 L215,212 L228,210 L232,195 L242,205 L255,218 L262,235 L258,255 L250,272 L238,285 L225,290 L212,285 L198,275 L185,262 L175,248 Z',
  },
  {
    name: 'Sofala',
    members: 280,
    capital: 'Beira',
    cx: 280, cy: 275,
    path: 'M242,205 L255,218 L270,228 L288,235 L305,238 L322,232 L328,250 L325,270 L315,290 L302,302 L285,308 L270,305 L258,298 L250,285 L250,272 L258,255 L262,235 Z',
  },
  {
    name: 'Inhambane',
    members: 200,
    capital: 'Inhambane',
    cx: 275, cy: 388,
    path: 'M248,350 L262,342 L278,345 L292,355 L302,368 L308,385 L302,400 L290,412 L275,415 L260,408 L250,395 L245,378 L245,362 Z',
  },
  {
    name: 'Gaza',
    members: 245,
    capital: 'Xai-Xai',
    cx: 248, cy: 342,
    path: 'M210,298 L225,292 L238,285 L250,285 L258,298 L270,305 L278,320 L272,335 L262,342 L248,350 L245,362 L238,348 L228,332 L218,318 L212,308 Z',
  },
  {
    name: 'Maputo Província',
    members: 450,
    capital: 'Matola',
    cx: 252, cy: 432,
    path: 'M228,418 L242,410 L255,408 L268,412 L275,425 L272,440 L260,450 L245,448 L235,438 L228,428 Z',
  },
  {
    name: 'Maputo Cidade',
    members: 800,
    capital: 'Maputo',
    cx: 262, cy: 460,
    path: 'M252,452 L260,450 L270,452 L275,460 L270,468 L258,470 L250,465 L250,458 Z',
  },
];

const SNEBLogo = ({ x, y, size, isHovered, delay }: { x: number; y: number; size: number; isHovered: boolean; delay: number }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  const s = isHovered ? size * 1.4 : size;
  const half = s / 2;

  return (
    <g style={{ transition: 'all 0.3s ease' }}>
      {/* Glow */}
      <circle cx={x} cy={y} r={s * 1.5} fill="url(#iconGlow)" opacity={isHovered ? 0.7 : 0.25} />
      {/* Gear outer ring (simplified SNEB emblem) */}
      <circle cx={x} cy={y} r={half + 2} fill="none" stroke="#d4a017" strokeWidth={isHovered ? 2 : 1} opacity={0.9}>
        {visible && (
          <animateTransform attributeName="transform" type="rotate" from={`0 ${x} ${y}`} to={`360 ${x} ${y}`} dur="20s" repeatCount="indefinite" />
        )}
      </circle>
      {/* Gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const innerR = half + 1;
        const outerR = half + 4;
        const x1 = x + innerR * Math.cos(rad);
        const y1 = y + innerR * Math.sin(rad);
        const x2 = x + outerR * Math.cos(rad);
        const y2 = y + outerR * Math.sin(rad);
        return (
          <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d4a017" strokeWidth={isHovered ? 2 : 1.2} opacity={0.8}>
            <animateTransform attributeName="transform" type="rotate" from={`0 ${x} ${y}`} to={`360 ${x} ${y}`} dur="20s" repeatCount="indefinite" />
          </line>
        );
      })}
      {/* Inner filled circle */}
      <circle cx={x} cy={y} r={half} fill="#1a365d" stroke="#d4a017" strokeWidth={0.6} />
      {/* Star */}
      <polygon
        points={starPoints(x, y - half * 0.15, half * 0.3, half * 0.12, 5)}
        fill="#cc0000"
      />
      {/* "S" for SNEB */}
      <text x={x} y={y + half * 0.45} fontSize={s * 0.4} fill="#d4a017" textAnchor="middle" dominantBaseline="middle" fontWeight="bold" style={{ fontFamily: 'serif' }}>
        S
      </text>
      {/* Pulse animation */}
      <circle cx={x} cy={y} r={half + 2} fill="none" stroke="#d4a017" strokeWidth={0.5} opacity={0}>
        <animate attributeName="r" from={half + 2} to={half + 12} dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>
  );
};

function starPoints(cx: number, cy: number, outerR: number, innerR: number, points: number): string {
  const pts: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI / points) * i - Math.PI / 2;
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return pts.join(' ');
}

const MozambiqueMap = () => {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <style>{`
        @keyframes mapFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .province-shape {
          cursor: pointer;
          transition: all 0.35s ease;
        }
        .province-shape:hover {
          filter: brightness(1.25) drop-shadow(0 0 8px rgba(212, 160, 23, 0.4));
        }
        .map-container {
          animation: mapFadeIn 0.8s ease-out;
        }
        .tooltip-enter {
          animation: mapFadeIn 0.2s ease-out;
        }
      `}</style>

      <svg
        viewBox="60 0 400 490"
        className="w-full h-auto map-container"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 30%, 95%)" />
            <stop offset="100%" stopColor="hsl(210, 40%, 90%)" />
          </linearGradient>
          <linearGradient id="landGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(0, 0%, 35%)" />
            <stop offset="100%" stopColor="hsl(0, 0%, 22%)" />
          </linearGradient>
          <linearGradient id="landHoverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(145, 50%, 35%)" />
            <stop offset="100%" stopColor="hsl(145, 45%, 25%)" />
          </linearGradient>
          <radialGradient id="iconGlow">
            <stop offset="0%" stopColor="#d4a017" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d4a017" stopOpacity="0" />
          </radialGradient>
          <filter id="mapShadow">
            <feDropShadow dx="3" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Background */}
        <rect x="60" y="0" width="400" height="490" fill="url(#bgGrad)" rx="8" />

        {/* Province shapes */}
        {provinces.map((p, i) => {
          const isHovered = hoveredProvince === p.name;
          return (
            <path
              key={p.name}
              d={p.path}
              fill={isHovered ? 'url(#landHoverGrad)' : 'url(#landGrad)'}
              stroke="hsl(0, 0%, 65%)"
              strokeWidth={isHovered ? 1.8 : 0.8}
              className="province-shape"
              filter="url(#mapShadow)"
              onMouseEnter={() => setHoveredProvince(p.name)}
              onMouseLeave={() => setHoveredProvince(null)}
              style={{
                opacity: 0,
                animation: `mapFadeIn 0.5s ease-out ${i * 60}ms forwards`,
              }}
            />
          );
        })}

        {/* SNEB logos at provincial capitals */}
        {provinces.map((p, i) => {
          const isHovered = hoveredProvince === p.name;
          return (
            <g
              key={`logo-${p.name}`}
              onMouseEnter={() => setHoveredProvince(p.name)}
              onMouseLeave={() => setHoveredProvince(null)}
              className="cursor-pointer"
            >
              <SNEBLogo
                x={p.cx}
                y={p.cy}
                size={p.name === 'Maputo Cidade' ? 7 : 10}
                isHovered={isHovered}
                delay={i * 100 + 600}
              />
            </g>
          );
        })}

        {/* Labels + Tooltips */}
        {provinces.map((p) => {
          const isHovered = hoveredProvince === p.name;
          return (
            <g
              key={`tooltip-${p.name}`}
              onMouseEnter={() => setHoveredProvince(p.name)}
              onMouseLeave={() => setHoveredProvince(null)}
              className="cursor-pointer"
            >
              {/* Tooltip */}
              {isHovered && (
                <g className="tooltip-enter">
                  <rect
                    x={p.cx - 72}
                    y={p.cy - 60}
                    width={144}
                    height={44}
                    rx={8}
                    fill="hsl(222, 47%, 11%)"
                    opacity={0.95}
                    stroke="#d4a017"
                    strokeWidth="1.2"
                  />
                  <polygon
                    points={`${p.cx - 5},${p.cy - 16} ${p.cx + 5},${p.cy - 16} ${p.cx},${p.cy - 8}`}
                    fill="hsl(222, 47%, 11%)"
                  />
                  <text x={p.cx} y={p.cy - 44} fontSize="9.5" fill="#d4a017" textAnchor="middle" fontWeight="bold">
                    {p.name}
                  </text>
                  <text x={p.cx} y={p.cy - 32} fontSize="8" fill="hsl(0,0%,70%)" textAnchor="middle">
                    Capital: {p.capital}
                  </text>
                  <text x={p.cx} y={p.cy - 21} fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">
                    {p.members} membros
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Title */}
        <text x="260" y="486" fontSize="9" fill="hsl(0, 0%, 40%)" textAnchor="middle" fontWeight="500">
          MOÇAMBIQUE — Presença SNEB por Província
        </text>
      </svg>
    </div>
  );
};

export default MozambiqueMap;
