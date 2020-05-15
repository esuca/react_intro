import {Link} from "react-router-dom";
import React from "react";

export function Navbar() {
    return (
        <nav className='navbar'>
            <ul className="navbar__menu">
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </nav>
    )
}