import React from "react";
import { publications } from "../data/publications";

const References = () => {
  const references = [
    ...publications.map((paper) => ({ ...paper, authors: `${paper.authors.join(", ")}.` })),
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
    <main id="main-content" className="page">
      <div className="container-wide">
        <section className="content publications-content">
          <article className="content-card">
            <h1>Reference</h1>
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
