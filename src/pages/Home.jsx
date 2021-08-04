import React from 'react';
import { Link } from 'react-router-dom';

// Animation
import Parallax from 'react-rellax';
import LightSpeed from 'react-reveal/LightSpeed';

// Data
import HomeObj from '../data/home';
import EventsObj from '../data/events'

function Home() {

    const events = EventsObj.pastEvents;

    return (
        <div className='home'>
            <main>
                <div className="art">
                    <Parallax speed={-10}>
                        <div className="rect"></div>
                        <div className="rect"></div>
                    </Parallax>
                    <Parallax speed={3}>
                        <div className="circle circle-1"></div>
                        <div className="circle circle-2"></div>
                    </Parallax>
                    <div className='bubble'></div>
                </div>
                <div className='content'>
                    <Parallax speed={7}>
                        <h1>
                            {HomeObj.headline1}
                        </h1>
                    </Parallax>
                    <Parallax speed={5}>
                        <p>
                            {HomeObj.paragraph}
                        </p>
                    </Parallax>
                    <Parallax speed={3}>
                        <button>
                            <Link to="/about">
                                {HomeObj.btnText}
                            </Link>
                        </button>
                    </Parallax>
                </div>
            </main>
            <section className="lastest-event">
                {events && events.length ? (
                    <div className='loaded'>
                        <LightSpeed left cascade>
                            <h1>&lt;{HomeObj.headline2}/&gt;</h1>
                            <img src={events[events.length - 1].img} alt="" />
                            <h3>{events[events.length - 1].title}</h3>
                            <p>{events[events.length - 1].body}</p>
                        </LightSpeed>
                    </div>
                ) : (
                    <div className='no-event'>
                        <h1>{HomeObj.noEventText}</h1>
                    </div>
                )
                }
            </section>
        </div>
    )
}

export default Home;
