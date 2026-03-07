import React, { useState } from "react";
import portfolioImage from "../assets/image/pp.png";
import cv from "../assets/cv/resume.pdf";
import gh from "../assets/social_media/gh.png";
import li from "../assets/social_media/li.png";

const About = () => {
  const [toast, setToast] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    const email = "samundra@iastate.edu";
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const temp = document.createElement("textarea");
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }
      setToast("Email address copied");
      setCopied(true);
    } catch (error) {
      setToast("Copy failed");
      setCopied(false);
    }
    setTimeout(() => {
      setToast("");
      setCopied(false);
    }, 1800);
  };

  return (
    <main className="page">
      <div className="container-wide">
        <div className="layout">
          <aside className="sidebar">
            <div className="profile-card">
              <img
                className="profile-avatar"
                src={portfolioImage}
                alt="Portrait of Samundra Karki"
              />
              <div>
                <p className="eyebrow">Computational Mechanics</p>
                <h1>Samundra Karki</h1>
                <p className="profile-role">
                  Neural geometry for trustworthy PDE simulation, bridging numerical analysis and
                  scientific machine learning.
                </p>
              </div>
              <div className="profile-meta">
                Ames, IA · (+1) 515-735-6896
                <br />
                samundra@iastate.edu
              </div>
              <div className="profile-actions">
                <a className="button-primary" href={cv} target="_blank" rel="noreferrer">
                  Download CV
                </a>
                <button
                  type="button"
                  className={copied ? "button-ghost button-copied" : "button-ghost"}
                  onClick={copyEmail}
                >
                  {copied ? "Copied" : "Copy Email"}
                </button>
              </div>
              <div className="social-strip">
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
                <a
                  className="social-text"
                  href="https://scholar.google.com/citations?user=xGuJxccAAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Scholar
                </a>
              </div>
            </div>
          </aside>

          <section className="content">
            <article className="content-card">
              <h2>Research Statement (Overview)</h2>
              <p className="section-subtitle">
                Computational mechanics is split between provably accurate classical solvers and
                data-driven AI models that lack guarantees. My research bridges this divide by treating
                neural networks not as PDE solvers, but as mathematically controlled geometric
                primitives embedded within proven numerical frameworks. The objective is a rigorous
                computational foundation for neural geometry so that learned representations of domains
                and interfaces can be used reliably within high‑fidelity PDE solvers.
              </p>
              <div className="divider" />
              <p className="section-subtitle">
                Central question: How can learned geometric representations be made mathematically
                reliable, numerically stable, and practically usable within classical finite element
                methods?
              </p>
            </article>

            <article className="content-card">
              <h3>Research Themes</h3>
              <ul>
                <li>
                  Geometry-aware simulation without body‑fitted meshes (Shifted Boundary Method on
                  adaptive octrees; embedded/unfitted discretizations).
                </li>
                <li>
                  Neural geometry with provable PDE guarantees (regularity, stability, and convergence
                  bounds that tie geometry error to PDE error).
                </li>
                <li>
                  Regularity‑constrained training for INR geometry to enforce gradient non‑degeneracy
                  and curvature control required by numerical solvers.
                </li>
                <li>
                  Controllable neural geometry via Gram‑eigenmodes for fast, solver‑stable editing and
                  shape optimization.
                </li>
              </ul>
            </article>

            <article className="content-card">
              <h3>Future Directions</h3>
              <ul>
                <li>
                  Geometry-aware a posteriori error estimation to drive solver‑aware training and
                  refinement of neural geometry.
                </li>
                <li>
                  Multiphysics, large deformation, and data‑driven geometry (FSI, nonlinear
                  elasticity, evolving domains).
                </li>
                <li>
                  Geometry‑aware HPC at scale: GPU‑centric octree AMR and solver integration for
                  large‑ensemble studies.
                </li>
              </ul>
            </article>

            <article className="content-card">
              <h3>Funding Alignment</h3>
              <p>
                NSF (DMS, CMMI), DOE ASCR for scientific machine learning and exascale computing, and
                AFOSR interests in robust, uncertainty‑aware simulation for engineering design.
              </p>
            </article>

            <article className="content-card">
              <h3>Teaching & Mentorship</h3>
              <ul>
                <li>Computational mechanics, FEM, numerical PDEs, scientific ML.</li>
                <li>HPC for scientific computing, GPU programming, parallel methods.</li>
                <li>Graduate research mentorship across theory, algorithms, and implementation.</li>
              </ul>
            </article>

            <article className="content-card">
              <h3>Education</h3>
              <p>
                Iowa State University — PhD, Mechanical Engineering (GPA 4.0)
                <br />
                Focus: AI-native geometry, neural simulation, GPU-scale PDE solvers
                <br />
                Expected 2027
              </p>
              <div className="divider" />
              <p>
                Tribhuvan University (IOE) — B.E., Mechanical Engineering (Gold Medal)
                <br />
                2022
              </p>
            </article>

            <article className="content-card">
              <h3>Skills</h3>
              <p>
                Python, C/C++, CUDA, MPI, PETSc, PyTorch, ONNX, Rust, HPC
              </p>
              <p>
                Neural Fields (INR/SDF), Differentiable Simulation, FEM/SBM, Octrees, 3D Geometry AI
              </p>
            </article>
          </section>
        </div>
        {toast ? <div className="toast">{toast}</div> : null}
      </div>
    </main>
  );
};

export default About;
