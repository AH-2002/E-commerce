import React, { useContext } from "react"
import { Link } from "react-router-dom";
import AddtoCartButton from "./AddtoCartButton";
import { prodContext } from "./Store";
export default function Products() {
    let { prods, loading, CartSubmit } = useContext(prodContext);

    return (
        <section style={{ width: '80%', margin: 'auto' }}>

            <div className="row">
                {loading ? (
                    <div>
                        <div className=' my-5 fas fa-spinner fa-spin fa-3x'></div>
                    </div>
                ) : (
                    prods && prods.length > 0 && prods.map((prod, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-12 my-5 d-flex justify-content-evenly">
                            <div className="card" style={{ width: " 18rem", border: 'none', padding: '10px', boxShadow: ' 0 4px 6px rgba(0, 0, 0, 0.2)' }}>

                                <div style={{ height: "355.3px" }}>
                                    <img src={prod.image} className="card-img-top" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={ prod.title } />
                                </div>
                                <div className="card-body">
                                    <h5>{prod.title}</h5>
                                    <p className='my-3'>{prod.description.length > 100 ? prod.description.slice(0, 100) + '...' : prod.description}</p>
                                    <Link to={`/productdetails/${prod.id}`} style={{ textDecoration: 'none', color: 'black', display: 'block', marginBottom: '10px', pointer: 'cursor' }}>See More</Link>
                                    <p style={{ fontWeight: 'bold' }}>Price: {prod.price}</p>
                                    <AddtoCartButton cartButton={() => CartSubmit(prod.id)} prouctId={prod.id} />
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </section>
    );
}