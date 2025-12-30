import React from "react";
import ExperienceDisplay from "../component/experienceDisplay";

const Experience = () => {
  const reviewList = [
    {
      title: "Graduate Research Assistant",
      organization: "CompM Lab, Iowa State University",
      dates: "Aug 2023 – Present",
      tag: ["C++", "MPI", "CUDA", "PyTorch", "ONNX", "HPC", "Neural Fields"],
      description:
        "Developing neural-field geometry solvers that couple INR, octree FEM, and shifted-boundary methods. Built FlowBench, an HPC-scale dataset with PyTorch/ONNX pipelines for large-scale PDE learning, and refactored MPI-parallel solvers for GPU acceleration with near-linear scaling across nodes.",
      original_link: "https://www.me.iastate.edu/bglab/",
    },
    {
      title: "AI Fellow",
      organization: "FuseMachine",
      dates: "Nov 2021 – Aug 2023",
      tag: ["XGBoost", "FastAPI", "NLP", "MLOps"],
      description:
        "Built a predictive maintenance pipeline and delivered a GPT-2-based sentiment API using FastAPI.",
      original_link: "https://fusemachines.com/",
    },
    {
      title: "Computational Engineer / Co-Founder",
      organization: "Zebec & Mokshya",
      dates: "Jan 2023 – Aug 2023",
      tag: ["Rust", "TypeScript", "Blockchain", "Analytics"],
      description:
        "Developed correctness-critical blockchain and financial analytics backends for production systems.",
      original_link: "https://mokshya.io/",
    },
    {
      title: "Instructor",
      organization: "TRAC, Iowa State University",
      dates: "Aug 2024 – Dec 2024",
      tag: ["MLOps", "Teaching", "Curriculum"],
      description:
        "Instructor for MLOps (Machine Learning Operations), covering ML systems, deployment, and monitoring.",
      original_link: "",
    },
  ];

  return (
    <main className="page">
      <div className="container-narrow">
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Research, industry, and teaching roles centered on AI-native geometry, scalable simulation,
            and applied machine learning systems.
          </p>
          <div className="card-grid">
            {reviewList.map((review) => (
              <ExperienceDisplay review={review} key={review.title} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Experience;
