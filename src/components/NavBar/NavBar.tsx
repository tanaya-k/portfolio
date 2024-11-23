// import React from "react";

import { Link } from "react-router-dom";
import './NavBar.css';

const data = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About Me',
        to: '/about-me'
    },
    {
        label: 'Contact',
        to: '/contact'
    },
    {
        label: 'Resume',
        to: '/resume'
    }
]


function NavBar() {
    return (
        <div className="navbar">
            <h1 className="header name">Tanaya Kaundal</h1>
            <nav className="navbar container">
                <ul className="navbar menu">
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar menu item">
                                <Link to={item.to} className="navbar menu item link">
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;