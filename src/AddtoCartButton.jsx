import React, { useState } from "react";

export default function AddtoCartButton({ cartButton, productId }) {

    let [message, setMessage] = useState("");

    let handleAddToCart = () => {
        let result = cartButton(productId);
        if (result) {
            setMessage("✓");
        } else {
            setMessage("X");
        }

        setTimeout(() => setMessage(""), 3000);
    };

    let getBackgroundColor = () => {
        return message === "✓" ? 'lightgreen' : 'red';
    }

    return (
        <div style={{ display: 'flex',justifyContent:'center' }}>
            <div style={{marginRight:'3px'}}>
                <button className="btn btn-dark mb-4" onClick={cartButton, handleAddToCart}>Add to Cart</button>

            </div>
            <div>
                {message && (
                    <div className='PurchaseCheck' style={{
                        color: 'white', padding: '7px 15px', borderRadius: '10px', backgroundColor: getBackgroundColor(),
                        fontWeight: 'bolder'
                    }}>
                        {message}
                    </div>
                )
                }
            </div>
        </div >
    )
}