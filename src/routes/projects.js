import React from "react";
import ProjectDisplay from "../component/projectDisplay";

const Projects = () => {
  const projectsList = [
    {
      title: "GENIE: Closed-Form Neural Geometry Editing",
      keywords: ["Preprint · 2026", "Neural SDFs", "Spectral Methods", "3D Geometry"],
      description: "Closed-form, one-shot last-layer edits of neural signed-distance fields within the deformation-mode span of the INR’s penultimate-feature Gram operator. The work characterizes realizable edits and expands the editable span with multi-head training, without iterative optimization.",
      document_link: "https://arxiv.org/abs/2603.29860",
      project_link: "https://baskargroup.github.io/GENIE/",
    },
    {
      title: "Geometry Uncertainty through Differentiable PDE Solvers",
      keywords: ["Submitted to ICLR 2027", "Uncertainty Quantification", "INR", "Differentiable Simulation"],
      description: "Infers a Gaussian posterior over deformation-mode coefficients from noisy geometry observations while freezing nonlinear INR features. Propagates uncertainty to PDE quantities of interest through a shifted-boundary solver, with 300–350× faster propagation than Monte Carlo in the paper benchmarks.",
    },
    {
      title: "Multi-Physics Inverse Design at Argonne",
      keywords: ["Research Internship · 2026", "Diffusion Models", "Inverse Design"],
      description: "A modular diffusion framework combining joint objective conditioning with differentiable forward surrogates. Integrates classifier-free guidance, diffusion posterior sampling, and conflict-free gradient composition, with analysis of per-objective gradient dynamics during sampling.",
    },
    {
      title: "FlowBench: Simulation Data for Neural Simulators",
      keywords: ["Published · 2025", "Collaborative Benchmark", "Scientific ML", "HPC"],
      description: "Co-authored a benchmark of 10,000+ fully resolved 2D/3D flow and heat-transfer simulations over complex geometries, released at three resolutions for training and evaluating neural simulators.",
      document_link: "https://data.mlr.press/assets/pdf/v02-14.pdf",
    },
    {
      title: "MUNA: GPU Morton-Octrees for PDE-Agnostic AMR",
      keywords: ["CUDA", "C++", "Octree AMR", "GPU Computing"],
      description: "Morton-ordered octree adaptive-refinement kernels in C++/CUDA using warp primitives, cooperative groups, and parallel scans for refinement and geometry queries.",
      github_link: "https://github.com/newton-raphson/gpuTreeFluxReconstruction",
    },
    {
      title: "Neural Geometry in Numerical Solver Pipelines",
      keywords: ["PyTorch", "Neural SDFs", "FEM", "Shifted Boundary Method"],
      description: "Couples neural signed-distance fields directly to octree finite-element solvers for flow and elasticity without surface-mesh generation. Validated against reference flow solutions and demonstrated second-order elasticity convergence at up to approximately 3 million degrees of freedom.",
      github_link: "https://github.com/newton-raphson/sdf-representation",
      document_link: "https://doi.org/10.1016/j.cad.2025.103978",
    },
    {
      title: "Suppression Is Not Sufficiency",
      keywords: ["In Preparation", "Mechanistic Interpretability", "Representation Analysis"],
      description: "Investigating whether low-rank interventions that suppress model behavior also remove information needed to reconstruct that behavior. Uses spectral structure, low-rank subspaces, representation similarity, and causal interventions in fine-tuned transformers.",
    },
    {
      title: "Spline to Field using Autoencoders",
      keywords: ["PyTorch", "NURBS", "Autoencoders", "3D Geometry"],
      description: "Learning compact field representations from spline-based geometry using autoencoders, mapping NURBS curves and surfaces to volumetric fields for reconstruction and analysis.",
      github_link: "https://github.com/newton-raphson/splinetofield",
    },
  ];

  return (
    <main id="main-content" className="page">
      <div className="container-wide">
        <section className="content">
          <article className="content-card">
            <h1>Projects</h1>
            <p className="section-subtitle">
              Selected work in neural geometry, uncertainty quantification, inverse design, scientific computing, and representation analysis.
            </p>
          </article>
          <article className="content-card">
            <div className="card-grid">
              {projectsList.map((project) => (
                <ProjectDisplay project={project} key={project.title} />
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default Projects;
