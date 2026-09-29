import React, { useId, useState } from "react";

// Two views of the same analytic surface; the color field is illustrative.
function point(latitude, longitude) {
  const r = 128 * (1 + 0.16 * Math.sin(3 * longitude) * Math.sin(latitude) ** 2);
  const x = r * Math.sin(latitude) * Math.cos(longitude);
  const y = r * Math.cos(latitude);
  const z = r * Math.sin(latitude) * Math.sin(longitude);
  return { x: 200 + x * 0.91 + z * 0.32, y: 185 + y * 0.9 - z * 0.38, z,
    value: Math.max(0, Math.min(1, (x + y * 0.65 + 150) / 300)) };
}
const cells = [];
for (let i = 0; i < 32; i++) {
  for (let j = 0; j < 64; j++) {
    const vertices = [[i, j], [i + 1, j], [i + 1, j + 1], [i, j + 1]]
      .map(([a, b]) => point(a * Math.PI / 32, b * Math.PI * 2 / 64));
    cells.push({ points: vertices.map(p => `${p.x},${p.y}`).join(" "),
      depth: vertices.reduce((sum, p) => sum + p.z, 0) / 4,
      value: vertices.reduce((sum, p) => sum + p.value, 0) / 4 });
  }
}
cells.sort((a, b) => a.depth - b.depth);
const lines = Array.from({ length: 23 }, (_, i) => Array.from({ length: 81 }, (_, j) => {
  const p = point(i * Math.PI / 22, j * Math.PI * 2 / 80);
  return `${p.x},${p.y}`;
}).join(" "));

export default function Geometry() {
  const [split, setSplit] = useState(50);
  const id = useId();
  return <div className="geometry-panel">
    <div className="figure-label"><span>GEOMETRY → PHYSICS</span><span>FIG. 01</span></div>
    <div className="geometry-comparison" style={{ "--split": `${split}%` }}>
      <svg viewBox="0 0 400 370" role="img" aria-label="Split view of a neural field wireframe and an illustrative simulation color field on the same surface">
        <defs>
          <clipPath id={`${id}-field`}><rect width={split * 4} height="370" /></clipPath>
          <clipPath id={`${id}-simulation`}><rect x={split * 4} width={400 - split * 4} height="370" /></clipPath>
          <radialGradient id={`${id}-glow`}><stop stopColor="#cbe9a0" stopOpacity=".18"/><stop offset="1" stopColor="#cbe9a0" stopOpacity="0"/></radialGradient>
        </defs>
        <circle cx="200" cy="185" r="175" fill={`url(#${id}-glow)`} />
        <g clipPath={`url(#${id}-field)`} fill="none" stroke="#bee38e" strokeWidth=".85">
          {lines.map((points, i) => <polyline key={i} points={points} />)}
        </g>
        <g clipPath={`url(#${id}-simulation)`}>
          {cells.map((cell, i) => <polygon key={i} points={cell.points} fill={`hsl(${220 - cell.value * 210}, 72%, ${49 + cell.depth / 30}%)`} stroke="#20382a" strokeOpacity=".18" strokeWidth=".45" />)}
        </g>
        <path d="M35 320H365M48 335V60" stroke="#91a68e" strokeWidth=".5" strokeDasharray="3 5" />
        <text x="353" y="338" fill="#b6c4b4" fontSize="11">x</text><text x="32" y="65" fill="#b6c4b4" fontSize="11">y</text>
      </svg>
      <div className="comparison-labels" aria-hidden="true"><span>NEURAL FIELD</span><span>SIMULATION</span></div>
      <div className="comparison-divider" aria-hidden="true"><span>‹ ›</span></div>
      <input className="comparison-input" type="range" min="0" max="100" value={split}
        onChange={event => setSplit(Number(event.target.value))}
        aria-label="Compare neural field and simulation" aria-valuetext={`${split}% neural field, ${100 - split}% simulation`} aria-describedby={`${id}-hint`} />
    </div>
    <div className="figure-caption"><span id={`${id}-hint`}>Drag to explore · illustrative fields</span><span>φ(x) → u(x)</span></div>
  </div>;
}
