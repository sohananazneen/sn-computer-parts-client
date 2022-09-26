import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/order?email=${user.email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])

    return (
        <div className='my-8 mx-8'>
            <h1 className='text-secondary text-xl text-center my-4'>My Order: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.toolName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity[0]}</td>
                                <td>payment</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;