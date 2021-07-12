import React from 'react';
import { Link } from 'react-router-dom';

// Images
import fb from '../assets/fb.svg';
import insta from '../assets/insta.svg';
import yt from '../assets/yt.svg';
import github from '../assets/github.svg';

function Footer() {
    return (
        <footer className='footer'>
            <div className="container-footer">
                <div className="sec about-us">
                    <h2>About us</h2>
                    <p>The byte knight club which is known for their wonderful and attractive event which attracts students to participate in different cocerculum activities which provides fun, creation,of new ideas and thought.</p>
                    <ul className="sci">
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100069116769192" target="_blank" rel="noreferrer">
                                <img src={fb} alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/thebyteknights/" target="_blank" rel="noreferrer">
                                <img src={insta} alt="instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCqDxCutv0nzcx0uZrFM76lA" target="_blank" rel="noreferrer">
                                <img src={yt} alt="youtube" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/TheByteKnights2021/" target="_blank" rel="noreferrer">
                                <img src={github} alt="github" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="sec quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100069116769192">Facebook</a></li>
                        <li><a href="https://www.instagram.com/thebyteknights/">Instagram</a></li>
                        <li><a href="https://www.youtube.com/channel/UCqDxCutv0nzcx0uZrFM76lA">Youtube</a></li>
                        <li><Link to="https://github.com/TheByteKnights2021/">Github</Link></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="sec contact">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <span>
                                Shaheed Captain Anuj Nayyar Marg,
                                Block B, BB Block, Janakpuri,
                                New Delhi, Delhi 110058
                            </span>
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </span>
                            <span>
                                byteknights.mms@gmail.com
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer;
