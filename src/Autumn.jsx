import React from "react";
import { useNavigate } from "react-router";
import autumnPic from "./img/banner/2.jpg"
export default function Autumn({goToProductsPage}) {
    let navigate = useNavigate();
    return (<>
        <section className='autumnClass' style={{
            backgroundImage: `url(${autumnPic})`, height: '100vh'
            , backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',
            backgroundAttachment: 'fixed', position: 'relative'
        }}>
            <div style={{ position: "absolute", top: '50%', left: '20px', color: 'white', textAlign: 'left' }}>
                <p>MID SEASON'S SALE</p>
                <h2 style={{ width: '300px', padding: '5px 0 10px 0', fontWeight: 'bolder' }}>Autumn Collection UP TO 20% OFF</h2>
                <button onClick={() => goToProductsPage(navigate)} className='btn btn-dark' style={{ color: 'white', padding: '10px' }}>SHOP NOW</button>
            </div>
        </section>
    </>
    )
}