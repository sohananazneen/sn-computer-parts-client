import useReviews from '../../hooks/useReviews';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <section className='my-28'>
            <div className='text-center pb-14'>
                <h1 className='text-secondary text-xl font-bold uppercase'>Reviews</h1>
            </div>
            <div className='flex justify-between'>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>)
                }
            </div>
        </section>
    );
};

export default Reviews;