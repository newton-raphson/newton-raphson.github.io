import React from "react";

const AchievementDisplay = ({ achievement }) => {
  return (
    <div className="card">
      <h3>{achievement.title}</h3>
      {achievement.category ? <p>{achievement.category}</p> : null}
      {achievement.description ? <p>{achievement.description}</p> : null}
      {achievement.github_link ? (
        <div className="inline-links">
          <a className="inline-link" href={achievement.github_link} target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default AchievementDisplay;
