import React, { useContext } from "react";
import Card from "./Card";
import { prodContext } from "./Store";


export default function Electronics() {
    let { prods, CartSubmit } = useContext(prodContext);
    return (
        <section className=' elecSection py-5'>
            <h2 style={{ fontWeight: 'bolder' }}>Electronics</h2>
            <div style={{ width: '80px', height: '2px', backgroundColor: 'red', margin: '20px auto 15px' }}></div>
            <p>Here you can check out our new products with fair price on rymo.</p>
            <div className='electroContainer contianer'>
                <div className='row justify-content-evenly' style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }} >
                    {prods.length > 0 ? prods.filter(prod => prod.category === "electronics").slice(1, 4).map((prod) => (
                        <Card className='menCard col-lg-4 col-md-6 col-sm-12' key={prod.id} src={prod.image} productId={prod.id} price={prod.price} cartButton={() => CartSubmit(prod.id)} title={prod.title} description={prod.description} />
                    )) : <p>Loading products...</p>}
                </div>
            </div>
        </section>
    )
}