import React from 'react';

// Animation
import Fade from 'react-reveal/Fade';

// Data
import EventsObj from '../../data/events';

// Images
import { ReactComponent as Chatting } from '../../assets/chatting.svg';

const EventDetails = ({ match }) => {

    const id = match.params.id;

    const events = EventsObj.activeEvents;
    const event = events[id - 1];

    return (
        <div className='event-details'>
            {event &&
                <main>
                    <div className="left">
                        <Fade left>
                            <img src={event.img} alt={event.title} />
                        </Fade>
                    </div>
                    <div className='right'>
                        <Fade up cascade>
                            <h1>{event.title}</h1>
                            <p>{event.description}</p>
                            <div className="btns">
                                <a href={event.formLink} target='_blank' rel="noreferrer">
                                    <button>
                                        Register Now
                                    </button>
                                </a>
                                <a href='#contact' className='contact-btn'>
                                    <button>
                                        Contact Us for any Queries
                                    </button>
                                </a>
                            </div>
                        </Fade>
                    </div>
                </main>
            }
            <section className='guidelines'>
                <Fade left>
                    <h2>Competition Guidelines</h2>
                </Fade>
                <div className='guidelines-list'>
                    {event.guidelines.map((guideline, index) => (
                        <Fade left key={guideline}>
                            <p>{`${index + 1}) `}{guideline}</p>
                        </Fade>
                    ))}
                </div>
            </section>
            <a name='contact'></a>
            <section className='queries'>
                <div className="left">
                    <h2>{EventsObj.discord.headline}</h2>
                    <p>{EventsObj.discord.para1}</p>
                    <p>{EventsObj.discord.para2}</p>
                    <a href={EventsObj.discord.link} target='' rel="noreferrer">{EventsObj.discord.btnText}</a>
                </div>
                <div className="right">
                    <Chatting />
                </div>
            </section>
        </div>
    )
}

export default EventDetails;
