import React, {ReactNode} from "react";
import {Link} from "react-router-dom";

interface Props {
    children: ReactNode
}

function Navbar() {
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

export function Layout(props: Props) {
    return (
        <React.Fragment>
            <Navbar />
            <main className='main-content'>
                {props.children}
            </main>
            <footer className='footer'>
                I'm a footer
            </footer>
        </React.Fragment>
    )
}