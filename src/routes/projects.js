import React from "react";
import ProjectDisplay from "../component/projectDisplay";

const Projects = () => {
  const projectsList = [
    {
      title: "MUNA: GPU Morton-Octrees for PDE-Agnostic AMR",
      keywords: [
        "GPU",
        "Morton-Octrees",
        "PDE-Agnostic AMR",
        "CUDA",
        "Octree",
        "AMR",
      ],
      description:
        "This project explores the use of GPU-accelerated Morton-Octrees for adaptive mesh refinement in solving partial differential equations (PDEs). The implementation focuses on efficient memory management and parallel processing to enable scalable simulations.",
      document_link: "",
      github_link: "https://github.com/newton-raphson/gpuTreeFluxReconstruction",
    },
    {
      title: "Signed Distance Representation of 3D Objects",
      keywords: [
        "Pytorch",
        "C++",
        "OpenGL",
        "MLFLow",
        "Optuna",
        "Signed Distance Function",
        "Marching Cubes",
        "3D Object",
      ],
      description:
        "Ongoing research project on Signed Distance Representation of 3D Objects. The goal of this project is to represent 3D objects using signed distance function and to use the representation to perform various tasks such as reconstruction, generation, and classification. The project is being developed using Pytorch, C++, and OpenGL.",
      document_link: "",
      github_link: "https://github.com/newton-raphson/sdf-representation",
    },
    {
      title: "Spline To Field using AutoEncoders",
      keywords: ["Pytorch", "NURBS", "AutoEncoders", "Spline", "3D Object", "Python"],
      document_link: "",
      description:
        "Learning compact field representations from spline-based geometry using autoencoders. This work maps NURBS curves and surfaces to volumetric fields for downstream tasks like reconstruction and analysis, with an emphasis on stable latent codes and differentiable geometry processing.",
      github_link: "https://github.com/newton-raphson/splinetofield",
    },
  ];

  return (
    <main className="page">
      <div className="container-wide">
        <section className="content">
          <article className="content-card">
            <h2>Projects</h2>
            <p className="section-subtitle">
              Selected projects spanning geometric deep learning, computational analytics, and applied
              machine learning.
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
