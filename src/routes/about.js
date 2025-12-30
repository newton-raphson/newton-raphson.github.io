import React from "react";
import portfolioImage from "../assets/image/pp.png";
import cv from "../assets/cv/resume.pdf";
import gh from "../assets/social_media/gh.png";
import li from "../assets/social_media/li.png";
import tw from "../assets/social_media/tw.png";
import mail from "../assets/social_media/mail.png";

const About = () => {
  return (
    <main className="page">
      <div className="container-narrow">
        <section className="hero">
          <div>
            <div className="eyebrow">PhD Researcher</div>
            <h1>Samundra Karki</h1>
            <p className="lead">
              PhD researcher in AI-native geometry and physics-based simulation
              at Iowa State University.
            </p>
            <p className="section-subtitle" style={{ marginBottom: "1.5rem" }}>
              Ames, IA · (+1) 515-735-6896 · samundra@iastate.edu
            </p>
            <div className="hero-actions">
              <a className="button-primary" href={cv} target="_blank" rel="noreferrer">
                Download CV
              </a>
              <a
                className="button-ghost"
                href="mailto:samundra@iastate.edu"
              >
                Contact
              </a>
            </div>
            <div className="social-strip">
              <a href="mailto:samundra@iastate.edu" target="_blank" rel="noreferrer">
                <img src={mail} alt="Email" />
              </a>
              <a href="https://github.com/newton-raphson" target="_blank" rel="noreferrer">
                <img src={gh} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/samundra-karki-1aa8ab176/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={li} alt="LinkedIn" />
              </a>
              <a href="https://twitter.com/0xSamstine" target="_blank" rel="noreferrer">
                <img src={tw} alt="Twitter" />
              </a>
            </div>
          </div>
          <div className="hero-media">
            <img src={portfolioImage} alt="Portrait of Samundra Karki" />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Profile</h2>
          <p className="section-subtitle">
            My work bridges 3D geometry understanding, neural fields, and scalable
            physics engines. I build INR-based geometry, octree FEM, and
            shifted-boundary solvers that enable differentiable, GPU-native
            simulation directly on implicit or generative 3D assets. I am
            exploring fast INR editing, geometry-aware AI, and GPU-accelerated
            physics for immersive systems.
          </p>
          <div className="card-grid">
            <div className="card">
              <h3>Research Interests</h3>
              <ul>
                <li>Neural 3D geometry: INR/SDF, generative editing, implicit shape reasoning</li>
                <li>Real-time physics: octree FEM, immersed methods, differentiable simulation</li>
                <li>Large-scale distributed AI systems and GPU-native PDE solvers</li>
              </ul>
            </div>
            <div className="card">
              <h3>Education</h3>
              <p>
                Iowa State University — PhD, Mechanical Engineering (GPA 4.0)
                <br />
                Focus: AI-native geometry, neural simulation, GPU-scale PDE solvers
                <br />
                Expected 2027
              </p>
              <p>
                Tribhuvan University (IOE) — B.E., Mechanical Engineering (Gold Medal)
                <br />
                2022
              </p>
            </div>
            <div className="card">
              <h3>Selected Publications</h3>
              <ul>
                <li>
                  S. Karki et al. Direct Flow Simulations with Implicit Neural
                  Representations of Complex Geometry. Computer Methods in Applied
                  Mechanics and Engineering, 2025.
                </li>
                <li>
                  S. Karki et al. Mechanics Simulations Using Implicit Neural
                  Representations of Complex Geometries. Computer-Aided Design, 2025.
                </li>
                <li>
                  M. Shadkhah et al. Octree-Based Shifted Boundary Method. Advances in
                  Computational Science and Engineering, 2025.
                </li>
                <li>
                  R. Tali et al. FlowBench: A Large-Scale Benchmark for Flow Simulation
                  over Complex Geometries. DMLR, 2025.
                </li>
                <li>
                  S. Karki et al. Comparative CFD Analysis of Kali-Gandaki "A"
                  Francis Runner. IOP Conference Series: Earth and Environmental Science, 2022.
                </li>
              </ul>
            </div>
            <div className="card">
              <h3>Manuscripts in Preparation</h3>
              <ul>
                <li>
                  Stable One-Shot Editing of Implicit Neural Representations via Gram
                  Eigenmodes.
                </li>
                <li>Learning Geometry for PDEs: Linking Neural SDF Error to Solution Accuracy.</li>
                <li>Hybrid Mesh for Octrees for Linear PDEs.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Skills</h3>
              <p>
                Python, C/C++, CUDA, MPI, PETSc, PyTorch, ONNX, Rust, HPC
              </p>
              <p>
                Neural Fields (INR/SDF), Differentiable Simulation, FEM/SBM, Octrees, 3D Geometry AI
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
