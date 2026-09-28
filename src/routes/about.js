import React from "react";
import { Link } from "react-router-dom";
import portrait from "../assets/image/pp.png";
import cv from "../assets/cv/resume.pdf";

function Geometry() {
  const lines = Array.from({ length: 23 }, (_, i) => {
    const latitude = (i / 22) * Math.PI;
    const points = Array.from({ length: 81 }, (_, j) => {
      const longitude = (j / 80) * Math.PI * 2;
      const r = 128 * (1 + 0.16 * Math.sin(3 * longitude) * Math.sin(latitude) ** 2);
      const x = r * Math.sin(latitude) * Math.cos(longitude);
      const y = r * Math.cos(latitude);
      const z = r * Math.sin(latitude) * Math.sin(longitude);
      return `${200 + x * 0.91 + z * 0.32},${185 + y * 0.9 - z * 0.38}`;
    }).join(" ");
    return <polyline key={i} points={points} />;
  });
  return <div className="geometry-panel">
    <div className="figure-label"><span>NEURAL GEOMETRY</span><span>FIG. 01</span></div>
    <svg viewBox="0 0 400 370" role="img" aria-label="An abstract wireframe of an implicit three-dimensional surface">
      <defs><radialGradient id="glow"><stop stopColor="#cbe9a0" stopOpacity=".22"/><stop offset="1" stopColor="#cbe9a0" stopOpacity="0"/></radialGradient></defs>
      <circle cx="200" cy="185" r="175" fill="url(#glow)" />
      <g fill="none" stroke="#bee38e" strokeWidth=".85">{lines}</g>
      <path d="M35 304H365M68 335V60" stroke="#69816a" strokeWidth=".5" strokeDasharray="3 5" />
      <circle cx="68" cy="304" r="3" fill="#bee38e" />
      <text x="345" y="324" fill="#b6c4b4" fontSize="11">x</text><text x="52" y="65" fill="#b6c4b4" fontSize="11">y</text>
    </svg>
    <div className="figure-caption"><span>From learned shapes to physical systems.</span><span>φ(x) = 0</span></div>
  </div>;
}

const themes = [
  ["01", "Neural geometry", "Implicit neural representations and signed distance fields for understanding, representing, and editing complex 3D shapes.", "INR / SDF / GEOMETRY AI"],
  ["02", "Trustworthy simulation", "Connecting learned geometry to classical numerical methods, with a focus on stability, accuracy, and reliable PDE solutions.", "FEM / SHIFTED BOUNDARY METHODS"],
  ["03", "Uncertainty & inverse design", "Propagating geometry uncertainty through differentiable PDE solvers and using diffusion models for multi-physics inverse design.", "UNCERTAINTY QUANTIFICATION / DIFFUSION"],
];

export default function About() {
  return <main id="main-content" className="home-page">
    <section className="hero container-wide">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> PHD CANDIDATE · IOWA STATE UNIVERSITY</p>
        <h1>Learning geometry.<br />Simulating <em>reality.</em></h1>
        <p className="hero-description">I’m Samundra Karki. I work at the intersection of neural 3D geometry, computational mechanics, and scientific machine learning.</p>
        <div className="hero-actions"><Link className="button-primary" to="/publications">Explore my research <span aria-hidden="true">↗</span></Link><a className="button-ghost" href={cv} target="_blank" rel="noreferrer">View academic CV <span aria-hidden="true">↗</span></a></div>
        <p className="hero-note">CompM Lab <span>/</span> Ames, Iowa</p>
      </div>
      <Geometry />
    </section>
    <div className="research-strip"><div className="container-wide"><span>NEURAL FIELDS</span><span>COMPUTATIONAL MECHANICS</span><span>SCIENTIFIC MACHINE LEARNING</span><span>UNCERTAINTY QUANTIFICATION</span></div></div>
    <section className="home-section container-wide" aria-labelledby="research-title">
      <div className="section-heading"><div><p className="eyebrow">THE QUESTIONS I WORK ON</p><h2 id="research-title">Geometry meets physics.</h2></div><p>Making learned representations useful<br className="desktop-break" /> for reliable, high-fidelity simulation.</p></div>
      <div className="theme-grid">{themes.map(([number, title, description, label]) => <article className="theme-card" key={number}><span className="theme-number">{number} /</span><h3>{title}</h3><p>{description}</p><span className="theme-label">{label}</span></article>)}</div>
    </section>
    <section className="about-section container-wide" aria-labelledby="about-title">
      <div className="portrait-wrap"><img src={portrait} alt="Samundra Karki" width="400" height="480" loading="lazy" /><span>RESEARCHER. ENGINEER. CURIOUS HUMAN.</span></div>
      <div className="about-copy"><p className="eyebrow">A LITTLE ABOUT ME</p><h2 id="about-title">Building a bridge between<br />AI and the physical world.</h2><p>I’m a PhD candidate in Mechanical Engineering at Iowa State University, advised by Prof. Baskar Ganapathysubramanian, with graduation expected in Fall 2026. My research connects learned geometry with reliable physics simulation, from numerical error analysis to closed-form geometry editing and uncertainty propagation.</p><p>In summer 2026, I joined Argonne National Laboratory as a Research Scientist Intern, working with Dr. Gary Hu on diffusion-based multi-physics inverse design. I earned my B.E. at Tribhuvan University’s Pulchowk Campus, receiving the University Gold Medal as the top graduate across all engineering campuses.</p><div className="inline-links"><Link className="inline-link" to="/experience">My experience ↗</Link><a className="inline-link" href="https://scholar.google.com/citations?user=xGuJxccAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer">Google Scholar ↗</a><a className="inline-link" href="https://github.com/newton-raphson" target="_blank" rel="noreferrer">GitHub ↗</a><a className="inline-link" href="https://orcid.org/0009-0009-2010-2614" target="_blank" rel="noreferrer">ORCID ↗</a></div></div>
    </section>
    <section className="home-section container-wide" aria-labelledby="work-title"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2 id="work-title">From ideas to simulations.</h2></div><Link className="inline-link" to="/projects">All projects ↗</Link></div><div className="selected-work">
      <Link to="/publications" className="work-row"><span className="work-type">SUBMITTED · ICLR 2027</span><h3>Propagating geometry uncertainty through a differentiable PDE solver</h3><span aria-hidden="true">↗</span></Link>
      <a href="https://baskargroup.github.io/GENIE/" target="_blank" rel="noreferrer" className="work-row"><span className="work-type">PREPRINT · 2026</span><h3>GENIE: Gram-Eigenmode INR Editing with Closed-Form Geometry Updates</h3><span aria-hidden="true">↗</span></a>
      <Link to="/publications" className="work-row"><span className="work-type">PUBLICATION · 2026</span><h3>Mechanics simulation with Implicit Neural Representations of complex geometries</h3><span aria-hidden="true">↗</span></Link>
    </div></section>
    <section className="contact-section container-wide"><p className="eyebrow">LET’S CONNECT</p><h2>Interesting questions make<br />for good conversations.</h2><a href="mailto:samundra@iastate.edu">samundra@iastate.edu <span aria-hidden="true">↗</span></a><p>Neural geometry, scientific computing, or a shared curiosity.</p></section>
  </main>;
}
