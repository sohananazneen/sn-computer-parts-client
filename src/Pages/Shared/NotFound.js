import React from 'react';
import errorImage from '../../assets/images/errorImage.gif';

const NotFound = () => {
    return (
        <div>
            <div className="card max-w-full glass">
                <figure>
                    <img src={errorImage} alt="" /></figure>
            </div>
        </div>
    );
};

export default NotFound;