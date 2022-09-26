import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const url = `http://localhost:5000/service`;
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
                    toast('Product Added');
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
                            className="input input-bordered w-full max-w-xs"
                            type="name" placeholder="Enter Name"  {...register("name", { required: true, maxLength: 20 })}
                        />
                        <label className="label">
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs"
                            type="text" placeholder="Price" {...register("price")}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs"
                            type="number" placeholder="Quantity"  {...register("quantity")}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs"
                            type="text" placeholder="Photo URL" {...register("img")}
                        />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <textarea class="textarea h-24 textarea-bordered" placeholder="Product description"
                            {...register("description", { required: true, maxLength: 20 })}
                        ></textarea>
                    </div>

                    <input className='btn btn-primary w-full max-w-xs my-4 text-white' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;