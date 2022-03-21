import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css"

const Navbar = () => {
    const cartProducts = useSelector((state) => state.allProducts.carts);
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(cartProducts.length)
    }, [cartProducts])
    return (
        <nav className="navbar navbar-expand-lg   my-0">
            <div className="container">
                <Link className="navbar-brand " to="/"><h3>Seller Products</h3> </Link>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                            <button type="button" className="btn btn-outline-dark"> Cart {count}</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar