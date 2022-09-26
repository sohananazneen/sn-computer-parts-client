import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useTools from '../../hooks/useTools';

const ManageProducts = () => {
    const [user] = useAuthState(auth);
    const [services, setServices] = useTools();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = services.filter(product => product._id !== id);
                    setServices(remaining);
                })
            toast('product Deleted');
        }
    }
    return (
        <div className='my-8 mx-8'>
            <h2 className='text-secondary text-xl text-center my-4'>Manage Products: {services.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full border">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((product, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.toolName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <button className='btn btn-error text-dark mx-2' onClick={() => handleDelete(product._id)}>Delete</button>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;