import React from 'react';

const SingleReview = ({ review }) => {
    const { customerReview, name, rating } = review;
    return (
        <div className="card lg:max-w-lg shadow-md shadow-indigo-500/50">
            <div className="card-body">
                <div>
                    <h4 className='text-xl font-bold'>{name}</h4>
                </div>
                <p>Ratings: {rating} out of 5</p>
                <p>{customerReview}</p>
            </div>
        </div>
    );
};

export default SingleReview;