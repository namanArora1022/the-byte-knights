import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'

// Animation
import { AttentionSeeker } from 'react-awesome-reveal';

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

    const mouseCursor = useRef(null);

    useEffect(() => {

        const cursor = (e) => {
            mouseCursor.current.style.top = e.pageY + 'px';
            mouseCursor.current.style.left = e.pageX + 'px';
        }

        window.addEventListener('mousemove', cursor);

        return () => {
            window.removeEventListener('mousemove', cursor);
        }

    }, []);

    const handleMouseOver = (e, class_name) => {
        e.target.classList.add(class_name);
        mouseCursor.current.classList.add('hovered');
    }

    const handleMouseLeave = (e, class_name) => {
        e.target.classList.remove(class_name);
        mouseCursor.current.classList.remove('hovered');
    }

    const routes = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Events',
            path: '/events'
        },
        {
            name: 'Results',
            path: '/results'
        },
        {
            name: 'Contact Us',
            path: '/contact'
        }
    ]

    return (
        <main className='landing'>
            <div
                className="cursor"
                ref={mouseCursor}
            ></div>
            <header>
                <a href="/">
                    <img className="logo" src={logo} alt="logo" />
                </a>
                <nav>
                    {routes.map(route => (
                        <Link
                            to={route.path}
                            className="nav-link"
                            onMouseOver={(e) => handleMouseOver(e, 'link-grow')}
                            onMouseLeave={(e) => handleMouseLeave(e, 'link-grow')}
                            key={route.path}
                        >{route.name}</Link>
                    ))}
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </header>
            <AttentionSeeker effect="rubberBand" triggerOnce>
                <div className='content'>
                    <h1
                        className='heading'
                        onMouseOver={(e) => handleMouseOver(e, 'heading-grow')}
                        onMouseLeave={(e) => handleMouseLeave(e, 'heading-grow')}
                        >{main.headline1}</h1>
                    <h2
                        className='heading'
                        onMouseOver={(e) => handleMouseOver(e, 'heading-grow')}
                        onMouseLeave={(e) => handleMouseLeave(e, 'heading-grow')}
                        >{main.headline2}</h2>
                </div>
            </AttentionSeeker>
        </main>
    )
}

export default Landing;
