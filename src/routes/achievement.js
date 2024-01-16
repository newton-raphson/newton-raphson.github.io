import React from 'react'
import AchievementDisplay from '../component/achievementDisplay';

function achievement() {
    const achievementList = [
        {
            "title" : "Docsumo DataVerse 2023",
            "category" : "Winner in Data Insights Category",
            "github_link" : "https://github.com/NirajanBekoju/Docsumo-Dataverse" 
        },
    ];

    const displayAchievement = () => {
        let display = [];
        let result = [];

        achievementList.map(achievement => {
            return display.push(
                <AchievementDisplay achievement = {achievement} key = {achievement.title} />)
        })

        for(let i = 0; i < achievementList.length; i+=1){
            result.push(
                <div className='achievement'>{display[i]}</div>
            )
        }
        return result;
    }

    return (
        <section>
            <div className='container pt-3'>
                <div className='row'>
                    <h1 className='p-0'>Achievements</h1>
                    <hr/>
                    {achievementList.length > 0  ? displayAchievement() : "Will add soon..."}
                </div>
            </div>
        </section>
    )
}

export default achievement