import React from "react";

const ExperienceDisplay = ({ review }) => {
  const displayKeywords = (keywords) => {
    return keywords.map((keyword) => (
      <span className="tag" key={`${review.title}-${keyword}`}>
        {keyword}
      </span>
    ));
  };

  return (
    <div className="card">
      <h3>{review.title}</h3>
      {review.organization || review.dates ? (
        <p className="section-subtitle" style={{ marginBottom: "0.75rem" }}>
          {review.organization ? review.organization : ""}
          {review.organization && review.dates ? " · " : ""}
          {review.dates ? review.dates : ""}
        </p>
      ) : null}
      <div className="tag-list">{displayKeywords(review.tag)}</div>
      <p>{review.description}</p>
      {review.original_link ? (
        <div className="inline-links">
          <a className="inline-link" href={review.original_link} target="_blank" rel="noreferrer">
            Organization
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default ExperienceDisplay;
