import Card from "./Card";
import { prodContext } from "./Store";
import React, { useContext } from "react";
export default function Jewels() {
    let { prods, CartSubmit } = useContext(prodContext);

    return (
        <section className='py-5'>
            <h2 style={{ fontWeight: 'bolder' }}>Best jeweleries</h2>
            <div style={{ width: '80px', height: '2px', backgroundColor: 'red', margin: '20px auto 15px' }}></div>
            <p>Here you can check out our new products with fair price on rymo.</p>
            <div className='jewelsContainer contianer'>
                <div className='row justify-content-evenly'>
                    {prods.length > 0 ? prods.filter(prod => prod.category === "jewelery").slice(1, 4).map((prod) => (
                        <Card className='menCard col-lg-4 col-md-6 col-sm-12' key={prod.id} src={prod.image}  productId={prod.id} price={prod.price} cart={() => CartSubmit(prod.id)} title={prod.title} description={prod.description} />
                    )) : <p>Loading products...</p>}
                </div>
            </div>
        </section>
    )
}