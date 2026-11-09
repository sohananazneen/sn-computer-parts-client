import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTool = ({ service }) => {
    const { _id, img, toolName, name, description, price, quantity } = service;
    const [showDetails, setShowDetails] = useState(false);
    const toolTitle = toolName || name || "Computer tool";
    const quantities = Array.isArray(quantity) ? quantity : [];
    const numericQuantities = quantities
        .map(value => String(value).trim())
        .filter(Boolean)
        .map(Number)
        .filter(Number.isFinite);
    const min = numericQuantities.length > 0 ? Math.min(...numericQuantities) : null;
    const availableQuantity = quantities[0];
    const shortDescription = description && description.length > 120
        ? `${description.slice(0, 120).trim()}…`
        : description || "No description available.";
    const navigate = useNavigate();

    const navigateToPurchase = () => {
        setShowDetails(false);
        navigate(`/tool/${_id}`);
    };

    return (
        <div className="card tool-card lg:max-w-lg shadow-md shadow-indigo-500/50">
            <figure className="tool-card-image-frame">
                <img src={img} alt={toolTitle} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toolTitle}</h2>
                <p><strong>Price:</strong> {price} $</p>
                <p className="tool-description-preview">{shortDescription}</p>
                <div className="card-actions">
                    <button
                        type="button"
                        onClick={() => setShowDetails(true)}
                        className="btn btn-outline btn-primary"
                    >
                        View More
                    </button>
                </div>
            </div>
            {showDetails && (
                <div
                    className="modal modal-open"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`tool-title-${_id}`}
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            setShowDetails(false);
                        }
                    }}
                >
                    <div className="modal-box">
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            aria-label="Close tool details"
                            onClick={() => setShowDetails(false)}
                        >
                            ✕
                        </button>
                        <h2 id={`tool-title-${_id}`} className="text-2xl font-bold mb-4">{toolTitle}</h2>
                        <p className="mb-3"><strong>Price:</strong> {price} $</p>
                        <p className="mb-4">{description || "No description available."}</p>
                        <p className="mb-2">
                            <strong>Minimum Order quantity:</strong>
                            {min !== null
                                ? <span> {min}</span>
                                : <span className="text-red-500"> Sold Out</span>}
                        </p>
                        <p>
                            <strong>Available Quantity:</strong>
                            {availableQuantity !== undefined
                                ? <span> {availableQuantity} pcs</span>
                                : <span className="text-red-500"> Sold Out</span>}
                        </p>
                        <div className="modal-action">
                            <button
                                type="button"
                                onClick={navigateToPurchase}
                                disabled={quantities.length === 0}
                                className="btn btn-primary"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleTool;