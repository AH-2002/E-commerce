import axios from "axios";
import Card from "./Card";
import { prodContext } from "./Store";
import React, { useContext } from "react";
export default function Women() {
    let { prods, CartSubmit } = useContext(prodContext);

    return (
        <section className='py-5'>
            <h2 style={{ fontWeight: 'bolder' }}>Women's Cloths</h2>
            <div style={{ width: '80px', height: '2px', backgroundColor: 'red', margin: '20px auto 15px' }}></div>
            <p>Here you can check out our new products with fair price on rymo.</p>
            <div className='womenContainer contianer'>
                <div className='row justify-content-evenly'>
                    {prods.length > 0 ? prods.filter(prod => prod.category === "women's clothing").slice(1, 4).map((prod) => (
                        <Card className='menCard col-lg-4 col-md-6 col-sm-12' key={prod.id} src={prod.image} price={prod.price} cart={() => CartSubmit(prod.id)}  productId={prod.id}  title={prod.title} description={prod.description} />
                    )) : <p>Loading products...</p>}
                </div>
            </div>
        </section>
    )
}