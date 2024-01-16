import React from 'react'
import { Link } from 'react-router-dom';

const ReviewDisplay = ({ review }) => {
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
            <h2>{review.title}</h2>

            <div>
                <span className='font-weight-bold'>Keywords : </span>
                {displaykeywords(review.tag)}
            </div>
            
            <div className='pt-3 pb-3'>
                {review.description}
            </div>

            <a href={review.review_link} className="btn btn-success" target="_blank">Website</a>

            <hr />
        </div>
    )
}

export default ReviewDisplay
