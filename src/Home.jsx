import React from "react";
import './index.css';
import Brands from './Brands';
import ProdPic from "./ProdPic";
import Men from "./Men";
import Autumn from "./Autumn";
import { useNavigate } from "react-router";
import Jewels from "./Jewels";
import Electronics from "./Electronics";
import Women from './Women';
export default function Home({ goToProductsPage }) {

    let navigate = useNavigate();

    return (
        <>
            <section className="home-component">
                <div className="container content" style={{width:'auto'}}>
                    <p>New Arrivals</p>
                    <h2> <span>Best Price </span>This Year</h2>
                    <p>Shoomatic offers you very comfortable time on walking and exercises</p>
                    <button onClick={() => goToProductsPage(navigate)} className="btn btn-dark">SHOP NOW</button>
                </div>
            </section>
            <section>
                <Brands />
            </section>
            <section>
                <ProdPic />
            </section>
            <section>
                <Men />
            </section>
            <section>
                <Autumn goToProductsPage={goToProductsPage} />
            </section>
            <section>
                <Women />
            </section>
            <section>
                <Jewels />
            </section>
            <section>
                <Electronics />
            </section>
        </>)
}