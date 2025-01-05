import { createContext } from "react";
import axios from 'axios';
import { React, useState, useEffect } from "react";
export let prodContext = createContext(0);

export default function ProdContextProvider(props) {
    let [prods, setProds] = useState([]);
    let [cart, setCart] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);


    useEffect(() => {
        async function getProds() {
            try {
                let { data } = await axios.get(`https://fakestoreapi.com/products`);
                setProds(data);
            } catch (error) {
                console.error("Error fetching data", error);
                setError("Failed to fetch products. Please try again later.");

            } finally {
                setLoading(false);
            }

        }
        getProds();
    }, [])

    function CartSubmit(prodID) {
        let product = prods.find((p) => p.id === prodID)
        if (product) {
            setCart((cartItems) => {
                let existingItem = cartItems.find((item) => item.id === prodID);

                if (existingItem) {
                    return cartItems.map((item) => item.id === prodID ? { ...item, quantity: item.quantity + 1 } : item
                    );
                }
                else {
                    return [...cartItems, { ...product, quantity: 1 }]
                }
            })

        }
        return true;
        {
            return false;
        }
    }
    function deleteItem(id) {
        setCart((cartItems) => cartItems.filter((product) => product.id != id))
    }

    function decreaseItem(id) {
        setCart((cartItems) => cartItems.map((product) => product.id === id && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product))
    }

    function increaseItem(id) {
        setCart((cartItems) => cartItems.map((product) => product.id === id ? { ...product, quantity: product.quantity + 1 } : product))
    }
    let clearCart = () => {
        setCart([]);
    }
    return <prodContext.Provider value={{ prods, cart, loading, CartSubmit, deleteItem, decreaseItem, increaseItem, clearCart }}>
        {props.children}
    </prodContext.Provider>
}