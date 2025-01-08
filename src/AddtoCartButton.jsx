import React, { useState } from "react";

export default function AddtoCartButton({ cartButton, productId }) {

    const [message, setMessage] = useState("");

    const handleAddToCart = () => {
        const result = cartButton(productId);  // Pass product ID and receive feedback
        if (result) {
            setMessage("✓");
        } else {
            setMessage("X");
        }

        // Auto-hide after 3 seconds
        setTimeout(() => setMessage(""), 3000);
    };

    const getBackgroundColor = () => {
        return message === "✓" ? 'lightgreen' : 'red';
    }

    return (
        <div style={{ position: 'relative' }}>
            <button className="btn btn-dark mb-4" onClick={cartButton, handleAddToCart}>Add to Cart</button>
            {message && (
                <div style={{
                    position: 'absolute', color: 'white', padding: '7px 15px', borderRadius: '10px', backgroundColor: getBackgroundColor(),
                    fontWeight: 'bolder', top: '0', right: '15px'
                }}>
                    {message}
                </div>
            )
            }
        </div >
    )
}