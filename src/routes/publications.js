import React from "react";

const highlightedAuthor = "S. Karki";

const renderAuthors = (authors) =>
  authors.map((author, index) => (
    <React.Fragment key={`${author}-${index}`}>
      {index > 0 ? ", " : ""}
      {author === highlightedAuthor ? <strong>{author}</strong> : author}
    </React.Fragment>
  ));

const sortByDateDesc = (a, b) =>
  new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime() || a.order - b.order;

const groupByYear = (items) => {
  const grouped = new Map();

  items.forEach((item) => {
    if (!grouped.has(item.year)) {
      grouped.set(item.year, []);
    }
    grouped.get(item.year).push(item);
  });

  return Array.from(grouped.entries(), ([year, entries]) => ({ year, entries }));
};

const Publications = () => {
  const peerReviewedPublications = [
    {
      title: "Neural Geometry for PDEs: Regularity, Stability, and Convergence Guarantees",
      authors: ["S. Karki", "A. Krishnamurthy", "B. Ganapathysubramanian"],
      citation: "ICLR AI&PDE Workshop, 2026.",
      year: "2026",
      sortDate: "2026-04-01",
      order: 0,
    },
    {
      title: "Direct Flow Simulations with Implicit Neural Representations of Complex Geometry",
      authors: [
        "S. Karki",
        "M. Shadkhah",
        "C. H. Yang",
        "A. Balu",
        "G. Scovazzi",
        "A. Krishnamurthy",
        "B. Ganapathysubramanian",
      ],
      citation:
        "Computer Methods in Applied Mechanics and Engineering, Vol. 446, 118248, 2025.",
      year: "2025",
      sortDate: "2025-12-01",
      order: 1,
    },
    {
      title: "Mechanics Simulations Using Implicit Neural Representations of Complex Geometries",
      authors: ["S. Karki", "M. C. Hsu", "A. Krishnamurthy", "B. Ganapathysubramanian"],
      citation: "Computer-Aided Design, Vol. 177, 103978, 2025.",
      year: "2025",
      sortDate: "2025-10-01",
      order: 2,
    },
    {
      title:
        "Octree-Based Shifted Boundary Method: Evaluating the Impact of Hanging-Node Removal on Convergence",
      authors: ["M. Shadkhah", "C. H. Yang", "S. Karki", "B. Ganapathysubramanian"],
      citation: "Advances in Computational Science and Engineering, Vol. 4, pp. 119-141, 2025.",
      year: "2025",
      sortDate: "2025-08-01",
      order: 3,
    },
    {
      title: "FlowBench: A Large-Scale Benchmark for Flow Simulation over Complex Geometries",
      authors: ["R. Tali", "...", "S. Karki", "... et al."],
      citation: "Proceedings of Data-centric Machine Learning Research (DMLR), Vol. 1, 2025.",
      year: "2025",
      sortDate: "2025-06-01",
      order: 4,
    },
    {
      title:
        "Comparative CFD Analysis of Kali-Gandaki \"A\" Francis Runner with Runner Generated from the Bovet Method",
      authors: ["S. Karki", "S. Satyal", "K. P. Rijal", "P. Koirala", "N. Adhikari"],
      citation: "IOP Conference Series: Earth and Environmental Science, Vol. 1037, 012049, 2022.",
      year: "2022",
      sortDate: "2022-01-01",
      order: 5,
    },
  ];

  const sortedPeerReviewed = [...peerReviewedPublications].sort(sortByDateDesc);
  const groupedPeerReviewed = groupByYear(sortedPeerReviewed);

  return (
    <main className="page">
      <div className="container-wide">
        <section className="content publications-content">
          <article className="content-card">
            <h2>Publications</h2>
            <p className="section-subtitle">
              Publications sorted by date, with the most recent work first.
            </p>
          </article>
          <article className="content-card">
            <h3>Peer-Reviewed Publications</h3>
            {groupedPeerReviewed.map(({ year, entries }) => (
              <div className="publication-year-block" key={`peer-reviewed-${year}`}>
                <p className="publication-year">{year}</p>
                <div className="card-grid">
                  {entries.map((publication) => (
                    <div className="card" key={`${publication.title}-${publication.citation}`}>
                      <h4>{publication.title}</h4>
                      <p>{renderAuthors(publication.authors)}.</p>
                      <p>{publication.citation}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </article>
        </section>
      </div>
    </main>
  );
};

export default Publications;
