import React from "react";
import logoFooter from "./img/logo1.png";
import insta1 from "./img/insta/1.jpg";
import insta2 from "./img/insta/2.jpg";
import insta3 from "./img/insta/3.jpg";
import insta4 from "./img/insta/4.jpg";
import insta5 from "./img/insta/5.jpg";
import insta6 from "./img/insta/6.jpg";


export default function Footer() {

    return (
        <footer className='bg-dark p-5 d-flex flex-wrap justify-content-evenly align-items-center' style={{ textAlign: 'left' }}>
            <div className="rymo d-flex flex-column justify-content-center align-items-center">
                <div style={{marginBottom:'10px'}}>
                    <img src={logoFooter} alt="rymo" />
                </div>
                <div style={{ width: '200px', color: 'white' }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, similique.
                </div>


            </div>
            <div className="feat" style={{ color: 'white', marginBottom: '30px' }}>
                <h5>Featured</h5>
                <ul style={{ fontSize: '15px', paddingLeft: '0px' }}>
                    {['MEN', 'WOMEN', 'Jewels', 'Electronics'].map(item => (
                        <li style={{ margin: '20px 0 35px 0' }} key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="cont" style={{ color: 'white', marginBottom: '45px' }}>
                <h5>Contact Us</h5>
                <ul style={{ fontSize: '15px', paddingLeft: '0' }}>
                    <li className='my-4'>
                        <h6>Address</h6>
                        <p style={{ fontSize: '15px' }}>123, STREET NAME, CITY, US</p>
                    </li>
                    <li className='mb-4'>
                        <h6>Phone</h6>
                        <p style={{ fontSize: '15px' }}>(123) 456-7890</p></li>
                    <li>
                        <h6>Email</h6>
                        <p style={{ fontSize: '15px' }}>MAIL@EXAMPLE.COM</p>
                    </li>

                </ul>
            </div>
            <div className="insta" style={{ color: 'white', marginBottom: '40px' }}>
                <h5>Instagram</h5>
                <div className="row my-4">
                    <div className="col" style={{ width: '100px', height: '100px' }}>
                        <img className='w-100 h-100' src={insta1} alt="" />
                    </div>
                    <div className="col" style={{ width: '100px', height: '100px' }}>
                        <img className='w-100 h-100' src={insta2} alt="" />
                    </div>
                    <div className="col" style={{ width: '100px', height: '100px' }}>
                        <img className='w-100 h-100' src={insta3} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{ width: '100px', height: '100px' }}>
                        <img className='w-100 h-100' src={insta4} alt="" />
                    </div>
                    <div className="col" style={{ width: '100px', height: '100px' }}>
                        <img className='w-100 h-100' src={insta5} alt="" />
                    </div>
                    <div className="col" style={{ width: '100px', height: '100px' }}>
                        <img className='w-100 h-100' src={insta6} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}