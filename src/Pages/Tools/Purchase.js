import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useSingleTool from '../../hooks/useSingleTool';

const Purchase = () => {
    const { id } = useParams();
    const [singleTool] = useSingleTool(id);
    const [user] = useAuthState(auth);
    const [orderQuantity, setOrderQuantity] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isQuantityList = Array.isArray(singleTool.quantity);
    const stockQuantities = (isQuantityList ? singleTool.quantity : [singleTool.quantity])
        .map(value => Number.parseInt(value, 10))
        .filter(value => Number.isFinite(value) && value >= 0);
    const minimumOrderQuantity = stockQuantities.length > 0
        ? (isQuantityList ? Math.min(...stockQuantities) : 1)
        : '';
    const availableQuantity = stockQuantities[0] ?? 0;

    useEffect(() => {
        setOrderQuantity(minimumOrderQuantity === '' ? '' : String(minimumOrderQuantity));
    }, [minimumOrderQuantity]);

    const handlePlaceOrder = async event => {
        event.preventDefault();
        const quantity = Number(orderQuantity);
        if (!Number.isInteger(quantity) || quantity < minimumOrderQuantity || quantity > availableQuantity) {
            toast.error('Enter a quantity within the available stock and minimum order amount.');
            return;
        }

        const order = {
            email: user?.email,
            UserName: user?.displayName,
            toolName: singleTool.toolName || singleTool.name,
            price: singleTool.price,
            toolDescription: singleTool.description,
            id,
            quantity,
            address: event.target.address.value,
            phone: event.target.phone.value
        };

        setIsSubmitting(true);
        try {
            const response = await fetch('https://sn-computer-parts-server.onrender.com/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            });
            if (!response.ok) {
                throw new Error(`Order request failed (${response.status}).`);
            }

            const result = await response.json();
            if (!result.insertedId) {
                throw new Error('The server did not confirm the order.');
            }
            toast.success('Order placed successfully.');
            event.target.reset();
            setOrderQuantity(String(minimumOrderQuantity));
        } catch (error) {
            toast.error(error.message || 'Could not place the order. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <form onSubmit={handlePlaceOrder} className='grid grid-cols-1 gap-3 my-4'>
                        <img src={singleTool.img} className="img-fluid rounded w-50" alt="" />
                        <h2 className="card-title">Tool's Name: {singleTool.toolName || singleTool.name}</h2>
                        <h2>User Name: {user?.displayName}</h2>
                        <h2>User email: {user?.email}</h2>
                        <p>Price: $ {singleTool.price}</p>

                        {/* <input type="text" value={singleTool.quantity} className="input input-bordered w-full max-w-xs" /> */}

                        <input
                            type="number"
                            name="quantity"
                            value={orderQuantity}
                            onChange={event => setOrderQuantity(event.target.value)}
                            min={minimumOrderQuantity || undefined}
                            max={availableQuantity || undefined}
                            required
                            disabled={availableQuantity === 0}
                            className="input input-bordered w-full max-w-xs"
                            placeholder="Quantity"
                        />
                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input
                            type="submit"
                            value={isSubmitting ? "Placing order..." : "Place Order"}
                            disabled={isSubmitting || availableQuantity === 0}
                            className="btn btn-secondary w-full max-w-xs"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;