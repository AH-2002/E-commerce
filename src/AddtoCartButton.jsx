import React, { useState } from "react";

export default function AddtoCartButton({ cartButton, productId }) {

    const [message, setMessage] = useState("");

    const handleAddToCart = () => {
        const result = cartButton(productId);  // Pass product ID and receive feedback
        if (result) {
            setMessage("Done! Item added to cart.");
        } else {
            setMessage("Failed to add item.");
        }

        // Auto-hide after 3 seconds
        setTimeout(() => setMessage(""), 3000);
    };


    return (
        <>
            <div className="btn btn-dark mb-4" onClick={cartButton, handleAddToCart}>Add to Cart</div>
            {message && (
                <div className={`alert ${message.includes("Done") ? 'alert-success' : 'alert-danger'}`} style={{ marginTop: "10px" }}>
                    {message}
                </div>
            )}
        </>
    )
}