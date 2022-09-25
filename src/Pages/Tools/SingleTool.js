import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTool = ({ service, setPurchase }) => {
    const { _id, img, name, description, price, quantity } = service;

    const min = quantity.length !== 0 ? Math.min(...quantity) : "";

    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/tool/${id}`);
    }
    return (
        <div className="card lg:max-w-lg shadow-md shadow-indigo-500/50">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p><strong>Price: </strong> {price} $</p>
                <div>
                    <p><strong>Minimum Order quantity:</strong>
                        {
                            quantity.length > 0
                                ? <span> {min} </span>
                                : <span className='text-red-500'> Sold Out </span>
                        }
                    </p>
                </div>
                <p>
                    <strong>Available Quantity:</strong>
                    {
                        quantity.length > 0
                            ? <span> {quantity[0]} pcs</span>
                            : <span className='text-red-500'> Sold Out </span>
                    }
                </p>
                <div className="card-actions">
                    <button onClick={() => navigateToPurchase(_id)} disabled={quantity == 0} className='btn btn-primary mx-2'>Purchase</button>
                    {/* <label htmlFor="purchase-modal"
                        disabled={quantity.length === 0}
                        onClick={() => setPurchase(service)}
                        className="btn btn-primary modal-button">Purchase
                    </label> */}
                </div>
            </div>
        </div>
    );
};

export default SingleTool;