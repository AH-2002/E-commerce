import Card from "./Card";
import { prodContext } from "./Store";
import React, { useContext } from "react";



export default function Men() {
    let { prods, CartSubmit } = useContext(prodContext);

    return (
        <section className='py-5 menSection'>
            <h2 style={{ fontWeight: 'bolder' }}>Men's Cloths</h2>
            <div style={{ width: '80px', height: '2px', backgroundColor: 'red', margin: '20px auto 15px' }}></div>
            <p>Here you can check out our new products with fair price on rymo.</p>
            <div className='menContainer contianer'>
                <div className='row justify-content-center' style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {prods.length > 0 ? prods.filter(prod => prod.category === "men's clothing").slice(1, 4).map((prod) => (
                        <Card className='menCard col-lg-4 col-md-6 col-sm-12' key={prod.id} src={prod.image} cartButton={() => CartSubmit(prod.id)} price={prod.price} title={prod.title} productId={prod.id} />
                    )) : <p>Loading products...</p>}
                </div>
            </div>
        </section>)
}
