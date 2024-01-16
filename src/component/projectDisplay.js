import React from 'react'

const ProjectDisplay = ({ heading,project }) => {
    const displaykeywords = (keywords) => {
        let result = [];

        for (let i = 0; i < keywords.length; i++) {
            result.push(
                <span className='bg-info text-dark mr3 p-1' style={{borderRadius: "10px"}}>{keywords[i]}</span>
            )
        }
        return result;
    }

    return (
        <div>
            <h2>{heading}</h2>
            <h3>{project.title}</h3>
            <div className='pb-3'>
                <span className='font-weight-bold'>Keywords : </span>
                {displaykeywords(project.keywords)}
            </div>
            {project.description ? <div className='pt-2 pb-3'>
                {project.description}
            </div> : ""}
            
            {project.github_link ? <a href={project.github_link} className="btn btn-primary mr3" target="_blank">Github Repository</a> : ""}
            {project.document_link ? <a href={project.document_link} className="btn btn-success" target="_blank">Project Report</a> : ""}
            <hr />
        </div>
    )
}

export default ProjectDisplay