// Source: current academic CV, updated September 27, 2026.
// 05_Academic/Samundra_Karki_Academic_CV_2page.tex in the supplied career folder.
// Preserve the CV's status distinctions; a submission is not an acceptance.
const coreAuthors = ["S. Karki", "A. Krishnamurthy", "B. Ganapathysubramanian"];

export const publications = [
  {
    title: "Mechanics simulation with Implicit Neural Representations of complex geometries",
    authors: ["S. Karki", "M.-C. Hsu", "A. Krishnamurthy", "B. Ganapathysubramanian"],
    citation: "Computer-Aided Design, 190:103978, 2026.",
    year: "2026",
    url: "https://doi.org/10.1016/j.cad.2025.103978",
    linkLabel: "Publisher / DOI",
  },
  {
    title: "Neural Geometry for PDEs: Regularity, Stability, and Convergence Guarantees",
    authors: coreAuthors,
    citation: "ICLR 2026 Workshop on AI and Partial Differential Equations (AI&PDE), poster, 2026.",
    year: "2026",
    url: "https://arxiv.org/abs/2602.02271",
    linkLabel: "Paper on arXiv",
  },
  {
    title: "Direct flow simulations with implicit neural representation of complex geometry",
    authors: ["S. Karki", "M. Shadkhah", "C.-H. Yang", "A. Balu", "G. Scovazzi", "A. Krishnamurthy", "B. Ganapathysubramanian"],
    citation: "Computer Methods in Applied Mechanics and Engineering, 446:118248, 2025.",
    year: "2025",
    url: "https://doi.org/10.1016/j.cma.2025.118248",
    linkLabel: "Publisher / DOI",
  },
  {
    title: "FlowBench: A Large Scale Benchmark for Flow Simulation over Complex Geometries",
    authors: ["R. Tali", "A. Rabeh", "C.-H. Yang", "M. Shadkhah", "S. Karki", "A. Upadhyaya", "S. Dhakshinamoorthy", "M. Saadati", "S. Sarkar", "A. Krishnamurthy", "C. Hegde", "A. Balu", "B. Ganapathysubramanian"],
    citation: "Data-centric Machine Learning Research, 2(14):1–35, 2025.",
    year: "2025",
    url: "https://data.mlr.press/assets/pdf/v02-14.pdf",
    linkLabel: "Publisher full text",
  },
  {
    title: "Octree-Based Shifted Boundary Method: Evaluating the impact of hanging-node removal on convergence and solver performance for linear PDEs",
    authors: ["M. Shadkhah", "C.-H. Yang", "S. Karki", "B. Ganapathysubramanian"],
    citation: "Advances in Computational Science and Engineering, 4:119–141, 2025.",
    year: "2025",
    url: "https://doi.org/10.3934/acse.2025014",
    linkLabel: "Publisher / DOI",
  },
  {
    title: "Comparative CFD analysis of Kali-Gandaki ‘A’ Francis runner with runner generated from Bovet method",
    authors: ["S. Karki", "S. Satyal", "K. P. Rijal", "P. Koirala", "N. Adhikari"],
    citation: "IOP Conference Series: Earth and Environmental Science, 1037(1):012007, 2022 (3rd IAHR-Asia Symposium on Hydraulic Machinery and Systems).",
    year: "2022",
    url: "https://doi.org/10.1088/1755-1315/1037/1/012007",
    linkLabel: "Publisher / DOI",
  },
];

export const preprints = [
  {
    title: "Propagating Geometry Uncertainty from a Single Implicit Neural Representation through a Differentiable PDE Solver",
    authors: coreAuthors,
    citation: "Submitted to ICLR 2027.",
    status: "Submitted",
  },
  {
    title: "GENIE: Gram-Eigenmode INR Editing with Closed-Form Geometry Updates",
    authors: coreAuthors,
    citation: "Preprint, 2026.",
    status: "Preprint",
    url: "https://arxiv.org/abs/2603.29860",
    linkLabel: "Paper on arXiv",
    projectUrl: "https://baskargroup.github.io/GENIE/",
  },
];

export const manuscripts = [
  {
    title: "From Sparse AFM Observations to Probabilistic Macroscale Mechanics: A Generative-Physics Framework for Plant Cell Walls",
    authors: ["S. Karki", "A. Biswas", "N. Masud", "M. H. H. Hasib", "A. Sarkar", "B. Ganapathysubramanian"],
    citation: "In preparation.",
    status: "In preparation",
  },
  {
    title: "Suppression Is Not Sufficiency: Separating Behavioral Control from Reconstruction in Fine-Tuned Transformers",
    authors: ["S. Karki"],
    citation: "In preparation.",
    status: "In preparation",
  },
];
