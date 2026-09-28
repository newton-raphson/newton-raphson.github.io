import React from "react";
import { publications, preprints, manuscripts } from "../data/publications";

function Paper({ paper }) {
  return <article className="card">
    {paper.status && <p><span className="tag">{paper.status}</span></p>}
    <h3>{paper.title}</h3>
    <p>{paper.authors.map((author, index) => <React.Fragment key={author}>
      {index > 0 ? ", " : ""}
      {author === "S. Karki" ? <strong>{author}</strong> : author}
    </React.Fragment>)}.</p>
    <p>{paper.citation}</p>
    {(paper.url || paper.projectUrl) && <div className="inline-links">
      {paper.url && <a className="inline-link" href={paper.url} target="_blank" rel="noreferrer">{paper.linkLabel} ↗</a>}
      {paper.projectUrl && <a className="inline-link" href={paper.projectUrl} target="_blank" rel="noreferrer">Project website ↗</a>}
    </div>}
  </article>;
}

export default function Publications() {
  const years = [...new Set(publications.map((paper) => paper.year))].sort((a, b) => Number(b) - Number(a));
  return <main id="main-content" className="page">
    <div className="container-wide">
      <div className="content publications-content">
        <header className="content-card">
          <p className="eyebrow">PAPERS & MANUSCRIPTS</p>
          <h1>Publications</h1>
          <p className="section-subtitle">Neural geometry, reliable physics simulation, uncertainty quantification, and representation analysis.</p>
        </header>
        <section aria-labelledby="published-title" className="content-card">
          <h2 id="published-title">Peer-reviewed publications</h2>
          {years.map((year) => <div key={year} className="publication-year-block">
            <p className="publication-year">{year}</p>
            <div className="card-grid">{publications.filter((paper) => paper.year === year).map((paper) => <Paper key={paper.title} paper={paper} />)}</div>
          </div>)}
        </section>
        <section aria-labelledby="preprints-title" className="content-card">
          <h2 id="preprints-title">Submitted manuscripts & preprints</h2>
          <div className="card-grid">{preprints.map((paper) => <Paper key={paper.title} paper={paper} />)}</div>
        </section>
        <section aria-labelledby="preparation-title" className="content-card">
          <h2 id="preparation-title">Manuscripts in preparation</h2>
          <div className="card-grid">{manuscripts.map((paper) => <Paper key={paper.title} paper={paper} />)}</div>
        </section>
      </div>
    </div>
  </main>;
}
