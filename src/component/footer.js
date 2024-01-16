import React from 'react'

const footer = () => {
    const date = new Date();

    return (
        <section className='footer'>
            <div className='container-fluid bg-dark mt-4'>
                <div className='container'>
                    <div className='row text-center text-white'>
                        <div className='pt-1 pb-1'>
                            <span>
                                &copy; Copyright {date.getFullYear()} Samundra Karki
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default footer