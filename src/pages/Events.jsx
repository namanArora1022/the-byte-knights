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
        <section className='events'>
            <RubberBand>
                <h1>&lt;{EventsObj.headline}/&gt;</h1>
            </RubberBand>
            <div className='active-events events-section'>
                <Bounce left>
                    <h2>{EventsObj.activeEventsHeading}</h2>
                </Bounce>
                {activeEvents && !activeEvents.length &&
                    <div className="no-event">
                        <Fade left>
                            <h3 className='no-events'>No Events right now 😥</h3>
                        </Fade>
                    </div>
                }
                {activeEvents &&
                    <div className="events-list">
                        {activeEvents.map(event => (
                            <Fade left key={event.id}>
                                <Event event={event} />
                            </Fade>
                        ))}
                    </div>
                }
            </div>

            <div className='past-events events-section'>
                <Bounce left>
                    <h2>{EventsObj.pastEventsHeading}</h2>
                </Bounce>
                {pastEvents &&
                    <div className="events-list">
                        {pastEvents.map(event => (
                            <Fade left key={event.id}>
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
