import React, { useContext, useState } from "react";
import { prodContext } from "./Store";
import { useNavigate } from "react-router";


export default function AddtoCart() {

    let { cart, increaseItem, deleteItem, decreaseItem, clearCart } = useContext(prodContext);
    let total = cart.reduce((i, product) => i + product.price * product.quantity, 0);
    let navigate = useNavigate();
    let [paymentMethod, setPaymentMethod] = useState("");
    let [message, setMessaga] = useState("")



    let handlePayment = () => {
        if (paymentMethod === 'visa') {
            navigate('/visa');
        } else if (paymentMethod === 'cash') {
            setMessaga("Order placed with Cash on Delivery!");
            clearCart();
            setTimeout(() => navigate("/"), 2000)
        } else {
            setMessaga("Please select a payment method.");
        }

        setTimeout(() => setMessaga(""), 2000)
    };

    let getBackgroundColor = () => {
        return message === "Order placed with Cash on Delivery!" ? "rgba(23, 162, 184, 1)" : "rgba(220, 53, 69, 1)"
    }

    return (
        <section className='AddToCartSection p-5'>
            <ul>
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <li className='d-flex justify-content-between align-items-center mb-4 p-3' style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }} key={item.id}>
                            <div className="card-img-top" style={{ width: "200px", height: '150px', objectFit: 'cover' }} >
                                <img src={item.image} style={{ width: '100%', height: '100%' }} alt={item.title} />
                            </div>
                            <div className='cartItemsContent'>
                                <h5 style={{ fontWeight: 'bolder' }}>{item.title}</h5>
                                <p style={{ fontSize: 'larger', fontWeight: 'bolder', margin: '15px 0 15px 0' }}>Price: {item.price * item.quantity}</p>
                                <div className='counter'>
                                    <button class=" btn btn-danger" onClick={() => decreaseItem(item.id)}>-</button>
                                    <span style={{ fontSize: 'larger', fontWeight: 'bolder', margin: '15px 10px 15px 10px' }}>{item.quantity}</span>
                                    <button class=" btn btn-info" onClick={() => increaseItem(item.id)}>+</button>
                                </div>
                            </div>
                            <div>
                                <button style={{ marginBottom: '20px' }} class=" btn btn-danger" onClick={() => deleteItem(item.id)}>Delete</button>
                            </div>
                        </li>
                    ))) : (<p>Your cart is empty.</p>
                )}
            </ul>
            <p style={{ marginTop: '12px' }}>Invoice : {total}</p>
            <div className="my-3">
                <label className='mb-4'>Select Payment Method:</label>
                <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-select w-50 mx-auto"
                >
                    <option value="">Select</option>
                    <option value="cash">Cash on Delivery</option>
                    <option value="visa">Visa</option>
                </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '80%', margin: 'auto' }}>
                {cart.length > 0 ? <button onClick={clearCart} className='btn btn-danger'>Delete All</button> : ""}
                {cart.length > 0 ? <button onClick={handlePayment} className='btn btn-info'>Place Order</button> : ""}
            </div>
            <div>
                {
                    message && (<div className='PurchaseCheck' style={{
                        color: 'white', padding: '10px 15px', width: '50%', margin: '15px auto 0', borderRadius: '10px', backgroundColor: getBackgroundColor(), fontWeight: 'bolder'
                    }}>
                        {message}
                    </div>)
                }
            </div>
        </section >
    )
}