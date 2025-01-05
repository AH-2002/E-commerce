import React, { useContext } from "react";
import { prodContext } from "./Store";
import AddtoCartButton from "./AddtoCartButton";

export default function Card({src, title, price, category, cartButton }) {
    return (
        <div className="card w-33.33" style={{ width: "18rem", border: 'none' }}>
            <img src={src} className="card-img-top" alt="Hat" style={{ margin: '20px 0 10px 0', height: "355.3px", width: "300px", objectFit: 'cover', boxShadow: ' 0 4px 6px rgba(0, 0, 0, 0.2)' }} />
            <div className="card-body">
                <p className="card-text">{title.length > 23 ? title.slice(0, 23) + "..." : title}</p>
                <p style={{ fontWeight: "bold" }}>{`${price} $`}</p>
                <p>{category}</p>
                <AddtoCartButton cartButton={cartButton} />
            </div>
        </div>
    );
}
