import React from "react";

const Blogs = () => {
  return (
    <main className="page">
      <div className="container-wide">
        <section className="content">
          <article className="content-card">
            <h2>Blogs</h2>
            <p className="section-subtitle">
              Long-form writing on AI-native geometry, simulation, and research workflows.
            </p>
          </article>
          <article className="content-card">
            <div className="card-grid">
              <div className="card">
                <h3>Coming soon</h3>
                <p>Share posts, external links, or draft notes here.</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default Blogs;
