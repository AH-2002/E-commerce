import React, { useContext, useEffect, useRef, useState } from "react";
import logo from './img/logo1.png';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from "react-router-dom";
import { prodContext } from "./Store";
export default function NavBar() {

    let [isOpen, setIsOpen] = useState(false);
    let handleToggle = () => {
        setIsOpen(!isOpen);
    }

    let navRef = useRef(null);


    let { cart } = useContext(prodContext);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);  // Close navbar if clicked outside
            }
        };

        // Add event listener when navbar is open
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        // Cleanup the event listener when the component unmounts or navbar closes
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);


    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-flex justify-content-between">
                <div>
                    <Link className="navbar-brand" to="home">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div ref={navRef}>
                    {<button className="navbar-toggler" type="button" onClick={handleToggle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>}
                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active home" aria-current="page" to='home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='products'>Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='contact'>Contact</Link>
                            </li>

                        </ul>
                    </div>

                </div>
                <div className="icons position-relative" style={{ width: '145px' }}>
                    <Link className="nav-link" to='cart'><i className="fas fa-shopping-bag w-100">
                        <div className="position-absolute" style={{
                            right: "45px", top: "-5px", fontSize: '11px',
                            backgroundColor: 'brown', color: 'white', padding: '5px', borderRadius: '5px'
                        }}>
                            {cart.length > 0 ? cart.length : "0"}
                        </div>
                    </i></Link>
                </div>
            </div>
        </nav >
    </>)
}