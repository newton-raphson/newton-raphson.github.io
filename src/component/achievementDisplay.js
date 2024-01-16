import React from "react";

const AchievementDisplay = ({ achievement }) => {
  return (
    <div>
      <h2>{achievement.title}</h2>
      {achievement.category ? (
        <div className="pt-2 pb-3">{achievement.category}</div>
      ) : (
        ""
      )}

      {achievement.description ? (
        <div className="pt-2 pb-3">{achievement.description}</div>
      ) : (
        ""
      )}

      {achievement.github_link ? (
        <a
          href={achievement.github_link}
          className="btn btn-primary mr3"
          target="_blank"
        >
          Github Repository
        </a>
      ) : (
        ""
      )}
      <hr />
    </div>
  );
};

export default AchievementDisplay;
