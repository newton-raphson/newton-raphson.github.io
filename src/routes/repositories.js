import React from 'react'

function repositories() {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-6'>
                    <img class="repo-img-dark w-100" alt="Nirajan Bekoju Github stats" src="https://github-readme-stats.vercel.app/api/?username=nirajanbekoju&amp;theme=dark&amp;show_icons=true" />
                </div>
                <div className='col-md-6'>
                    <img className='repo-img-dark w-100' alt='Nirajan Bekoju Most used languages' src='https://github-readme-stats.vercel.app/api/top-langs/?username=nirajanbekoju&layout=compact&theme=radical&count_private=true' />
                </div>
                <div className='col-md-6'>
                    <img className='repo-img-dark w-100' alt='Nirajan Bekoju Contributtion' src='https://github-readme-streak-stats.herokuapp.com/?user=nirajanbekoju&theme=dark)](https://git.io/streak-stats'/>
                </div>
            </div>

        </div>
    )
}

export default repositories