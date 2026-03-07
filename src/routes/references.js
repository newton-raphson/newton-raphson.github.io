import React from "react";

const References = () => {
  const references = [
    {
      title: "Neural Geometry for PDEs: Regularity, Stability, and Convergence Guarantees",
      authors: "S. Karki, A. Krishnamurthy, B. Ganapathysubramanian.",
      citation: "ICLR AI&PDE Workshop, 2026.",
    },
    {
      title: "Direct Flow Simulations with Implicit Neural Representations of Complex Geometry",
      authors:
        "S. Karki, M. Shadkhah, C. H. Yang, A. Balu, G. Scovazzi, A. Krishnamurthy, B. Ganapathysubramanian.",
      citation: "Computer Methods in Applied Mechanics and Engineering, Vol. 446, 118248, 2025.",
    },
    {
      title: "Mechanics Simulations Using Implicit Neural Representations of Complex Geometries",
      authors: "S. Karki, M. C. Hsu, A. Krishnamurthy, B. Ganapathysubramanian.",
      citation: "Computer-Aided Design, Vol. 177, 103978, 2025.",
    },
    {
      title:
        "Octree-Based Shifted Boundary Method: Evaluating the Impact of Hanging-Node Removal on Convergence",
      authors: "M. Shadkhah, C. H. Yang, S. Karki, B. Ganapathysubramanian.",
      citation: "Advances in Computational Science and Engineering, Vol. 4, pp. 119-141, 2025.",
    },
    {
      title: "FlowBench: A Large-Scale Benchmark for Flow Simulation over Complex Geometries",
      authors: "R. Tali, ..., S. Karki, ... et al..",
      citation: "Proceedings of Data-centric Machine Learning Research (DMLR), Vol. 1, 2025.",
    },
    {
      title: "Optimal surrogate boundary selection and scalability studies for the shifted boundary method on octree meshes",
      authors:
        "Cheng-Hau Yang, Kumar Saurabh, Guglielmo Scovazzi, Claudio Canuto, Adarsh Krishnamurthy, Baskar Ganapathysubramanian.",
      citation:
        "Computer Methods in Applied Mechanics and Engineering, Vol. 419, 116686, 2024. North-Holland.",
    },
    {
      title:
        "Simulating incompressible flows over complex geometries using the shifted boundary method with incomplete adaptive octree meshes",
      authors:
        "Cheng-Hau Yang, Guglielmo Scovazzi, Adarsh Krishnamurthy, Baskar Ganapathysubramanian.",
      citation: "Journal of Computational Physics, 114334, 2026. Academic Press.",
    },
    {
      title: "A Shifted Boundary Method for Thermal Flows",
      authors:
        "Cheng-Hau Yang, Guglielmo Scovazzi, Adarsh Krishnamurthy, Baskar Ganapathysubramanian.",
      citation: "Journal of Computational Physics, 114333, 2025.",
    },
    {
      title: "Industrial scale Large Eddy Simulations with adaptive octree meshes using immersogeometric analysis",
      authors:
        "Kumar Saurabh, Boshun Gao, Milinda Fernando, Songzhe Xu, Makrand A Khanwale, Biswajit Khara, Ming-Chen Hsu, Adarsh Krishnamurthy, Hari Sundar, Baskar Ganapathysubramanian.",
      citation: "Computers & Mathematics with Applications, Vol. 97, pp. 28-44, 2021. Pergamon.",
    },
  ];

  return (
    <main className="page">
      <div className="container-wide">
        <section className="content publications-content">
          <article className="content-card">
            <h2>Reference</h2>
            <ol>
              {references.map((paper) => (
                <li key={paper.title}>
                  <p>
                    <strong>{paper.title}</strong>
                  </p>
                  <p>{paper.authors}</p>
                  <p>{paper.citation}</p>
                </li>
              ))}
            </ol>
          </article>
        </section>
      </div>
    </main>
  );
};

export default References;
