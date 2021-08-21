import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'

// Animation
import LightSpeed from 'react-reveal/LightSpeed';

// Images
import logo from '../../assets/logo.png';

// Data
import HomeObj from '../../data/home';

const Landing = () => {

    const main = HomeObj.main;

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
        <main className='landing'>
            <header className="navbar">
                <a href="/">
                    <img className="logo" src={logo} alt="logo" />
                </a>
                <div className="navbar-nav">
                    <ul className="nav-ul" ref={navUl}>
                        <li className="nav-item" onClick={toggleMenu}>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/events" className="nav-link">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/result" className="nav-link">Results</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </header>
            <LightSpeed left cascade>
                <div>
                    <h1 className='heading'>{main.headline1}</h1>
                    <h2 className='heading'>{main.headline2}</h2>
                </div>
            </LightSpeed>
        </main>
    )
}

export default Landing;
