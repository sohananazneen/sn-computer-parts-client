import React from 'react';
import banner from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">Welcome to SN Computer's LTd. </h1>
                    <p className="mb-5">
                        Computer hardware servicing tools are essential for repair and maintenance of the hardware components of computers. These tools are important to take care of a computer, do the necessary troubleshooting whenever a computer is having issues, and perform computer upgrades.</p>
                    <button className="btn btn-primary font-bold  bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;