import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L5CsXDqUXs6MwhfMrFfZMpzb4B2VibJ0XoQAoDEbwa6LQAbhaP27ytn4yz0ukcvBsiUV94vyc3TgSb6W05THrnk00p7KWcfL8');

const Payment = () => {
    const { id } = useParams();
    const url = `https://stormy-river-80261.herokuapp.com/order/${id}`;
    const { data: payOrder, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-center'>
            <div>
                <div className="card w-80 max-w-md bg-base-100 shadow-xl my-12 text-center">
                    <div className="card-body">
                        <p>Please Pay for:</p>
                        <h2 className="text-2xl text-secondary font-bold"> {payOrder.toolName}</h2>
                        <p>Quantity: {payOrder.quantity}</p>
                        <p>Please Pay: ${payOrder.price}</p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-red-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm payOrder={payOrder} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;