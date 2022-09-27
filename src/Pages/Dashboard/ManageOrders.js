import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
            toast('order Deleted');
        }
    }
    return (
        <div className='my-8 mx-8'>
            <h2 className='text-secondary text-xl text-center my-4'>Manage All Orders: {orders.length}</h2>
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
                            orders.map((order, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{order.toolName}</td>
                                    <td>{order.price}</td>
                                    <td>{order.quantity}</td>
                                    <button className='btn btn-error text-dark mx-2' onClick={() => handleDelete(order._id)}>Delete</button>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;