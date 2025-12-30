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
      github_link:
        "https://github.com/newton-raphson/splinetofield",
    },
    // {
    //   title: "Fourier Series Drawing",
    //   keywords: ["Fourier Series", "DFT", "Epicycles"],
    //   description:
    //     "Fourier series is an expansion of a periodic function in terms of an infinite sum of sines and cosines. Fourier series make use of the orthogonality relationships of the sine and cosine functions. With appropriate weights, one cycle or period of the summation can be made to approximate an arbitrary function in that interval. In mathematics, the discrete-time fourier transform (DTFT) is a form of Fourier analysis that is applicable to the sequence of values. The DTFT is often used to analyze samples of a continuous function. The term discrete-time refers to the fact that the transform operates on discrete data, often samples whose interval has units of time. In this program, we are going to use discrete fourier transform in order to generate the fourier series of the given discrete coordinate data. In mathematics, the discrete Fourier Transform (DFT) converts a finite sequence of equally-spaced samples of function into a same-length sequence of equal-spaced samples of the discrete-time fourier transform(DTFT), which is a complex valued function of frequency.",
    //   github_link: "https://github.com/NirajanBekoju/Fourier-Transform-Drawing",
    // },
    // {
    //   title: "Epidemic Modelling",
    //   keywords: ["SIR Model", "C++", "OpenGL", "Data Analysis", "Data Visualization"],
    //   description:
    //     "(Compartmental Model in Epidemiology ) Epidemic modelling is the mathematical model to illustrate the spread of epidemic disease. We have use SIR model in order to study the epidemic disease transmission. SIR model is a compartmental model in epidemiology. In this model, the population is assigned to compartments with labels - for example :- S, I or R(SUSCEPTIBLE, INFECTIOUS or RECOVERED). People may progress between compartments.",
    //   github_link: "https://github.com/NirajanBekoju/Epidemic-Modelling",
    // },
    // {
    //   title: "Malignant and Benign Tumor Diagnosis",
    //   keywords: ["Tumor", "pandas", "seaborn", "sk-learn", "Keras"],
    //   description:
    //     "Using the dataset obtained from kaggle for malignant and benign tumor diagonosis, in this project a model is built to predict the type of tumor and obtained 97.902% validation accuracy using keras sequential model.",
    //   document_link: "",
    //   github_link:
    //     "https://github.com/NirajanBekoju/Malignant-and-Benign-Tumor-Diagnosis",
    // },
  ];

  return (
    <main className="page">
      <div className="container-narrow">
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Selected projects spanning geometric deep learning, computational analytics, and applied
            machine learning.
          </p>
          <div className="card-grid">
            {projectsList.map((project) => (
              <ProjectDisplay project={project} key={project.title} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Projects;
