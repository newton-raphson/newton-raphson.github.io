import React from "react";

const Articles = () => {
  const articles = [
    {
      title: "Future of Physics-Based Simulation",
      link: "https://samundrakarki.substack.com/p/future-of-physics-based-simulation",
      source: "Substack",
    },
    {
      title: "APTOS Token V2",
      link: "https://medium.com/mokshyaprotocol/aptos-token-v2-a74fd1125a4",
      source: "Medium",
    },
    {
      title: "Wrapping Token v1 to Token v2: Using Token V1 and Token V2",
      link: "https://medium.com/mokshyaprotocol/wrapping-token-v1-to-token-v2-using-token-v1-and-token-v2-a2dd3f4ab442",
      source: "Medium",
    },
    {
      title: "Write Your First Smart Contract On Aptos — A Step-by-Step Guide",
      link: "https://medium.com/mokshyaprotocol/write-your-first-smart-contract-on-aptos-a-step-by-step-guide-e16a6f5c2be6",
      source: "Medium",
    },
  ];

  return (
    <main className="page">
      <div className="container-narrow">
        <section className="section">
          <h2 className="section-title">Blogs</h2>
          <p className="section-subtitle">
            Writing and highlights across research and applied systems.
          </p>
          <div className="card-grid">
            {articles.map((article) => (
              <div className="card" key={article.title}>
                <h3>{article.title}</h3>
                <p>{article.source}</p>
                <div className="inline-links">
                  <a className="inline-link" href={article.link} target="_blank" rel="noreferrer">
                    Read Article
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Articles;
