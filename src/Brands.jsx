import React from "react";
import './index.css';
import brand1 from './img/brand/1.png'
import brand2 from './img/brand/2.png'
import brand3 from './img/brand/3.png'
import brand4 from './img/brand/4.png'
import brand5 from './img/brand/5.png'
import brand6 from './img/brand/6.png'


export default function Brands() {
    return (
        <section>
            <ul className="brands row py-5 w-100">
                <li className='col-lg-2 col-md-6 col-sm-12'>
                    <img src={brand1} alt="Right Check" />
                </li>
                <li className='col-lg-2 col-md-6 col-sm-12'>
                    <img src={brand2} alt="Cinderella" />
                </li>
                <li className='col-lg-2 col-md-6 col-sm-12'>
                    <img src={brand3} alt="SLS" />
                </li>
                <li className='col-lg-2 col-md-6 col-sm-12'>
                    <img src={brand4} alt="Comedy" />
                </li>
                <li className='col-lg-2 col-md-6 col-sm-12'>
                    <img src={brand5} alt="Right Check" />
                </li>
                <li className='col-lg-2 col-md-6 col-sm-12'>
                    <img src={brand6} alt="Skill Star" />
                </li>
            </ul>
        </section>
    )
}