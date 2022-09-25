import React from 'react';

const SingleReview = ({ review }) => {
    const { customerReview, name, rating } = review;
    return (
        <div className="card lg:max-w-lg shadow-md shadow-indigo-500/50">
            <div className="card-body">
                <p>{customerReview}</p>
                <p>Ratings: {rating} out of 5</p>
                <div className="text-right">
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;