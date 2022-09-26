import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data, e) => {
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast('Review Added');
                    e.target.reset();
                };
            })
    };
    return (
        <div >
            <h2 className="text-secondary text-xl text-center my-4">Add Review</h2>
            <div className='flex justify-center m-10'>
                <form onSubmit={handleSubmit(onSubmit)} className='shadow-md shadow-indigo-500/50 p-10 border'>
                    <div className="form-control w-96 max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input
                            type="text" placeholder="Please Give a Rating" className="input input-bordered w-full max-w-xs"
                            {...register("rating")}
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your Review</span>
                        </label>
                        <textarea class="textarea h-24 textarea-bordered textarea-secondary" placeholder="Please give your review"
                            {...register("customerReview")}
                        ></textarea>
                    </div>

                    <input className='btn btn-primary w-full max-w-xs my-4 text-white' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;