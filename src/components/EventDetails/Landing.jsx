import React from 'react';

// Animation
import Fade from 'react-reveal/Fade';

const Landing = ({ event}) => {
    return (
        <main>
            <div className="left">
                <Fade left>
                    <img src={event.img} alt={event.title} />
                </Fade>
            </div>
            <div className='right'>
                <Fade up cascade delay={500}>
                    <h1>{event.title}</h1>
                    <p>{event.description}</p>
                    <div className="btns">
                        <a href={event.formLink} target='_blank' rel="noreferrer">
                            <button>
                                Register Now
                            </button>
                        </a>
                        <a href='#queries' className='contact-btn'>
                            <button>
                                Contact Us for any Queries
                            </button>
                        </a>
                    </div>
                </Fade>
            </div>
        </main>
    )
}

export default Landing;
