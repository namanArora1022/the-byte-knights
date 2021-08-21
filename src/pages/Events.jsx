import React from 'react';

// Components
import Event from '../components/Event/Event';
import PastEvent from '../components/Event/PastEvent';

// Animation
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';

// Data
import EventsObj from '../data/events';

const Events = () => {

    const { activeEvents, pastEvents } = EventsObj;

    return (
        <section className='Events'>
            <RubberBand delay={300}>
                <h1>&lt;{EventsObj.headline}/&gt;</h1>
            </RubberBand>
            <div className='active-events events-section'>
                <Bounce left delay={600}>
                    <h2>{EventsObj.activeEventsHeading}</h2>
                </Bounce>
                {activeEvents && !activeEvents.length &&
                    <div className="no-event">
                        <Fade left delay={1000}>
                            <h3 className='no-events'>No Events right now 😥</h3>
                        </Fade>
                    </div>
                }
                {activeEvents &&
                    <div className="events-list">
                        {activeEvents.map(event => (
                            <Fade left key={event.id} delay={700}>
                                <Event event={event} />
                            </Fade>
                        ))}
                    </div>
                }
            </div>

            <div className='past-events events-section'>
                <Bounce left delay={600}>
                    <h2>{EventsObj.pastEventsHeading}</h2>
                </Bounce>
                {pastEvents &&
                    <div className="events-list">
                        {pastEvents.map(event => (
                            <Fade left key={event.id} delay={700}>
                                <PastEvent event={event} />
                            </Fade>
                        ))}
                    </div>
                }
            </div>
        </section>
    )
}

export default Events;
