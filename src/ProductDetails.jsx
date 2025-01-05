import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddtoCartButton from "./AddtoCartButton";
import { prodContext } from "./Store";
export default function ProductDetails() {
    let { id } = useParams();
    let [prodDetails, setProdDetails] = useState(null);
    let [Loading, setLoading] = useState(true);
    let { CartSubmit } = useContext(prodContext);
    useEffect(() => {
        async function getProdDetails() {
            try {
                let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProdDetails(data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
            finally {
                setLoading(false);
            }
        }
        getProdDetails();
    }, []);
    return (
        <>
            <div>
                {
                    Loading ? (<div>
                        <div className=' my-5 fas fa-spinner fa-spin fa-3x'></div>
                    </div>) : (prodDetails ? (
                        <div>
                            <div className='prodDetails' style={{ border: 'none', display: 'flex', textAlign: 'left', padding: '60px 20px 100px 20px' }}>
                                <div className="card-img-top" style={{ width: "600px", height: '450px', objectFit: 'cover' }} >
                                    <img src={prodDetails.image} style={{ width: '100%', height: '100%' }} alt={prodDetails.title} />
                                </div>
                                <div className='prodDetailsContent' style={{ maxWidth: '700px', marginLeft: '300px', marginTop: '150px' }}>
                                    <h5 style={{ fontWeight: 'bolder' }}>{prodDetails.title}</h5>
                                    <p style={{ maxWidth: '400px', margin: '20px 0 20px 0' }}>{prodDetails.description}</p>
                                    <p style={{ fontSize: 'larger', fontWeight: 'bolder', margin: '15px 0 15px 0' }}>Price: {prodDetails.price}</p>
                                    <AddtoCartButton cartButton={() => CartSubmit(prodDetails.id)} prouctId={id} />
                                </div>
                            </div>
                        </div>
                    ) : (<p>No Product detail found</p>)
                    )
                }
            </div>
        </>
    )
}