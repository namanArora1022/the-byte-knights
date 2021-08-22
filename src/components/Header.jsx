import React, { useState, useRef } from 'react'
import { Link , useLocation } from "react-router-dom";

// Images
import logo from '../assets/logo.png';

function Header() {

    const location = useLocation()

    const [open, setOpen] = useState(false);

    const navUl = useRef(null);

    function toggleMenu() {
        if (open) {
            navUl.current.style.left = "-50%";
        } else {
            navUl.current.style.left = "50%";
        }

        setOpen(!open)
    }

    return (
        <>
        { location.pathname !== '/' ?
        <header className="navbar">
            <a href="/">
                <img className="logo" src={logo} alt="logo" />
            </a>
            <div className="navbar-nav">
                <ul className="nav-ul" ref={navUl}>
                    <li className="nav-item">
                        <Link onClick={toggleMenu} to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={toggleMenu} to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={toggleMenu} to="/events" className="nav-link">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={toggleMenu} to="/result" className="nav-link">Results</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={toggleMenu} to="/contact" className="nav-link">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header> 
        : null
        }
        </>
    )
}

export default Header;
