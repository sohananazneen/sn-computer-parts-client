import React from 'react';
import useReviews from '../../hooks/useReviews';
import useTools from '../../hooks/useTools';
import About from '../About/About';
import Contact from '../Contact/Contact';
import SingleReview from '../Reviews/SingleReview';
import SingleTool from '../Tools/SingleTool';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    const [services] = useTools();
    const [reviews] = useReviews();
    return (
        <div>
            <Banner />
            <About />
            {/* Tools section  */}
            <section className='my-28'>
                <div className='px-10 py-14'>
                    <div className='text-center pb-14'>
                        <h1 className='text-secondary text-xl font-bold uppercase'>Computer Tools</h1>
                    </div>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            services.slice(0, 3).map(service => <SingleTool
                                key={service._id}
                                service={service}
                            ></SingleTool>)
                        }
                    </div>
                </div>
            </section>

            <BusinessSummary />

            {/* Reviews section  */}
            <section className='my-28'>
                <div className='px-10 py-14'>
                    <div className='text-center pb-14'>
                        <h1 className='text-secondary text-xl font-bold uppercase'>Reviews</h1>
                    </div>
                    <div className='flex justify-between'>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            reviews.slice(0, 3).map(review => <SingleReview
                                key={review._id}
                                review={review}
                            ></SingleReview>)
                        }
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    );
};

export default Home;