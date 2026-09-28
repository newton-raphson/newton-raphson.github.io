import React from "react";
import ExperienceDisplay from "../component/experienceDisplay";

const roles = [
  {
    title: "Graduate Research Assistant",
    organization: "Iowa State University · Advisor: Prof. Baskar Ganapathysubramanian",
    dates: "Aug 2023 – Present",
    tag: ["Neural SDFs", "FEM", "Octree AMR", "C++", "CUDA", "MPI"],
    highlights: [
      "Developed shifted-boundary finite-element simulation on adaptive octree meshes that queries neural SDFs directly, without surface-mesh generation, for incompressible Navier–Stokes and linear elasticity.",
      "Validated 2D flow against body-fitted solutions for Reynolds numbers 100–5000 and 3D flow against triangle-mesh SBM; demonstrated second-order L² convergence for elasticity and scaled to approximately 3 million degrees of freedom.",
      "Derived a priori error estimates linking uniform INR error to elliptic PDE accuracy, with INR tolerance ε ∼ hᵏ⁺¹ to preserve finite-element convergence.",
      "Co-authored FlowBench, a benchmark of 10,000+ fully resolved 2D/3D flow and heat-transfer simulations over complex geometries.",
    ],
    original_link: "https://www.me.iastate.edu/bglab/",
  },
  {
    title: "Research Scientist Intern",
    organization: "Argonne National Laboratory · Advisor: Dr. Gary Hu",
    dates: "May 2026 – Aug 2026",
    tag: ["Diffusion Models", "Inverse Design", "CUDA", "PyTorch"],
    highlights: [
      "Built a modular diffusion framework for multi-physics inverse design, combining joint objective conditioning with differentiable forward surrogates.",
      "Combined classifier-free guidance, diffusion posterior sampling, and conflict-free gradient composition; analyzed per-objective gradient dynamics to assess feasibility during sampling.",
      "Implemented a FlashAttention-style CUDA C++ kernel with tiled attention, online softmax, and shared-memory reuse, alongside a correctness and timing harness against PyTorch reference attention.",
    ],
  },
  {
    title: "AI Research Fellow",
    organization: "FuseMachine AI · Kathmandu, Nepal",
    dates: "Jan 2023 – Aug 2023",
    tag: ["Machine Learning", "FastAPI", "Predictive Maintenance"],
    description: "Developed predictive-maintenance pipelines using classical machine learning and deployed inference as FastAPI microservices.",
  },
  {
    title: "Computational Systems Engineer (Founding Team)",
    organization: "Zebec & Mokshya · Remote",
    dates: "Nov 2021 – Aug 2023",
    tag: ["Rust", "TypeScript", "Financial Computing"],
    description: "Built Rust and TypeScript backends for financial computation, emphasizing numerical correctness, memory safety, and reliable services. Work included fixed-point arithmetic, payment accrual and settlement logic, and correctness-sensitive state transitions.",
  },
];

const skills = [
  ["Languages", "C++17/20, Python, CUDA, Rust, TypeScript/JavaScript"],
  ["Scientific computing", "FEM/FVM, shifted boundary methods, octree AMR, PETSc, MPI, OpenMP"],
  ["Machine learning", "PyTorch, JAX, LibTorch, ONNX Runtime, diffusion models, neural SDFs"],
  ["Infrastructure", "Linux, SLURM, Docker/Singularity, Git, CMake, CI/CD"],
];

export default function Experience() {
  return <main id="main-content" className="page"><div className="container-wide"><div className="content">
    <header className="content-card"><p className="eyebrow">RESEARCH & ENGINEERING</p><h1>Experience</h1><p className="section-subtitle">Scientific machine learning, computational mechanics, multi-physics inverse design, and reliable software.</p></header>
    <section aria-label="Research and engineering roles" className="card-grid">{roles.map((review) => <ExperienceDisplay review={review} key={review.title} />)}</section>
    <section aria-labelledby="education-title" className="content-card"><h2 id="education-title">Education</h2><div className="card-grid">
      <article className="card"><h3>Ph.D., Mechanical Engineering</h3><p>Iowa State University · Expected Fall 2026</p><p>GPA: 4.0/4.0 · Advisor: Prof. Baskar Ganapathysubramanian</p></article>
      <article className="card"><h3>B.E., Mechanical Engineering</h3><p>Tribhuvan University · May 2022</p><p>Institute of Engineering, Pulchowk Campus, Nepal</p><p><strong>University Gold Medal</strong> — top graduate across all engineering campuses.</p></article>
    </div></section>
    <section aria-labelledby="skills-title" className="content-card"><h2 id="skills-title">Technical skills</h2><div className="card">{skills.map(([label, value]) => <p key={label}><strong>{label}:</strong> {value}</p>)}</div></section>
    <section aria-labelledby="teaching-title" className="content-card"><h2 id="teaching-title">Teaching</h2><article className="card"><h3>Instructor · MLOps</h3><p>Translational AI Center, Iowa State University · Fall 2024</p><p>Non-credit professional course in machine learning operations.</p></article></section>
    <section aria-labelledby="talks-title" className="content-card"><h2 id="talks-title">Selected conference presentations</h2><div className="card-grid">
      <article className="card"><h3>MLCAS 2025</h3><p>Tokyo · August 2025</p><p>Mechanics-informed phenotyping of maize stalks using octree-based elastic simulations.</p></article>
      <article className="card"><h3>USNCCM18</h3><p>Chicago, IL · July 2025</p><p>Advancing mechanics simulation with AI-based geometric representation.</p></article>
      <article className="card"><h3>WCCM-PANACM 2024</h3><p>Vancouver · July 2024</p><p>Direct simulation of Navier–Stokes on neural SDFs using the shifted boundary method.</p></article>
    </div></section>
  </div></div></main>;
}
