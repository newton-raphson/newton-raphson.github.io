import React from "react";
import AchievementDisplay from "../component/achievementDisplay";

const Achievement = () => {
  const achievementList = [
    {
      title: "Docsumo DataVerse 2023",
      category: "Winner in Data Insights Category",
      github_link: "https://github.com/NirajanBekoju/Docsumo-Dataverse",
    },
  ];

  return (
    <main className="page">
      <div className="container-narrow">
        <section className="section">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Recognition for applied research, competitions, and collaborative work.
          </p>
          <div className="card-grid">
            {achievementList.length > 0
              ? achievementList.map((achievement) => (
                  <AchievementDisplay achievement={achievement} key={achievement.title} />
                ))
              : "Will add soon..."}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Achievement;
