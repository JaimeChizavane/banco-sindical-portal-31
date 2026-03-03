import { useState, useEffect } from 'react';

// Accurate province paths based on real Mozambique geography
// ViewBox calibrated to match the reference map proportions
const provinces = [
  {
    id: 'niassa',
    name: 'Niassa',
    members: 120,
    capital: 'Lichinga',
    capitalX: 175, capitalY: 108,
    path: 'M140,28 L152,22 L170,18 L190,16 L210,18 L225,22 L240,30 L248,42 L252,58 L250,75 L244,92 L236,108 L224,118 L210,124 L195,128 L178,126 L162,120 L148,110 L138,96 L130,78 L126,58 L128,42 Z',
    color: 'hsl(0, 0%, 32%)',
  },
  {
    id: 'cabo-delgado',
    name: 'Cabo Delgado',
    members: 95,
    capital: 'Pemba',
    capitalX: 295, capitalY: 62,
    path: 'M240,30 L255,22 L272,16 L292,14 L310,18 L325,28 L335,42 L338,58 L334,72 L325,85 L312,94 L298,100 L282,102 L268,98 L256,90 L248,78 L248,68 L250,58 L252,58 L250,75 L244,92 L236,108 L224,118 L210,124 L218,108 L228,92 L236,76 L240,62 L242,48 Z',
    color: 'hsl(0, 0%, 30%)',
  },
  {
    id: 'nampula',
    name: 'Nampula',
    members: 420,
    capital: 'Nampula',
    capitalX: 285, capitalY: 155,
    path: 'M210,124 L224,118 L236,108 L244,92 L250,75 L248,68 L248,78 L256,90 L268,98 L282,102 L298,100 L312,94 L325,85 L335,105 L340,125 L338,148 L330,168 L318,182 L302,190 L284,194 L266,190 L250,182 L236,170 L224,156 L216,142 L210,130 Z',
    color: 'hsl(0, 0%, 28%)',
  },
  {
    id: 'zambezia',
    name: 'Zambézia',
    members: 310,
    capital: 'Quelimane',
    capitalX: 268, capitalY: 228,
    path: 'M180,198 L195,190 L210,184 L216,142 L224,156 L236,170 L250,182 L266,190 L284,194 L302,190 L300,208 L292,225 L280,238 L264,248 L248,252 L232,248 L218,240 L206,228 L194,215 L185,205 Z',
    color: 'hsl(0, 0%, 33%)',
  },
  {
    id: 'tete',
    name: 'Tete',
    members: 180,
    capital: 'Tete',
    capitalX: 135, capitalY: 155,
    path: 'M68,102 L85,88 L105,78 L125,72 L128,42 L140,28 L126,58 L130,78 L138,96 L148,110 L162,120 L178,126 L195,128 L210,124 L210,130 L216,142 L210,184 L195,190 L180,198 L168,192 L152,182 L138,170 L124,158 L110,145 L96,132 L82,118 Z',
    color: 'hsl(0, 0%, 26%)',
  },
  {
    id: 'manica',
    name: 'Manica',
    members: 150,
    capital: 'Chimoio',
    capitalX: 162, capitalY: 275,
    path: 'M128,252 L142,242 L156,235 L168,232 L180,230 L185,205 L194,215 L206,228 L218,240 L222,258 L218,275 L210,292 L198,305 L185,312 L172,308 L158,298 L145,285 L135,270 Z',
    color: 'hsl(0, 0%, 31%)',
  },
  {
    id: 'sofala',
    name: 'Sofala',
    members: 280,
    capital: 'Beira',
    capitalX: 235, capitalY: 288,
    path: 'M185,205 L194,215 L206,228 L218,240 L232,248 L248,252 L264,248 L280,238 L286,258 L282,278 L274,298 L262,312 L248,320 L234,318 L222,312 L212,302 L210,292 L218,275 L222,258 L218,240 L206,228 L194,215 Z',
    color: 'hsl(0, 0%, 29%)',
  },
  {
    id: 'inhambane',
    name: 'Inhambane',
    members: 200,
    capital: 'Inhambane',
    capitalX: 232, capitalY: 408,
    path: 'M205,370 L218,362 L232,365 L245,375 L254,388 L258,405 L252,420 L240,430 L226,432 L214,425 L205,412 L200,395 L200,380 Z',
    color: 'hsl(0, 0%, 27%)',
  },
  {
    id: 'gaza',
    name: 'Gaza',
    members: 245,
    capital: 'Xai-Xai',
    capitalX: 210, capitalY: 358,
    path: 'M172,318 L185,312 L198,305 L210,302 L222,312 L234,318 L240,335 L232,348 L218,362 L205,370 L200,380 L195,365 L188,348 L180,335 L175,325 Z',
    color: 'hsl(0, 0%, 34%)',
  },
  {
    id: 'maputo-provincia',
    name: 'Maputo Província',
    members: 450,
    capital: 'Matola',
    capitalX: 208, capitalY: 448,
    path: 'M185,438 L198,430 L212,428 L224,432 L230,445 L226,458 L215,468 L202,466 L192,458 L185,448 Z',
    color: 'hsl(0, 0%, 25%)',
  },
  {
    id: 'maputo-cidade',
    name: 'Maputo Cidade',
    members: 800,
    capital: 'Maputo',
    capitalX: 218, capitalY: 478,
    path: 'M208,470 L218,468 L228,472 L232,482 L225,490 L215,492 L206,488 L205,480 Z',
    color: 'hsl(0, 0%, 22%)',
  },
];

const SNEBLogo = ({ x, y, size, isHovered, delay }: { x: number; y: number; size: number; isHovered: boolean; delay: number }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  const s = isHovered ? size * 1.5 : size;
  const half = s / 2;

  return (
    <g>
      {/* Animated pulse ring */}
      <circle cx={x} cy={y} r={half + 2} fill="none" stroke="#d4a017" strokeWidth={0.5} opacity={0}>
        <animate attributeName="r" from={`${half + 2}`} to={`${half + 14}`} dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.5" to="0" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Glow background */}
      <circle cx={x} cy={y} r={s * 1.5} fill="url(#iconGlow)" opacity={isHovered ? 0.8 : 0.3} className="transition-all duration-300" />

      {/* Gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = x + (half + 1) * Math.cos(rad);
        const y1 = y + (half + 1) * Math.sin(rad);
        const x2 = x + (half + 4) * Math.cos(rad);
        const y2 = y + (half + 4) * Math.sin(rad);
        return (
          <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#d4a017" strokeWidth={isHovered ? 1.8 : 1} opacity={0.85}
            strokeLinecap="round"
          />
        );
      })}

      {/* Outer ring */}
      <circle cx={x} cy={y} r={half + 1.5}
        fill="none" stroke="#d4a017"
        strokeWidth={isHovered ? 1.8 : 1}
        opacity={0.9}
      />

      {/* Inner circle */}
      <circle cx={x} cy={y} r={half}
        fill="#1a365d"
        stroke="#d4a017" strokeWidth={0.5}
      />

      {/* Red star */}
      <polygon
        points={starPoints(x, y - half * 0.2, half * 0.28, half * 0.11, 5)}
        fill="#cc0000"
      />

      {/* SNEB letter */}
      <text x={x} y={y + half * 0.5}
        fontSize={s * 0.38}
        fill="#d4a017"
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight="bold"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        S
      </text>
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
        @keyframes mapSlideIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes provinceReveal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .moz-province {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .moz-province:hover {
          filter: brightness(1.4);
        }
        .map-wrapper {
          animation: mapSlideIn 0.8s ease-out;
        }
        .tooltip-anim {
          animation: mapSlideIn 0.15s ease-out;
        }
      `}</style>

      <svg
        viewBox="40 0 340 510"
        className="w-full h-auto map-wrapper"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="iconGlow">
            <stop offset="0%" stopColor="#d4a017" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d4a017" stopOpacity="0" />
          </radialGradient>
          <filter id="mapDropShadow">
            <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
          </filter>
          <filter id="hoverGlow">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#d4a017" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Ocean background */}
        <rect x="40" y="0" width="340" height="510" fill="hsl(210, 25%, 93%)" rx="10" />

        {/* Water pattern dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle key={`dot-${i}`}
            cx={320 + Math.random() * 50}
            cy={50 + i * 24}
            r={1}
            fill="hsl(210, 30%, 80%)"
            opacity={0.4}
          />
        ))}

        {/* Province shapes */}
        {provinces.map((p, i) => {
          const isHovered = hoveredProvince === p.id;
          return (
            <path
              key={p.id}
              d={p.path}
              fill={isHovered ? 'hsl(145, 45%, 30%)' : p.color}
              stroke="hsl(0, 0%, 55%)"
              strokeWidth={isHovered ? 1.5 : 0.7}
              className="moz-province"
              filter={isHovered ? 'url(#hoverGlow)' : 'url(#mapDropShadow)'}
              onMouseEnter={() => setHoveredProvince(p.id)}
              onMouseLeave={() => setHoveredProvince(null)}
              style={{
                opacity: 0,
                animation: `provinceReveal 0.4s ease-out ${i * 70}ms forwards`,
              }}
            />
          );
        })}

        {/* SNEB logos at each provincial capital */}
        {provinces.map((p, i) => {
          const isHovered = hoveredProvince === p.id;
          const iconSize = p.id === 'maputo-cidade' ? 6 : 9;
          return (
            <g
              key={`icon-${p.id}`}
              onMouseEnter={() => setHoveredProvince(p.id)}
              onMouseLeave={() => setHoveredProvince(null)}
              className="cursor-pointer"
            >
              <SNEBLogo
                x={p.capitalX}
                y={p.capitalY}
                size={iconSize}
                isHovered={isHovered}
                delay={i * 100 + 800}
              />
            </g>
          );
        })}

        {/* Tooltips */}
        {provinces.map((p) => {
          const isHovered = hoveredProvince === p.id;
          if (!isHovered) return null;

          const tx = p.capitalX;
          const ty = p.capitalY;
          const boxW = 140;
          const boxH = 48;
          // Adjust tooltip position to stay in view
          const bx = Math.max(55, Math.min(tx - boxW / 2, 360 - boxW));
          const by = ty - 68;

          return (
            <g key={`tip-${p.id}`} className="tooltip-anim">
              {/* Tooltip box */}
              <rect
                x={bx} y={by}
                width={boxW} height={boxH}
                rx={8}
                fill="hsl(222, 47%, 11%)"
                stroke="#d4a017"
                strokeWidth="1"
                opacity={0.96}
              />
              {/* Arrow */}
              <polygon
                points={`${tx - 5},${by + boxH} ${tx + 5},${by + boxH} ${tx},${by + boxH + 8}`}
                fill="hsl(222, 47%, 11%)"
              />
              {/* Province name */}
              <text x={bx + boxW / 2} y={by + 14}
                fontSize="10" fill="#d4a017"
                textAnchor="middle" fontWeight="bold"
              >
                {p.name}
              </text>
              {/* Capital */}
              <text x={bx + boxW / 2} y={by + 27}
                fontSize="8" fill="hsl(0,0%,65%)"
                textAnchor="middle"
              >
                Capital: {p.capital}
              </text>
              {/* Members */}
              <text x={bx + boxW / 2} y={by + 41}
                fontSize="12" fill="white"
                textAnchor="middle" fontWeight="bold"
              >
                {p.members} membros
              </text>
            </g>
          );
        })}

        {/* Map label */}
        <text x="210" y="505"
          fontSize="8" fill="hsl(0, 0%, 45%)"
          textAnchor="middle" fontWeight="500"
          letterSpacing="1"
        >
          MOÇAMBIQUE — Presença SNEB por Província
        </text>
      </svg>
    </div>
  );
};

export default MozambiqueMap;
