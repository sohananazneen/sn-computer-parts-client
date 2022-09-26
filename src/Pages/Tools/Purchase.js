import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useSingleTool from '../../hooks/useSingleTool';

const Purchase = () => {
    const { id } = useParams();
    const [singleTool, setSingleTool] = useSingleTool(id);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user?.email,
            UserName: user?.displayName,
            toolName: singleTool.name,
            price: singleTool.price,
            toolDescription: singleTool.description,
            id,
            quantity: singleTool.quantity,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/order', {
            method: 'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Ordered`)
                }
            });
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <form onSubmit={handlePlaceOrder} className='grid grid-cols-1 gap-3 my-4'>
                        <img src={singleTool.img} className="img-fluid rounded w-50" alt="" />
                        <h2 className="card-title">Tool's Name: {singleTool.name}</h2>
                        <h2>User Name: {user?.displayName}</h2>
                        <h2>User email: {user?.email}</h2>
                        <p>Price: $ {singleTool.price}</p>

                        {/* <input type="text" value={singleTool.quantity} className="input input-bordered w-full max-w-xs" /> */}

                        <input type="number" value={singleTool.quantity} className="input input-bordered w-full max-w-xs" placeholder="quantity" />

                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;