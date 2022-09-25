import React from 'react';
import { BsTools } from 'react-icons/bs';
import { MdReviews } from 'react-icons/md';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

const BusinessSummary = () => {
    return (
        <section className='my-28'>
            <div className='px-10 py-14'>
                <div className='text-center pb-14'>
                    <h1 className='text-secondary text-xl font-bold uppercase'>Business Summary</h1>
                </div>
                <div className="stats stats-vertical lg:stats-horizontal shadow flex align-middle py-4 shadow-md shadow-indigo-500/50">
                    <div className="stat place-items-center">
                        <div className="stat-title">Tools</div>
                        <div className="stat-value py-4">50+</div>
                        <div className="stat-value text-secondary"><BsTools /></div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value py-4">33K+</div>
                        <div className="stat-value text-secondary"><MdReviews /></div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Customers</div>
                        <div className="stat-value py-4">100+</div>
                        <div className="stat-value text-secondary"><AiOutlineUsergroupAdd /></div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default BusinessSummary;