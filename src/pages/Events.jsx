import React from 'react';

// Components
import Event from '../components/Event/Event';
import PastEvent from '../components/Event/PastEvent';

// Animation
import Fade from 'react-reveal/Fade';

// Data
import EventsObj from '../data/events';

const Events = () => {

    const { activeEvents, pastEvents } = EventsObj;

    return (
        <section className='events'>
            <Fade down>
                <h1>&lt;{EventsObj.headline}/&gt;</h1>
            </Fade>
            <div className='active-events events-section'>
                <Fade left>
                    <h2>{EventsObj.activeEventsHeading}</h2>
                </Fade>
                {activeEvents && !activeEvents.length &&
                    <div className="no-event">
                        <Fade left>
                            <h1 className='no-events'>No Events right now 😥</h1>
                        </Fade>
                    </div>
                }
                {activeEvents &&
                    <Fade up>
                        <div className="events-list">
                            {activeEvents.map(event => (
                                <Event event={event} key={event.id} />
                            ))}
                        </div>
                    </Fade>
                }
            </div>

            <div className='past-events events-section'>
                <Fade left>
                    <h2>{EventsObj.pastEventsHeading}</h2>
                </Fade>
                {pastEvents &&
                    <Fade up>
                        <div className="events-list" data-aos="fade-up" data-aos-delay="600">
                            {pastEvents.map(event => (
                                <PastEvent event={event} key={event.id} />
                            ))}
                        </div>
                    </Fade>
                }
            </div>

        </section>
    )
}

export default Events;
