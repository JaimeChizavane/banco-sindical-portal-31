import { useState } from 'react';

const provinces = [
  { name: 'Niassa', members: 120, x: 280, y: 40 },
  { name: 'Cabo Delgado', members: 95, x: 340, y: 30 },
  { name: 'Nampula', members: 420, x: 330, y: 120 },
  { name: 'Zambézia', members: 310, x: 280, y: 180 },
  { name: 'Tete', members: 180, x: 200, y: 140 },
  { name: 'Manica', members: 150, x: 210, y: 230 },
  { name: 'Sofala', members: 280, x: 250, y: 250 },
  { name: 'Inhambane', members: 200, x: 260, y: 350 },
  { name: 'Gaza', members: 245, x: 230, y: 320 },
  { name: 'Maputo Província', members: 450, x: 230, y: 400 },
  { name: 'Maputo Cidade', members: 800, x: 250, y: 420 },
];

const MozambiqueMap = () => {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 450 480"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified Mozambique shape */}
        <path
          d="M300,10 L370,20 L380,60 L360,100 L350,150 L330,180 L300,200 L280,220 L270,260 L280,300 L270,340 L260,380 L250,410 L240,440 L220,450 L210,430 L200,400 L210,360 L220,320 L210,280 L220,240 L200,200 L190,160 L200,120 L220,80 L250,40 Z"
          fill="hsl(var(--primary))"
          opacity="0.15"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
        />

        {/* Province dots and labels */}
        {provinces.map((p) => {
          const isHovered = hoveredProvince === p.name;
          return (
            <g
              key={p.name}
              onMouseEnter={() => setHoveredProvince(p.name)}
              onMouseLeave={() => setHoveredProvince(null)}
              className="cursor-pointer"
            >
              {/* Outer ring on hover */}
              <circle
                cx={p.x}
                cy={p.y}
                r={isHovered ? 18 : 0}
                fill="none"
                stroke="#eab308"
                strokeWidth="2"
                className="transition-all duration-300"
                opacity={isHovered ? 0.6 : 0}
              />
              {/* Dot */}
              <circle
                cx={p.x}
                cy={p.y}
                r={isHovered ? 8 : 6}
                fill={isHovered ? '#eab308' : '#166534'}
                className="transition-all duration-200"
              />
              {/* SNEB logo placeholder circle */}
              <circle
                cx={p.x}
                cy={p.y}
                r={3}
                fill="white"
                opacity={0.7}
              />
              {/* Province name */}
              <text
                x={p.x + 14}
                y={p.y + 4}
                fontSize="11"
                fill="currentColor"
                className="text-foreground font-medium"
              >
                {p.name}
              </text>

              {/* Tooltip on hover */}
              {isHovered && (
                <g>
                  <rect
                    x={p.x - 60}
                    y={p.y - 45}
                    width={120}
                    height={30}
                    rx={6}
                    fill="#0f172a"
                    opacity={0.95}
                  />
                  <text
                    x={p.x}
                    y={p.y - 25}
                    fontSize="12"
                    fill="white"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    {p.members} membros
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default MozambiqueMap;
